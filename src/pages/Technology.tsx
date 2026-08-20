import React from 'react';
import {
  BeakerIcon,
  CircuitBoardIcon,
  CogIcon,
  GaugeIcon,
  LayersIcon,
  PencilRulerIcon,
  WavesIcon } from
'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SmartImage } from '../components/ui/SmartImage';
import { PageHero } from '../components/layout/PageHero';
import { QuoteCTA } from '../components/home/QuoteCTA';
import { images } from '../data/images';
import { usePageMeta } from '../hooks/usePageMeta';

interface TechSection {
  id: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  points: string[];
  image?: string;
  imageAlt?: string;
}

const sections: TechSection[] = [
{
  id: 'engineering',
  icon: PencilRulerIcon,
  title: 'Engineering Expertise',
  text: 'Specification begins with the process, not the catalogue. Product properties, vessel geometry, duty cycle and installation constraints are reviewed before any configuration is proposed.',
  points: [
  'Process data review with your production team',
  'Configuration options compared before drawings are issued',
  'Retrofit engineering into existing vessels and flanges']

},
{
  id: 'mixing-technology',
  icon: WavesIcon,
  title: 'Mixing Technology',
  text: 'Flow pattern, blend time, shear distribution and power input are the four variables that decide whether a mixing task succeeds. Impeller family, diameter, speed and position set all four.',
  points: [
  'Axial, radial, high shear and wall-contact geometries',
  'Single and multi-stage impeller arrangements',
  'Baffling and bottom clearance considered as part of the design']

},
{
  id: 'process-optimization',
  icon: GaugeIcon,
  title: 'Process Optimization',
  text: 'Existing installations are reviewed against what they actually need to achieve — often the result is a smaller drive, a shorter cycle or a more uniform product without replacing the vessel.',
  points: [
  'Cycle time and homogeneity assessment',
  'Energy consumption review at the operating point',
  'Impeller upgrades on existing shafts where feasible'],

  image: images.engineering.processOptimization,
  imageAlt: 'Pilot-scale mixing trial with a transparent vessel and instrumentation'
},
{
  id: 'cfd',
  icon: CircuitBoardIcon,
  title: 'CFD / Flow Simulation',
  text: 'Where vessel size or geometry makes the outcome hard to predict, flow simulation shows the velocity field, circulation loops and low-movement zones before anything is manufactured.',
  points: [
  'Velocity and shear field visualisation',
  'Comparison of alternative impeller configurations',
  'Identification of stagnant zones and short-circuiting'],

  image: images.engineering.cfd,
  imageAlt: 'CFD simulation of velocity streamlines around an impeller in a mixing vessel'
},
{
  id: 'custom-design',
  icon: CogIcon,
  title: 'Custom Agitator Design',
  text: 'Unusual geometry, restricted headroom, extreme viscosity or an awkward retrofit — bespoke designs are engineered around the real constraint rather than forced into a standard frame.',
  points: [
  'Non-standard shaft lengths and impeller combinations',
  'Installation through manholes where vessels cannot be opened',
  'Drive arrangements for low headroom installations']

},
{
  id: 'materials',
  icon: LayersIcon,
  title: 'Material Selection',
  text: 'Wetted materials and surface finishes are chosen against the media, temperature and cleaning regime. SS 304, SS 316 and SS 316L are standard; other alloys and treatments on request.',
  points: [
  'Corrosion and abrasion considerations per media',
  'Surface finish specified for hygienic duties',
  'Documented material specification with each unit']

},
{
  id: 'mechanical-design',
  icon: BeakerIcon,
  title: 'Mechanical Design & Validation',
  text: 'Shaft dynamics, seal arrangement and drive sizing are verified against the operating loads, then confirmed by balancing and run-in testing before dispatch.',
  points: [
  'Shaft sizing and critical speed verification',
  'Seal selection for pressure, vacuum and hygiene class',
  'Balancing, run-in and functional checks before delivery']

}];


export function Technology() {
  usePageMeta(
    'VOTIX Systems | Mixing Technology & Engineering',
    'Mixing technology, engineering expertise, process optimization, CFD flow simulation, custom design, material selection and mechanical validation at VOTIX Systems.'
  );

  return (
    <>
      <PageHero
        eyebrow="Engineering & Technology"
        title="The engineering behind the equipment"
        description="What separates a working agitator from an expensive one is the analysis done before it is built. This is how VOTIX approaches that work."
        crumbs={[{ label: 'Technology' }]} />
      

      <section className="py-12 lg:py-16">
        <Container>
          <div className="space-y-14 lg:space-y-20">
            {sections.map(({ id, icon: Icon, title, text, points, image, imageAlt }, index) =>
            <article
              key={id}
              id={id}
              className="scroll-mt-28 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              
                <div className={image ? 'lg:col-span-6' : 'lg:col-span-8'}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-50 text-brand-600">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h2 className="mt-4 font-display text-2xl font-extrabold text-navy sm:text-3xl">
                    {title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-steel-600 sm:text-base">
                    {text}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {points.map((p) =>
                  <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-steel-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                        {p}
                      </li>
                  )}
                  </ul>
                </div>

                {image ?
              <div className="lg:col-span-6">
                    <div className="overflow-hidden rounded-xl border border-steel-100 shadow-card">
                      <SmartImage src={image} alt={imageAlt ?? ''} ratio="aspect-[3/2]" />
                    </div>
                  </div> :

              <div className="hidden lg:col-span-4 lg:block">
                    <div className="relative h-full min-h-[180px] overflow-hidden rounded-xl border border-steel-100 bg-mist">
                      <div className="absolute inset-0 votix-grid opacity-70" aria-hidden />
                      <span
                    className="absolute right-6 top-6 font-display text-6xl font-black text-navy/5"
                    aria-hidden>
                    
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div
                    className="absolute inset-x-6 bottom-6 h-px bg-accent"
                    aria-hidden />
                  
                    </div>
                  </div>
              }
              </article>
            )}
          </div>
        </Container>
      </section>

      <section className="border-t border-steel-100 bg-mist py-14">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Testing & Validation"
            title="Nothing leaves the workshop untested"
            description="Assemblies are balanced and run in, and functional checks are documented before dispatch. Installation and commissioning support continues on site." />
          
        </Container>
      </section>

      <QuoteCTA />
    </>);

}