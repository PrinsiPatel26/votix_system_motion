import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { PageHero } from '../components/layout/PageHero';
import { QuoteCTA } from '../components/home/QuoteCTA';
import { ProductImageSlider } from '../components/ui/ProductImageSlider';
import { SmartImage } from '../components/ui/SmartImage';
import { CategorySeriesSection } from '../components/products/CategorySeriesSection';
import { images } from '../data/images';
import { getSideEntrySeries } from '../data/sideEntrySeries';
import { getImpeller } from '../data/impellers';
import { usePageMeta } from '../hooks/usePageMeta';
import { NotFound } from './NotFound';

const tabOrder = ['Overview', 'Features', 'Technical Details', 'Configurations', 'Documentation'];

export function SideEntrySeriesDetail() {
  const { slug } = useParams<{ slug: string }>();
  const series = slug ? getSideEntrySeries(slug) : undefined;
  const [activeTab, setActiveTab] = useState<string>('Overview');

  usePageMeta(
    series ? `VOTIX Systems | ${series.name}` : 'VOTIX Systems | Product not found',
    series?.description ?? 'The requested product series could not be found.'
  );

  if (!series) return <NotFound />;

  const documentationItems = [
    'Series overview and installation guidance',
    'Configuration recommendations for vessel and process duty',
    'Impeller compatibility guidance',
    'Support for quote and engineering review'
  ];

  const seriesSliderMap: Record<string, string[]> = {
    'vtx-se-standard': ['/assets/VTX SE SERIES.png', '/assets/VTX SE SERIES - 1.png'],
    'vtx-seh-high-flow': ['/assets/VTX SEH SERIES.png', '/assets/VTX SEH SERIES-1.png'],
    'vtx-sus-suspension': ['/assets/VTX SB SERIES.png', '/assets/VTX SB SERIES-1.png'],
    'vtx-sb-blending': [images.products.sideEntryBlendingPrimary, images.products.sideEntryBlendingSecondary],
    custom: [images.products.custom, images.products.customSecondary]
  };

  const productSliderImages = seriesSliderMap[slug ?? ''] ?? [series.image, series.image];

  const overviewTabs = useMemo(() => ({
    Overview: (
      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="text-[15px] leading-relaxed text-steel-600">{series.description}</p>

          <ul className="mt-5 space-y-2.5">
            {series.overview.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-steel-600">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-700" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-xl border border-steel-200 bg-mist">
          <div className="grid grid-cols-1">
            {series.specificationTable.map((row) => (
              <div key={row.label} className="flex flex-col border-b border-steel-200 px-4 py-4 last:border-b-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="min-w-[140px] pb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-steel-500 sm:pb-0">
                  {row.label}
                </div>
                <div className="flex-1 text-base font-semibold leading-relaxed text-navy sm:text-lg">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    Features: (
      <div className="grid gap-4 md:grid-cols-2">
        {series.features.map((feature) => (
          <div key={feature} className="rounded-xl border border-steel-200 bg-white p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-navy">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
              {feature}
            </p>
          </div>
        ))}
      </div>
    ),
    'Technical Details': (
      <div className="overflow-hidden rounded-xl border border-steel-200 bg-white">
        <div className="grid grid-cols-1">
          {series.technical.map((item) => (
            <div key={item.label} className="flex flex-col border-b border-steel-200 px-4 py-4 last:border-b-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div className="min-w-[180px] pb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-steel-500 sm:pb-0">
                {item.label}
              </div>
              <div className="flex-1 text-base font-semibold leading-relaxed text-navy sm:text-lg">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    Configurations: (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-steel-200 bg-white p-5">
          <h3 className="font-display text-xl font-extrabold text-navy">Typical Configuration</h3>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-steel-600">
            <li>• Side-entry mounting arrangement matched to tank geometry</li>
            <li>• Shaft and impeller selection defined by process duty</li>
            <li>• Seal arrangement matched to pressure and product characteristics</li>
            <li>• Motor and drive configured for duty and service requirements</li>
          </ul>
        </div>
        <div className="rounded-xl border border-steel-200 bg-white p-5">
          <h3 className="font-display text-xl font-extrabold text-navy">Recommended Selection Criteria</h3>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-steel-600">
            <li>• Process type and mixing objective</li>
            <li>• Tank geometry and vessel dimensions</li>
            <li>• Viscosity and product behavior</li>
            <li>• Required circulation and flow pattern</li>
          </ul>
        </div>
      </div>
    ),
    Documentation: (
      <div className="grid gap-4 md:grid-cols-2">
        {documentationItems.map((item) => (
          <div key={item} className="rounded-xl border border-steel-200 bg-white p-5 text-sm text-steel-600">
            {item}
          </div>
        ))}
      </div>
    )
  }));

  return (
    <>
      <PageHero
        eyebrow="SIDE ENTRY AGITATORS"
        title={series.name}
        description={series.tagline}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Side Entry Agitators', href: '/products/side-entry-agitators' },
          { label: series.name }
        ]} />

      <section className="py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-600">
                {series.series}
              </p>
              <h2 className="font-display text-4xl font-extrabold text-navy sm:text-5xl">
                {series.name}
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-steel-600">
                {series.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {series.benefits.map((benefit) => (
                  <Badge key={benefit} tone="navy">{benefit}</Badge>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="accent" size="lg" className="min-w-[180px]">
                  REQUEST A QUOTE
                </Button>
              </div>
            </div>

            <div className="rounded-[28px] border border-steel-100 bg-white p-3 shadow-card">
              <ProductImageSlider images={productSliderImages} alt={series.name} />
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-steel-100 bg-white p-2 shadow-card">
            <div className="flex flex-wrap gap-2">
              {tabOrder.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`min-h-[44px] rounded-md px-4 text-sm font-semibold uppercase tracking-[0.08em] transition-colors duration-200 ease-smooth ${
                    activeTab === tab ? 'bg-navy text-white' : 'bg-mist text-steel-700 hover:text-brand'
                  }`}>
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-6 p-2 lg:p-4">{overviewTabs[activeTab as keyof typeof overviewTabs]}</div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-extrabold text-navy">Typical Applications</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {series.applications.map((app) => (
                  <span key={app} className="rounded-full border border-steel-200 bg-mist px-4 py-2 text-sm font-medium text-steel-700">
                    {app}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-display text-2xl font-extrabold text-navy">Industries</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {series.industries.map((industry) => (
                    <span key={industry} className="rounded-full bg-navy px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-extrabold text-navy">Product Photos / Visuals</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {series.gallery.map((image, index) => (
                  <div key={`${image}-${index}`} className="overflow-hidden rounded-xl border border-steel-200 bg-white shadow-card">
                    <SmartImage src={image} alt={`${series.name} visual ${index + 1}`} ratio="aspect-[4/3]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {series.compatibleImpellers.length > 0 && (
            <div className="mt-12">
              <h3 className="font-display text-2xl font-extrabold text-navy">Compatible Impellers</h3>
              <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {series.compatibleImpellers.map((impeller) => (
                  <Link
                    key={impeller.slug ?? impeller.name}
                    to={`/products/impellers/${impeller.slug}`}
                    className="group block overflow-hidden rounded-xl border border-steel-200 bg-white shadow-card transition-all duration-200 ease-smooth hover:border-brand-200 hover:shadow-lift"
                    aria-label={`Open ${impeller.name} impeller details`}>
                    <div className="overflow-hidden bg-mist">
                      <SmartImage
                        src={impeller.image}
                        alt={impeller.name}
                        ratio="aspect-[4/3]"
                        imgClassName="transition-transform duration-300 ease-smooth group-hover:scale-[1.04]" />
                    </div>
                    <div className="p-4">
                      <p className="font-display text-lg font-extrabold text-navy group-hover:text-brand transition-colors duration-200">{impeller.name}</p>
                      <p className="mt-2 text-sm leading-relaxed text-steel-600">{impeller.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 rounded-2xl border border-steel-100 bg-mist p-8 text-center">
            <h3 className="font-display text-3xl font-extrabold text-navy">
              NEED HELP SELECTING THE RIGHT AGITATOR?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-base text-steel-600">
              Our engineering team can help select the right solution for your process.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md bg-accent px-6 text-sm font-semibold text-navy-950 transition-colors duration-200 ease-smooth hover:bg-accent-400">
                TALK TO AN EXPERT
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </Link>
              <Button variant="outline" size="lg">
                REQUEST A QUOTE
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CategorySeriesSection category="side-entry" />
      <QuoteCTA prefill={{ product: series.name }} />
    </>
  );
}
