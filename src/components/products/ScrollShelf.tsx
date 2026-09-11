import React, { useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface ScrollShelfProps {
  children: React.ReactNode;
  label: string;
}

/**
 * Horizontally scrollable 3D shelf. Cards sit on a perspective plane so they
 * tilt and lift toward the viewer on hover, and the row can be scrolled with
 * the arrow controls, a trackpad, or touch.
 */
export function ScrollShelf({ children, label }: ScrollShelfProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = () => {
    const el = ref.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 640), behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div
        ref={ref}
        onScroll={update}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="perspective-shelf scrollbar-slim -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 pt-2 sm:-mx-6 sm:px-6 lg:-mx-2 lg:px-2">
        
        {children}
      </div>

      <div className="mt-1 flex w-full items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          disabled={atStart}
          aria-label={`Scroll ${label} left`}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-steel-200 bg-white text-navy transition-[background-color,border-color,opacity] duration-200 ease-smooth hover:border-brand hover:text-brand disabled:opacity-40">
          
          <ChevronLeftIcon className="h-5 w-5" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          disabled={atEnd}
          aria-label={`Scroll ${label} right`}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-steel-200 bg-white text-navy transition-[background-color,border-color,opacity] duration-200 ease-smooth hover:border-brand hover:text-brand disabled:opacity-40">
          
          <ChevronRightIcon className="h-5 w-5" aria-hidden />
        </button>
      </div>
    </div>);

}