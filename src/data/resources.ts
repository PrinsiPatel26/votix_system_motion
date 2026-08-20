import { images } from './images';
import type { CaseStudy, FaqItem, Resource } from '../types';

export const resources: Resource[] = [
{
  id: 'r-01',
  slug: 'votix-systems-product-brochure',
  title: 'VOTIX Systems Product Brochure',
  type: 'Brochure',
  description: 'An overview of VOTIX agitation systems, configurations and engineering support for process industries.',
  date: '2026-05-14',
  image: images.products.topEntry,
  keywords: ['agitator', 'product range', 'mixing systems', 'brochure'],
  featured: true,
  content: ['Explore the VOTIX range of top entry, side entry, bottom entry, high-shear and coaxial agitators.', 'Use this overview as a starting point for selecting the right mixing architecture for your vessel and process.']
},
{
  id: 'r-02',
  slug: 'impeller-selection-guide',
  title: 'Impeller Selection Guide',
  type: 'Technical Document',
  description: 'How impeller geometry, diameter and speed relate to flow, shear and power input across common duties.',
  date: '2026-04-02',
  image: images.impellers.hydrofoil,
  keywords: ['impeller', 'selection', 'flow', 'shear', 'power', 'technical'],
  featured: true,
  content: ['Compare axial, radial, high-shear and viscous-duty impeller families against the mixing objective.', 'The guide covers the inputs engineers use to narrow the selection before detailed sizing.']
},
{
  id: 'r-03',
  slug: 'sealing-systems-process-vessels',
  title: 'Sealing Systems for Process Vessels',
  type: 'Technical Document',
  description: 'A practical comparison of sealing arrangements for pressure, vacuum, hygienic and general process duties.',
  date: '2026-03-11',
  image: images.products.bottomEntry,
  keywords: ['sealing', 'mechanical seal', 'maintenance', 'process vessel'],
  content: ['Review the factors that influence seal selection, including pressure, vacuum, temperature, media and cleaning regime.']
},
{
  id: 'r-04',
  slug: 'preventive-maintenance-guide',
  title: 'Preventive Maintenance Guide',
  type: 'Technical Document',
  description: 'Recommended inspection points for seals, bearings, couplings and impellers in continuous and batch service.',
  date: '2026-02-20',
  image: images.support.service,
  keywords: ['maintenance', 'inspection', 'seals', 'bearings', 'impeller'],
  featured: true,
  content: ['Plan maintenance around operating conditions, duty cycle and the components most exposed to wear.']
},
{
  id: 'r-05',
  slug: 'agitator-selection-guide',
  title: 'Agitator Selection Guide',
  type: 'Technical Document',
  description: 'A structured starting point for matching vessel geometry, mixing duty and operating conditions to an agitator type.',
  date: '2026-01-28',
  image: images.products.sideEntry,
  keywords: ['agitator', 'selection', 'vessel', 'mixing duty'],
  content: ['Define the process objective first, then consider vessel proportions, viscosity, solids, temperature and available headroom.']
},
{
  id: 'r-06',
  slug: 'mixing-fundamentals',
  title: 'Mixing Fundamentals',
  type: 'Technical Document',
  description: 'Core principles behind turnover, dispersion, suspension, heat transfer and blend time in process vessels.',
  date: '2026-01-09',
  image: images.engineering.design,
  keywords: ['mixing', 'fundamentals', 'flow', 'blend time', 'process'],
  content: ['A concise reference for connecting process objectives to flow patterns, power input and equipment choices.']
},
{
  id: 'r-07',
  slug: 'industrial-agitator-range',
  title: 'Industrial Agitator Range',
  type: 'Brochure',
  description: 'A focused guide to top, side and bottom entry agitators for industrial mixing, storage and reaction duties.',
  date: '2025-12-18',
  image: images.products.topEntry,
  keywords: ['agitator', 'industrial', 'top entry', 'side entry', 'bottom entry'],
  content: ['Review the main mechanical arrangements and where each configuration is commonly applied.']
},
{
  id: 'r-08',
  slug: 'mixing-technology-overview',
  title: 'Mixing Technology Overview',
  type: 'Brochure',
  description: 'An introduction to impellers, drives, seals and engineering considerations across a complete mixing system.',
  date: '2025-11-21',
  image: images.engineering.processOptimization,
  keywords: ['mixing technology', 'impeller', 'drive', 'seals'],
  content: ['See how the main components of an agitation system work together to support repeatable process performance.']
},
{
  id: 'r-09',
  slug: 'dairy-mixing-application',
  title: 'Dairy Mixing Application',
  type: 'Case Study',
  description: 'An application reference covering hygienic agitator design, cleanability and controlled product movement in dairy processing.',
  date: '2025-10-16',
  image: images.resources.caseDairy,
  keywords: ['dairy', 'hygienic', 'CIP', 'mixing'],
  content: ['This application reference focuses on the engineering considerations involved in hygienic dairy mixing. It does not present customer performance claims.']
},
{
  id: 'r-10',
  slug: 'pharmaceutical-mixing-application',
  title: 'Pharmaceutical Mixing Application',
  type: 'Case Study',
  description: 'An application reference for cleanable pharmaceutical mixing systems, material selection and controlled process conditions.',
  date: '2025-09-12',
  image: images.industries.pharmaceutical,
  keywords: ['pharmaceutical', 'hygienic', 'cleaning', 'mixing'],
  content: ['This reference outlines the design questions that shape pharmaceutical mixing equipment without attributing results to a specific customer.']
},
{
  id: 'r-11',
  slug: 'chemical-process-mixing',
  title: 'Chemical Process Mixing',
  type: 'Case Study',
  description: 'An application reference for chemical process duties involving material compatibility, suspension and reaction mixing.',
  date: '2025-08-08',
  image: images.resources.caseChemical,
  keywords: ['chemical', 'reaction', 'suspension', 'materials'],
  content: ['Review the engineering inputs used to define a chemical mixing system, including media properties, materials and operating envelope.']
},
{
  id: 'r-12',
  slug: 'introduction-votix-agitation-systems',
  title: 'Introduction to VOTIX Agitation Systems',
  type: 'Video',
  description: 'A visual introduction to VOTIX agitator configurations and the process questions that guide equipment selection.',
  date: '2025-07-24',
  image: images.hero.agitator,
  keywords: ['video', 'agitator', 'introduction', 'mixing'],
  content: ['Watch this overview to understand the main components and configurations used in industrial agitation.']
},
{
  id: 'r-13',
  slug: 'how-an-industrial-agitator-works',
  title: 'How an Industrial Agitator Works',
  type: 'Video',
  description: 'A concise walkthrough of drive, shaft and impeller interaction inside a process vessel.',
  date: '2025-06-19',
  image: images.products.bottomEntry,
  keywords: ['video', 'agitator', 'shaft', 'impeller', 'vessel'],
  content: ['Follow the power path from drive to impeller and see how geometry creates the required process flow.']
},
{
  id: 'r-14',
  slug: 'impeller-selection-explained',
  title: 'Impeller Selection Explained',
  type: 'Video',
  description: 'An engineering overview of how impeller family and process objective are connected.',
  date: '2025-05-15',
  image: images.impellers.rushton,
  keywords: ['video', 'impeller', 'selection', 'flow', 'shear'],
  content: ['Use this visual guide alongside the Impeller Selection Guide when comparing common impeller families.']
},
{
  id: 'r-15',
  slug: 'votix-systems-updates',
  title: 'VOTIX Systems Updates',
  type: 'News',
  description: 'Updates from VOTIX Systems covering engineering work, product development and support capabilities.',
  date: '2025-04-10',
  image: images.about.manufacturing,
  keywords: ['news', 'updates', 'engineering', 'VOTIX'],
  content: ['Follow the latest developments from VOTIX Systems as the engineering and support portfolio evolves.']
},
{
  id: 'r-16',
  slug: 'mixing-technology-insights',
  title: 'Mixing Technology Insights',
  type: 'News',
  description: 'Practical observations on impeller geometry, process flow and equipment selection from the VOTIX engineering team.',
  date: '2025-03-06',
  image: images.engineering.cfd,
  keywords: ['news', 'insights', 'impeller', 'mixing technology'],
  content: ['Read concise engineering perspectives on the decisions that shape reliable mixing systems.']
},
{
  id: 'r-17',
  slug: 'industrial-process-engineering',
  title: 'Industrial Process Engineering',
  type: 'News',
  description: 'Perspectives on translating process requirements into robust, serviceable industrial equipment.',
  date: '2025-02-14',
  image: images.about.engineering,
  keywords: ['news', 'process engineering', 'serviceability', 'industrial'],
  content: ['Explore the engineering thinking behind equipment that is specified for its process and maintained throughout its service life.']
},
{
  id: 'r-18',
  slug: 'hygienic-design-dairy-applications',
  title: 'Hygienic Design for Dairy Applications',
  type: 'Brochure',
  description: 'Design detailing, surface finishes and CIP considerations for agitators used in dairy and hygienic processing.',
  date: '2025-01-23',
  image: images.industries.dairy,
  keywords: ['brochure', 'dairy', 'hygienic design', 'CIP'],
  content: ['Review the design details that support cleanability, material compatibility and dependable hygienic operation.']
},
{
  id: 'r-19',
  slug: 'cfd-study-blend-time-vessel',
  title: 'CFD Study: Blend Time in a Process Vessel',
  type: 'Case Study',
  description: 'An engineering reference showing how flow simulation can compare impeller arrangements before manufacture.',
  date: '2024-12-05',
  image: images.engineering.cfd,
  keywords: ['case study', 'CFD', 'blend time', 'impeller', 'simulation'],
  content: ['This reference describes a simulation-led comparison method without claiming customer results or project outcomes.']
},
{
  id: 'r-20',
  slug: 'coaxial-mixing-systems-explained',
  title: 'Coaxial Mixing Systems Explained',
  type: 'Video',
  description: 'A walkthrough of how a slow outer frame and inner high-shear element work together in a coaxial system.',
  date: '2024-11-15',
  image: images.products.coaxial,
  keywords: ['video', 'coaxial', 'high shear', 'viscous mixing'],
  content: ['See how independently driven elements can address demanding viscous and high-shear process requirements.']
},
{
  id: 'r-21',
  slug: 'votix-mixing-test-facility',
  title: 'VOTIX Mixing Test Facility',
  type: 'News',
  description: 'An overview of the role of pilot-scale testing in developing and validating mixing configurations.',
  date: '2024-10-04',
  image: images.engineering.processOptimization,
  keywords: ['news', 'test facility', 'scale-up', 'mixing'],
  content: ['Pilot-scale testing can help teams compare configurations and build confidence before moving to production equipment.']
},
] as Resource[];


