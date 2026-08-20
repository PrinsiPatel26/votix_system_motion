import React from 'react';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { SmartImage } from '../ui/SmartImage';
import { images } from '../../data/images';

const services = [
'Installation & commissioning',
'Preventive maintenance',
'Spare parts & seal kits',
'Repair & refurbishment',
'Technical assistance',
'Process troubleshooting'];


export function SupportSection() {
  return (
    <section className="border-t border-steel-100 bg-mist py-16 lg:py-20" aria-labelledby="support-heading">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="order-2 overflow-hidden rounded-xl border border-steel-100 shadow-card lg:order-1">
            <SmartImage
              src={images.support.service}
              alt="Service engineer inspecting the orange gearbox drive unit on top of a stainless steel mixing tank"
              ratio="aspect-[3/2]" />
            
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Support & After Sales"
              title={<span id="support-heading">The relationship continues after delivery</span>}
              description="Agitators run for years. Keeping them running well is a matter of the right spares, sensible intervals and engineers who know the installation." />
            
            <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {services.map((s) =>
              <li key={s} className="flex items-start gap-2.5 text-sm text-steel-600">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-700" aria-hidden />
                  {s}
                </li>
              )}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/support" variant="primary" size="lg">
                Support &amp; after sales
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </Button>
              <Button to="/resources" variant="outline" size="lg">
                Technical documents
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>);

}