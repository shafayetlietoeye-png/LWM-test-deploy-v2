/**
 * Helper to detect if a section/block title is redundant or duplicates the hero page title.
 * Used to avoid awkward double headings right below the hero banner.
 */
export function isRedundantBlockTitle(pageTitle, blockTitle, blockIndex = 0, totalBlocks = 1) {
  if (!blockTitle) return true;
  if (!pageTitle) return false;

  // Normalize: lowercase and clean punctuation
  const norm = (str) =>
    str
      .toLowerCase()
      .replace(/&amp;/g, ' ')
      .replace(/[^a-z0-9\u0980-\u09FF\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

  const p = norm(pageTitle);
  const b = norm(blockTitle);

  if (p === b) return true;

  // If it's the first block right under the hero banner
  if (blockIndex === 0) {
    // If the page only has one block, that block's title is always a duplicate/rephrasing of the page title
    if (totalBlocks === 1) {
      return true;
    }

    // Common filler/connector words
    const filler = new Set([
      'the', 'and', 'in', 'of', 'for', 'a', 'an', 'overview', 'details',
      'program', 'programs', 'exhibit', 'exhibition', 'clippings', 'media',
      'conference', 'conferences', 'initiative', 'initiatives'
    ]);
    const pWords = p.split(' ').filter((w) => w.length > 1 && !filler.has(w));
    const bWords = b.split(' ').filter((w) => w.length > 1 && !filler.has(w));

    if (pWords.length > 0 && bWords.length > 0) {
      const overlap = pWords.filter((w) => bWords.includes(w)).length;
      if (overlap >= Math.min(pWords.length, bWords.length) * 0.5 || p.includes(b) || b.includes(p)) {
        return true;
      }
    }
  }

  return false;
}
