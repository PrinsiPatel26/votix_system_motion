import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SearchIcon, XIcon } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { PageHero } from '../components/layout/PageHero';
import { Accordion } from '../components/ui/Accordion';
import { ResourceCard } from '../components/resources/ResourceCard';
import { QuoteCTA } from '../components/home/QuoteCTA';
import { faqs, resources, resourceTypes } from '../data/resources';
import { usePageMeta } from '../hooks/usePageMeta';
import { EASE_SMOOTH } from '../utils/motion';
import { cn } from '../utils/cn';

const typeLabels: Record<string, string> = { All: 'All', Brochure: 'Brochures', 'Technical Document': 'Technical Documents', 'Case Study': 'Case Studies', Video: 'Videos', News: 'News' };

export function Resources() {
  usePageMeta(
    'VOTIX Systems | Resources',
    'Explore VOTIX Systems brochures, technical documents, case studies, videos and engineering resources.'
  );

  const [type, setType] = useState<string>('All');
  const [query, setQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(9);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return resources.filter((resource) => {
      const matchesType = type === 'All' || resource.type === type;
      const searchText = [resource.title, resource.description, resource.type, ...resource.keywords].join(' ').toLowerCase();
      return matchesType && (!normalizedQuery || searchText.includes(normalizedQuery));
    });
  }, [query, type]);

  const libraryResources = type === 'All' && !query ? filtered.filter((resource) => !resource.featured) : filtered;
  const visibleResources = libraryResources.slice(0, visibleCount);
  const featured = resources.filter((resource) => resource.featured).slice(0, 3);
  const hasActiveFilters = type !== 'All' || query.trim().length > 0;
  const clearFilters = () => { setType('All'); setQuery(''); setVisibleCount(9); };

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Knowledge for better mixing"
        description="Explore product brochures, technical documents, case studies, videos and engineering insights from VOTIX SYSTEMS."
        crumbs={[{ label: 'Resources' }]}>
        <label className="relative block max-w-xl">
          <span className="sr-only">Search resources</span>
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-steel-400" aria-hidden />
          <input type="search" value={query} onChange={(event) => { setQuery(event.target.value); setVisibleCount(9); }} placeholder="Search resources..." className="min-h-[52px] w-full rounded-md border border-white/20 bg-white px-12 pr-12 text-base text-navy outline-none placeholder:text-steel-400 focus:border-accent focus:ring-2 focus:ring-accent/30" />
          {query && <button type="button" onClick={() => { setQuery(''); setVisibleCount(9); }} className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md text-steel-500 hover:bg-mist hover:text-navy" aria-label="Clear search"><XIcon className="h-5 w-5" aria-hidden /></button>}
        </label>
      </PageHero>
      

      <section className="py-12 lg:py-16">
        <Container>
          <fieldset className="min-w-0">
            <legend className="mb-3 text-sm font-semibold text-navy">Filter resources by type</legend>
            <div className="scrollbar-slim flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Resource categories">
              {resourceTypes.map((resourceType) => <button key={resourceType} type="button" aria-pressed={type === resourceType} onClick={() => { setType(resourceType); setVisibleCount(9); }} className={cn('min-h-[44px] shrink-0 rounded-full border px-5 text-sm font-semibold transition-colors duration-200 ease-smooth', type === resourceType ? 'border-navy bg-navy text-white' : 'border-navy/30 bg-white text-navy hover:border-brand hover:text-brand')}>{typeLabels[resourceType]}</button>)}
            </div>
          </fieldset>
          {type === 'All' && !query && <section aria-labelledby="featured-resources-heading"><SectionHeading eyebrow="Featured Resources" title={<span id="featured-resources-heading">Start with the engineering essentials.</span>} description="Selected references for equipment selection, process understanding and maintenance planning." /><div className="mt-8 grid gap-5 lg:grid-cols-3">{featured.map((resource) => <ResourceCard key={resource.id} resource={resource} featured />)}</div></section>}
          <div className="flex flex-wrap items-end justify-between gap-3 border-t border-steel-100 pt-8"><div><p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-brand-600">Resource library</p><p className="mt-2 text-sm text-steel-600">Showing {filtered.length} {filtered.length === 1 ? 'resource' : 'resources'}</p></div>{hasActiveFilters && <button type="button" onClick={clearFilters} className="min-h-[44px] text-sm font-semibold text-brand-600 hover:text-accent-700">Clear Filters</button>}</div>
          {visibleResources.length > 0 ? <motion.ul layout className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"><AnimatePresence mode="popLayout">{visibleResources.map((resource) => <motion.li key={resource.id} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.24, ease: EASE_SMOOTH }}><ResourceCard resource={resource} /></motion.li>)}</AnimatePresence></motion.ul> : <div className="rounded-xl border border-dashed border-steel-200 bg-mist px-6 py-16 text-center"><h2 className="font-display text-2xl font-extrabold text-navy">No resources found</h2><p className="mt-2 text-steel-600">Try changing your search or filters.</p><button type="button" onClick={clearFilters} className="mt-6 min-h-[44px] rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand">Clear Filters</button></div>}
          {visibleCount < libraryResources.length && <div className="flex justify-center"><button type="button" onClick={() => setVisibleCount((count) => count + 9)} className="min-h-[48px] rounded-md border border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white">Load More</button></div>}
        </Container>
      </section>

      <section className="py-12 lg:py-16" id="faqs">
        <Container>
          <SectionHeading eyebrow="FAQs" title="Frequently asked questions" />
          <div className="mt-8 max-w-3xl">
            <Accordion items={faqs} idPrefix="resources-faq" />
          </div>
        </Container>
      </section>

      <QuoteCTA />
    </>);

}