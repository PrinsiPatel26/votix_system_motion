import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { ImpellerCard } from '../products/ImpellerCard';
import { ScrollShelf } from '../products/ScrollShelf';
import { impellers } from '../../data/impellers';

export function ImpellerRange() {
  return (
    <section className="py-16 lg:py-20" aria-labelledby="impellers-heading">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Mixing Elements"
            title={
            <span id="impellers-heading">
                The impeller decides the <span className="text-brand-600">flow pattern</span>
              </span>
            }
            description="Flow, shear and power input are set by the mixing element — not by the motor. Our range covers axial, radial, high shear and wall-contact geometries." />
          
          <Button to="/products/impellers" variant="outline" className="shrink-0 self-start md:self-auto">
            Impeller range
            <ArrowRightIcon className="h-4 w-4" aria-hidden />
          </Button>
        </div>

        <div className="mt-10">
          <ScrollShelf label="Impeller range">
            {impellers.map((impeller) =>
            <ImpellerCard key={impeller.slug} impeller={impeller} variant="shelf" />
            )}
          </ScrollShelf>
        </div>
      </Container>
    </section>);

}