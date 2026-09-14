import { images } from './images';

export type BottomEntrySeries = {
  slug: string;
  name: string;
  series: string;
  description: string;
  tagline: string;
  applications: string[];
  industries: string[];
  image: string;
  gallery: string[];
  benefits: string[];
  overview: string[];
  features: string[];
  technical: Array<{ label: string; value: string }>;
  specificationTable: Array<{ label: string; value: string }>;
  compatibleImpellers: Array<{ slug: string; name: string; description: string; image: string }>;
};

export const bottomEntrySeries: BottomEntrySeries[] = [
  {
    slug: 'vtx-be-standard',
    name: 'VTX-BE STANDARD',
    series: 'Standard Bottom Entry',
    tagline: 'EFFICIENT BOTTOM-DRIVEN MIXING FOR DEMANDING PROCESS APPLICATIONS.',
    description:
      'VTX-BE is the main Bottom Entry platform for efficient circulation from the lower process zone, with compact shaft arrangements and practical maintenance access beneath the vessel.',
    applications: ['Liquid Blending', 'Homogenization', 'Suspension', 'Recirculation', 'Heat Transfer'],
    industries: ['Pharmaceutical', 'Food & Beverage', 'Dairy', 'Cosmetics', 'Biotechnology', 'Specialty Process'],
    image: images.products.bottomEntry,
    gallery: [images.products.bottomEntry, images.products.bottomEntrySecondary],
    benefits: ['Efficient low-level mixing', 'Compact shaft arrangement', 'Clear tank top', 'Low headroom friendly'],
    overview: [
      'VTX-BE is the primary Bottom Entry platform for efficient circulation from the lower process zone.',
      'The short shaft and bottom-mounted drive keep the vessel top clear while maintaining effective mixing at lower working volumes.',
      'This configuration is especially useful where tank headroom, vessel geometry and process access require a compact, bottom-driven arrangement.',
      'Typical impeller selections include hydrofoil, propeller, pitched-blade and specialized axial-flow elements.'
    ],
    features: [
      'Bottom-mounted drive and compact shaft arrangement',
      'Effective mixing at low working volumes',
      'Clear vessel top for instrumentation and top connections',
      'Suitable for blending, heat transfer and solids circulation',
      'Flexible impeller selection based on process duty',
      'Engineered for practical service access below the vessel'
    ],
    technical: [
      { label: 'Motor Power', value: 'Available on request' },
      { label: 'Vessel Volume', value: 'Engineered to requirement' },
      { label: 'Typical Impeller', value: 'Hydrofoil; Propeller; Pitched-Blade Turbine; Specialized axial-flow impellers' },
      { label: 'Typical Duties', value: 'Liquid blending; homogenization; suspension; recirculation; heat-transfer assistance' },
      { label: 'Key Character', value: 'Efficient bottom-driven mixing for low headroom and lower-level circulation' }
    ],
    specificationTable: [
      { label: 'Motor Power', value: '0.37-30 kW' },
      { label: 'Vessel Volume', value: '100 L-50,000 L' },
      { label: 'Typical Impellers', value: 'Propeller; Hydrofoil; Pitched-Blade Turbine' },
      { label: 'Typical Duties', value: 'Blending; homogenization; suspension; recirculation; heat-transfer assistance' }
    ],
    compatibleImpellers: [
      { slug: 'hydrofoil', name: 'Hydrofoil', description: 'High-flow axial circulation for bulk blending and suspension.', image: images.impellers.hydrofoil },
      { slug: 'propeller', name: 'Propeller', description: 'Strong directional flow for efficient circulation and turnover.', image: images.impellers.propeller },
      { slug: 'pitched-blade-turbine', name: 'Pitched-Blade Turbine', description: 'Balanced axial/radial flow for versatile process mixing.', image: images.impellers.pitchedBlade },
      { slug: 'custom', name: 'Specialized axial-flow impeller', description: 'Application-specific axial-flow element selected for the duty.', image: images.impellers.hydrofoil }
    ]
  },
  {
    slug: 'vtx-bu-u-impeller',
    name: 'VTX-BU U-IMPELLER',
    series: 'U-Impeller Bottom Entry',
    tagline: 'EFFICIENT BOTTOM-DRIVEN CIRCULATION FOR DEMANDING MIXING APPLICATIONS.',
    description:
      'VTX-BU uses a bottom-driven U-shaped impeller in the lower mixing zone to create strong circulation in demanding, viscous and process-sensitive applications.',
    applications: ['Blending', 'Homogenization', 'Suspension', 'Dissolution', 'Viscous-product circulation', 'Heat-transfer assistance'],
    industries: ['Food & Beverage', 'Dairy', 'Pharmaceutical', 'Cosmetics', 'Specialty Process'],
    image: images.products.bottomEntryUImpeller,
    gallery: [images.products.bottomEntry, images.impellers.anchor, images.impellers.hydrofoil, images.engineering.design],
    benefits: ['Strong lower-zone circulation', 'Viscous product handling', 'Compact bottom drive', 'Process-tuned mixing'],
    overview: [
      'VTX-BU is configured for efficient bottom-driven circulation in demanding mixing applications.',
      'The U-shaped impeller is positioned in the lower mixing zone to generate strong flow while preserving a compact, hygienic and serviceable bottom entry arrangement.',
      'This arrangement helps maintain turnover and product uniformity in processes that need a robust lower-zone flow pattern without a tall shaft system.',
      'The final geometry is engineered according to vessel size, product behavior and process duty.'
    ],
    features: [
      'Bottom-mounted drive with compact shaft arrangement',
      'U-shaped impeller geometry for strong lower-zone circulation',
      'Efficient for viscous and demanding process products',
      'Low headroom and compact vessel installation',
      'Suitable for blending, suspension and heat-transfer assistance',
      'Engineered according to process requirements'
    ],
    technical: [
      { label: 'Motor Power', value: 'Available on request' },
      { label: 'Vessel Volume', value: 'Engineered to requirement' },
      { label: 'Typical Impeller', value: 'U-Shaped Impeller / U-Profile Impeller' },
      { label: 'Typical Duties', value: 'Blending; homogenization; suspension; dissolution; viscous-product circulation; heat-transfer assistance' },
      { label: 'Key Character', value: 'Strong lower-zone circulation with a compact bottom-entry shaft arrangement' }
    ],
    specificationTable: [
      { label: 'Motor Power', value: '0.75-45 kW' },
      { label: 'Vessel Volume', value: '100 L-30,000 L' },
      { label: 'Impeller', value: 'Two large L-shaped blades forming a U-shaped profile' },
      { label: 'Typical Duties', value: 'Viscous-product circulation; blending; homogenization; heat-transfer assistance' },
      { label: 'Key Character', value: 'Large sweep diameter; low RPM; high torque' }
    ],
    compatibleImpellers: [
      { slug: 'custom', name: 'U-Shaped Impeller / U-Profile Impeller', description: 'A custom U-profile bottom impeller selected for demanding product circulation.', image: images.impellers.anchor }
    ]
  },
  {
    slug: 'vtx-beh-high-shear',
    name: 'VTX-BEH HIGH-SHEAR',
    series: 'High-Shear Bottom Entry',
    tagline: 'HIGH-ENERGY MIXING FROM THE HEART OF THE VESSEL.',
    description:
      'VTX-BEH is a high-energy Bottom Entry arrangement designed for emulsification, dispersion and homogenization where the process requires intense local shear from the lower vessel zone.',
    applications: ['Emulsification', 'Dispersion', 'Homogenization', 'Powder Incorporation', 'Rapid Mixing'],
    industries: ['Pharmaceutical formulations', 'Cosmetics', 'Food emulsions', 'Specialty processing'],
    image: images.products.bottomEntryHighShear,
    gallery: [images.products.bottomEntryHighShear, images.products.bottomEntryHighShearSecondary],
    benefits: ['High-energy mixing', 'Strong local shear', 'Rapid dispersion', 'Process-specific design'],
    overview: [
      'VTX-BEH is an engineered high-shear Bottom Entry arrangement designed to deliver strong local shear from the heart of the vessel.',
      'This configuration is intended for processes requiring high-energy action for dispersion, emulsification and rapid mixing, particularly where the vessel geometry and duty demand a lower-zone high-shear solution.',
      'It is presented as an engineered or Phase-2 configuration unless VOTIX has finalized design validation for a particular process requirement.',
      'The final arrangement is matched to viscosity, product sensitivity and vessel geometry.'
    ],
    features: [
      'High-shear bottom-entry layout',
      'Intense local shear for dispersions and emulsions',
      'Suitable for powders, emulsions and rapid mixing',
      'Configurable to the vessel and process duty',
      'Engineered/performance-tuned arrangement',
      'Designed for selective high-energy processing'
    ],
    technical: [
      { label: 'Motor Power', value: 'Available on request' },
      { label: 'Vessel Volume', value: 'Engineered to requirement' },
      { label: 'Typical Impeller', value: 'High-speed impeller; Dissolver; Rotor-Stator / high-shear element; Application-specific turbine' },
      { label: 'Typical Duties', value: 'Emulsification; dispersion; homogenization; powder incorporation; rapid mixing' },
      { label: 'Key Character', value: 'High-energy mixing from the lower vessel zone for intense local shear' }
    ],
    specificationTable: [
      { label: 'Motor Power', value: '1.5-75 kW' },
      { label: 'Vessel Volume', value: '50 L-20,000 L' },
      { label: 'Typical Mixing Elements', value: 'Rotor-Stator; high-shear head; dissolver arrangement' },
      { label: 'Typical Duties', value: 'Emulsification; dispersion; homogenization; rapid mixing' }
    ],
    compatibleImpellers: [
      { slug: 'high-shear-rotor-stator', name: 'High-Speed Impeller', description: 'High-shear rotor-stator geometry for intense local shear generation.', image: images.impellers.rotorStator },
      { slug: 'dissolver-saw-tooth-disc', name: 'Dissolver', description: 'High-speed dissolver arrangement for powder wetting and dispersion.', image: images.impellers.dissolverDisc },
      { slug: 'high-shear-rotor-stator', name: 'Rotor-Stator / High-Shear Element', description: 'Application-specific rotor-stator element for fine dispersion and emulsification.', image: images.impellers.rotorStator },
      { slug: 'custom', name: 'Application-Specific Turbine', description: 'Custom high-shear element designed for a specific process duty.', image: images.impellers.hydrofoil }
    ]
  },
  {
    slug: 'vtx-bh-hygienic',
    name: 'VTX-BH HYGIENIC',
    series: 'Hygienic Bottom Entry',
    tagline: 'HYGIENIC AGITATION ENGINEERED FOR SENSITIVE PROCESSES.',
    description:
      'VTX-BH is a hygienic Bottom Entry configuration engineered for sensitive processes where sanitary design, cleanability and controlled agitation are critical.',
    applications: ['Hygienic Mixing', 'Cleanability-focused processing', 'Controlled agitation'],
    industries: ['Pharmaceutical', 'Dairy', 'Food', 'Beverage', 'Cosmetics', 'Biotechnology'],
    image: images.products.bottomEntryHygienic,
    gallery: [images.products.bottomEntry, images.impellers.hydrofoil, images.industries.pharmaceutical, images.engineering.design],
    benefits: ['Controlled hygienic agitation', 'Cleanability-conscious design', 'Sensitive process suitability', 'Compact bottom-entry layout'],
    overview: [
      'VTX-BH is a hygienic Bottom Entry arrangement developed for sensitive processing environments.',
      'The configuration is intended to support cleanability-focused operation and controlled agitation where product sensitivity, vessel geometry and process risk are important design variables.',
      'The exact equipment configuration should be verified against the process, product, and installation requirements for each application.',
      'The design language remains conservative and engineering-led rather than making unsupported sanitation or certification claims.'
    ],
    features: [
      'Hygienic process-oriented Bottom Entry arrangement',
      'Compact vessel-mounted configuration',
      'Control of agitation intensity for sensitive products',
      'Configurable geometry to suit process demands',
      'Simple service access from below the vessel',
      'Process-specific impeller selection'
    ],
    technical: [
      { label: 'Motor Power', value: 'Available on request' },
      { label: 'Vessel Volume', value: 'Engineered to requirement' },
      { label: 'Typical Impeller', value: 'Process-specific hygienic impeller selection' },
      { label: 'Typical Duties', value: 'Hygienic mixing; cleanability-focused processing; controlled agitation' },
      { label: 'Key Character', value: 'Hygienic, process-aware mixing for sensitive product handling' }
    ],
    specificationTable: [
      { label: 'Motor Power', value: '0.37-30 kW' },
      { label: 'Vessel Volume', value: '100 L-30,000 L' },
      { label: 'Typical Materials', value: 'SS316L product-contact construction; SS304 / SS316 depending on application' },
      { label: 'Important Parameters', value: 'Surface finish; seal configuration; cleanability; drainability; product-contact material' },
      { label: 'Typical Impellers', value: 'Hygienic Hydrofoil; Propeller; application-specific impeller' }
    ],
    compatibleImpellers: [
      { slug: 'custom', name: 'Process-Specific Hygienic Impeller Selection', description: 'Impeller selected to fit the hygienic process duty and vessel geometry.', image: images.impellers.hydrofoil }
    ]
  },
];

export const getBottomEntrySeries = (slug: string) =>
  bottomEntrySeries.find((series) => series.slug === slug);
