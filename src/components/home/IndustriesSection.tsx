import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { IndustryCard } from '../industries/IndustryCard';
import { industries } from '../../data/industries';
import { fadeUp, staggerParent, viewportOnce } from '../../utils/motion';

export function IndustriesSection() {
  return (
    <section className="border-t border-steel-100 bg-mist py-16 lg:py-20" aria-labelledby="industries-heading">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Industries We Serve"
            title={
            <span id="industries-heading">
                Mixing duties differ. <span className="text-brand-600">So do our agitators.</span>
              </span>
            }
            description="Every sector places its own demands on hygiene, materials, shear and duty cycle. Select your industry to see the configurations we build for it." />
          
          <Button to="/industries" variant="outline" className="shrink-0 self-start md:self-auto">
            All industries
            <ArrowRightIcon className="h-4 w-4" aria-hidden />
          </Button>
        </div>

        <motion.ul
          variants={staggerParent(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          
          {industries.map((industry, i) =>
          <motion.li
            key={industry.slug}
            variants={fadeUp}
            className={i === 0 ? 'col-span-2 lg:col-span-2 lg:row-span-1' : ''}>
            
              <IndustryCard industry={industry} size={i === 0 ? 'md' : 'sm'} />
            </motion.li>
          )}
        </motion.ul>
      </Container>
    </section>);

}