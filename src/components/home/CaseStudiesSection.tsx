import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { CaseStudyCard } from '../resources/CaseStudyCard';
import { caseStudies } from '../../data/resources';
import { fadeUp, staggerParent, viewportOnce } from '../../utils/motion';

export function CaseStudiesSection() {
  return (
    <section className="py-16 lg:py-20" aria-labelledby="cases-heading">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title={<span id="cases-heading">Where the engineering shows up</span>}
            description="Illustrative project structures showing how an application is analysed and solved. Replace with your own references once available." />
          
          <Button to="/resources" variant="outline" className="shrink-0 self-start md:self-auto">
            All resources
            <ArrowRightIcon className="h-4 w-4" aria-hidden />
          </Button>
        </div>

        <motion.ul
          variants={staggerParent(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          
          {caseStudies.map((cs) =>
          <motion.li key={cs.id} variants={fadeUp}>
              <CaseStudyCard caseStudy={cs} />
            </motion.li>
          )}
        </motion.ul>
      </Container>
    </section>);

}