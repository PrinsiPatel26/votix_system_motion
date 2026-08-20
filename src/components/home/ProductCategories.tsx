import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { SmartImage } from '../ui/SmartImage';
import { products } from '../../data/products';
import { fadeUp, staggerParent, viewportOnce } from '../../utils/motion';

export function ProductCategories() {
  return (
    <section className="py-16 lg:py-20" aria-labelledby="categories-heading">
      <Container>
        <SectionHeading
          eyebrow="Product Categories"
          title={<span id="categories-heading">Choose the entry position and drive concept</span>}
          description="Top, side and bottom entry cover most process vessels. High shear, coaxial and custom-engineered systems handle the duties they cannot." />
        

        <motion.ul
          variants={staggerParent(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          
          {products.map((product) =>
          <motion.li key={product.slug} variants={fadeUp}>
              <Link
              to={`/products/${product.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-steel-100 bg-white shadow-card transition-[border-color,box-shadow,transform] duration-200 ease-smooth hover:-translate-y-1 hover:border-accent/60 hover:shadow-lift">
              
                <div className="relative overflow-hidden bg-mist">
                  <SmartImage
                  src={product.image}
                  alt={`${product.name} — cutaway view`}
                  ratio="aspect-[4/3]"
                  imgClassName="transition-transform duration-300 ease-smooth group-hover:scale-[1.03]" />
                
                  <span className="absolute inset-x-0 bottom-0 h-1 bg-accent opacity-0 transition-opacity duration-200 ease-smooth group-hover:opacity-100" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-display text-xs font-extrabold uppercase tracking-[0.14em] text-brand-600">
                    {product.categoryLabel}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-extrabold leading-tight text-navy">
                    {product.name}
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
          )}
        </motion.ul>
      </Container>
    </section>);

}