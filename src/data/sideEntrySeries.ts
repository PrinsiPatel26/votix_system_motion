import { images } from './images';

export type SideEntrySeries = {
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

export const sideEntrySeries: SideEntrySeries[] = [
  {
    slug: 'vtx-se-standard',
    name: 'VTX-SE STANDARD',
    series: 'Side Entry Agitators – Standard',
    tagline: 'RELIABLE SIDE ENTRY MIXING.',
    description:
      'VTX-SE is the primary side-entry platform for general-purpose mixing where top entry is not practical. Engineered for large-volume blending, circulation, and uniform mixing across diverse industrial applications.',
    applications: ['Blending', 'Circulation', 'Maintaining Uniformity', 'Suspension', 'Sedimentation Prevention', 'Homogenization'],
    industries: ['Food & Beverage', 'Dairy', 'Process Liquids', 'Storage Tanks', 'Water / Process Applications'],
    image: images.products.sideEntryStandard,
    gallery: [images.products.topEntry, images.impellers.propeller, images.impellers.hydrofoil, images.engineering.cfd],
    benefits: ['Reliable Circulation', 'Flexible Mounting', 'Compact Design', 'Easy Maintenance'],
    overview: [
      'VTX-SE is the main side-entry platform for reliable mixing where top entry is not practical.',
      'The side-mounted configuration allows flexible vessel integration and minimal vessel modification.',
      'Engineered for large-volume blending, circulation, and maintaining uniformity across low-to-medium viscosity duties.',
      'Compatible with propeller, hydrofoil, and pitched-blade turbine impellers for process-specific optimization.'
    ],
    features: [
      'Side-entry mounting for flexible vessel integration',
      'Reliable circulation across large tank volumes',
      'Compatible with multiple impeller types',
      'Engineered for low-to-medium viscosity mixing',
      'Compact external drive design',
      'Custom shaft configurations available'
    ],
    technical: [
      { label: 'Motor Power', value: '0.37–30 kW' },
      { label: 'Vessel Volume', value: '2,000 L–500,000 L+' },
      { label: 'Typical Impeller', value: 'Propeller' },
      { label: 'Typical Duties', value: 'Bulk blending; circulation; maintaining uniformity; storage-tank mixing' },
      { label: 'Key Character', value: 'Compact shaft; high pumping capacity; accessible external drive' }
    ],
    specificationTable: [
      { label: 'Motor Power', value: '0.37–30 kW' },
      { label: 'Vessel Volume', value: '2,000 L–500,000 L+' },
      { label: 'Typical Impeller', value: 'Propeller' },
      { label: 'Typical Duties', value: 'Bulk blending; circulation; maintaining uniformity; storage-tank mixing' },
      { label: 'Key Character', value: 'Compact shaft; high pumping capacity; accessible external drive' }
    ],
    compatibleImpellers: [
      { slug: 'propeller', name: 'Propeller', description: 'High pumping capacity for bulk circulation and tank turnover.', image: images.impellers.propeller },
      { slug: 'hydrofoil', name: 'Hydrofoil', description: 'Efficient axial flow for blending and gentle circulation.', image: images.impellers.hydrofoil },
      { slug: 'pitched-blade-turbine', name: 'Pitched-Blade Turbine', description: 'Balanced flow for diverse mixing applications.', image: images.impellers.pitchedBlade }
    ]
  },
  {
    slug: 'vtx-seh-high-flow',
    name: 'VTX-SEH HIGH FLOW',
    series: 'Side Entry Jet Mixer / High Flow',
    tagline: 'HIGH-VOLUME CIRCULATION. LOW-ENERGY MIXING.',
    description:
      'VTX-SEH is engineered for high-volume circulation and continuous tank turnover in large storage and process tanks. Maintains concentration uniformity and prevents sedimentation with minimal energy input.',
    applications: ['Tank Turnover', 'Continuous Circulation', 'Concentration Uniformity', 'Sedimentation Prevention'],
    industries: ['Food & Beverage', 'Dairy', 'Juice', 'Process Water', 'Liquid Ingredients', 'Storage Tanks'],
    image: images.products.sideEntryHighFlow,
    gallery: [images.products.topEntry, images.impellers.hydrofoil, images.engineering.design, images.industries.dairy],
    benefits: ['High-Volume Circulation', 'Energy Efficient', 'Prevents Settling', 'Large Tank Coverage'],
    overview: [
      'VTX-SEH is optimized for high-volume circulation and continuous tank turnover in large storage and process tanks.',
      'The high-flow configuration maintains concentration uniformity and prevents sedimentation with minimal power consumption.',
      'Ideal for applications requiring constant circulation without aggressive mixing or shear.',
      'Compatible with large-diameter axial-flow and hydrofoil-type impellers for maximum throughput.'
    ],
    features: [
      'High-volume circulation capacity',
      'Engineered for continuous operation',
      'Maintains tank uniformity at low energy cost',
      'Prevents product sedimentation',
      'Large-diameter impeller capability',
      'Customizable circulation patterns'
    ],
    technical: [
      { label: 'Motor Power', value: '0.75–45 kW' },
      { label: 'Vessel Volume', value: '5,000 L–500,000 L+' },
      { label: 'Mixing Element', value: 'Side-mounted jet / high-flow circulation arrangement' },
      { label: 'Typical Duties', value: 'High-volume circulation; rapid turnover; large-tank blending' }
    ],
    specificationTable: [
      { label: 'Motor Power', value: '0.75–45 kW' },
      { label: 'Vessel Volume', value: '5,000 L–500,000 L+' },
      { label: 'Typical Impeller', value: 'Large-diameter axial-flow / hydrofoil-type impellers' },
      { label: 'Typical Duties', value: 'High-volume circulation; rapid turnover; large-tank blending' },
      { label: 'Key Character', value: 'High-flow circulation with low-energy mixing for large-volume tanks' }
    ],
    compatibleImpellers: [
      { slug: 'hydrofoil', name: 'Hydrofoil', description: 'Large-diameter hydrofoil for efficient high-volume circulation.', image: images.impellers.hydrofoil },
      { slug: 'propeller', name: 'Propeller', description: 'High-capacity propeller for tank turnover and bulk movement.', image: images.impellers.propeller }
    ]
  },
  {
    slug: 'vtx-sus-suspension',
    name: 'VTX-SUS SUSPENSION',
    series: 'Suspension Side Entry',
    tagline: 'ENGINEERED CIRCULATION FOR RELIABLE SOLIDS SUSPENSION.',
    description:
      'VTX-SUS is engineered for reliable solids suspension and bottom-to-top circulation. Maintains suspension uniformity, prevents settling, and ensures consistent product concentration.',
    applications: ['Solids Suspension', 'Sedimentation Prevention', 'Bottom-to-Top Circulation', 'Concentration Uniformity'],
    industries: ['Food & Beverage', 'Dairy', 'Ingredient Storage', 'Process Liquids with Solids', 'Chemical Processing'],
    image: images.products.topEntry,
    gallery: [images.products.topEntry, images.impellers.hydrofoil, images.impellers.pitchedBlade, images.engineering.cfd],
    benefits: ['Reliable Suspension', 'Prevents Settling', 'Consistent Uniformity', 'Bottom Coverage'],
    overview: [
      'VTX-SUS is engineered for reliable solids suspension and bottom-to-top circulation in storage and processing tanks.',
      'The configuration maintains suspension uniformity and prevents particle settling across tank volume.',
      'Impeller geometry and installation angle are engineered for optimal suspension performance based on tank geometry and solids behavior.',
      'Ideal for food suspensions, ingredient storage, and process liquids containing solids.'
    ],
    features: [
      'Engineered for solids suspension',
      'Bottom-to-top circulation pattern',
      'Maintains uniform concentration',
      'Prevents particle sedimentation',
      'Adaptable to various tank geometries',
      'Compatible with high-flow impellers'
    ],
    technical: [
      { label: 'Motor Power', value: 'Available on request' },
      { label: 'Vessel Volume', value: 'Available on request' },
      { label: 'Typical Impeller', value: 'Hydrofoil; High-Flow Axial Impeller; Pitched-Blade Turbine' },
      { label: 'Typical Duties', value: 'Solids suspension; sedimentation prevention; bottom-to-top circulation; concentration uniformity' }
    ],
    specificationTable: [
      { label: 'Motor Power', value: 'Available on request' },
      { label: 'Vessel Volume', value: 'Available on request' },
      { label: 'Typical Impeller', value: 'Hydrofoil; high-flow axial impeller; Pitched-Blade Turbine' },
      { label: 'Typical Duties', value: 'Solids suspension; sedimentation prevention; bottom-to-top circulation; concentration uniformity' },
      { label: 'Key Character', value: 'Engineered circulation for reliable solids suspension' }
    ],
    compatibleImpellers: [
      { slug: 'hydrofoil', name: 'Hydrofoil', description: 'Efficient circulation with solids suspension support.', image: images.impellers.hydrofoil },
      { slug: 'pitched-blade-turbine', name: 'Pitched-Blade Turbine', description: 'Mixed flow for effective suspension and turnover.', image: images.impellers.pitchedBlade },
      { slug: 'propeller', name: 'Propeller', description: 'High-capacity circulation for large-volume suspension.', image: images.impellers.propeller }
    ]
  },
  {
    slug: 'vtx-sb-blending',
    name: 'VTX-SB BLENDING',
    series: 'Side Entry Blending',
    tagline: 'UNIFORM BLENDING ACROSS LARGE-VOLUME TANKS.',
    description:
      'VTX-SB is optimized for uniform blending and product uniformity across large-volume storage and processing tanks. Engineered for low-to-medium viscosity liquid-liquid blending and temperature equalization.',
    applications: ['Liquid-Liquid Blending', 'Concentration Equalization', 'Temperature Equalization', 'Product Uniformity'],
    industries: ['Food & Beverage', 'Dairy', 'Liquid Storage', 'Batch Blending', 'Chemical Processing'],
    image: images.products.sideEntryBlending,
    gallery: [images.products.sideEntryBlending, images.products.sideEntryBlendingSecondary],
    benefits: ['Uniform Blending', 'Quick Mix Time', 'Temperature Control', 'Large Tank Coverage'],
    overview: [
      'VTX-SB is optimized for uniform blending and product uniformity across large-volume tanks.',
      'The configuration supports low-to-medium viscosity liquid-liquid blending and concentration equalization.',
      'Engineered to provide rapid, consistent mixing with temperature equalization across tank volume.',
      'Ideal for batch blending, ingredient mixing, and temperature control in large storage systems.'
    ],
    features: [
      'Optimized for liquid-liquid blending',
      'Rapid concentration equalization',
      'Supports temperature uniformity',
      'Flexible impeller selection',
      'Low-to-medium viscosity focus',
      'Scalable to large tank volumes'
    ],
    technical: [
      { label: 'Motor Power', value: 'Available on request' },
      { label: 'Vessel Volume', value: 'Available on request' },
      { label: 'Typical Impeller', value: 'Propeller; Hydrofoil; Pitched-Blade Impeller' },
      { label: 'Typical Duties', value: 'Liquid-liquid blending; concentration equalization; temperature equalization; product uniformity' }
    ],
    specificationTable: [
      { label: 'Motor Power', value: 'Available on request' },
      { label: 'Vessel Volume', value: 'Available on request' },
      { label: 'Typical Impeller', value: 'Propeller; Hydrofoil; Pitched-Blade Impeller' },
      { label: 'Typical Duties', value: 'Liquid-liquid blending; concentration equalization; temperature equalization; product uniformity' },
      { label: 'Key Character', value: 'Uniform blending across large-volume tanks' }
    ],
    compatibleImpellers: [
      { slug: 'propeller', name: 'Propeller', description: 'High-capacity circulation for rapid bulk blending.', image: images.impellers.propeller },
      { slug: 'hydrofoil', name: 'Hydrofoil', description: 'Efficient axial flow for uniform product mixing.', image: images.impellers.hydrofoil },
      { slug: 'pitched-blade-turbine', name: 'Pitched-Blade Turbine', description: 'Balanced flow for diverse blending applications.', image: images.impellers.pitchedBlade }
    ]
  },
  {
    slug: 'custom',
    name: 'CUSTOM SIDE ENTRY',
    series: 'Custom Side Entry Configuration',
    tagline: 'ENGINEERED AROUND YOUR PROCESS.',
    description:
      'Custom side-entry agitation engineered around your specific process requirements, tank geometry, and mixing objectives. VOTIX engineering delivers process-optimized solutions for unique applications.',
    applications: ['Custom Process Requirements', 'Specialized Tank Geometry', 'Unique Mixing Objectives', 'Application-Specific Design'],
    industries: ['Food & Beverage', 'Dairy', 'Pharmaceutical', 'Chemical', 'Cosmetics', 'Water Treatment'],
    image: images.products.custom,
    gallery: [images.products.custom, images.products.customSecondary],
    benefits: ['Process-Optimized', 'Custom Engineering', 'Flexible Design', 'Application-Specific'],
    overview: [
      'The side-entry system can be configured according to tank geometry, process duty, required circulation, and specific mixing requirements.',
      'VOTIX engineering team works with your specifications to deliver custom-engineered solutions.',
      'From specialized impeller configurations to unique shaft arrangements, every element is engineered for your process.',
      'Custom side-entry systems provide flexibility for unconventional tank geometries and specialized mixing challenges.'
    ],
    features: [
      'Engineered around your process',
      'Customizable impeller selection',
      'Flexible shaft configurations',
      'Tank-geometry optimized',
      'Process-duty engineered',
      'Application-specific materials and seals'
    ],
    technical: [
      { label: 'Motor Power', value: '0.75–45 kW' },
      { label: 'Vessel Volume', value: '2,000 L–500,000 L+' },
      { label: 'Typical Impeller', value: 'Hydrofoil' },
      { label: 'Typical Duties', value: 'Low-shear circulation; bulk blending; heat-transfer assistance; delicate-product mixing' }
    ],
    specificationTable: [
      { label: 'Motor Power', value: '0.75–45 kW' },
      { label: 'Vessel Volume', value: '2,000 L–500,000 L+' },
      { label: 'Typical Impeller', value: 'Hydrofoil' },
      { label: 'Typical Duties', value: 'Low-shear circulation; bulk blending; heat-transfer assistance; delicate-product mixing' },
      { label: 'Key Character', value: 'Custom hydrofoil side-entry mixing for process-specific duties' }
    ],
    compatibleImpellers: [
      { slug: 'propeller', name: 'Propeller', description: 'High-capacity circulation impeller.', image: images.impellers.propeller },
      { slug: 'hydrofoil', name: 'Hydrofoil', description: 'Efficient axial flow impeller.', image: images.impellers.hydrofoil },
      { slug: 'pitched-blade-turbine', name: 'Pitched-Blade Turbine', description: 'Versatile mixed-flow impeller.', image: images.impellers.pitchedBlade }
    ]
  }
];

export const getSideEntrySeries = (slug: string) =>
  sideEntrySeries.find((series) => series.slug === slug);
