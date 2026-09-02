import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { ImpellerCard } from '../products/ImpellerCard';
import { ScrollShelf } from '../products/ScrollShelf';
import { impellers } from '../../data/impellers';

const rangeImageBySlug: Record<string, string> = {
  hydrofoil: '/assets/Hydrofoil%20Impeller.png',
  propeller: '/assets/Propeller%20Impeller.png',
  'pitched-blade-turbine': '/assets/Pitch%20Blade%20Impeller.png',
  'rushton-turbine': '/assets/Rushton%20Turbine%20Impeller.png',
  'dissolver-saw-tooth-disc': '/assets/Dissolver%20disc.png',
  anchor: '/assets/ANCHOR%20IMPELLER.png'
};

export function ImpellerRange() {
  return (
    <section className="py-16 lg:py-20" aria-labelledby="impellers-heading">
      <Container>
        <div className="mb-8 text-center">
          <h2 className="font-display text-[clamp(22px,2.2vw,32px)] font-extrabold uppercase tracking-[0.02em] text-navy">
            <span className="text-navy">Types</span> <span className="text-accent">of Impeller</span>
          </h2>
          <span className="mx-auto mt-3 block h-0.5 w-12 bg-accent" aria-hidden />
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            title={
            <span id="impellers-heading">
                The impeller decides the <span className="text-brand-600">flow pattern</span>
              </span>
            }
            description="Flow, shear and power input are set by the mixing element — not by the motor. Our range covers axial, radial, high shear and wall-contact geometries."
            className="[&>h2]:text-[clamp(24px,2.4vw,34px)]" />
          
          <Button to="/products/impellers" variant="outline" className="shrink-0 self-start md:self-auto">
            Impeller range
            <ArrowRightIcon className="h-4 w-4" aria-hidden />
          </Button>
        </div>

        <div className="mt-10">
          <ScrollShelf label="Impeller range">
            {impellers.map((impeller) =>
            <ImpellerCard
              key={impeller.slug}
              impeller={impeller}
              imageSrc={rangeImageBySlug[impeller.slug]}
              imageObjectFit="contain"
              variant="shelf" />
            )}
          </ScrollShelf>
        </div>
      </Container>
    </section>);

}