import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { SmartImage } from '../ui/SmartImage';
import { Badge } from '../ui/Badge';
import { useQuote } from '../../contexts/QuoteContext';
import { EASE_SMOOTH } from '../../utils/motion';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  /** "shelf" is used inside the 3D scrolling row on the home page. */
  variant?: 'grid' | 'shelf';
}

export function ProductCard({ product, variant = 'grid' }: ProductCardProps) {
  const reduce = useReducedMotion();
  const { openQuote } = useQuote();

  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -6, rotateY: variant === 'shelf' ? -5 : 0, z: 30 }}
      transition={{ duration: 0.25, ease: EASE_SMOOTH }}
      style={{ transformStyle: 'preserve-3d' }}
      className={`group flex h-full flex-col overflow-hidden rounded-xl border border-steel-100 bg-white shadow-card transition-[border-color,box-shadow] duration-200 ease-smooth hover:border-brand-200 hover:shadow-lift ${
      variant === 'shelf' ? 'w-[280px] shrink-0 snap-start sm:w-[320px]' : ''}`
      }>
      
      <Link
        to={`/products/${product.slug}`}
        className="relative block overflow-hidden bg-mist"
        tabIndex={-1}
        aria-hidden="true">
        
        <SmartImage
          src={product.image}
          alt=""
          ratio="aspect-[4/3]"
          imgClassName="transition-transform duration-300 ease-smooth group-hover:scale-[1.03]" />
        
        <span className="absolute left-3 top-3">
          <Badge tone="navy">{product.categoryLabel}</Badge>
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-extrabold leading-snug text-navy">
          <Link to={`/products/${product.slug}`} className="hover:text-brand-600">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-steel-600">{product.description}</p>

        <ul className="mt-4 space-y-1.5">
          {product.features.slice(0, 3).map((f) =>
          <li key={f} className="flex gap-2 text-[13px] leading-snug text-steel-600">
              <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-700" aria-hidden />
              {f}
            </li>
          )}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-md bg-navy px-4 text-sm font-semibold text-white transition-colors duration-200 ease-smooth hover:bg-navy-700">
            
            View Details
            <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden />
          </Link>
          <button
            type="button"
            onClick={() => openQuote({ product: product.name })}
            className="inline-flex min-h-[44px] items-center rounded-md border border-steel-200 px-4 text-sm font-semibold text-navy transition-colors duration-200 ease-smooth hover:border-accent hover:text-accent-700">
            
            Request Quote
          </button>
        </div>
      </div>
    </motion.article>);

}