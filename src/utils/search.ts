import { products } from '../data/products';
import { impellers } from '../data/impellers';
import { industries } from '../data/industries';
import { applications } from '../data/applications';
import { resources } from '../data/resources';
import type { SearchResult } from '../types';

const index: SearchResult[] = [
...products.map((p) => ({
  type: 'Product' as const,
  title: p.name,
  description: p.description,
  href: `/products/${p.slug}`
})),
...impellers.map((i) => ({
  type: 'Impeller' as const,
  title: i.name,
  description: i.purpose,
  href: `/products/impellers?family=${i.family}`
})),
...industries.map((i) => ({
  type: 'Industry' as const,
  title: i.name,
  description: i.tagline,
  href: `/industries/${i.slug}`
})),
...applications.map((a) => ({
  type: 'Application' as const,
  title: a.name,
  description: a.summary,
  href: `/applications/${a.slug}`
})),
...resources.map((r) => ({
  type: 'Resource' as const,
  title: r.title,
  description: r.description,
  href: `/resources/${r.slug}`
}))];


export function searchSite(query: string, limit = 10): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  return index.
  map((item) => {
    const title = item.title.toLowerCase();
    const description = item.description.toLowerCase();
    let score = 0;
    if (title === q) score += 100;
    if (title.startsWith(q)) score += 50;
    if (title.includes(q)) score += 30;
    if (description.includes(q)) score += 10;
    return { item, score };
  }).
  filter((r) => r.score > 0).
  sort((a, b) => b.score - a.score).
  slice(0, limit).
  map((r) => r.item);
}