export function normalizePath(path) {
  if (!path) return '/';
  const clean = path.split('?')[0].split('#')[0].replace(/\/$/, '').toLowerCase();
  return clean === '' ? '/' : clean;
}

export function getActiveNavSection(pathname) {
  const path = normalizePath(pathname);

  if (
    path.startsWith('/about') ||
    path === '/prologue' ||
    path === '/mission-statement' ||
    path === '/initial-efforts' ||
    path === '/new-museum' ||
    path === '/museum-in-a-nutshell' ||
    path === '/museum-story' ||
    path === '/accreditations-and-affiliations' ||
    path === '/board-of-trustees'
  ) {
    return 'about';
  }

  if (
    path.startsWith('/explore') ||
    path === '/virtual-tour' ||
    path === '/facilities-and-amenities' ||
    path === '/facilities-amenities' ||
    path === '/on-this-day' ||
    path === '/annual-speeches'
  ) {
    return 'explore';
  }

  if (
    path.startsWith('/activities') ||
    path.startsWith('/events') ||
    path === '/publications' ||
    path === '/projects-and-programs'
  ) {
    return 'activities';
  }

  if (
    path.startsWith('/support') ||
    path === '/donate'
  ) {
    return 'support';
  }

  if (
    path.startsWith('/visit') ||
    path === '/buy-tickets' ||
    path === '/tickets'
  ) {
    return 'visit';
  }

  return null;
}

export function isLinkActive(to, pathname) {
  const current = normalizePath(pathname);
  const target = normalizePath(to);

  if (target === current) return true;

  // Specific aliases / groupings
  if (target === '/facilities-and-amenities' || target === '/explore/facilities-and-amenities') {
    return current === '/facilities-and-amenities' || current === '/facilities-amenities' || current === '/explore/facilities-and-amenities';
  }

  if (target === '/visit/maps-directions') {
    return current === '/visit/maps-directions' || current === '/visit/maps-and-direction';
  }

  if (target === '/visit/ticket-information') {
    return current === '/visit/ticket-information' || current === '/visit/tickets' || current === '/buy-tickets';
  }

  if (target === '/activities/events') {
    return current.startsWith('/activities/events') || current.startsWith('/events');
  }

  if (target === '/support/campaigns/fund-collection-campaign') {
    return current.startsWith('/support/campaigns');
  }

  return false;
}