export const caseStudies: CaseStudy[] = [
{
  id: 'cs-01',
  slug: 'dairy-fermentation-vessel',
  title: 'Uniform fermentation across a 30 m³ yoghurt vessel',
  industry: 'Dairy',
  application: 'Blending & heat transfer',
  solution:
  'Two-stage hydrofoil arrangement on a top entry drive, positioned for full turnover at partial fill levels.',
  result: 'More consistent texture between batches and shorter temperature equalisation phases.',
  image: images.resources.caseDairy,
  placeholder: true
},
{
  id: 'cs-02',
  slug: 'specialty-chemical-reactor',
  title: 'Retrofit agitator for an existing chemical reactor',
  industry: 'Chemical',
  application: 'Suspension & reaction',
  solution:
  'Custom shaft and impeller stack engineered to the existing flange and vessel internals, with an upgraded double mechanical seal.',
  result: 'Sediment build-up eliminated without modifying the vessel or its support structure.',
  image: images.resources.caseChemical,
  placeholder: true
},
{
  id: 'cs-03',
  slug: 'cosmetic-cream-line',
  title: 'Coaxial system for a cosmetic cream line',
  industry: 'Cosmetics',
  application: 'Emulsification',
  solution:
  'Anchor scraper frame combined with an independently driven rotor-stator head under vacuum operation.',
  result: 'Finer, more stable emulsion with visibly reduced air entrainment in the finished product.',
  image: images.resources.caseCosmetics,
  placeholder: true
}];


