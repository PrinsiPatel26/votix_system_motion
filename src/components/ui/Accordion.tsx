import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { EASE_SMOOTH } from '../../utils/motion';

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  idPrefix?: string;
}

export function Accordion({ items, idPrefix = 'acc' }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-steel-100 rounded-xl border border-steel-100 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`${idPrefix}-panel-${i}`}
                id={`${idPrefix}-trigger-${i}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-150 ease-smooth hover:bg-mist">
                
                <span className="font-display text-[15px] font-bold text-navy sm:text-base">
                  {item.question}
                </span>
                <PlusIcon
                  className={`h-5 w-5 shrink-0 text-accent transition-transform duration-200 ease-smooth ${
                  isOpen ? 'rotate-45' : ''}`
                  }
                  aria-hidden />
                
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen &&
              <motion.div
                id={`${idPrefix}-panel-${i}`}
                role="region"
                aria-labelledby={`${idPrefix}-trigger-${i}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.24, ease: EASE_SMOOTH }}
                className="overflow-hidden">
                
                  <p className="px-5 pb-5 text-sm leading-relaxed text-steel-600">{item.answer}</p>
                </motion.div>
              }
            </AnimatePresence>
          </div>);

      })}
    </div>);

}