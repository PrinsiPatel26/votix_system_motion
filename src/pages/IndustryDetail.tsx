import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { PageHero } from '../components/layout/PageHero';
import { ProductCard } from '../components/products/ProductCard';
import { QuoteCTA } from '../components/home/QuoteCTA';
import { getIndustry } from '../data/industries';
import { getProduct } from '../data/products';
import { applications } from '../data/applications';
import { useQuote } from '../contexts/QuoteContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { NotFound } from './NotFound';

export function IndustryDetail() {
  const { slug } = useParams<{slug: string;}>();
  const industry = slug ? getIndustry(slug) : undefined;

  usePageMeta(
    industry ?
    `VOTIX Systems | ${industry.name} Mixing Solutions` :
    'VOTIX Systems | Industry not found',
    industry?.description.slice(0, 160) ?? 'The requested industry could not be found.'
  );

  const { openQuote } = useQuote();

  if (!industry) return <NotFound />;

  const suitable = industry.agitators.map(getProduct).filter(Boolean);
  const industryApplications = applications.filter((a) => industry.applications.includes(a.slug));

  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={industry.name}
        description={industry.tagline}
        image={industry.image}
        crumbs={[{ label: 'Industries', href: '/industries' }, { label: industry.name }]}>
        
        <Button variant="accent" size="lg" onClick={() => openQuote({ industry: industry.name })}>
          Request a Quote
          <ArrowRightIcon className="h-4 w-4" aria-hidden />
        </Button>
      </PageHero>

      <section className="py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-14">
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Overview"
                title={`Mixing in ${industry.name.toLowerCase()} processing`}
                description={industry.description} />
              

              <h3 className="mt-10 font-display text-xl font-extrabold text-navy">
                Process requirements
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {industry.requirements.map((r) =>
                <li
                  key={r}
                  className="flex gap-2.5 rounded-lg border border-steel-100 bg-white p-4 text-sm leading-relaxed text-steel-600">
                  
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-700" aria-hidden />
                    {r}
                  </li>
                )}
              </ul>

              <h3 className="mt-10 font-display text-xl font-extrabold text-navy">Applications</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {industryApplications.map((a) =>
                <li key={a.slug}>
                    <Link
                    to={`/applications/${a.slug}`}
                    className="inline-flex min-h-[40px] items-center rounded-full bg-mist px-4 text-sm font-semibold text-steel-700 transition-colors duration-200 ease-smooth hover:bg-navy-50 hover:text-brand-600">
                    
                      {a.name}
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <aside className="lg:col-span-1">
              <div className="rounded-xl border border-steel-100 bg-mist p-6">
                <h3 className="font-display text-lg font-extrabold text-navy">Benefits</h3>
                <ul className="mt-4 space-y-3">
                  {industry.benefits.map((b) =>
                  <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-steel-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      {b}
                    </li>
                  )}
                </ul>
                <Button
                  variant="primary"
                  className="mt-6 w-full"
                  onClick={() => openQuote({ industry: industry.name })}>
                  
                  Request a quote
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-t border-steel-100 bg-mist py-14" aria-labelledby="suitable-heading">
        <Container>
          <SectionHeading
            eyebrow="Recommended equipment"
            title={<span id="suitable-heading">Suitable agitator types</span>} />
          
          <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {suitable.map((product) =>
            <li key={product!.slug}>
                <ProductCard product={product!} />
              </li>
            )}
          </ul>
        </Container>
      </section>

      <QuoteCTA prefill={{ industry: industry.name }} />
    </>);

}