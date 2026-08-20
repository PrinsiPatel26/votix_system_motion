import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { PageHero } from '../components/layout/PageHero';
import { ApplicationCard } from '../components/applications/ApplicationCard';
import { QuoteCTA } from '../components/home/QuoteCTA';
import { applications } from '../data/applications';
import { usePageMeta } from '../hooks/usePageMeta';
import { fadeUp, staggerParent, viewportOnce } from '../utils/motion';

export function Applications() {
  usePageMeta(
    'VOTIX Systems | Mixing Applications',
    'Blending, homogenization, suspension, dispersion, emulsification, dissolution, heat transfer, gas dispersion and viscous mixing — matched to the right agitator.'
  );

  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="Every mixing task has its own flow and shear balance"
        description="Specifying an agitator starts with the job it has to do. These are the duties VOTIX equipment is built around."
        crumbs={[{ label: 'Applications' }]} />
      

      <section className="py-12 lg:py-16">
        <Container>
          <motion.ul
            variants={staggerParent(0.04)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            
            {applications.map((application) =>
            <motion.li key={application.slug} variants={fadeUp}>
                <ApplicationCard application={application} />
              </motion.li>
            )}
          </motion.ul>
        </Container>
      </section>

      <QuoteCTA />
    </>);

}