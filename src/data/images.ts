/**
 * Central image registry.
 * Every image path used across the site is declared here so assets can be swapped
 * for locally hosted files (e.g. "/images/hero/hero-agitator.webp") in one place.
 */
export const images = {
  hero: {
    agitator: "/ChatGPT%20Image%20Aug%2031,%202026,%2010_00_09%20AM-v.png"

  },
  products: {
    topEntry: "/assets/VTX%20G%20SERIES.png",
    topEntrySeries: "/assets/VTX%20G%20SERIES%20-%201.png",
    topEntryAnchorSeries: "/assets/VTX%20A%20SERIES%20-1.png",
    topEntryCoaxialSeries: "/assets/VTX%20CX%20SERIES%20-%201.png",
    topEntryHighShearSeries: "/assets/VTX%20HS%20SERIES%20-1.png",
    topEntryJetMixerSeries: "/assets/VTX%20JM%20SERIES-1.png",
    topEntryFermenterSeries: "/assets/VTX%20FB%20SERIES-1.png",

    sideEntry: "/assets/VTX%20SE%20SERIES.png",
    sideEntryStandard: "/assets/VTX%20SE%20SERIES%20-%201.png",
    sideEntryHighFlow: "/assets/VTX%20SEH%20SERIES-1.png",
    sideEntryBlending: "/assets/vtx_sb_1.png",
    sideEntryBlendingSecondary: "/assets/vtx_sb_2.png",

    bottomEntry: "/assets/vtx_be_1.png",
    bottomEntrySecondary: "/assets/vtx_be_2.png",
    bottomEntryUImpeller: "/assets/VTX%20BU%20SERIES-1.png",
    bottomEntryHighShear: "/assets/beh_1.png",
    bottomEntryHighShearSecondary: "/assets/beh_2.png",
    bottomEntryHygienic: "/assets/VTX%20BH%20SERIES%20-%201.png",

    highShear: "/ba914533-7dfb-40aa-8eea-88c97c8b8d11.jpg",

    coaxial: "/73c391cb-9292-47d0-b9ee-3e9e0fa6c0bc.jpg",

    custom: "/assets/custom1_new.png",
    customSecondary: "/assets/custom2_new.png"

  },
  impellers: {
    hydrofoil: "/assets/hydrofoil_new.png",

    hollowBlade: "/assets/impaleer_new.png",

    propeller: "/assets/Propeller%20Impeller.png",

    anchor: "/assets/ANCHOR%20IMPELLER.png",

    pitchedBlade: "/assets/Pitch%20Blade%20Impeller.png",

    rushton: "/assets/Rushton%20Turbine%20Impeller.png",

    rotorStator: "/23d391c7-e833-4681-ad3d-4adddb595874.jpg",

    dissolverDisc: "/assets/Dissolver%20disc.png",

    spiralAnchor: "/3f5e4701-a1b8-4135-aa31-d85ec2883b94.jpg"

  },
  industries: {
    dairy: "/e7bb19a7-a5dc-4eee-bce9-b753196c6c9b.jpg",

    foodBeverage: "/831632aa-2693-4954-889c-b3ee9e1bde32.jpg",

    pharmaceutical: "/b52769b0-f9ae-48f4-b99e-5322fef315d8.jpg",

    chemical: "/32c0e4fd-dd1d-4ea7-9efb-4d6894afa201.jpg",

    cosmetics: "/c4cdf25f-90e3-419a-bea0-d9afa2ec4e2c.jpg",

    biotech: "/0dcacda3-3dcf-4b12-9195-7fcd63ae2b11.jpg"

  },
  engineering: {
    cfd: "/ea0b36d4-96d2-4aeb-bc17-5659cde1397a.jpg",
    design: "/3028aaa6-94e5-4403-a35f-42a308ba631c.jpg",

    processOptimization: "/7aced208-5c05-449d-85a0-c176e7601db7.jpg"

  },
  about: {
    factory: "/votix_system11.png",

    manufacturing: "/6982a6c9-6b43-4b21-b5e3-6011d0c1c4ff.jpg",

    engineering: "/3028aaa6-94e5-4403-a35f-42a308ba631c.jpg"

  },
  support: {
    service: "/ce43388e-d9c5-41a5-a84f-f9291086ec74.jpg",

    manufacturing: "/6982a6c9-6b43-4b21-b5e3-6011d0c1c4ff.jpg"

  },
  resources: {
    caseDairy: "/0016f6b9-b1bb-4048-bde1-9c41167a3701.jpg",

    caseChemical: "/48c8a8c2-bedd-4ee7-860c-1e16c68dd279.jpg",

    caseCosmetics: "/c4cdf25f-90e3-419a-bea0-d9afa2ec4e2c.jpg"

  }
} as const;