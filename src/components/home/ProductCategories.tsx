import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { SmartImage } from '../ui/SmartImage';
import { ScrollShelf } from '../products/ScrollShelf';
import { products } from '../../data/products';
import { topEntrySeries } from '../../data/topEntrySeries';
import { sideEntrySeries } from '../../data/sideEntrySeries';
import { bottomEntrySeries } from '../../data/bottomEntrySeries';
import { useQuote } from '../../contexts/QuoteContext';
import { fadeUp, staggerParent, viewportOnce } from '../../utils/motion';

const productRouteMap: Record<string, string> = {
  'top-entry-agitator': '/products/top-entry-agitators',
  'side-entry-agitator': '/products/side-entry-agitators',
  'bottom-entry-agitator': '/products/bottom-entry-agitators',
  'custom-agitator': '/products/custom-agitator'
};

const mainEntrySlugs = [
  'top-entry-agitator',
  'side-entry-agitator',
  'bottom-entry-agitator',
  'custom-agitator'
];

const seriesCards = [
  ...topEntrySeries.map((series) => ({ ...series, entry: 'Top Entry', href: `/products/top-entry-agitators/${series.slug}` })),
  ...sideEntrySeries.map((series) => ({ ...series, entry: 'Side Entry', href: `/products/side-entry-agitators/${series.slug}` })),
  ...bottomEntrySeries.map((series) => ({ ...series, entry: 'Bottom Entry', href: `/products/bottom-entry-agitators/${series.slug}` }))
];

export function ProductCategories() {
  const mainEntryProducts = products.filter((product) => mainEntrySlugs.includes(product.slug));
  const { openQuote } = useQuote();

  const renderProductCard = (product: typeof products[number], featured = false) => {
    const href = productRouteMap[product.slug] ?? `/products/${product.slug}`;
    const name = product.slug === 'custom-agitator' ? 'Custom Engineered Entry' : product.name;

    return (
      <motion.li key={product.slug} variants={fadeUp}>
        <Link
          to={href}
          className="group flex h-full flex-col overflow-hidden rounded-xl border border-steel-100 bg-white shadow-card transition-[border-color,box-shadow,transform] duration-200 ease-smooth hover:-translate-y-1 hover:border-accent/60 hover:shadow-lift">
          <div className="relative overflow-hidden bg-mist">
            <SmartImage
              src={product.image}
              alt={`${product.name} — cutaway view`}
              ratio={featured ? 'aspect-[5/4]' : 'aspect-[4/3]'}
              objectFit="contain"
              imgClassName="transition-transform duration-300 ease-smooth group-hover:scale-[1.03]" />
            <span className="absolute inset-x-0 bottom-0 h-1 bg-accent opacity-0 transition-opacity duration-200 ease-smooth group-hover:opacity-100" />
          </div>
          <div className={`flex flex-1 flex-col ${featured ? 'p-6' : 'p-5'}`}>
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.14em] text-brand-600">
              {product.categoryLabel}
            </p>
            <h3 className={`${featured ? 'mt-2 text-2xl' : 'mt-2 text-xl'} font-display font-extrabold leading-tight text-navy`}>
              {name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-steel-600">{product.tagline}</p>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-xs font-bold uppercase tracking-[0.1em] text-navy">
              View Products
              <ArrowRightIcon
                className="h-3.5 w-3.5 text-accent transition-transform duration-200 ease-smooth group-hover:translate-x-1"
                aria-hidden />
            </span>
          </div>
        </Link>
      </motion.li>
    );
  };

  return (
    <section className="py-16 lg:py-20" aria-labelledby="categories-heading">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-8 text-center">
          <h2 id="categories-heading" className="font-display text-[clamp(22px,2.2vw,32px)] font-extrabold uppercase tracking-[0.02em] text-navy">
            <span className="text-navy">Our</span> <span className="text-accent">Agitator Range</span>
          </h2>
          <span className="mx-auto mt-3 block h-0.5 w-12 bg-accent" aria-hidden />
          <h3 className="mt-8 mx-auto max-w-[1100px] font-display text-[clamp(20px,2vw,30px)] font-extrabold leading-[1.08] tracking-tight text-navy">
            Choose the entry position and drive concept
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-steel-600 sm:text-[17px]">
            Top, side and bottom entry configurations cover the complete range of process vessels, with custom engineering available for specialised duties.
          </p>
        </motion.div>

        <motion.ul
          variants={staggerParent(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mainEntryProducts.map((product) => renderProductCard(product, true))}
        </motion.ul>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 border-t border-steel-100 pt-12">
          <h3 className="text-center font-display text-[clamp(20px,2vw,28px)] font-extrabold uppercase tracking-[0.08em]">
            <span className="text-navy">All</span>{' '}
            <span className="text-accent">Agitators</span>
          </h3>
          <span className="mx-auto mt-3 block h-0.5 w-12 bg-accent" aria-hidden />

          <div className="mt-8">
            <ScrollShelf label="All agitator series">
              {seriesCards.map((series) =>
                <motion.article
                  key={`${series.entry}-${series.slug}`}
                  variants={fadeUp}
                  className="group flex h-full w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-steel-100 bg-white shadow-card transition-[border-color,box-shadow,transform] duration-200 ease-smooth hover:-translate-y-1 hover:border-accent/60 hover:shadow-lift sm:w-[320px]">
                  <Link to={series.href} className="relative block overflow-hidden bg-mist">
                    <SmartImage
                      src={series.image}
                      alt={`${series.name} - agitator series`}
                      ratio="aspect-[4/3]"
                      objectFit="contain"
                      imgClassName="transition-transform duration-300 ease-smooth group-hover:scale-[1.03]" />
                  </Link>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="font-display text-xs font-extrabold uppercase tracking-[0.14em] text-brand-600">{series.entry}</p>
                    <h4 className="mt-2 font-display text-xl font-extrabold leading-tight text-navy">{series.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-steel-600">{series.description}</p>
                    <button
                      type="button"
                      onClick={() => openQuote({ product: series.name })}
                      className="mt-auto inline-flex min-h-[40px] items-center rounded-md px-3 pt-5 text-[13px] font-semibold text-accent-700 transition-colors duration-200 ease-smooth hover:bg-accent-50">
                      Enquire
                    </button>
                  </div>
                </motion.article>
              )}
            </ScrollShelf>
          </div>
        </motion.div>
      </Container>
    </section>);

}