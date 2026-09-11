import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { PageHero } from '../components/layout/PageHero';
import { ProductGallery } from '../components/products/ProductGallery';
import { ProductSpecs } from '../components/products/ProductSpecs';
import { RelatedProducts } from '../components/products/RelatedProducts';
import { CategorySeriesSection, type SeriesCategory } from '../components/products/CategorySeriesSection';
import { QuoteCTA } from '../components/home/QuoteCTA';
import { getProduct } from '../data/products';
import { industries } from '../data/industries';
import { applications } from '../data/applications';
import { useQuote } from '../contexts/QuoteContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { NotFound } from './NotFound';

export function ProductDetail() {
  const { slug } = useParams<{slug: string;}>();
  const product = slug ? getProduct(slug) : undefined;

  usePageMeta(
    product ?
    `VOTIX Systems | ${product.name}` :
    'VOTIX Systems | Product not found',
    product?.description ?? 'The requested product could not be found.'
  );

  const { openQuote } = useQuote();

  if (!product) return <NotFound />;

  const productIndustries = industries.filter((i) => product.industries.includes(i.slug));
  const productApplications = applications.filter((a) => product.applications.includes(a.slug));
  const seriesCategory: SeriesCategory | undefined =
    product.category === 'top-entry' ||
    product.category === 'side-entry' ||
    product.category === 'bottom-entry' ||
    product.category === 'custom' ? product.category : undefined;

  return (
    <>
      <PageHero
        eyebrow={product.categoryLabel}
        title={product.name}
        description={product.tagline}
        crumbs={[{ label: 'Products', href: '/products' }, { label: product.name }]} />
      

      <section className="py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
            <ProductGallery images={product.gallery} name={product.name} />

            <div>
              <h2 className="font-display text-2xl font-extrabold text-navy">Overview</h2>
              {product.overview.map((para) =>
              <p key={para.slice(0, 30)} className="mt-3 text-[15px] leading-relaxed text-steel-600">
                  {para}
                </p>
              )}

              <h3 className="mt-8 font-display text-lg font-extrabold text-navy">Key features</h3>
              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {product.features.map((f) =>
                <li key={f} className="flex gap-2 text-sm leading-snug text-steel-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-700" aria-hidden />
                    {f}
                  </li>
                )}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="accent" size="lg" onClick={() => openQuote({ product: product.name })}>
                  Request a Quote
                  <ArrowRightIcon className="h-4 w-4" aria-hidden />
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Talk to an engineer
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="font-display text-xl font-extrabold text-navy">Technical highlights</h2>
              <ul className="mt-4 space-y-2.5">
                {product.technicalHighlights.map((t) =>
                <li key={t} className="flex gap-2.5 text-sm leading-relaxed text-steel-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    {t}
                  </li>
                )}
              </ul>

              <h2 className="mt-9 font-display text-xl font-extrabold text-navy">Advantages</h2>
              <ul className="mt-4 space-y-2.5">
                {product.advantages.map((a) =>
                <li key={a} className="flex gap-2.5 text-sm leading-relaxed text-steel-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-700" aria-hidden />
                    {a}
                  </li>
                )}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-extrabold text-navy">
                Technical specification
              </h2>
              <div className="mt-4">
                <ProductSpecs specifications={product.specifications} />
              </div>
              <p className="mt-3 text-xs text-steel-500">
                Configuration is set per project. Values are confirmed against your process data
                before manufacture.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 border-t border-steel-100 pt-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="font-display text-xl font-extrabold text-navy">Suitable industries</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {productIndustries.map((i) =>
                <li key={i.slug}>
                    <Link
                    to={`/industries/${i.slug}`}
                    className="inline-flex min-h-[40px] items-center rounded-full border border-steel-200 px-4 text-sm font-semibold text-navy transition-colors duration-200 ease-smooth hover:border-brand hover:text-brand">
                    
                      {i.name}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl font-extrabold text-navy">Typical applications</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {productApplications.map((a) =>
                <li key={a.slug}>
                    <Link
                    to={`/applications/${a.slug}`}
                    className="inline-flex min-h-[40px] items-center rounded-full bg-mist px-4 text-sm font-semibold text-steel-700 transition-colors duration-200 ease-smooth hover:bg-navy-50 hover:text-brand-600">
                    
                      {a.name}
                    </Link>
                  </li>
                )}
              </ul>
              <div className="mt-6">
                <Badge tone="accent">{product.categoryLabel}</Badge>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {seriesCategory && <CategorySeriesSection category={seriesCategory} />}
      <RelatedProducts slugs={product.related} />
      <QuoteCTA prefill={{ product: product.name }} />
    </>);

}