import React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { SmartImage } from '../ui/SmartImage';
import { Badge } from '../ui/Badge';
import { products } from '../../data/products';
import { topEntrySeries } from '../../data/topEntrySeries';
import { sideEntrySeries } from '../../data/sideEntrySeries';
import { bottomEntrySeries } from '../../data/bottomEntrySeries';
import { useQuote } from '../../contexts/QuoteContext';

export type SeriesCategory = 'top-entry' | 'side-entry' | 'bottom-entry' | 'custom';

type SeriesCardData = {
  slug: string;
  name: string;
  series: string;
  description: string;
  image: string;
  applications: string[];
  href: string;
};

const categoryLabels: Record<SeriesCategory, string> = {
  'top-entry': 'Top Entry',
  'side-entry': 'Side Entry',
  'bottom-entry': 'Bottom Entry',
  custom: 'Custom Engineered'
};

function getSeriesCards(category: SeriesCategory): SeriesCardData[] {
  if (category === 'top-entry') {
    return topEntrySeries.map((series) => ({
      slug: series.slug,
      name: series.name,
      series: series.series,
      description: series.description,
      image: series.image,
      applications: series.applications,
      href: `/products/top-entry-agitators/${series.slug}`
    }));
  }

  if (category === 'side-entry') {
    return sideEntrySeries.map((series) => ({
      slug: series.slug,
      name: series.name,
      series: series.series,
      description: series.description,
      image: series.image,
      applications: series.applications,
      href: `/products/side-entry-agitators/${series.slug}`
    }));
  }

  if (category === 'bottom-entry') {
    return bottomEntrySeries.map((series) => ({
      slug: series.slug,
      name: series.name,
      series: series.series,
      description: series.description,
      image: series.image,
      applications: series.applications,
      href: `/products/bottom-entry-agitators/${series.slug}`
    }));
  }

  return products
    .filter((product) => product.category === 'custom')
    .map((product) => ({
      slug: product.slug,
      name: product.name,
      series: product.categoryLabel,
      description: product.description,
      image: product.image,
      applications: product.applications,
      href: `/products/${product.slug}`
    }));
}

export function CategorySeriesSection({ category }: { category: SeriesCategory }) {
  const seriesCards = getSeriesCards(category);
  const categoryLabel = categoryLabels[category];
  const { openQuote } = useQuote();

  return (
    <section className="bg-mist py-12 lg:py-16">
      <Container>
        <div className="mb-8">
          <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-600">
            <span className="h-px w-6 bg-accent" aria-hidden />
            {categoryLabel} SERIES
          </p>
          <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
            {categoryLabel} Agitator Series
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {seriesCards.map((series) => (
            <article
              key={`${category}-${series.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-steel-100 bg-white shadow-card transition-[border-color,box-shadow,transform] duration-200 ease-smooth hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
              <Link to={series.href} className="relative block overflow-hidden bg-mist">
                <SmartImage
                  src={series.image}
                  alt={series.name}
                  ratio="aspect-[4/3]"
                  objectFit="contain"
                  imgClassName="transition-transform duration-300 ease-smooth group-hover:scale-[1.03]" />
                <span className="absolute left-3 top-3">
                  <Badge tone="navy">{series.name}</Badge>
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-extrabold text-navy">
                  <Link to={series.href} className="hover:text-brand-600">{series.name}</Link>
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand-600">{series.series}</p>
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
          ))}
        </div>
      </Container>
    </section>
  );
}
