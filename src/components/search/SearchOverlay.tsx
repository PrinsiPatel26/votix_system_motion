import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { SearchIcon, XIcon } from 'lucide-react';
import { searchSite } from '../../utils/search';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { EASE_SMOOTH } from '../../utils/motion';

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

const typeTone: Record<string, string> = {
  Product: 'bg-navy-50 text-navy-900',
  Impeller: 'bg-brand-50 text-brand-700',
  Industry: 'bg-accent-50 text-accent-700',
  Application: 'bg-steel-100 text-steel-700',
  Resource: 'bg-mist text-steel-700'
};

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const reduce = useReducedMotion();
  useBodyScrollLock(open);

  const results = useMemo(() => searchSite(query), [query]);

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const go = (href: string) => {
    onClose();
    navigate(href);
  };

  return createPortal(
    <AnimatePresence>
      {open &&
      <div className="fixed inset-0 z-[110] flex justify-center px-4 pt-[10vh]">
          <motion.div
          className="absolute inset-0 bg-navy-950/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: EASE_SMOOTH }}
          onClick={onClose}
          aria-hidden />
        
          <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Search VOTIX Systems"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: EASE_SMOOTH }}
          className="relative flex max-h-[70vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl bg-white shadow-lift">
          
            <div className="flex items-center gap-3 border-b border-steel-100 px-4 sm:px-5">
              <SearchIcon className="h-5 w-5 shrink-0 text-steel-500" aria-hidden />
              <input
              autoFocus
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, industries, applications…"
              aria-label="Search query"
              className="min-h-[56px] w-full bg-transparent text-[15px] text-navy placeholder:text-steel-400 focus:outline-none" />
            
              <button
              type="button"
              onClick={onClose}
              aria-label="Close search"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-steel-600 transition-colors duration-150 ease-smooth hover:bg-mist hover:text-navy">
              
                <XIcon className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <div className="overflow-y-auto">
              {query.trim().length < 2 ?
            <p className="px-5 py-8 text-center text-sm text-steel-500">
                  Type at least two characters to search the VOTIX catalogue.
                </p> :
            results.length === 0 ?
            <p className="px-5 py-8 text-center text-sm text-steel-500">
                  No results for “{query}”. Try “agitator”, “dairy” or “emulsification”.
                </p> :

            <ul className="divide-y divide-steel-100">
                  {results.map((r) =>
              <li key={`${r.type}-${r.title}`}>
                      <button
                  type="button"
                  onClick={() => go(r.href)}
                  className="flex w-full items-start gap-3 px-4 py-3.5 text-left transition-colors duration-150 ease-smooth hover:bg-mist sm:px-5">
                  
                        <span
                    className={`mt-0.5 shrink-0 rounded px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide ${
                    typeTone[r.type]}`
                    }>
                    
                          {r.type}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[15px] font-semibold text-navy">{r.title}</span>
                          <span className="mt-0.5 block line-clamp-2 text-sm text-steel-600">
                            {r.description}
                          </span>
                        </span>
                      </button>
                    </li>
              )}
                </ul>
            }
            </div>
          </motion.div>
        </div>
      }
    </AnimatePresence>,
    document.body
  );
}