import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductImageSliderProps {
  images: string[];
  alt: string;
}

export function ProductImageSlider({ images, alt }: ProductImageSliderProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % images.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [images]);

  const goToPrevious = () => {
    setActiveSlide((current) => (current - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setActiveSlide((current) => (current + 1) % images.length);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || images.length <= 1) return;

    const touchEndX = event.changedTouches[0].clientX;
    const delta = touchStartX.current - touchEndX;

    if (Math.abs(delta) > 40) {
      if (delta > 0) goToNext();
      else goToPrevious();
    }

    touchStartX.current = null;
  };

  return (
    <div className="relative overflow-hidden rounded-[20px] bg-mist">
      <div
        className="aspect-[4/3] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}>
        <div
          className="flex h-full w-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {images.map((image, index) => (
            <img
              key={`${image}-${index}`}
              src={image}
              alt={`${alt} visual ${index + 1}`}
              className="h-full w-full shrink-0 object-contain"
            />
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/80 text-navy shadow-sm transition-opacity hover:opacity-100 focus:outline-none">
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </button>

          <button
            type="button"
            aria-label="Next image"
            onClick={goToNext}
            className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/80 text-navy shadow-sm transition-opacity hover:opacity-100 focus:outline-none">
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>

          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
            {images.map((image, index) => (
              <button
                key={`${image}-dot-${index}`}
                type="button"
                aria-label={`View slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-200 ${
                  activeSlide === index ? 'bg-navy' : 'bg-white/80 ring-1 ring-navy/20'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
