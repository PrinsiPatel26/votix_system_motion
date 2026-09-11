import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { SmartImage } from '../ui/SmartImage';
import { EASE_SMOOTH } from '../../utils/motion';
import { cn } from '../../utils/cn';

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <div>
      <div className="relative overflow-hidden rounded-xl border border-steel-100 bg-mist">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.01 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE_SMOOTH }}>
            
            <SmartImage
              src={images[active]}
              alt={`${name} — view ${active + 1} of ${images.length}`}
              ratio="aspect-[4/3]"
              priority={active === 0}
              imgClassName="object-contain"
              objectFit="contain" />
            
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 &&
      <div className="scrollbar-slim mt-3 flex snap-x gap-3 overflow-x-auto pb-1" role="group" aria-label={`${name} gallery thumbnails`}>
          {images.map((src, i) =>
        <button
          key={src + i}
          type="button"
          onClick={() => setActive(i)}
          aria-label={`Show ${name} view ${i + 1}`}
          aria-pressed={i === active}
          style={{ flex: '0 0 calc((100% - 0.75rem) / 2)' }}
          className={cn(
            'snap-start overflow-hidden rounded-lg border-2 transition-colors duration-200 ease-smooth',
            i === active ? 'border-[#F47A00]' : 'border-steel-100 hover:border-brand-200'
          )}>
          
              <SmartImage src={src} alt="" ratio="aspect-square" imgClassName="object-contain" objectFit="contain" />
            </button>
        )}
        </div>
      }
    </div>);

}