import React from 'react';
import { ArrowRightIcon, PhoneIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { useQuote } from '../../contexts/QuoteContext';
import { company } from '../../data/navigation';

interface QuoteCTAProps {
  title?: string;
  description?: string;
  prefill?: {product?: string;industry?: string;application?: string;};
}

export function QuoteCTA({
  title = 'Tell us about your mixing duty',
  description = 'Send your vessel data and product properties. Our application engineers will come back with a configuration proposal and a quote.',
  prefill
}: QuoteCTAProps) {
  const { openQuote } = useQuote();

  return (
    <section className="relative overflow-hidden bg-navy-900 py-14 lg:py-16" aria-labelledby="cta-heading">
      <div className="pointer-events-none absolute inset-0 votix-grid-fine opacity-40" aria-hidden />
      <span className="absolute inset-x-0 top-0 h-1 bg-accent" aria-hidden />

      <Container className="relative">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <h2
              id="cta-heading"
              className="font-display text-[26px] font-extrabold leading-tight text-white sm:text-4xl">
              
              {title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-steel-200">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <Button variant="accent" size="lg" onClick={() => openQuote(prefill)}>
              Request a Quote
              <ArrowRightIcon className="h-4 w-4" aria-hidden />
            </Button>
            <Button href={company.phoneHref} variant="onDark" size="lg">
              <PhoneIcon className="h-4 w-4" aria-hidden />
              {company.phone}
            </Button>
          </div>
        </div>
      </Container>
    </section>);

}