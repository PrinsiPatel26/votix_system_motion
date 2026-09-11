import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { SmartImage } from '../ui/SmartImage';
import { Badge } from '../ui/Badge';
import { useQuote } from '../../contexts/QuoteContext';
import { EASE_SMOOTH } from '../../utils/motion';
import type { Impeller } from '../../types';

interface ImpellerCardProps {
  impeller: Impeller;
  imageSrc?: string;
  imageObjectFit?: 'cover' | 'contain';
  variant?: 'grid' | 'shelf';
  expanded?: boolean;
  onToggle?: () => void;
}

export function ImpellerCard({
  impeller,
  imageSrc,
  imageObjectFit = 'contain',
  variant = 'grid',
  expanded = false,
  onToggle
}: ImpellerCardProps) {
  const reduce = useReducedMotion();
  const { openQuote } = useQuote();

  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -6, rotateY: variant === 'shelf' ? 5 : 0, z: 30 }}
      transition={{ duration: 0.25, ease: EASE_SMOOTH }}
      style={{ transformStyle: 'preserve-3d' }}
      className={`group flex h-full flex-col overflow-hidden rounded-xl border border-steel-100 bg-white shadow-card transition-[border-color,box-shadow] duration-200 ease-smooth hover:border-brand-200 hover:shadow-lift ${
      variant === 'shelf' ? 'w-[230px] shrink-0 snap-start sm:w-[260px]' : ''}`
      }>
      
      <Link to={`/products/impellers/${impeller.slug}`} className="block overflow-hidden bg-mist" aria-label={`Open ${impeller.name} impeller details`}>
        <div className="relative overflow-hidden bg-mist">
          <SmartImage
            src={imageSrc ?? impeller.image}
            alt={`${impeller.name} impeller`}
            ratio="aspect-[4/3]"
            objectFit={imageObjectFit}
            imgClassName="transition-transform duration-300 ease-smooth group-hover:scale-[1.04]" />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Badge tone="brand" className="self-start">
          {impeller.familyLabel}
        </Badge>
        <h3 className="mt-2.5 font-display text-base font-extrabold leading-snug text-navy">
          <Link to={`/products/impellers/${impeller.slug}`} className="hover:text-brand-600">
            {impeller.name}
          </Link>
        </h3>
        <p className="mt-1.5 text-[13px] leading-snug text-steel-600">{impeller.purpose}</p>

        {expanded &&
        <div className="mt-3 space-y-2 border-t border-steel-100 pt-3">
            <p className="text-[13px] leading-relaxed text-steel-600">{impeller.description}</p>
            <dl className="space-y-1 text-[13px]">
              <div className="flex gap-2">
                <dt className="font-semibold text-navy">Suitable for:</dt>
                <dd className="text-steel-600">{impeller.suitableFor.join(', ')}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-navy">Viscosity:</dt>
                <dd className="text-steel-600">{impeller.viscosity}</dd>
              </div>
            </dl>
          </div>
        }

        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {onToggle &&
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={expanded}
            className="inline-flex min-h-[40px] items-center rounded-md border border-steel-200 px-3 text-[13px] font-semibold text-navy transition-colors duration-200 ease-smooth hover:border-brand hover:text-brand">
            
              {expanded ? 'Hide details' : 'View Details'}
            </button>
          }
          <button
            type="button"
            onClick={() => openQuote({ product: 'Impellers / Mixing elements' })}
            className="inline-flex min-h-[40px] items-center rounded-md px-3 text-[13px] font-semibold text-accent-700 transition-colors duration-200 ease-smooth hover:bg-accent-50">
            
            Enquiry
          </button>
        </div>
      </div>
    </motion.article>);

}