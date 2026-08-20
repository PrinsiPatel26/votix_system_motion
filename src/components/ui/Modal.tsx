import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { XIcon } from 'lucide-react';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { EASE_SMOOTH } from '../../utils/motion';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  size?: 'md' | 'lg';
}

export function Modal({ open, onClose, title, description, children, size = 'lg' }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const id = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>('input, select, textarea, button')?.focus();
    }, 60);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.clearTimeout(id);
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open &&
      <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center">
          <motion.div
          className="absolute inset-0 bg-navy-950/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: EASE_SMOOTH }}
          onClick={onClose}
          aria-hidden />
        
          <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.24, ease: EASE_SMOOTH }}
          className={`relative flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-xl bg-white shadow-lift sm:rounded-xl ${
          size === 'lg' ? 'sm:max-w-3xl' : 'sm:max-w-lg'}`
          }>
          
            <div className="flex items-start justify-between gap-4 border-b border-steel-100 px-5 py-4 sm:px-7 sm:py-5">
              <div className="min-w-0">
                <h2 className="font-display text-lg font-extrabold text-navy sm:text-xl">{title}</h2>
                {description &&
              <p className="mt-1 text-sm text-steel-600">{description}</p>
              }
              </div>
              <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="-mr-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-steel-600 transition-colors duration-150 ease-smooth hover:bg-mist hover:text-navy">
              
                <XIcon className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <div className="overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">{children}</div>
          </motion.div>
        </div>
      }
    </AnimatePresence>,
    document.body
  );
}