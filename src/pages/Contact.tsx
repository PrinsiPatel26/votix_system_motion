import React from 'react';
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { PageHero } from '../components/layout/PageHero';
import { ContactForm } from '../components/contact/ContactForm';
import { company } from '../data/navigation';
import { useQuote } from '../contexts/QuoteContext';
import { usePageMeta } from '../hooks/usePageMeta';

export function Contact() {
  usePageMeta(
    'VOTIX Systems | Contact Our Mixing Engineers',
    'Contact VOTIX Systems for agitator selection, quotations, technical support and after-sales service.'
  );

  const { openQuote } = useQuote();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a mixing engineer"
        description="Send your process data or simply describe the problem. We will tell you what we would specify and why."
        crumbs={[{ label: 'Contact' }]} />
      

      <section className="py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Get in touch" title="Contact information" />

              <ul className="mt-8 space-y-5">
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-brand-600">
                    <PhoneIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.1em] text-steel-500">
                      Phone
                    </span>
                    <a
                      href={company.phoneHref}
                      className="mt-1 block text-[15px] font-semibold text-navy hover:text-brand-600">
                      
                      {company.phone}
                    </a>
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-brand-600">
                    <MailIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-[0.1em] text-steel-500">
                      Email
                    </span>
                    <a
                      href={company.emailHref}
                      className="mt-1 block break-all text-[15px] font-semibold text-navy hover:text-brand-600">
                      
                      {company.email}
                    </a>
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-brand-600">
                    <MapPinIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.1em] text-steel-500">
                      Address
                    </span>
                    <address className="mt-1 text-[15px] not-italic leading-relaxed text-steel-600">
                      {company.addressLines.map((line) =>
                      <span key={line} className="block">
                          {line}
                        </span>
                      )}
                    </address>
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-brand-600">
                    <ClockIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.1em] text-steel-500">
                      Business hours
                    </span>
                    <dl className="mt-1 space-y-0.5 text-[15px] text-steel-600">
                      {company.hours.map((h) =>
                      <div key={h.days} className="flex flex-wrap gap-x-2">
                          <dt className="font-semibold text-navy">{h.days}</dt>
                          <dd>{h.time}</dd>
                        </div>
                      )}
                    </dl>
                  </span>
                </li>
              </ul>

              <div className="mt-9 rounded-xl border border-steel-100 bg-mist p-6">
                <h2 className="font-display text-lg font-extrabold text-navy">
                  Need a formal quotation?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">
                  The quote form captures capacity, viscosity, temperature, pressure and material so
                  we can respond with a real configuration rather than a placeholder price.
                </p>
                <Button variant="accent" className="mt-5 w-full" onClick={() => openQuote()}>
                  Request a Quote
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>);

}