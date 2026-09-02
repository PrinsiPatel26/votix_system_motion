import React from 'react';
import {
  ClipboardCheckIcon,
  HeadphonesIcon,
  PackageIcon,
  PlayCircleIcon,
  WrenchIcon,
  ShieldCheckIcon } from
'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SmartImage } from '../components/ui/SmartImage';
import { PageHero } from '../components/layout/PageHero';
import { SupportForm } from '../components/support/SupportForm';
import { Accordion } from '../components/ui/Accordion';
import { images } from '../data/images';
import { faqs } from '../data/resources';
import { usePageMeta } from '../hooks/usePageMeta';

const services = [
{
  icon: WrenchIcon,
  title: 'Maintenance',
  text: 'Planned inspection of seals, bearings, couplings and impellers, with intervals set to your duty cycle.'
},
{
  icon: PackageIcon,
  title: 'Spare Parts',
  text: 'Seal kits, bearings, shafts and impellers supplied against your unit specification.'
},
{
  icon: ClipboardCheckIcon,
  title: 'Installation',
  text: 'Guidance on mounting, alignment and support structure, on site or remotely.'
},
{
  icon: PlayCircleIcon,
  title: 'Commissioning',
  text: 'First-run supervision, speed setting and verification that the mixing result matches the specification.'
},
{
  icon: ShieldCheckIcon,
  title: 'Repair',
  text: 'Shaft straightening, impeller replacement, seal overhaul and drive refurbishment.'
},
{
  icon: HeadphonesIcon,
  title: 'Technical Assistance',
  text: 'Support when the product, capacity or process changes and the mixing duty changes with it.'
}];


export function Support() {
  usePageMeta(
    'VOTIX Systems | Support & After Sales Service',
    'Maintenance, spare parts, installation, commissioning, repair and technical assistance for VOTIX agitators and mixing systems.'
  );

  return (
    <>
      <PageHero
        eyebrow="Support & After Sales"
        title="Keeping your mixing systems running"
        description="Equipment support does not end at delivery. Raise a request and our service team will come back with scope, parts and availability."
        image={images.support.service}
        crumbs={[{ label: 'Support' }]} />
      

      <section className="py-12 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="What we support"
            description="From routine seal changes to a full drive refurbishment — and the technical judgement to tell you which one you actually need." />
          

          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) =>
            <li
              key={title}
              className="rounded-xl border border-steel-100 bg-white p-6 shadow-card">
              
                <span className="feature-icon flex h-11 w-11 items-center justify-center rounded-lg border border-accent-200 bg-white text-accent-600">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-lg font-extrabold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">{text}</p>
              </li>
            )}
          </ul>
        </Container>
      </section>

      <section className="border-t border-steel-100 bg-mist py-12 lg:py-16" id="support-request">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Support Request"
                title="Raise a service request"
                description="Tell us what equipment is involved and what you need. Attach a photo or nameplate image if you have one — it speeds up parts identification considerably." />
              
              <div className="mt-8 overflow-hidden rounded-xl border border-steel-100 shadow-card">
                <SmartImage
                  src={images.support.manufacturing}
                  alt="Precision machining of a replacement agitator shaft in the VOTIX workshop"
                  ratio="aspect-[4/3]" />
                
              </div>
            </div>
            <div className="lg:col-span-7">
              <SupportForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <SectionHeading eyebrow="FAQs" title="Common service questions" />
          <div className="mt-8 max-w-3xl">
            <Accordion items={faqs} idPrefix="support-faq" />
          </div>
        </Container>
      </section>
    </>);

}