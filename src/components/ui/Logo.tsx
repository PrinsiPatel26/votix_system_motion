import React from 'react';
import { cn } from '../../utils/cn';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  showTagline?: boolean;
  compact?: boolean;
}

/**
 * VOTIX SYSTEMS identity: a vector "agitation swirl" mark (two interlocking
 * blades forming a vortex) alongside the wordmark. Pure SVG so it stays crisp
 * at every resolution.
 */
export function Logo({ variant = 'dark', className, showTagline = true, compact = false }: LogoProps) {
  return (
    <span className={cn(
      'inline-flex h-14 w-52 items-center justify-start overflow-hidden',
      'rounded-sm',
      compact && 'h-10 w-36',
      className
    )}>
      <img
        src="/votix.download.png"
        alt="VOTIX Systems — Motion, Engineered"
        className="h-auto max-h-full w-full object-contain drop-shadow-[0_1px_1px_rgba(7,26,61,0.3)]"
        loading="eager"
        decoding="async" />
    </span>);

}