import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { PageHero } from '../components/layout/PageHero';
import { IndustryCard } from '../components/industries/IndustryCard';
import { QuoteCTA } from '../components/home/QuoteCTA';
import { industries } from '../data/industries';
import { usePageMeta } from '../hooks/usePageMeta';
import { fadeUp, staggerParent, viewportOnce } from '../utils/motion';

export function Industries() {
  usePageMeta(
    'VOTIX Systems | Industries We Serve',
    'Agitation and mixing solutions for dairy, food and beverage, pharmaceutical, chemical, cosmetics and biotech processes.'
  );

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for the demands of your sector"
        description="Hygiene class, materials, shear sensitivity and duty cycle differ from one industry to the next. Select yours to see how we configure equipment for it."
        crumbs={[{ label: 'Industries' }]} />
      

      <section className="py-12 lg:py-16">
        <Container>
          <motion.ul
            variants={staggerParent(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            
            {industries.map((industry) =>
            <motion.li key={industry.slug} variants={fadeUp}>
                <IndustryCard industry={industry} />
              </motion.li>
            )}
          </motion.ul>
        </Container>
      </section>

      <QuoteCTA />
    </>);

}