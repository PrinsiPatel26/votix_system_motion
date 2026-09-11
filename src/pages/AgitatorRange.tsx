import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { PageHero } from '../components/layout/PageHero';
import { SmartImage } from '../components/ui/SmartImage';
import { Badge } from '../components/ui/Badge';
import { QuoteCTA } from '../components/home/QuoteCTA';
import { topEntrySeries } from '../data/topEntrySeries';
import { sideEntrySeries } from '../data/sideEntrySeries';
import { bottomEntrySeries } from '../data/bottomEntrySeries';
import { usePageMeta } from '../hooks/usePageMeta';
import { useQuote } from '../contexts/QuoteContext';

type RangeFilter = 'all' | 'vtx-series' | 'top-entry' | 'side-entry' | 'bottom-entry' | 'custom';

type SeriesCard = {
  slug: string;
  name: string;
  series: string;
  description: string;
  image: string;
  applications: string[];
  category: Exclude<RangeFilter, 'all' | 'vtx-series' | 'custom'>;
  href: string;
};

const filters: Array<{ id: RangeFilter; label: string }> = [
  { id: 'all', label: 'All Agitators' },
  { id: 'vtx-series', label: 'VTX Series' },
  { id: 'top-entry', label: 'Top Entry' },
  { id: 'side-entry', label: 'Side Entry' },
  { id: 'bottom-entry', label: 'Bottom Entry' },
  { id: 'custom', label: 'Custom Engineered' }
];

const seriesCards: SeriesCard[] = [
  ...topEntrySeries.map((series) => ({
    slug: series.slug,
    name: series.name,
    series: series.series,
    description: series.description,
    image: series.image,
    applications: series.applications,
    category: 'top-entry' as const,
    href: `/products/top-entry-agitators/${series.slug}`
  })),
  ...sideEntrySeries.map((series) => ({
    slug: series.slug,
    name: series.name,
    series: series.series,
    description: series.description,
    image: series.image,
    applications: series.applications,
    category: 'side-entry' as const,
    href: `/products/side-entry-agitators/${series.slug}`
  })),
  ...bottomEntrySeries.map((series) => ({
    slug: series.slug,
    name: series.name,
    series: series.series,
    description: series.description,
    image: series.image,
    applications: series.applications,
    category: 'bottom-entry' as const,
    href: `/products/bottom-entry-agitators/${series.slug}`
  }))
];

const customSeries = new Set(['custom']);

function SeriesCard({ series }: { series: SeriesCard }) {
  const entryLabel = series.category === 'top-entry' ? 'Top Entry' : series.category === 'side-entry' ? 'Side Entry' : 'Bottom Entry';
  const { openQuote } = useQuote();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-steel-100 bg-white shadow-card transition-[border-color,box-shadow,transform] duration-200 ease-smooth hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
      <Link to={series.href} className="relative block overflow-hidden bg-mist">
        <SmartImage
          src={series.image}
          alt={series.name}
          ratio="aspect-[4/3]"
          objectFit="contain"
          imgClassName="transition-transform duration-300 ease-smooth group-hover:scale-[1.03]" />
        <span className="absolute left-3 top-3">
          <Badge tone="navy">{entryLabel}</Badge>
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-extrabold text-navy">
          <Link to={series.href} className="hover:text-brand-600">{series.name}</Link>
        </h3>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand-600">{series.series}</p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-steel-500">{entryLabel}</p>
        <p className="mt-3 text-sm leading-relaxed text-steel-600">{series.description}</p>
        <ul className="mt-4 space-y-1.5">
          {series.applications.slice(0, 3).map((application) => (
            <li key={application} className="flex gap-2 text-[13px] leading-snug text-steel-600">
              <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-700" aria-hidden />
              {application}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-5">
          <button
            type="button"
            onClick={() => openQuote({ product: series.name })}
            className="inline-flex min-h-[40px] items-center rounded-md px-3 text-[13px] font-semibold text-accent-700 transition-colors duration-200 ease-smooth hover:bg-accent-50">
            Enquiry
          </button>
        </div>
      </div>
    </article>
  );
}

export function AgitatorRange() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedFilter = searchParams.get('category') as RangeFilter | null;
  const activeFilter = filters.some((filter) => filter.id === requestedFilter) ? requestedFilter ?? 'all' : 'all';

  usePageMeta(
    'VOTIX Systems | Complete Agitator Range',
    'Explore the complete VOTIX agitator catalogue, including every agitator category, VTX series and available product.'
  );

  const visibleSeries = seriesCards.filter((series) => {
    if (activeFilter === 'all' || activeFilter === 'vtx-series') return true;
    if (activeFilter === 'custom') return customSeries.has(series.slug);
    return series.category === activeFilter;
  });
  return (
    <>
      <PageHero
        eyebrow="ALL AGITATORS"
        title="ALL AGITATOR"
        description="Explore all VOTIX agitator solutions in one place, from entry-position systems and specialist configurations to every VTX series and product."
        crumbs={[{ label: 'Agitators' }]} />

      <section className="bg-mist py-10 lg:py-14">
        <Container>
          <div className="rounded-xl border border-steel-100 bg-white p-4 shadow-card sm:p-5">
            <p className="mb-3 text-sm font-semibold text-navy">Browse the complete range</p>
            <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Agitator categories">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === filter.id}
                  onClick={() => setSearchParams(filter.id === 'all' ? {} : { category: filter.id })}
                  className={`min-h-[42px] shrink-0 rounded-full border px-4 text-sm font-semibold transition-colors duration-200 ease-smooth ${activeFilter === filter.id ? 'border-navy bg-navy text-white' : 'border-steel-200 bg-white text-steel-600 hover:border-brand hover:text-brand'}`}>
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {visibleSeries.length > 0 && (
            <div className="mt-14 border-t border-steel-200 pt-10">
              <div className="mb-6">
                <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-600">
                  <span className="h-px w-6 bg-accent" aria-hidden />
                  {activeFilter === 'vtx-series' ? 'VTX Series' : 'Series and Configurations'}
                </p>
                <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
                  {activeFilter === 'all' ? 'ALL AGITATORS' : activeFilter === 'vtx-series' ? 'VTX SERIES' : 'Agitator Series'}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-steel-600">
                  Browse every available VOTIX series, including specialist high-shear, coaxial and entry-specific configurations. Select a series to view its existing detail page, specifications and compatible mixing elements.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {visibleSeries.map((series) => <SeriesCard key={`${series.category}-${series.slug}`} series={series} />)}
              </div>
            </div>
          )}
        </Container>
      </section>
      <QuoteCTA />
    </>
  );
}
