import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { AlertTriangleIcon, ArrowRightIcon, WrenchIcon } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { PageHero } from '../components/layout/PageHero';
import { ProductCard } from '../components/products/ProductCard';
import { ImpellerCard } from '../components/products/ImpellerCard';
import { QuoteCTA } from '../components/home/QuoteCTA';
import { getApplication } from '../data/applications';
import { getProduct } from '../data/products';
import { getImpeller } from '../data/impellers';
import { getIndustry } from '../data/industries';
import { useQuote } from '../contexts/QuoteContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { NotFound } from './NotFound';

export function ApplicationDetail() {
  const { slug } = useParams<{slug: string;}>();
  const application = slug ? getApplication(slug) : undefined;

  usePageMeta(
    application ?
    `VOTIX Systems | ${application.name} Mixing Technology` :
    'VOTIX Systems | Application not found',
    application?.summary ?? 'The requested application could not be found.'
  );

  const { openQuote } = useQuote();

  if (!application) return <NotFound />;

  const agitators = application.agitators.map(getProduct).filter(Boolean);
  const impellers = application.impellers.map(getImpeller).filter(Boolean);
  const relatedIndustries = application.industries.map(getIndustry).filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow="Application"
        title={application.name}
        description={application.summary}
        crumbs={[{ label: 'Applications', href: '/applications' }, { label: application.name }]}>
        
        <Button variant="accent" size="lg" onClick={() => openQuote({ application: application.name })}>
          Discuss this duty
          <ArrowRightIcon className="h-4 w-4" aria-hidden />
        </Button>
      </PageHero>

      <section className="py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="rounded-xl border border-steel-100 bg-white p-6 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-50 text-accent-700">
                <AlertTriangleIcon className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="mt-4 font-display text-xl font-extrabold text-navy">
                The process challenge
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-steel-600">
                {application.challenge}
              </p>
            </article>

            <article className="rounded-xl border border-steel-100 bg-navy-950 p-6 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-accent">
                <WrenchIcon className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="mt-4 font-display text-xl font-extrabold text-white">
                Recommended technology
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-steel-200">
                {application.technology}
              </p>
            </article>
          </div>

          <div className="mt-12">
            <SectionHeading eyebrow="Equipment" title="Suitable agitators" />
            <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {agitators.map((product) =>
              <li key={product!.slug}>
                  <ProductCard product={product!} />
                </li>
              )}
            </ul>
          </div>

          <div className="mt-14">
            <SectionHeading eyebrow="Mixing elements" title="Impellers used for this duty" />
            <ul className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
              {impellers.map((impeller) =>
              <li key={impeller!.slug}>
                  <ImpellerCard impeller={impeller!} />
                </li>
              )}
            </ul>
          </div>

          <div className="mt-14 border-t border-steel-100 pt-10">
            <h2 className="font-display text-xl font-extrabold text-navy">
              Industries where this matters
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {relatedIndustries.map((i) =>
              <li key={i!.slug}>
                  <Link
                  to={`/industries/${i!.slug}`}
                  className="inline-flex min-h-[40px] items-center rounded-full border border-steel-200 px-4 text-sm font-semibold text-navy transition-colors duration-200 ease-smooth hover:border-brand hover:text-brand">
                  
                    {i!.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </Container>
      </section>

      <QuoteCTA prefill={{ application: application.name }} />
    </>);

}