const mapping: Record<string, string> = {
  analyses: 'analysis',
  organizations: 'organization',
  users: 'user',
  websites: 'website',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
