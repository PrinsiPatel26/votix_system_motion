/**
 * Central image registry.
 * Every image path used across the site is declared here so assets can be swapped
 * for locally hosted files (e.g. "/images/hero/hero-agitator.webp") in one place.
 */
export const images = {
  hero: {
    agitator: "/46fa9fbe-edd9-44ff-a0d0-6c56b8164d3e.jpg"

  },
  products: {
    topEntry: "/da2e330c-2f15-4223-970f-08c4b6050019.jpg",

    sideEntry: "/91acfdf2-77cf-4016-9b21-a2bc821ca849.jpg",

    bottomEntry: "/370c1b69-3512-44d2-8d0d-d621ea26d87f.jpg",

    highShear: "/ba914533-7dfb-40aa-8eea-88c97c8b8d11.jpg",

    coaxial: "/73c391cb-9292-47d0-b9ee-3e9e0fa6c0bc.jpg",

    custom: "/641a6575-4cbd-4ec2-8392-7748bd756f8c.jpg"

  },
  impellers: {
    hydrofoil: "/52d8166b-da89-4f85-aaae-09c770be5f21.jpg",

    propeller: "/6f0f55ef-47af-4f7c-ac36-f740ed9bc787.jpg",

    anchor: "/64288ccc-e59c-4d7e-84cb-a91858e832fe.jpg",

    pitchedBlade: "/3ffbc316-2193-4c5c-8fcf-72dc0187bb11.jpg",

    rushton: "/87c0bd7d-fd41-48c6-93b4-5b0543001b67.jpg",

    rotorStator: "/23d391c7-e833-4681-ad3d-4adddb595874.jpg",

    dissolverDisc: "/9ad731db-8796-4f74-9b62-c00a65449a2a.jpg",

    spiralAnchor: "/3f5e4701-a1b8-4135-aa31-d85ec2883b94.jpg"

  },
  industries: {
    dairy: "/e7bb19a7-a5dc-4eee-bce9-b753196c6c9b.jpg",

    foodBeverage: "/831632aa-2693-4954-889c-b3ee9e1bde32.jpg",

    pharmaceutical: "/b52769b0-f9ae-48f4-b99e-5322fef315d8.jpg",

    chemical: "/32c0e4fd-dd1d-4ea7-9efb-4d6894afa201.jpg",

    cosmetics: "/c4cdf25f-90e3-419a-bea0-d9afa2ec4e2c.jpg",

    biotech: "/0dcacda3-3dcf-4b12-9195-7fcd63ae2b11.jpg",

    biogas: "/ff7d413b-aa46-4e6d-abbe-e9ace8a6f231.jpg"

  },
  engineering: {
    cfd: "/ea0b36d4-96d2-4aeb-bc17-5659cde1397a.jpg",
    design: "/3028aaa6-94e5-4403-a35f-42a308ba631c.jpg",

    processOptimization: "/7aced208-5c05-449d-85a0-c176e7601db7.jpg"

  },
  about: {
    factory: "/afcc9982-c3ff-47c1-ae43-838eb01c438d.jpg",

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