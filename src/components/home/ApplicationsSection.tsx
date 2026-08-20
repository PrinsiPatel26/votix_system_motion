import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { ApplicationCard } from '../applications/ApplicationCard';
import { applications } from '../../data/applications';
import { fadeUp, staggerParent, viewportOnce } from '../../utils/motion';

export function ApplicationsSection() {
  return (
    <section className="border-y border-steel-100 bg-mist py-16 lg:py-20" aria-labelledby="applications-heading">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Applications"
            title={<span id="applications-heading">Start from the mixing task</span>}
            description="Blending, suspension, dispersion and emulsification each need a different flow and shear balance. Pick the task and we will match the technology." />
          
          <Button to="/applications" variant="outline" className="shrink-0 self-start md:self-auto">
            All applications
            <ArrowRightIcon className="h-4 w-4" aria-hidden />
          </Button>
        </div>

        <motion.ul
          variants={staggerParent(0.04)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          
          {applications.slice(0, 8).map((application) =>
          <motion.li key={application.slug} variants={fadeUp}>
              <ApplicationCard application={application} />
            </motion.li>
          )}
        </motion.ul>
      </Container>
    </section>);

}