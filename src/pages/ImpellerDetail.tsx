import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { PageHero } from '../components/layout/PageHero';
import { QuoteCTA } from '../components/home/QuoteCTA';
import { SmartImage } from '../components/ui/SmartImage';
import { getImpeller, impellers } from '../data/impellers';
import { usePageMeta } from '../hooks/usePageMeta';
import { NotFound } from './NotFound';
import { useQuote } from '../contexts/QuoteContext';

const impellerTemplates = {
  hydrofoil: {
    summary: 'Swept, profiled blades generate a strong top-to-bottom circulation with minimal power draw, making the hydrofoil the default choice for large-volume blending and solids suspension.',
    overview: 'Hydrofoil impellers deliver efficient axial flow circulation, ideal for low-to-medium viscosity blending and general bulk movement. The swept blade design creates effective top-to-bottom turnover with low power input.',
    flowType: 'Axial flow',
    typicalDuties: ['Efficient bulk circulation', 'Low-to-medium viscosity blending', 'Solids suspension'],
    benefits: ['Minimal power draw', 'Efficient bulk circulation', 'Large-volume capable', 'Low-shear operation'],
    applications: ['Blending', 'Suspension', 'Heat transfer', 'Large tank circulation'],
    design: [
      'Swept, profiled blade geometry for efficient flow generation',
      'Low-shear circulation suitable for large volume vessels',
      'Top-to-bottom turnover with minimal turbulence',
      'Compatible with broad vessel and product conditions'
    ],
    technical: [
      { label: 'Flow pattern', value: 'Axial' },
      { label: 'Typical duty', value: 'Efficient bulk circulation; low-to-medium viscosity blending; suspension' },
      { label: 'Best suited to', value: 'Low to medium viscosity liquids' },
      { label: 'Process focus', value: 'Bulk movement and suspension support' }
    ]
  },
  propeller: {
    summary: 'A compact three-blade propeller producing a defined axial jet. Widely used on side-entry units and smaller portable agitators where a strong directional flow pattern is required.',
    overview: 'Propeller impellers deliver high pumping capacity with low-shear blending, ideal for low-viscosity liquids. The compact design creates a strong directional axial flow pattern.',
    flowType: 'Axial flow',
    typicalDuties: ['High pumping', 'Low-shear blending', 'Low-viscosity liquid mixing'],
    benefits: ['High pumping capacity', 'Strong directional flow', 'Low-shear operation', 'Compact design'],
    applications: ['Low-viscosity blending', 'Suspension', 'Storage tank circulation', 'Side-entry duties'],
    design: [
      'Three-blade configuration for defined axial flow',
      'Strong directional mass transfer through the vessel',
      'Compact geometry suitable for smaller tanks and portable units',
      'Simple, robust design for reliable operation'
    ],
    technical: [
      { label: 'Flow pattern', value: 'Axial' },
      { label: 'Typical duty', value: 'High pumping; low-shear blending; low-viscosity liquids' },
      { label: 'Best suited to', value: 'Low-viscosity liquids' },
      { label: 'Process focus', value: 'Directional flow and bulk turnover' }
    ]
  },
  'pitched-blade-turbine': {
    summary: 'Four angled flat blades deliver a mixed flow pattern with moderate shear — a versatile workhorse for blending, suspension and heat transfer across many process types.',
    overview: 'Pitched-blade turbines blend axial and radial flow components, creating a balanced, flexible flow pattern. This makes them suitable for general blending, dissolution, suspension, and heat transfer across a broad range of processes.',
    flowType: 'Axial + radial components',
    typicalDuties: ['General blending', 'Dissolution', 'Solids suspension', 'Heat transfer'],
    benefits: ['Balanced flow pattern', 'Versatile performance', 'Moderate shear', 'Broad process capability'],
    applications: ['Blending', 'Suspension', 'Dissolution', 'Heat transfer', 'General process mixing'],
    design: [
      'Four angled flat blades for mixed flow generation',
      'Balanced axial and radial flow characteristics',
      'Suitable for multiple process objectives in one vessel',
      'Moderate shear with strong bulk movement capability'
    ],
    technical: [
      { label: 'Flow pattern', value: 'Axial + radial components' },
      { label: 'Typical duty', value: 'General blending; dissolution; suspension; heat transfer' },
      { label: 'Best suited to', value: 'Low to medium viscosity products' },
      { label: 'Process focus', value: 'Versatile general process mixing' }
    ]
  },
  'high-shear-rotor-stator': {
    summary: 'Product passes through a narrow rotor-stator gap at high tip speed, creating intense local shear for fine emulsions, homogenization and dispersion.',
    overview: 'High-shear rotor-stator impellers generate intense local shear for emulsification, homogenization and dispersion. The narrow gap between rotor and stator accelerates product through the shear zone and produces fine droplet or particle breakdown.',
    flowType: 'Intense local shear',
    typicalDuties: ['Emulsification', 'Homogenization', 'Dispersion'],
    benefits: ['High shear intensity', 'Fine particle reduction', 'Stable emulsions', 'Rapid dispersion'],
    applications: ['Emulsification', 'Homogenization', 'Dispersion', 'Fine mixing'],
    design: [
      'High-speed rotor-stator geometry for intense local shear',
      'Narrow gap creates strong hydraulic shear generation',
      'Rapid droplet and particle reduction',
      'Suitable for dispersion and homogenization duties'
    ],
    technical: [
      { label: 'Flow pattern', value: 'Intense local shear' },
      { label: 'Typical duty', value: 'Emulsification; homogenization; dispersion' },
      { label: 'Best suited to', value: 'Low to medium viscosity products' },
      { label: 'Process focus', value: 'Fine disintegration and uniform dispersion' }
    ]
  },
  'dissolver-saw-tooth-disc': {
    summary: 'A serrated saw-tooth disc running at high tip speed wets powders rapidly and disperses pigments or solids into the liquid phase.',
    overview: 'Dissolver / saw-tooth disc impellers are designed for powder dispersion, dissolution and solid incorporation. The serrated disc creates high local shear that wets and disperses powders quickly while keeping the bulk liquid moving.',
    flowType: 'Dissolver disc',
    typicalDuties: ['Powder dispersion', 'Dissolution', 'Pigment / solid incorporation'],
    benefits: ['Rapid wetting', 'Strong dispersion capability', 'Efficient powder incorporation', 'High-speed solids breakup'],
    applications: ['Powder dispersion', 'Dissolution', 'Pigment incorporation', 'Solid incorporation'],
    design: [
      'Serrated saw-tooth disc geometry for solids wetting',
      'High tip speed for powder breakup and dispersion',
      'Effective at incorporating pigments or dry solids',
      'Well-suited to high-intensity wetting and dissolution duties'
    ],
    technical: [
      { label: 'Flow pattern', value: 'Dissolver disc' },
      { label: 'Typical duty', value: 'Powder dispersion; dissolution; pigment / solid incorporation' },
      { label: 'Best suited to', value: 'Medium to high viscosity media' },
      { label: 'Process focus', value: 'Wetting, dissolution and dispersion of solids' }
    ]
  },
  custom: {
    summary: 'Custom impellers are engineered for special tank geometry and process-specific requirements that are beyond standard catalogue solutions.',
    overview: 'Custom impellers are designed for process-specific mixing needs, including special tank geometry and unique operating requirements. They are selected and engineered to fit the vessel, duty and performance criteria of the application rather than a standardised off-the-shelf flow pattern.',
    flowType: 'Process-specific',
    typicalDuties: ['Special tank geometry', 'Special process requirement'],
    benefits: ['Application-specific design', 'Optimized geometry', 'Performance tuned to duty', 'Flexible configuration'],
    applications: ['Custom tank geometry', 'Special process mixing', 'Unique duty requirements', 'Custom engineering'],
    design: [
      'Designed around vessel geometry and operating requirements',
      'Tailored to the specific process duty and flow objective',
      'Engineered for unusual mixing challenges',
      'Configurable for custom performance targets'
    ],
    technical: [
      { label: 'Flow pattern', value: 'Process-specific' },
      { label: 'Typical duty', value: 'Special tank geometry; special process requirement' },
      { label: 'Best suited to', value: 'Application-specific requirements' },
      { label: 'Process focus', value: 'Custom process optimization and unique geometry matching' }
    ]
  },
  'rushton-turbine': {
    summary: 'A disc turbine with six vertical blades that breaks incoming gas into fine bubbles and creates strong radial discharge — the reference impeller for aeration and fermentation.',
    overview: 'Rushton / turbine impellers produce strong radial flow with higher shear, making them the reference choice for gas dispersion, aeration, and fermentation. The radial discharge pattern creates intense local turbulence.',
    flowType: 'Radial flow / higher shear',
    typicalDuties: ['Gas dispersion', 'Fermentation', 'Aeration', 'Solids suspension'],
    benefits: ['Strong radial flow', 'High shear capability', 'Gas dispersion effectiveness', 'Fermentation reference standard'],
    applications: ['Gas dispersion', 'Fermentation', 'Aeration', 'High-turbulence mixing', 'Solids suspension'],
    design: [
      'Disc turbine with six vertical blades for strong radial discharge',
      'Effective at breaking gas bubbles into fine dispersions',
      'High local shear and turbulence generation',
      'Reference design for aeration and fermentation duties'
    ],
    technical: [
      { label: 'Flow pattern', value: 'Radial flow / higher shear' },
      { label: 'Typical duty', value: 'Gas dispersion; fermentation; aeration; solids suspension' },
      { label: 'Best suited to', value: 'Low-viscosity media' },
      { label: 'Process focus', value: 'Gas dispersion and high-turbulence mixing' }
    ]
  },
  anchor: {
    summary: 'A wide frame following the vessel contour, moving product close to the wall for effective heating, cooling and bulk circulation in high-viscosity batches.',
    overview: 'Anchor impellers deliver wall-following tangential mixing, ideal for high-viscosity products requiring gentle, controlled movement. The wide frame geometry creates effective bulk circulation with minimal shear while maintaining close contact with the vessel wall for optimal heat transfer.',
    flowType: 'Tangential / wall-following',
    typicalDuties: ['High-viscosity mixing', 'Heat transfer'],
    benefits: ['Wall-contact mixing', 'Effective heat transfer', 'Gentle circulation', 'High-viscosity capable'],
    applications: ['Viscous mixing', 'Heat transfer', 'Creams & pastes', 'Ointments & lotions'],
    design: [
      'Wide frame following vessel contour for wall contact',
      'Tangential movement for controlled bulk circulation',
      'Low-shear action on viscous products',
      'Effective thermal uniformity support'
    ],
    technical: [
      { label: 'Flow pattern', value: 'Tangential / wall-following' },
      { label: 'Typical duty', value: 'High-viscosity mixing; heat transfer' },
      { label: 'Best suited to', value: 'High viscosity products (5,000–500,000 cP)' },
      { label: 'Process focus', value: 'Wall movement and thermal distribution' }
    ]
  },
  'high-speed-impeller': {
    summary: 'Engineered high-speed element for localized shear, dispersion and fast mixing in demanding process duties.',
    overview: 'High-Speed Impeller elements provide localized shear and rapid dispersion while supporting controlled mixing intensity. The geometry is selected according to the product, vessel and required process duty.',
    flowType: 'High-speed localized mixing',
    typicalDuties: ['High-speed mixing', 'Localized dispersion', 'Complex formulation processing'],
    benefits: ['High-speed operation', 'Controlled shear intensity', 'Localized mixing action', 'Formulation flexibility'],
    applications: ['Complex formulations', 'Emulsions', 'Creams', 'Lotions', 'Ointments', 'Specialty high-viscosity mixing'],
    design: [
      'Engineered high-speed element for localized process shear',
      'Designed to provide rapid dispersion and particle size reduction',
      'Provides localized shear for demanding process duties',
      'Geometry engineered according to process requirements'
    ],
    technical: [
      { label: 'System type', value: 'High-speed mixing element' },
      { label: 'Operating mode', value: 'Localized high-speed mixing' },
      { label: 'Typical duty', value: 'Complex formulations; emulsions; creams; controlled shear applications' },
      { label: 'Selection basis', value: 'Product, vessel and process duty' }
    ]
  }
} as const;

