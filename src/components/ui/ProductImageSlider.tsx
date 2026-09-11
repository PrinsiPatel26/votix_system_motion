import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { EASE_SMOOTH } from '../../utils/motion';

interface ProductImageSliderProps {
  images: string[];
  alt: string;
}

export function ProductImageSlider({ images, alt }: ProductImageSliderProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const reduce = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-[20px] bg-mist">
      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={`${images[activeImageIndex]}-${activeImageIndex}`}
            src={images[activeImageIndex]}
            alt={`${alt} visual ${activeImageIndex + 1}`}
            className="h-full w-full object-contain p-2"
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.25, ease: EASE_SMOOTH }} />
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div
          className="scrollbar-slim flex snap-x gap-3 overflow-x-auto px-3 pb-3 pt-3"
          role="group"
          aria-label={`${alt} gallery thumbnails`}>
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveImageIndex(index)}
              aria-label={`Show ${alt} image ${index + 1}`}
              aria-pressed={index === activeImageIndex}
              style={{ flex: '0 0 calc((100% - 0.75rem) / 2)' }}
              className={`snap-start overflow-hidden rounded-lg border-2 bg-white transition-all duration-200 ease-smooth hover:opacity-90 ${
                index === activeImageIndex
                  ? 'border-[#F47A00] scale-[0.98]'
                  : 'border-steel-100'
              }`}>
              <img
                src={image}
                alt=""
                className="aspect-square h-full w-full object-contain p-1" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
