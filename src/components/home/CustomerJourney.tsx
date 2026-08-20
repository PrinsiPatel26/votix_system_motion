import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { EASE_SMOOTH, viewportOnce } from '../../utils/motion';

const steps = [
{
  number: '01',
  title: 'Process Understanding',
  text: 'Product data, vessel drawing and the mixing objective reviewed together with your team.'
},
{
  number: '02',
  title: 'Engineering & Design',
  text: 'Impeller selection, shaft sizing, seal choice and drive configuration worked out from that data.'
},
{
  number: '03',
  title: 'Selection & Optimization',
  text: 'Options compared on blend time, shear and power input; simulation used where it adds certainty.'
},
{
  number: '04',
  title: 'Manufacturing',
  text: 'Machining, welding and assembly of the shaft, impellers and drive package.'
},
{
  number: '05',
  title: 'Testing',
  text: 'Balancing, run-in and functional checks before the unit leaves the workshop.'
},
{
  number: '06',
  title: 'Installation & Support',
  text: 'Installation guidance, commissioning support and ongoing service through the equipment life.'
}];


export function CustomerJourney() {
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-steel-100 bg-mist py-16 lg:py-20" aria-labelledby="journey-heading">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title={<span id="journey-heading">From process data to a running installation</span>}
          description="A predictable route from the first technical conversation to commissioning on site." />
        

        <ol className="relative mt-12 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-4">
          {/* Animated connecting line (desktop) */}
          <motion.span
            aria-hidden
            initial={reduce ? { opacity: 0 } : { scaleX: 0 }}
            whileInView={reduce ? { opacity: 1 } : { scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: EASE_SMOOTH }}
            style={{ originX: 0 }}
            className="pointer-events-none absolute left-0 right-0 top-[22px] hidden h-px bg-gradient-to-r from-accent via-brand-300 to-transparent xl:block" />
          

          {steps.map((step, i) =>
          <motion.li
            key={step.number}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.3, delay: Math.min(i * 0.06, 0.3), ease: EASE_SMOOTH }}
            className="relative">
            
              <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-accent bg-white font-display text-sm font-extrabold text-navy">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-[15px] font-extrabold leading-snug text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-600">{step.text}</p>
            </motion.li>
          )}
        </ol>
      </Container>
    </section>);

}