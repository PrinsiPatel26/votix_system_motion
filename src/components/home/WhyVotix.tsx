import React from 'react';
import { motion } from 'framer-motion';
import {
  CogIcon,
  HeadphonesIcon,
  LineChartIcon,
  ShieldCheckIcon,
  TargetIcon,
  ZapIcon } from
'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { fadeUp, staggerParent, viewportOnce } from '../../utils/motion';

const reasons = [
{
  icon: TargetIcon,
  title: 'Application-Focused Design',
  text: 'Each unit is configured from your product data and vessel geometry rather than a fixed catalogue size.'
},
{
  icon: ZapIcon,
  title: 'High Efficiency',
  text: 'Impeller diameter, speed and position are chosen to reach the required mixing result at the lowest sensible power input.'
},
{
  icon: CogIcon,
  title: 'Precision Manufacturing',
  text: 'Shafts, hubs and impellers are machined and assembled to controlled tolerances, then balanced before dispatch.'
},
{
  icon: ShieldCheckIcon,
  title: 'Reliable Construction',
  text: 'Stainless steel wetted parts, sealed drive systems and detailing that stands up to wash-down and continuous duty.'
},
{
  icon: LineChartIcon,
  title: 'Process Optimization',
  text: 'Existing installations reviewed against blend time, homogeneity and energy consumption before any equipment is replaced.'
},
{
  icon: HeadphonesIcon,
  title: 'Technical Support',
  text: 'Direct access to the engineers who specified your unit — for commissioning, spares and process changes.'
}];


export function WhyVotix() {
  return (
    <section className="py-16 lg:py-20" aria-labelledby="why-heading">
      <Container>
        <SectionHeading
          eyebrow="Why Choose VOTIX"
          title={
          <span id="why-heading">
              Engineered for <span className="text-accent">results</span>
            </span>
          }
          description="What consistently matters to process teams: the right configuration, honest sizing, and equipment that keeps running." />
        

        <motion.ul
          variants={staggerParent(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          
          {reasons.map(({ icon: Icon, title, text }) =>
          <motion.li key={title} variants={fadeUp} className="flex gap-4 border-l-2 border-steel-100 pl-4">
              <span className="feature-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-100 bg-white text-brand">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <h3 className="font-display text-[15px] font-extrabold text-navy">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-steel-600">{text}</p>
              </span>
            </motion.li>
          )}
        </motion.ul>
      </Container>
    </section>);

}