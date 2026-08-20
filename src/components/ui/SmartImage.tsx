import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Tailwind aspect ratio class, e.g. "aspect-[4/3]" */
  ratio?: string;
  priority?: boolean;
  objectFit?: 'cover' | 'contain';
}

/**
 * Image wrapper with a clean industrial fallback: if the asset fails to load,
 * a local SVG placeholder is shown instead of a broken image icon, keeping the
 * declared aspect ratio intact.
 */
export function SmartImage({
  src,
  alt,
  className,
  imgClassName,
  ratio = 'aspect-[4/3]',
  priority = false,
  objectFit = 'cover'
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current?.complete) setLoaded(true);
  }, [src]);

  return (
    <div className={cn('relative overflow-hidden bg-mist', ratio, className)}>
      {!failed ?
      <>
          <img
          ref={imageRef}
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onError={() => setFailed(true)}
          onLoad={() => setLoaded(true)}
          style={{ opacity: loaded ? 1 : 0 }}
          className={cn(
            'h-full w-full transition-opacity duration-300 ease-smooth',
            objectFit === 'cover' ? 'object-cover' : 'object-contain',
            loaded ? 'opacity-100' : 'opacity-0',
            imgClassName
          )} />
        
          {!loaded && <div className="absolute inset-0 animate-pulse bg-steel-100" aria-hidden />}
        </> :

      <div
        role="img"
        aria-label={alt}
        className="flex h-full w-full items-center justify-center bg-mist">
        
          <svg
          viewBox="0 0 120 120"
          className="h-1/2 w-1/2 max-h-24 max-w-24 text-steel-300"
          aria-hidden="true">
          
            <circle cx="60" cy="60" r="46" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="60" cy="60" r="8" fill="currentColor" />
            <path
            d="M60 14v30M60 76v30M14 60h30M76 60h30"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round" />
          
            <path
            d="M60 52c14 0 22 8 22 8s-8 8-22 8-22-8-22-8 8-8 22-8Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2" />
          
          </svg>
        </div>
      }
    </div>);

}