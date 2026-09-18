import React, { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { PageHero } from '../components/layout/PageHero';
import { SmartImage } from '../components/ui/SmartImage';
import { Badge } from '../components/ui/Badge';
import {
  ProductFilters,
  emptyFilters,
  type ProductFilterState } from
'../components/products/ProductFilters';
import { QuoteCTA } from '../components/home/QuoteCTA';
import { topEntrySeries } from '../data/topEntrySeries';
import { sideEntrySeries } from '../data/sideEntrySeries';
import { bottomEntrySeries } from '../data/bottomEntrySeries';
import { useQuote } from '../contexts/QuoteContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { EASE_SMOOTH } from '../utils/motion';

type CatalogueItem = {
  slug: string;
  name: string;
  category: 'top-entry' | 'side-entry' | 'bottom-entry' | 'high-shear-mixer' | 'coaxial-mixer' | 'custom';
  categoryLabel: string;
  description: string;
  tagline: string;
  image: string;
  applications: string[];
  industries: string[];
  features: string[];
  href: string;
};

const catalogueItems: CatalogueItem[] = [
  ...topEntrySeries.map((series) => ({
    slug: series.slug,
    name: series.name,
    category: 'top-entry' as const,
    categoryLabel: 'Top Entry',
    description: series.description,
    tagline: series.tagline,
    image: series.image,
    applications: series.applications,
    industries: series.industries,
    features: series.benefits,
    href: `/products/top-entry-agitators/${series.slug}`
  })),
  ...sideEntrySeries.map((series) => ({
    slug: series.slug,
    name: series.name,
    category: 'side-entry' as const,
    categoryLabel: 'Side Entry',
    description: series.description,
    tagline: series.tagline,
    image: series.image,
    applications: series.applications,
    industries: series.industries,
    features: series.benefits,
    href: `/products/side-entry-agitators/${series.slug}`
  })),
  ...bottomEntrySeries.map((series) => ({
    slug: series.slug,
    name: series.name,
    category: 'bottom-entry' as const,
    categoryLabel: 'Bottom Entry',
    description: series.description,
    tagline: series.tagline,
    image: series.image,
    applications: series.applications,
    industries: series.industries,
    features: series.benefits,
    href: `/products/bottom-entry-agitators/${series.slug}`
  })),
  ...["vtx-hs-series", "vtx-cx-series"].map((slug) => {
    const product = products.find((entry) => entry.slug === slug);
    if (!product) return null;
    return {
      slug: product.slug,
      name: product.name,
      category: product.category,
      categoryLabel: product.categoryLabel,
      description: product.description,
      tagline: product.tagline,
      image: product.image,
      applications: product.applications,
      industries: product.industries,
      features: product.features,
      href: `/products/${product.slug}`
    };
  }).filter((item): item is NonNullable<typeof item> => item !== null)
];

const normaliseFilterText = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '');

function matchesCatalogueFilter(values: string[], filter: string) {
  const normalisedFilter = normaliseFilterText(filter);
  return values.some((value) => normaliseFilterText(value).includes(normalisedFilter));
}

function CatalogueSeriesCard({ item }: { item: CatalogueItem }) {
  const { openQuote } = useQuote();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-steel-100 bg-white shadow-card transition-[border-color,box-shadow,transform] duration-200 ease-smooth hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
      <Link to={item.href} className="relative block overflow-hidden bg-mist">
        <SmartImage
          src={item.image}
          alt={item.name}
          ratio="aspect-[4/3]"
          objectFit="contain"
          imgClassName="transition-transform duration-300 ease-smooth group-hover:scale-[1.03]" />
        <span className="absolute left-3 top-3">
          <Badge tone="navy">{item.categoryLabel}</Badge>
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-extrabold text-navy">
          <Link to={item.href} className="hover:text-brand-600">{item.name}</Link>
        </h3>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand-600">{item.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-steel-600">{item.description}</p>

        <ul className="mt-4 space-y-1.5">
          {item.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex gap-2 text-[13px] leading-snug text-steel-600">
              <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-700" aria-hidden />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
          <Link
            to={item.href}
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-md bg-navy px-4 text-sm font-semibold text-white transition-colors duration-200 ease-smooth hover:bg-navy-700">
            View Details
            <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden />
          </Link>
          <button
            type="button"
            onClick={() => openQuote({ product: item.name })}
            className="inline-flex min-h-[44px] items-center rounded-md border border-steel-200 px-4 text-sm font-semibold text-navy transition-colors duration-200 ease-smooth hover:border-accent hover:text-accent-700">
            Request Quote
          </button>
        </div>
      </div>
    </article>
  );
}

export function Products() {
  usePageMeta(
    'VOTIX Systems | Industrial Agitators & Mixing Equipment',
    'Browse the VOTIX agitator range: top entry, side entry and bottom entry systems, with custom engineered solutions for specialised applications.'
  );

  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState<ProductFilterState>({
    ...emptyFilters,
    category: searchParams.get('category') ?? 'all',
    industry: searchParams.get('industry') ?? 'all'
  });

  const results = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    return catalogueItems.filter((item) => {
      if (filters.category !== 'all' && item.category !== filters.category) return false;
      if (filters.industry !== 'all' && !matchesCatalogueFilter(item.industries, filters.industry)) return false;
      if (filters.application !== 'all' && !matchesCatalogueFilter(item.applications, filters.application))
      return false;
      if (q) {
        const haystack = [item.name, item.description, item.categoryLabel, item.tagline, ...item.features, ...item.applications, ...item.industries].
        join(' ').
        toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Engineered mixing solutions for demanding processes"
        description="Every VOTIX agitator is configured around the vessel, the product and the mixing task. Filter the range by category, industry or application."
        crumbs={[{ label: 'Products' }]} />
      

      <section className="bg-mist py-10 lg:py-14">
        <Container>
          <ProductFilters value={filters} onChange={setFilters} resultCount={results.length} />

          <div className="mt-8">
            {results.length === 0 ?
            <div className="rounded-xl border border-dashed border-steel-200 bg-white p-10 text-center">
                <h2 className="font-display text-lg font-extrabold text-navy">No matching products</h2>
                <p className="mx-auto mt-2 max-w-md text-sm text-steel-600">
                  Try widening your filters, or tell us about the duty directly — many of our units
                  are engineered to order.
                </p>
                <button
                type="button"
                onClick={() => setFilters(emptyFilters)}
                className="mt-5 inline-flex min-h-[44px] items-center rounded-md bg-navy px-5 text-sm font-semibold text-white transition-colors duration-200 ease-smooth hover:bg-navy-700">
                
                  Reset filters
                </button>
              </div> :

            <motion.ul
              layout
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              
                <AnimatePresence mode="popLayout">
                  {results.map((item) =>
                <motion.li
                  key={item.slug}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.24, ease: EASE_SMOOTH }}>
                  
                      <CatalogueSeriesCard item={item} />
                    </motion.li>
                )}
                </AnimatePresence>
              </motion.ul>
            }
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-xl border border-steel-100 bg-white p-6 shadow-card sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-lg font-extrabold text-navy">
                Looking for mixing elements?
              </h2>
              <p className="mt-1 text-sm text-steel-600">
                Hydrofoil, propeller, turbine, anchor and helical geometries.
              </p>
            </div>
            <Link
              to="/products/impellers"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-navy-950 transition-colors duration-200 ease-smooth hover:bg-accent-400">
              
              View impeller range
              <ArrowRightIcon className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      <QuoteCTA />
    </>);

}