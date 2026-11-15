// Internal addresses.
//
// On the real domain the site sits at the top level, so "/work/pan-de-queso" is used as it is.
// On the GitHub test address the site sits in a sub-folder (for example "/irinauxdesign"),
// and every internal link needs that folder in front. This helper adds it when needed.

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Turns "/work/pan-de-queso" into the right address wherever the site is hosted. */
export function path(to: string): string {
  return base + to;
}

/** Removes the sub-folder again, for the address shown to search engines. */
export function withoutBase(pathname: string): string {
  const rest = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return rest.startsWith('/') ? rest : `/${rest}`;
}
