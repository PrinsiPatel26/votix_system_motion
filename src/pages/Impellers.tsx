import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { RotateCcwIcon, SearchIcon } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { PageHero } from '../components/layout/PageHero';
import { ImpellerCard } from '../components/products/ImpellerCard';
import { QuoteCTA } from '../components/home/QuoteCTA';
import { impellerFamilies, impellers } from '../data/impellers';
import { usePageMeta } from '../hooks/usePageMeta';
import { EASE_SMOOTH } from '../utils/motion';
import { cn } from '../utils/cn';

export function Impellers() {
  usePageMeta(
    'VOTIX Systems | Impellers & Mixing Elements',
    'Hydrofoil, propeller, pitched blade, Rushton, rotor-stator, dissolver, anchor and helical ribbon impellers — matched to flow, shear and viscosity.'
  );

  const [searchParams] = useSearchParams();
  const [family, setFamily] = useState<string>(searchParams.get('family') ?? 'all');
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return impellers.filter((i) => {
      if (family !== 'all' && i.family !== family) return false;
      if (q) {
        const haystack = [i.name, i.purpose, i.description, ...i.suitableFor].join(' ').toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [family, query]);

  const isDirty = family !== 'all' || query !== '';

  return (
    <>
      <PageHero
        eyebrow="Types of Impellers"
        title="Mixing elements that set the flow pattern"
        description="The impeller determines whether energy goes into circulation or into shear. Select by family, or search for the duty you need to solve."
        crumbs={[{ label: 'Products', href: '/products' }, { label: 'Impellers' }]} />
      

      <section className="bg-mist py-10 lg:py-14">
        <Container>
          <div className="rounded-xl border border-steel-100 bg-white p-4 shadow-card sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="lg:w-80">
                <label
                  htmlFor="impeller-search"
                  className="mb-1.5 block text-sm font-semibold text-navy-900">
                  
                  Search impellers
                </label>
                <div className="relative">
                  <SearchIcon
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-steel-400"
                    aria-hidden />
                  
                  <input
                    id="impeller-search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g. hydrofoil, gas dispersion"
                    className="min-h-[44px] w-full rounded-md border border-steel-200 bg-white py-2.5 pl-10 pr-3.5 text-[15px] text-navy placeholder:text-steel-400 focus:border-brand focus:outline-none" />
                  
                </div>
              </div>

              <fieldset className="min-w-0">
                <legend className="mb-2 text-sm font-semibold text-navy-900">Family</legend>
                <div className="flex flex-wrap gap-2">
                  {impellerFamilies.map((f) =>
                  <button
                    key={f.id}
                    type="button"
                    aria-pressed={family === f.id}
                    onClick={() => setFamily(f.id)}
                    className={cn(
                      'min-h-[40px] rounded-full border px-4 text-sm font-semibold transition-[background-color,border-color,color] duration-200 ease-smooth',
                      family === f.id ?
                      'border-navy bg-navy text-white' :
                      'border-steel-200 bg-white text-steel-600 hover:border-brand hover:text-brand'
                    )}>
                    
                      {f.label}
                    </button>
                  )}
                </div>
              </fieldset>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-steel-100 pt-4">
              <p className="text-sm text-steel-600" role="status" aria-live="polite">
                <span className="font-semibold text-navy">{results.length}</span>{' '}
                {results.length === 1 ? 'impeller' : 'impellers'} shown
              </p>
              <button
                type="button"
                disabled={!isDirty}
                onClick={() => {
                  setFamily('all');
                  setQuery('');
                }}
                className="inline-flex min-h-[40px] items-center gap-2 rounded-md px-3 text-sm font-semibold text-brand-600 transition-colors duration-200 ease-smooth hover:bg-brand-50 disabled:opacity-40">
                
                <RotateCcwIcon className="h-4 w-4" aria-hidden />
                Reset
              </button>
            </div>
          </div>

          {results.length === 0 ?
          <div className="mt-8 rounded-xl border border-dashed border-steel-200 bg-white p-10 text-center">
              <h2 className="font-display text-lg font-extrabold text-navy">No impellers match</h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-steel-600">
                Try a different family or search term — or describe the duty and we will recommend a
                geometry.
              </p>
            </div> :

          <motion.ul
            layout
            className="perspective-shelf mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            
              <AnimatePresence mode="popLayout">
                {results.map((impeller) =>
              <motion.li
                key={impeller.slug}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.24, ease: EASE_SMOOTH }}>
                
                    <ImpellerCard
                  impeller={impeller}
                  expanded={expanded === impeller.slug}
                  onToggle={() =>
                  setExpanded(expanded === impeller.slug ? null : impeller.slug)
                  } />
                
                  </motion.li>
              )}
              </AnimatePresence>
            </motion.ul>
          }
        </Container>
      </section>

      <QuoteCTA
        title="Not sure which impeller fits your product?"
        description="Send us the viscosity, solids content and mixing objective — we will recommend a geometry and size it for your vessel."
        prefill={{ product: 'Impellers / Mixing elements' }} />
      
    </>);

}