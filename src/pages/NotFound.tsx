import React from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { usePageMeta } from '../hooks/usePageMeta';

export function NotFound() {
  usePageMeta(
    'VOTIX Systems | Page not found',
    'The page you are looking for could not be found on the VOTIX Systems website.'
  );

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container className="text-center">
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
          Error 404
        </p>
        <h1 className="mt-4 font-display text-4xl font-black leading-tight text-navy sm:text-6xl">
          This page is <span className="text-accent">off-spec</span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-[17px] leading-relaxed text-steel-600">
          The page you were looking for does not exist or has been moved. Let us point you back to
          the equipment.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/" variant="primary" size="lg">
            Back to home
          </Button>
          <Button to="/products" variant="outline" size="lg">
            Browse products
          </Button>
        </div>
      </Container>
    </section>);

}