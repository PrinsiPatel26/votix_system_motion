import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ProductCard } from './ProductCard';
import { getProduct } from '../../data/products';

interface RelatedProductsProps {
  slugs: string[];
}

export function RelatedProducts({ slugs }: RelatedProductsProps) {
  const related = slugs.map(getProduct).filter(Boolean);
  if (related.length === 0) return null;

  return (
    <section className="border-t border-steel-100 bg-mist py-16" aria-labelledby="related-heading">
      <Container>
        <SectionHeading
          eyebrow="Related"
          title={<span id="related-heading">Other configurations to consider</span>} />
        
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((product) =>
          <li key={product!.slug}>
              <ProductCard product={product!} />
            </li>
          )}
        </ul>
      </Container>
    </section>);

}