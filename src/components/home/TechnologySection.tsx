import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CpuIcon, GaugeIcon, RulerIcon, WavesIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { SmartImage } from '../ui/SmartImage';
import { images } from '../../data/images';
import { fadeUp, staggerParent, viewportOnce } from '../../utils/motion';

const pillars = [
{
  icon: WavesIcon,
  title: 'Mixing Technology',
  text: 'Flow pattern, blend time and power input evaluated for the actual product, not a generic average.'
},
{
  icon: CpuIcon,
  title: 'CFD / Flow Simulation',
  text: 'Velocity fields and dead zones examined before manufacture, where the vessel or duty justifies it.'
},
{
  icon: GaugeIcon,
  title: 'Process Optimization',
  text: 'Existing installations reviewed for cycle time, homogeneity and energy consumption.'
},
{
  icon: RulerIcon,
  title: 'Mechanical Design',
  text: 'Shaft dynamics, seal selection and drive sizing verified against the real operating loads.'
}];


export function TechnologySection() {
  return (
    <section
      className="relative overflow-hidden bg-navy-950 py-16 lg:py-24"
      aria-labelledby="technology-heading">
      
      <div className="pointer-events-none absolute inset-0 votix-grid-fine opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl"
        aria-hidden />
      

      <Container className="relative">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <SectionHeading
              onDark
              eyebrow="Engineering & Technology"
              title={<span id="technology-heading">Selection driven by process data</span>}
              description="An agitator is sized from viscosity, density, solids content, vessel geometry and the mixing task itself. VOTIX works through that data before any drawing is issued." />
            

            <motion.ul
              variants={staggerParent(0.05)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              
              {pillars.map(({ icon: Icon, title, text }) =>
              <motion.li key={title} variants={fadeUp} className="flex gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-accent">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-display text-[15px] font-extrabold text-white">
                      {title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-steel-200">{text}</span>
                  </span>
                </motion.li>
              )}
            </motion.ul>

            <Button to="/technology" variant="accent" size="lg" className="mt-9">
              Explore our technology
              <ArrowRightIcon className="h-4 w-4" aria-hidden />
            </Button>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-white/10 shadow-lift">
              <SmartImage
                src={images.engineering.cfd}
                alt="CFD simulation showing velocity streamlines around an impeller inside a mixing vessel"
                ratio="aspect-[3/2]" />
              
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-xl border border-white/10">
                <SmartImage
                  src={images.engineering.design}
                  alt="Engineers reviewing a 3D CAD model of an agitator"
                  ratio="aspect-[4/3]" />
                
              </div>
              <div className="overflow-hidden rounded-xl border border-white/10">
                <SmartImage
                  src={images.engineering.processOptimization}
                  alt="Pilot-scale mixing trial with a transparent test vessel"
                  ratio="aspect-[4/3]" />
                
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>);

}