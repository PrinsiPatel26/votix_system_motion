import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { QuoteModal } from '../components/quote/QuoteModal';
import type { QuotePrefill } from '../components/quote/QuoteForm';

interface QuoteContextValue {
  openQuote: (prefill?: QuotePrefill) => void;
  closeQuote: () => void;
}

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: {children: React.ReactNode;}) {
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState<QuotePrefill>({});

  const openQuote = useCallback((next: QuotePrefill = {}) => {
    setPrefill(next);
    setOpen(true);
  }, []);

  const closeQuote = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ openQuote, closeQuote }), [openQuote, closeQuote]);

  return (
    <QuoteContext.Provider value={value}>
      {children}
      <QuoteModal open={open} onClose={closeQuote} prefill={prefill} />
    </QuoteContext.Provider>);

}

export function useQuote(): QuoteContextValue {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error('useQuote must be used within a QuoteProvider');
  return ctx;
}