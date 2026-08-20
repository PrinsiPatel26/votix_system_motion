import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { ProductCard } from '../products/ProductCard';
import { ScrollShelf } from '../products/ScrollShelf';
import { featuredProducts } from '../../data/products';

export function FeaturedAgitators() {
  return (
    <section
      className="relative overflow-hidden border-y border-steel-100 bg-mist py-16 lg:py-20"
      aria-labelledby="featured-heading">
      
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Featured Agitators"
            title={<span id="featured-heading">Configurations we build most often</span>}
            description="Scroll through the range. Hover a unit to bring it forward, or open it for technical detail and a quote." />
          
          <Button to="/products" variant="outline" className="shrink-0 self-start md:self-auto">
            Full catalogue
            <ArrowRightIcon className="h-4 w-4" aria-hidden />
          </Button>
        </div>

        <div className="mt-10">
          <ScrollShelf label="Featured agitators">
            {featuredProducts.map((product) =>
            <ProductCard key={product.slug} product={product} variant="shelf" />
            )}
          </ScrollShelf>
        </div>
      </Container>
    </section>);

}