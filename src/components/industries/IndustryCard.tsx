import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { SmartImage } from '../ui/SmartImage';
import type { Industry } from '../../types';

interface IndustryCardProps {
  industry: Industry;
  size?: 'sm' | 'md';
}

export function IndustryCard({ industry, size = 'md' }: IndustryCardProps) {
  return (
    <Link
      to={`/industries/${industry.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-steel-100 bg-navy-950 shadow-card transition-[border-color,box-shadow,transform] duration-200 ease-smooth hover:-translate-y-1 hover:border-accent/50 hover:shadow-lift">
      
      <SmartImage
        src={industry.image}
        alt=""
        ratio={size === 'sm' ? 'aspect-[4/3]' : 'aspect-[3/2]'}
        imgClassName="transition-transform duration-300 ease-smooth group-hover:scale-[1.03]" />
      
      <div className="pointer-events-none absolute inset-0 bg-navy-950/55" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <h3 className="font-display text-base font-extrabold leading-tight text-white sm:text-lg">
          {industry.name}
        </h3>
        {size === 'md' &&
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-snug text-steel-200">
            {industry.tagline}
          </p>
        }
        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.1em] text-accent">
          Explore
          <ArrowRightIcon
            className="h-3.5 w-3.5 transition-transform duration-200 ease-smooth group-hover:translate-x-1"
            aria-hidden />
          
        </span>
      </div>
    </Link>);

}