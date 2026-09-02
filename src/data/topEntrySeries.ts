import { images } from './images';

export type TopEntrySeries = {
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
  compatibleImpellers: Array<{ name: string; description: string; image: string }>;
};

export const topEntrySeries: TopEntrySeries[] = [
  {
    slug: 'vtx-g-series',
    name: 'VTX-G SERIES',
    series: 'Gear-Driven Agitators',
    tagline: 'Versatile. Reliable. Engineered for the process.',
    description:
      'VTX-G Series gear-driven agitators are designed for a wide variety of mixing, blending, suspension and dissolution applications. Their robust design, efficient power transmission and adaptable impeller configuration make them a dependable choice for process vessels across multiple industries.',
    applications: ['Blending', 'Suspension', 'Dissolution', 'Homogenization'],
    industries: ['Food & Beverage', 'Dairy', 'Pharmaceutical', 'Cosmetics', 'Chemical / Process', 'Water Treatment'],
    image: images.products.topEntry,
    gallery: [images.products.topEntry, images.impellers.hydrofoil, images.impellers.pitchedBlade, images.engineering.cfd],
    benefits: ['Robust Construction', 'Energy Efficient', 'Custom Engineered', 'Easy Maintenance'],
    overview: [
      'VTX-G Series gear-driven agitators are designed for a wide variety of mixing, blending, suspension and dissolution applications.',
      'The series is suited to vessels requiring dependable bulk movement, stable shaft performance and flexible impeller selection based on product behavior, tank geometry and processing objectives.',
      'Each unit is configured around the specific duty, allowing the correct combination of shaft, gearbox, seal arrangement and impeller geometry to be selected without over-specifying the drive.'
    ],
    features: [
      'Gear-driven transmission for steady torque delivery',
      'Adaptable shaft and impeller combinations for process-specific flow',
      'Maintenance-friendly top-entry configuration',
      'Available in hygienic and industrial material specifications',
      'Compatible with custom vessel mounting and seal packages',
      'Suitable for mixing and circulation in low- to medium-viscosity duties'
    ],
    technical: [
      { label: 'Volume', value: 'Customizable' },
      { label: 'Viscosity', value: 'Available on request' },
      { label: 'Motor Power', value: 'Available on request' },
      { label: 'Speed', value: 'Available on request' },
      { label: 'Impeller Diameter', value: 'Engineered to requirement' },
      { label: 'Materials', value: 'SS 304 / SS 316 / Custom' },
      { label: 'Temperature', value: 'Available on request' },
      { label: 'Pressure', value: 'Available on request' }
    ],
    specificationTable: [
      { label: 'Motor Power', value: '0.37–75 kW' },
      { label: 'Speed Range', value: '20–500 RPM' },
      { label: 'Indicative Viscosity', value: '1–20,000 cP' },
      { label: 'Vessel Volume', value: '100 L–100,000 L+' },
      { label: 'Typical Impellers', value: 'Hydrofoil; Propeller; Pitched-Blade Turbine; Paddle; Turbine' },
      { label: 'Typical Duties', value: 'Blending; liquid-liquid mixing; suspension; dissolution; homogenization; heat-transfer assistance' },
      { label: 'Materials', value: 'SS304; SS316; SS316L; special alloys on request' },
      { label: 'Seal Options', value: 'Lip seal; stuffing box; single mechanical; double mechanical; cartridge mechanical seal, depending on duty' }
    ],
    compatibleImpellers: [
      { slug: 'hydrofoil', name: 'Hydrofoil', description: 'Efficient axial flow for blending and circulation.', image: images.impellers.hydrofoil },
      { slug: 'propeller', name: 'Propeller', description: 'High pumping capacity for bulk turnover and suspension.', image: images.impellers.propeller },
      { slug: 'pitched-blade-turbine', name: 'Pitched-Blade Turbine', description: 'Balanced axial/radial flow for broad process coverage.', image: images.impellers.pitchedBlade },
      { slug: 'paddle', name: 'Paddle', description: 'Gentle mixing for viscous or shear-sensitive batches.', image: images.impellers.anchor },
      { slug: 'rushton-turbine', name: 'Rushton / Turbine', description: 'Radial flow for dispersion and high-turbulence duties.', image: images.impellers.rushton }
    ]
  },
  {
    slug: 'vtx-a-series',
    name: 'VTX-A SERIES',
    series: 'Anchor Agitators',
    tagline: 'ENGINEERED FOR VISCOSITY.',
    description:
      'The VTX-A Series is engineered for high-viscosity mixing, wall movement, and heat transfer. Ideal for creams, sauces, ketchup, mayonnaise, ointments, lotions, and pastes across food, dairy, pharmaceutical, and cosmetics industries.',
    applications: ['Viscous Mixing', 'Wall Movement', 'Heat Transfer', 'Creams', 'Sauces', 'Pastes', 'Ointments'],
    industries: ['Food & Beverage', 'Dairy', 'Pharmaceutical', 'Cosmetics'],
    image: images.products.bottomEntry,
    gallery: [images.products.bottomEntry, images.impellers.anchor, images.impellers.spiralAnchor, images.industries.pharmaceutical],
    benefits: ['High Viscosity Capability', 'Effective Heat Transfer', 'Stable Mixing', 'Robust Design'],
    overview: [
      'Anchor agitators are ideal for high-viscosity products and heat-transfer applications.',
      'The sweeping blade geometry moves product close to the vessel wall and base, improving uniform temperature distribution and reducing stagnant zones.',
      'They are widely used where the product has a high resistance to flow and needs careful, controlled movement rather than aggressive shear.'
    ],
    features: [
      'Large sweeping blade geometry for wall movement',
      'Low shear bulk circulation for viscous batches',
      'Optimized for thermal uniformity',
      'Effective in processes with reduced turnover flows',
      'Available in polished and sanitary configurations',
      'Suited to shear-sensitive or highly viscous products'
    ],
    technical: [
      { label: 'Volume', value: 'Customizable' },
      { label: 'Viscosity', value: 'Available on request' },
      { label: 'Motor Power', value: 'Available on request' },
      { label: 'Speed', value: 'Available on request' },
      { label: 'Impeller Diameter', value: 'Engineered to requirement' },
      { label: 'Materials', value: 'SS 304 / SS 316 / Dual Material Options' },
      { label: 'Temperature', value: 'Available on request' },
      { label: 'Pressure', value: 'Available on request' }
    ],
    specificationTable: [
      { label: 'Motor Power', value: '0.37–45 kW' },
      { label: 'Speed Range', value: '5–80 RPM' },
      { label: 'Indicative Viscosity', value: '5,000–500,000 cP' },
      { label: 'Vessel Volume', value: '100 L–30,000 L' },
      { label: 'Typical Impellers', value: 'Anchor; Anchor with Scraper; Spiral Anchor' },
      { label: 'Typical Duties', value: 'High-viscosity mixing; wall movement; heat-transfer assistance; creams; sauces; pastes; lotions; ointments' },
      { label: 'Key Character', value: 'Large sweep diameter; low speed; high torque' }
    ],
    compatibleImpellers: [
      { slug: 'anchor', name: 'Anchor', description: 'Wall-following / tangential mixing element designed for high-viscosity mixing and heat-transfer applications.', image: images.impellers.anchor },
      { slug: 'anchor-scraper', name: 'Anchor + Scraper', description: 'Anchor configuration with wall scraping for high-viscosity products and improved wall heat transfer.', image: images.impellers.anchor },
      { slug: 'spiral-anchor', name: 'Spiral Anchor', description: 'Designed for viscous products and controlled circulation.', image: images.impellers.spiralAnchor }
    ]
  },
  {
    slug: 'vtx-cx-series',
    name: 'VTX-CX SERIES',
    series: 'Coaxial / Dual-Shaft Agitators',
    tagline: 'TWO MIXING ACTIONS. ONE ENGINEERED PROCESS.',
    description:
      'The VTX-CX Series is engineered for complex formulations and high-viscosity mixing requiring dual mixing actions. Slow-speed outer shaft with fast-speed inner shaft for independent control of bulk circulation and local shear.',
    applications: ['Complex Formulations', 'Emulsions', 'Creams', 'Lotions', 'Ointments', 'High-Viscosity Mixing'],
    industries: ['Pharmaceutical', 'Cosmetics', 'Food & Beverage', 'Dairy', 'Specialty Formulations'],
    image: images.products.coaxial,
    gallery: [images.products.coaxial, images.impellers.anchor, images.impellers.rotorStator, images.engineering.processOptimization],
    benefits: ['Dual-Action Mixing', 'Independent Shear Control', 'High Viscosity Handling', 'Excellent Process Flexibility'],
    overview: [
      'Dual-shaft mixing is ideal for complex formulations and high-viscosity processes.',
      'The combination of a slow bulk transport element and a separate high-shear element allows the process to be tuned independently for circulation and dispersion.',
      'This approach helps manage product homogeneity while controlling shear history, especially in emulsions, creams and other multi-phase materials.'
    ],
    features: [
      'Independent slow-speed and high-speed shafts',
      'Optimized for complex and multiphase products',
      'Wall-scraping and bulk transport in one package',
      'Strong performance in viscous mixing applications',
      'Customizable for shear-sensitive or aggressive products',
      'Designed for controlled emulsification and dispersion'
    ],
    technical: [
      { label: 'Volume', value: 'Customizable' },
      { label: 'Viscosity', value: 'Available on request' },
      { label: 'Motor Power', value: 'Available on request' },
      { label: 'Speed', value: 'Available on request' },
      { label: 'Impeller Diameter', value: 'Engineered to requirement' },
      { label: 'Materials', value: 'SS 304 / SS 316 / Custom' },
      { label: 'Temperature', value: 'Available on request' },
      { label: 'Pressure', value: 'Available on request' }
    ],
    specificationTable: [
      { label: 'Combined Power', value: '1.5–90 kW' },
      { label: 'Outer Agitator Speed', value: '5–80 RPM' },
      { label: 'Inner Agitator Speed', value: '100–1,500 RPM' },
      { label: 'Indicative Viscosity', value: '1,000–500,000+ cP' },
      { label: 'Vessel Volume', value: '100 L–30,000 L' },
      { label: 'Typical Combination', value: 'Outer Anchor / Scraper plus inner Hydrofoil / Turbine / high-speed element' },
      { label: 'Typical Duties', value: 'Complex formulations; emulsions; creams; viscous products; simultaneous slow and fast mixing' },
      { label: 'Materials', value: 'SS304; SS316; SS316L; special alloys on request' }
    ],
    compatibleImpellers: [
      { slug: 'anchor-scraper', name: 'Anchor / Scraper', description: 'Outer slow-speed shaft for bulk transport and wall movement.', image: images.impellers.anchor },
      { slug: 'hydrofoil', name: 'Hydrofoil', description: 'Inner high-speed shaft option for circulation support.', image: images.impellers.hydrofoil },
      { slug: 'rushton-turbine', name: 'Turbine', description: 'Inner high-speed shaft option for mixing intensity.', image: images.impellers.rushton },
      { slug: 'high-speed-impeller', name: 'High-Speed Impeller', description: 'Engineered high-speed element for shear applications.', image: images.impellers.rotorStator }
    ]
  },
  {
    slug: 'vtx-hs-series',
    name: 'VTX-HS SERIES',
    series: 'High-Shear & Dissolving Agitators',
    tagline: 'DISPERSION. EMULSIFICATION. HOMOGENIZATION.',
    description:
      'The VTX-HS Series is engineered for high-shear mixing, dispersion, emulsification and homogenization. High-speed rotor-stator or dissolver configurations deliver rapid particle breakup and energy input for powder incorporation and fine droplet reduction.',
    applications: ['Powder Incorporation', 'Dispersion', 'Emulsification', 'Dissolution', 'Homogenization', 'Particle-Size Reduction'],
    industries: ['Pharmaceutical', 'Cosmetics', 'Food & Beverage', 'Specialty Processing'],
    image: images.products.highShear,
    gallery: [images.products.highShear, images.impellers.rotorStator, images.impellers.dissolverDisc, images.engineering.design],
    benefits: ['Rapid Powder Wetting', 'Fine Dispersion', 'High Shear Capability', 'Clean Process Design'],
    overview: [
      'High-shear agitators are designed for dispersion, emulsification and powder incorporation.',
      'The high tip-speed rotor-stator or dissolver geometry creates intense local shear that reduces agglomerates and supports rapid homogenization.',
      'Where required, the unit can be combined with a slow mixing element to balance process performance with bulk turnover.'
    ],
    features: [
      'High-speed rotor-stator or dissolver head options',
      'Designed for rapid wetting and particle breakdown',
      'Suitable for powders, suspensions and emulsions',
      'Configurable speed range for sensitive products',
      'Available as standalone or combined unit',
      'Robust mechanical design for continuous duty'
    ],
    technical: [
      { label: 'Volume', value: 'Customizable' },
      { label: 'Viscosity', value: 'Available on request' },
      { label: 'Motor Power', value: 'Available on request' },
      { label: 'Speed', value: 'Available on request' },
      { label: 'Impeller Diameter', value: 'Engineered to requirement' },
      { label: 'Materials', value: 'SS 316 / SS 316L / Custom' },
      { label: 'Temperature', value: 'Available on request' },
      { label: 'Pressure', value: 'Available on request' }
    ],
    specificationTable: [
      { label: 'Motor Power', value: '1.5–75 kW' },
      { label: 'Speed Range', value: '300–3,000 RPM' },
      { label: 'Indicative Viscosity', value: '1–100,000 cP, application dependent' },
      { label: 'Vessel Volume', value: '50 L–25,000 L' },
      { label: 'Typical Mixing Elements', value: 'Dissolver Disc; Saw-Tooth Disc; High-Shear Rotor-Stator; specialized high-speed elements' },
      { label: 'Typical Duties', value: 'Dispersion; emulsification; powder incorporation; dissolution; homogenization; particle-size reduction' },
      { label: 'Mixing Character', value: 'High-speed inner rotor or dissolver; intense shear and particle breakup' },
      { label: 'Materials', value: 'SS316; SS316L; specialized alloys on request' }
    ],
    compatibleImpellers: [
      { slug: 'dissolver-disc', name: 'Dissolver Disc', description: 'Saw-tooth disc for rapid powder incorporation and wetting.', image: images.impellers.dissolverDisc },
      { slug: 'rotor-stator', name: 'Rotor-Stator', description: 'High-shear rotor-stator for fine emulsions and dispersions.', image: images.impellers.rotorStator },
      { slug: 'rushton-turbine', name: 'High-Speed Turbine', description: 'Specialized high-speed element for intense shear.', image: images.impellers.rushton },
      { slug: 'pitched-blade-turbine', name: 'Specialized Disc', description: 'Custom engineered high-speed element for dispersion.', image: images.impellers.pitchedBlade }
    ]
  },
  {
    slug: 'vtx-jm-series',
    name: 'VTX-JM SERIES',
    series: 'Jet Mixers',
    tagline: 'ENGINEERED CIRCULATION FOR LARGE-VOLUME MIXING.',
    description:
      'The VTX-JM Series is engineered for efficient large-volume tank turnover and circulation. High-velocity circulation patterns deliver effective blending and suspension in large-diameter process and storage tanks.',
    applications: ['Tank Turnover', 'Circulation', 'Blending', 'Suspension', 'Dissolution'],
    industries: ['Large-Volume Process/Storage', 'Food & Beverage', 'Dairy', 'Process Industries'],
    image: images.products.topEntry,
    gallery: [images.products.topEntry, images.engineering.cfd, images.impellers.propeller, images.industries.foodBeverage],
    benefits: ['Large-Volume Turnover', 'Energy Efficient', 'Low Maintenance', 'High Circulation'],
    overview: [
      'Jet mixers are efficient large-volume mixing and circulation devices designed for maximum tank turnover.',
      'The circulation pattern is created to move product throughout the vessel without the need for a fully protruding shaft and impeller assembly.',
      'They are often selected for vessels where broad circulation and consistent blend time are more important than local high shear.'
    ],
    features: [
      'High-circulation mixing for large tanks',
      'Low-maintenance hydraulic or pump-driven operation',
      'Optimized for broad flow patterns',
      'Reduced need for complex shaft arrangements',
      'Suitable for large volume blending and circulation',
      'Configurable for varying tank geometry and process requirements'
    ],
    technical: [
      { label: 'Volume', value: 'Customizable' },
      { label: 'Viscosity', value: 'Available on request' },
      { label: 'Motor Power', value: 'Available on request' },
      { label: 'Speed', value: 'Available on request' },
      { label: 'Impeller Diameter', value: 'Engineered to requirement' },
      { label: 'Materials', value: 'SS 304 / SS 316 / Custom' },
      { label: 'Temperature', value: 'Available on request' },
      { label: 'Pressure', value: 'Available on request' }
    ],
    specificationTable: [
      { label: 'Motor Power', value: '1.5–55 kW' },
      { label: 'Speed', value: 'Application dependent' },
      { label: 'Indicative Viscosity', value: '1–10,000 cP' },
      { label: 'Vessel Volume', value: '1,000 L–200,000 L+' },
      { label: 'Performance Metrics', value: 'Flow rate; jet velocity; circulation rate; tank turnover' },
      { label: 'Typical Duties', value: 'Large-volume circulation; blending; suspension; dissolution; tank turnover' },
      { label: 'Mixing Mode', value: 'High-velocity circulation via jet or submersed pump' },
      { label: 'Materials', value: 'SS304; SS316; SS316L; carbon steel with special coatings' }
    ],
    compatibleImpellers: [
      { slug: 'propeller', name: 'Jet-Mixing Element', description: 'High-velocity circulation for large-volume tank turnover.', image: images.impellers.propeller },
      { slug: 'hydrofoil', name: 'Circulation Element', description: 'Engineered circulation for broad tank movement.', image: images.impellers.hydrofoil },
      { slug: 'pitched-blade-turbine', name: 'Mixed-Flow Element', description: 'Balanced flow for large process tanks.', image: images.impellers.pitchedBlade },
      { slug: 'anchor-scraper', name: 'Wall-Contact Element', description: 'Gentle circulation for slow-turnover applications.', image: images.impellers.anchor }
    ]
  },
  {
    slug: 'vtx-fb-series',
    name: 'VTX-FB SERIES',
    series: 'Fermenter & Bioprocess Agitators',
    tagline: 'PRECISION AGITATION FOR BIOPROCESSING.',
    description:
      'The VTX-FB Series is engineered for precision agitation in fermentation and bioprocessing. Controlled mixing supports nutrient distribution, oxygen transfer, gas dispersion and culture stability in bioprocess applications.',
    applications: ['Fermentation', 'Aeration', 'Gas Dispersion', 'Controlled Mixing', 'Multi-Stage Agitation'],
    industries: ['Biotechnology', 'Pharmaceutical', 'Fermentation', 'Enzyme Production', 'Cultured Products', 'Fermented Beverages'],
    image: images.products.custom,
    gallery: [images.products.custom, images.engineering.design, images.industries.biotech, images.about.engineering],
    benefits: ['Process-Optimized Mixing', 'Gentle yet Effective Motion', 'Bioprocess Ready', 'Clean and Sterile Design'],
    overview: [
      'Fermenter agitators are engineered for fermentation and bioprocess applications.',
      'They provide controlled mixing to support nutrient distribution, oxygen transfer and culture stability while remaining suitable for sanitary and process-critical operating conditions.',
      'The impeller and shaft configuration is selected to match the tank geometry, media viscosity and aeration requirements.'
    ],
    features: [
      'Configured for fermentation and biotech process duties',
      'Controlled, low-shear mixing for sensitive cultures',
      'Support for aeration and nutrient distribution',
      'Hygienic and sanitary design options',
      'Custom vessel and impeller selection',
      'Stackable engineering for process flexibility'
    ],
    technical: [
      { label: 'Volume', value: 'Customizable' },
      { label: 'Viscosity', value: 'Available on request' },
      { label: 'Motor Power', value: 'Available on request' },
      { label: 'Speed', value: 'Available on request' },
      { label: 'Impeller Diameter', value: 'Engineered to requirement' },
      { label: 'Materials', value: 'SS 316 / SS 316L / Custom' },
      { label: 'Temperature', value: 'Available on request' },
      { label: 'Pressure', value: 'Available on request' }
    ],
    specificationTable: [
      { label: 'Motor Power', value: '0.75–250 kW' },
      { label: 'Speed Range', value: '50–600 RPM' },
      { label: 'Indicative Viscosity', value: '1–5,000 cP' },
      { label: 'Vessel Volume', value: '100 L–200,000 L+' },
      { label: 'Typical Impellers', value: 'Rushton Turbine; Hydrofoil; Pitched-Blade Turbine; multi-stage combinations' },
      { label: 'Typical Duties', value: 'Fermentation; aeration; gas dispersion; controlled mixing; multi-stage agitation' },
      { label: 'Future Design Metrics', value: 'Power per volume; gas flow; tip speed; torque; number of impellers' }
    ],
    compatibleImpellers: [
      { slug: 'rushton-turbine', name: 'Rushton Turbine', description: 'Gas dispersion and high-shear agitation in fermentation.', image: images.impellers.rushton },
      { slug: 'hydrofoil', name: 'Hydrofoil', description: 'Effective circulation and bulk mixing in bioprocess tanks.', image: images.impellers.hydrofoil },
      { slug: 'pitched-blade-turbine', name: 'Pitched-Blade Turbine', description: 'Versatile mixing for multi-stage bioprocess configurations.', image: images.impellers.pitchedBlade },
      { slug: 'propeller', name: 'Propeller', description: 'High pumping and circulation for bioprocess applications.', image: images.impellers.propeller }
    ]
  }
];

export const getTopEntrySeries = (slug: string) =>
  topEntrySeries.find((series) => series.slug === slug);