export const faqs: FaqItem[] = [
{
  question: 'What information do you need to size an agitator?',
  answer:
  'Vessel drawing or dimensions, working and total volume, product viscosity and density, solids content and particle size, temperature and pressure, the mixing task itself, and any hygiene or material requirements. A completed process data sheet covers all of it.'
},
{
  question: 'Can VOTIX agitators be retrofitted to existing vessels?',
  answer:
  'Yes. Retrofits are a common scope. We work from the existing flange, nozzle and internals, and engineer the shaft and impeller arrangement to suit — including installation through a manhole where the vessel cannot be opened.'
},
{
  question: 'Which materials are available for wetted parts?',
  answer:
  'SS 304, SS 316 and SS 316L are standard. Other alloys, coatings and surface finishes can be evaluated against the specific media, temperature and cleaning regime.'
},
{
  question: 'How do you decide between top, side and bottom entry?',
  answer:
  'It depends on tank geometry, available headroom, the mixing task and hygiene requirements. Top entry suits most process vessels, side entry suits large-diameter storage tanks and digesters, and bottom entry suits low headroom and low-level mixing in hygienic vessels.'
},
{
  question: 'Do you offer flow simulation?',
  answer:
  'CFD studies are available as part of an engineering scope. They are most valuable for large vessels, unusual geometries and cases where blend time or suspension performance must be verified before manufacture.'
},
{
  question: 'What after-sales support is available?',
  answer:
  'Installation and commissioning support, spare parts, seal and bearing service, repairs, and technical assistance for process changes or capacity increases. Support requests can be raised through the support page.'
}];


export const resourceTypes = [
'All',
'Brochure',
'Technical Document',
'Case Study',
'Video',
'News'] as
const;