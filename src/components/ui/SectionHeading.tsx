import React from 'react';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  onDark?: boolean;
  className?: string;
  as?: 'h2' | 'h3';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  onDark = false,
  className,
  as: Tag = 'h2'
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}>
      
      {eyebrow &&
      <p
        className={cn(
          'mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em]',
          align === 'center' && 'justify-center',
          onDark ? 'text-accent' : 'text-brand-600'
        )}>
        
          <span className="h-px w-6 bg-accent" aria-hidden />
          {eyebrow}
        </p>
      }
      <Tag
        className={cn(
          'font-display text-[clamp(28px,3.2vw,42px)] font-extrabold leading-[1.12] tracking-tight',
          onDark ? 'text-white' : 'text-navy'
        )}>
        
        {title}
      </Tag>
      {description &&
      <p
        className={cn(
          'mt-4 text-base leading-relaxed sm:text-[17px]',
          onDark ? 'text-steel-200' : 'text-steel-600'
        )}>
        
          {description}
        </p>
      }
    </div>);

}