const tabOrder = ['Overview', 'Design & Features', 'Typical Applications', 'Technical Data', 'Configurations', 'Documentation'];

export function ImpellerDetail() {
  const { slug } = useParams<{ slug: string }>();
  const impeller = slug ? getImpeller(slug) : undefined;
  const [activeTab, setActiveTab] = useState<string>('Overview');
  const { openQuote } = useQuote();

  usePageMeta(
    impeller ? `VOTIX Systems | ${impeller.name}` : 'VOTIX Systems | Impeller not found',
    impeller ? impeller.description : 'The requested impeller could not be found.'
  );

  if (!impeller) return <NotFound />;

  const template = impellerTemplates[impeller.slug as keyof typeof impellerTemplates] ?? {
    summary: impeller.description,
    benefits: ['Efficient mixing', 'Reliable performance', 'Process-specific design'],
    applications: impeller.suitableFor,
    design: [impeller.description],
    technical: [
      { label: 'Flow pattern', value: impeller.familyLabel },
      { label: 'Typical duty', value: impeller.purpose },
      { label: 'Best suited to', value: impeller.viscosity },
      { label: 'Process focus', value: impeller.suitableFor.join(', ') }
    ]
  };

  const tabs = {
    Overview: (
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
        <div>
          <p className="text-[15px] leading-relaxed text-steel-600">{template.overview}</p>
          
          <div className="mt-8 space-y-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-steel-500">Flow / Mixing Character</p>
              <p className="mt-2 text-base font-semibold text-navy">{template.flowType}</p>
            </div>
            <div className="border-t border-steel-100 pt-3">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-steel-500">Typical Duties</p>
              <ul className="mt-2 space-y-1.5">
                {template.typicalDuties.map((duty) => (
                  <li key={duty} className="flex gap-2 text-sm text-steel-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-700" aria-hidden />
                    {duty}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {template.benefits.map((benefit) => (
              <Badge key={benefit} tone="navy">{benefit}</Badge>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-steel-200 bg-mist p-4">
          <div className="grid gap-3">
            {template.technical.map((row) => (
              <div key={row.label} className="rounded-lg border border-steel-200 bg-white p-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-steel-500">{row.label}</p>
                <p className="mt-2 text-sm font-semibold text-navy leading-snug">{row.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    'Design & Features': (
      <div className="grid gap-4 md:grid-cols-2">
        {template.design.map((item) => (
          <div key={item} className="rounded-xl border border-steel-200 bg-white p-4 text-sm leading-relaxed text-steel-600">
            {item}
          </div>
        ))}
      </div>
    ),
    'Typical Applications': (
      <div className="flex flex-wrap gap-2">
        {template.applications.map((app) => (
          <span key={app} className="rounded-full border border-steel-200 bg-mist px-4 py-2 text-sm font-medium text-steel-700">
            {app}
          </span>
        ))}
      </div>
    ),
    'Technical Data': (
      <div className="overflow-hidden rounded-xl border border-steel-200 bg-white">
        <div className="grid grid-cols-1">
          {template.technical.map((item) => (
            <div key={item.label} className="flex flex-col border-b border-steel-200 px-4 py-4 last:border-b-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div className="min-w-[180px] pb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-steel-500 sm:pb-0">
                {item.label}
              </div>
              <div className="flex-1 text-base font-semibold leading-relaxed text-navy sm:text-lg">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    Configurations: (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-steel-200 bg-white p-5">
          <h3 className="font-display text-xl font-extrabold text-navy">Typical configuration</h3>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-steel-600">
            <li>• Selected by process objective and vessel geometry</li>
            <li>• Matched to product viscosity and required shear profile</li>
            <li>• Sized to maintain efficiency and process stability</li>
            <li>• Engineered with duty-specific mixing performance in mind</li>
          </ul>
        </div>
        <div className="rounded-xl border border-steel-200 bg-white p-5">
          <h3 className="font-display text-xl font-extrabold text-navy">Selection focus</h3>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-steel-600">
            <li>• Flow requirement and circulation goal</li>
            <li>• Product sensitivity and shear tolerance</li>
            <li>• Geometry and vessel operating conditions</li>
            <li>• Process duty including suspension, aeration or heat transfer</li>
          </ul>
        </div>
      </div>
    ),
    Documentation: (
      <div className="grid gap-4 md:grid-cols-2">
        {[
          'Overview and operating principle',
          'Duty-based application guidance',
          'Configuration recommendations',
          'Selection support for process engineering review'
        ].map((item) => (
          <div key={item} className="rounded-xl border border-steel-200 bg-white p-5 text-sm text-steel-600">
            {item}
          </div>
        ))}
      </div>
    )
  };

  return (
    <>
      <PageHero
        eyebrow="IMPELLER"
        title={impeller.name.toUpperCase()}
        description={impeller.purpose}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Impellers', href: '/products/impellers' },
          { label: impeller.name }
        ]} />

      <section className="py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-600">
                {impeller.familyLabel}
              </p>
              <h2 className="font-display text-4xl font-extrabold text-navy sm:text-5xl">
                {impeller.name}
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-steel-600">
                {impeller.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {impeller.suitableFor.map((item) => (
                  <Badge key={item} tone="navy">{item}</Badge>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="accent" size="lg" className="min-w-[180px]" onClick={() => openQuote({ product: impeller.name })}>
                  REQUEST A QUOTE
                </Button>
              </div>
            </div>

            <div className="rounded-[28px] border border-steel-100 bg-white p-3 shadow-card">
              <SmartImage src={impeller.image} alt={impeller.name} ratio="aspect-[4/3]" className="overflow-hidden rounded-[20px]" />
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-steel-100 bg-white p-2 shadow-card">
            <div className="flex flex-wrap gap-2">
              {tabOrder.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`min-h-[44px] rounded-md px-4 text-sm font-semibold uppercase tracking-[0.08em] transition-colors duration-200 ease-smooth ${
                    activeTab === tab ? 'bg-navy text-white' : 'bg-mist text-steel-700 hover:text-brand'
                  }`}>
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-6 p-2 lg:p-4">{tabs[activeTab as keyof typeof tabs]}</div>
          </div>

          <div className="mt-16 rounded-2xl border border-steel-100 bg-mist p-8 text-center">
            <h3 className="font-display text-3xl font-extrabold text-navy">
              NEED HELP SELECTING THE RIGHT IMPELLER?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-base text-steel-600">
              Our engineering team can help match the correct impeller to your vessel, process and duty.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md bg-accent px-6 text-sm font-semibold text-navy-950 transition-colors duration-200 ease-smooth hover:bg-accent-400">
                TALK TO AN EXPERT
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </Link>
              <Button variant="outline" size="lg">
                REQUEST A QUOTE
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <QuoteCTA prefill={{ product: impeller.name }} />
    </>
  );
}
