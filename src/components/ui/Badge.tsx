import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  tone?: 'navy' | 'accent' | 'steel' | 'brand';
  className?: string;
}

const tones = {
  navy: 'bg-navy-50 text-navy-900 border-navy-100',
  accent: 'bg-accent-50 text-accent-700 border-accent-100',
  steel: 'bg-steel-100 text-steel-700 border-steel-200',
  brand: 'bg-brand-50 text-brand-700 border-brand-100'
};

export function Badge({ children, tone = 'steel', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded border px-2.5 py-1 text-xs font-semibold',
        tones[tone],
        className
      )}>
      
      {children}
    </span>);

}