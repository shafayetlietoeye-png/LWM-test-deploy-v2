import { getAllSearchItems } from '../data/siteSearchData.js';

let cachedItems = null;

export function getSearchableDatabase() {
  if (!cachedItems) {
    cachedItems = getAllSearchItems();
  }
  return cachedItems;
}

// Escape special regex characters safely
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Highlight matching terms within text
export function highlightSnippet(text, terms) {
  if (!text || !terms || terms.length === 0) return text;
  
  // Filter out very short or empty tokens
  const validTerms = terms
    .map(t => t.trim())
    .filter(t => t.length > 0)
    .sort((a, b) => b.length - a.length);

  if (validTerms.length === 0) return text;

  const pattern = new RegExp(`(${validTerms.map(escapeRegex).join('|')})`, 'gi');
  return text.replace(pattern, '<mark class="lwm-search-highlight">$1</mark>');
}

// Smart context snippet extraction
export function extractContextSnippet(content, terms, maxLength = 160) {
  if (!content) return '';
  const cleanContent = content.trim();
  if (cleanContent.length <= maxLength) {
    return highlightSnippet(cleanContent, terms);
  }

  const validTerms = terms.filter(t => t.length > 1);
  if (validTerms.length === 0) {
    return cleanContent.slice(0, maxLength) + '...';
  }

  // Find first matching index
  let matchIndex = -1;
  let matchedTerm = '';
  const lowerContent = cleanContent.toLowerCase();

  for (const term of validTerms) {
    const idx = lowerContent.indexOf(term.toLowerCase());
    if (idx !== -1 && (matchIndex === -1 || idx < matchIndex)) {
      matchIndex = idx;
      matchedTerm = term;
    }
  }

  if (matchIndex === -1) {
    return cleanContent.slice(0, maxLength) + '...';
  }

  // Calculate window around the match
  const beforeLen = 45;
  let start = Math.max(0, matchIndex - beforeLen);
  let end = Math.min(cleanContent.length, start + maxLength);

  // Adjust start to beginning of word
  if (start > 0) {
    const spaceIdx = cleanContent.indexOf(' ', start);
    if (spaceIdx !== -1 && spaceIdx < matchIndex) {
      start = spaceIdx + 1;
    }
  }

  // Adjust end to end of word
  if (end < cleanContent.length) {
    const spaceIdx = cleanContent.lastIndexOf(' ', end);
    if (spaceIdx > matchIndex + matchedTerm.length) {
      end = spaceIdx;
    }
  }

  let snippet = cleanContent.slice(start, end).trim();
  if (start > 0) snippet = '...' + snippet;
  if (end < cleanContent.length) snippet = snippet + '...';

  return highlightSnippet(snippet, validTerms);
}

/**
 * Main search function
 * @param {string} rawQuery Search input string
 * @param {string} categoryFilter Filter tab ('all', 'activities', 'history', 'oral_history', 'donors', 'visit', 'publications', 'images')
 * @param {string} sortBy 'relevance' | 'title'
 * @returns {object} { results, totalCount, executionTime, categoryCounts, queryTokens }
 */
export function executeSearch(rawQuery = '', categoryFilter = 'all', sortBy = 'relevance') {
  const startTime = typeof performance !== 'undefined' ? performance.now() : Date.now();
  const db = getSearchableDatabase();

  const trimmed = rawQuery.trim();
  if (!trimmed) {
    return {
      results: [],
      totalCount: 0,
      executionTime: '0.00',
      categoryCounts: {
        all: 0,
        activities: 0,
        history: 0,
        oral_history: 0,
        donors: 0,
        visit: 0,
        publications: 0,
        images: 0
      },
      queryTokens: []
    };
  }

  // Split tokens (support English and Bengali words)
  const tokens = trimmed.toLowerCase().split(/\s+/).filter(t => t.length > 0);
  const fullQueryLower = trimmed.toLowerCase();

  // Score each item in the database
  const scoredItems = [];
  const categoryCounts = {
    all: 0,
    activities: 0,
    history: 0,
    oral_history: 0,
    donors: 0,
    visit: 0,
    publications: 0,
    images: 0
  };

  db.forEach((item) => {
    let score = 0;
    const titleLower = (item.title || '').toLowerCase();
    const contentLower = (item.content || '').toLowerCase();
    const categoryLower = (item.category || '').toLowerCase();
    const breadcrumbLower = (item.breadcrumb || '').toLowerCase();
    const tagsLower = (item.tags || []).join(' ').toLowerCase();

    // 1. Exact phrase matches
    if (titleLower === fullQueryLower) {
      score += 150;
    } else if (titleLower.includes(fullQueryLower)) {
      score += 80;
    }

    if (contentLower.includes(fullQueryLower)) {
      score += 40;
    }

    // 2. Token matches across fields
    let tokensMatchedCount = 0;
    tokens.forEach((token) => {
      let tokenMatched = false;

      // Title match
      if (titleLower.includes(token)) {
        score += 35;
        tokenMatched = true;
      }

      // Tags match
      if (tagsLower.includes(token)) {
        score += 25;
        tokenMatched = true;
      }

      // Breadcrumb / Category match
      if (breadcrumbLower.includes(token) || categoryLower.includes(token)) {
        score += 15;
        tokenMatched = true;
      }

      // Content match
      if (contentLower.includes(token)) {
        score += 10;
        tokenMatched = true;

        // Count additional occurrences (capped at 5 to prevent long text bias)
        let count = 0;
        let pos = contentLower.indexOf(token);
        while (pos !== -1 && count < 5) {
          count++;
          pos = contentLower.indexOf(token, pos + token.length);
        }
        score += count * 2;
      }

      if (tokenMatched) {
        tokensMatchedCount++;
      }
    });

    // Only include if at least one token matched
    if (score > 0 && tokensMatchedCount > 0) {
      // Bonus if all query tokens matched
      if (tokensMatchedCount === tokens.length) {
        score += 30;
      }

      // Count across tabs before category filtering
      categoryCounts.all++;
      if (item.category && categoryCounts[item.category] !== undefined) {
        categoryCounts[item.category]++;
      }
      if (item.image) {
        categoryCounts.images++;
      }

      // Filter check
      let matchesCategory = false;
      if (categoryFilter === 'all') {
        matchesCategory = true;
      } else if (categoryFilter === 'images') {
        matchesCategory = Boolean(item.image);
      } else {
        matchesCategory = item.category === categoryFilter;
      }

      if (matchesCategory) {
        const highlightedTitle = highlightSnippet(item.title, tokens);
        const highlightedSnippetText = extractContextSnippet(item.content, tokens, 180);

        scoredItems.push({
          ...item,
          score,
          highlightedTitle,
          snippet: highlightedSnippetText
        });
      }
    }
  });

  // Sorting
  if (sortBy === 'title') {
    scoredItems.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    // Default to relevance score descending
    scoredItems.sort((a, b) => b.score - a.score);
  }

  const endTime = typeof performance !== 'undefined' ? performance.now() : Date.now();
  const executionTime = ((endTime - startTime) / 1000).toFixed(2);

  return {
    results: scoredItems,
    totalCount: scoredItems.length,
    executionTime,
    categoryCounts,
    queryTokens: tokens
  };
}
