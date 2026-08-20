import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SmartImage } from '../components/ui/SmartImage';
import { PageHero } from '../components/layout/PageHero';
import { QuoteCTA } from '../components/home/QuoteCTA';
import { images } from '../data/images';
import { usePageMeta } from '../hooks/usePageMeta';

const values = [
{
  title: 'Our Engineering Approach',
  text: 'We start from your process data. Product properties, vessel geometry and the mixing objective decide the configuration — not a standard model number.'
},
{
  title: 'Manufacturing',
  text: 'Shafts, hubs and impellers are machined and assembled in-house, giving direct control over tolerances, finishes and lead times.'
},
{
  title: 'Quality Focus',
  text: 'Material specification, welding, surface finish and balancing are checked at defined stages, and documented with each unit.'
},
{
  title: 'Innovation',
  text: 'Impeller geometries and drive concepts are refined through pilot-scale trials and simulation rather than assumption.'
},
{
  title: 'Customer-Centric Engineering',
  text: 'You speak to the engineers who specified your equipment — during selection, at commissioning and years later when the process changes.'
}];


export function About() {
  usePageMeta(
    'VOTIX Systems | About Our Engineering Company',
    'VOTIX Systems designs and manufactures industrial agitators and mixing systems, combining process engineering, precision manufacturing and long-term technical support.'
  );

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="An engineering company, first"
        description="VOTIX Systems designs and builds agitation and mixing equipment for process industries — with the analysis, manufacturing control and support that keeps it running."
        image={images.about.factory}
        crumbs={[{ label: 'About Us' }]} />
      

      <section className="py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="Mixing is our only subject"
                description="We work exclusively on agitation and mixing technology: top, side and bottom entry agitators, high shear and coaxial systems, and the impellers that make them work." />
              
              <p className="mt-5 text-[15px] leading-relaxed text-steel-600">
                That focus means the conversation starts at the level that matters — viscosity,
                solids content, shear sensitivity, cleaning regime — instead of a catalogue page.
                From there we size the equipment, manufacture it under our own control, and stay
                available for the life of the installation.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-steel-600">
                Our work spans dairy, food and beverage, pharmaceutical, chemical, cosmetics,
                biotech and biogas processes, from single vessels to complete mixing lines.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-steel-100 shadow-card">
              <SmartImage
                src={images.about.manufacturing}
                alt="Agitator shaft being machined on a CNC lathe in the VOTIX workshop"
                ratio="aspect-[3/2]" />
              
            </div>
          </div>

          <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) =>
            <li
              key={v.title}
              className="rounded-xl border border-steel-100 bg-white p-6 shadow-card">
              
                <span
                className="font-display text-xs font-black tracking-[0.14em] text-accent"
                aria-hidden>
                
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="mt-2 font-display text-lg font-extrabold text-navy">{v.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">{v.text}</p>
              </li>
            )}
          </ul>
        </Container>
      </section>

      <section className="border-t border-steel-100 bg-mist py-14 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="overflow-hidden rounded-xl border border-steel-100 shadow-card">
              <SmartImage
                src={images.about.engineering}
                alt="VOTIX engineers reviewing a 3D CAD model of an agitator assembly"
                ratio="aspect-[3/2]" />
              
            </div>
            <div>
              <SectionHeading
                eyebrow="Working With Us"
                title="One team from enquiry to commissioning"
                description="The engineer who reviews your process data stays with the project through design, manufacture and installation — so nothing is lost in a handover." />
              
              <p className="mt-5 text-sm leading-relaxed text-steel-500">
                Note: company milestones, certifications and reference statistics will be published
                here once verified. We do not list figures we cannot support.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <QuoteCTA />
    </>);

}