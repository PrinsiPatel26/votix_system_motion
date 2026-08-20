import React, { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { PageHero } from '../components/layout/PageHero';
import { ProductCard } from '../components/products/ProductCard';
import {
  ProductFilters,
  emptyFilters,
  type ProductFilterState } from
'../components/products/ProductFilters';
import { QuoteCTA } from '../components/home/QuoteCTA';
import { products } from '../data/products';
import { usePageMeta } from '../hooks/usePageMeta';
import { EASE_SMOOTH } from '../utils/motion';

export function Products() {
  usePageMeta(
    'VOTIX Systems | Industrial Agitators & Mixing Equipment',
    'Browse the VOTIX agitator range: top entry, side entry, bottom entry, high shear, coaxial and custom engineered mixing systems, filterable by industry and application.'
  );

  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState<ProductFilterState>({
    ...emptyFilters,
    category: searchParams.get('category') ?? 'all',
    industry: searchParams.get('industry') ?? 'all'
  });

  const results = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    return products.filter((p) => {
      if (filters.category !== 'all' && p.category !== filters.category) return false;
      if (filters.industry !== 'all' && !p.industries.includes(filters.industry)) return false;
      if (filters.application !== 'all' && !p.applications.includes(filters.application))
      return false;
      if (q) {
        const haystack = [p.name, p.description, p.categoryLabel, p.tagline, ...p.features].
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
                  {results.map((product) =>
                <motion.li
                  key={product.slug}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.24, ease: EASE_SMOOTH }}>
                  
                      <ProductCard product={product} />
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
                Hydrofoil, propeller, turbine, anchor, helical and high shear geometries.
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