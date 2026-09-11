import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { PageHero } from '../components/layout/PageHero';
import { QuoteCTA } from '../components/home/QuoteCTA';
import { SmartImage } from '../components/ui/SmartImage';
import { Badge } from '../components/ui/Badge';
import { usePageMeta } from '../hooks/usePageMeta';
import { topEntrySeries } from '../data/topEntrySeries';
import { useQuote } from '../contexts/QuoteContext';

export function TopEntryAgitators() {
  const { openQuote } = useQuote();

  usePageMeta(
    'VOTIX Systems | Top Entry Agitators',
    'Browse the full VOTIX Top Entry Agitator series: VTX-G, VTX-A, VTX-CX, VTX-HS, VTX-JM and VTX-FB.'
  );

  return (
    <>
      <PageHero
        eyebrow="TOP ENTRY AGITATORS"
        title="ENGINEERED FOR EVERY MIX."
        description="VOTIX Top Entry Agitators are designed for efficient mixing, blending and homogenization across a wide range of liquid and semi-liquid processes."
        image="/ChatGPT%20Image%20Aug%2031,%202026,%2010_00_09%20AM-v.png"
        imageAlt="Top entry agitator system"
        crumbs={[{ label: 'Products', href: '/products' }, { label: 'Top Entry Agitators' }]} />

      <section className="bg-mist py-12 lg:py-16">
        <Container>
          <div className="mb-8">
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-600">
              <span className="h-px w-6 bg-accent" aria-hidden />
              TYPES OF TOP ENTRY AGITATORS
            </p>
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
              Top Entry Agitator Range
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {topEntrySeries.map((series) => (
              <article
                key={series.slug}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-steel-100 bg-white shadow-card transition-[border-color,box-shadow,transform] duration-200 ease-smooth hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
                <Link to={`/products/top-entry-agitators/${series.slug}`} className="relative block overflow-hidden bg-mist">
                  <SmartImage
                    src={series.image}
                    alt={series.name}
                    ratio="aspect-[4/3]"
                    objectFit="contain"
                    className="p-3"
                    imgClassName="transition-transform duration-300 ease-smooth group-hover:scale-[1.03]" />
                  <span className="absolute left-3 top-3">
                    <Badge tone="navy">{series.name}</Badge>
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-extrabold text-navy">{series.name}</h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand-600">
                    {series.series}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-steel-600">{series.description}</p>

                  <div className="mt-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-steel-500">
                      Applications
                    </p>
                    <ul className="space-y-1.5">
                      {series.applications.map((app) => (
                        <li key={app} className="flex gap-2 text-[13px] leading-snug text-steel-600">
                          <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-700" aria-hidden />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>

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
            ))}
          </div>
        </Container>
      </section>

      <QuoteCTA />
    </>
  );
}
