import { images } from './images';
import type { Product, ProductCategory } from '../types';

export const productCategories: {id: ProductCategory | 'all';label: string;short: string;}[] = [
{ id: 'all', label: 'All Agitators', short: 'All' },
{ id: 'top-entry', label: 'Top Entry', short: 'Top Entry' },
{ id: 'side-entry', label: 'Side Entry', short: 'Side Entry' },
{ id: 'bottom-entry', label: 'Bottom Entry', short: 'Bottom Entry' },
{ id: 'high-shear', label: 'High Shear / Dissolver', short: 'High Shear' },
{ id: 'coaxial', label: 'Coaxial', short: 'Coaxial' },
{ id: 'custom', label: 'Custom Engineered', short: 'Custom' }];


export const products: Product[] = [
{
  id: 'p-01',
  slug: 'top-entry-agitator',
  name: 'Top Entry Agitator',
  shortName: 'Top Entry',
  category: 'top-entry',
  categoryLabel: 'Top Entry',
  tagline: 'The reference configuration for process vessels',
  description:
  'Vertically mounted drive with a shaft and impeller stack selected for your vessel geometry, viscosity and mixing duty.',
  overview: [
  'The VOTIX top entry agitator is mounted on the vessel head plate and drives a vertical shaft carrying one or more impellers. It is the most widely used configuration in process industry because impeller position, diameter and count can be tuned precisely to the batch.',
  'Drive units are supplied with a helical or bevel-helical gearbox sized for continuous duty, with a lantern and seal arrangement matched to the vessel pressure, temperature and hygiene class.'],

  industries: ['dairy', 'food-beverage', 'pharmaceutical', 'chemical', 'biotech', 'cosmetics'],
  applications: ['blending', 'suspension', 'heat-transfer', 'dissolution', 'homogenization'],
  features: [
  'Gearbox and motor sized for 24/7 continuous duty',
  'Mechanical seal, lip seal or stuffing box options',
  'Single or multi-stage impeller arrangements',
  'SS 304 / SS 316 wetted parts with selectable finish'],

  advantages: [
  'Impeller stack tuned to the exact vessel geometry',
  'Predictable flow pattern and blend time',
  'Straightforward access for maintenance from the tank top',
  'Retrofittable to existing vessels and mounting flanges'],

  technicalHighlights: [
  'Shaft dynamics verified against critical speed',
  'Steady bearing option for long, slender shafts',
  'Bolted or clamped impellers for through-manhole installation',
  'Drive protection with torque-limited couplings on request'],

  image: images.products.topEntry,
  gallery: [images.products.topEntry, images.impellers.pitchedBlade, images.impellers.hydrofoil],
  specifications: [
  { label: 'Mounting', value: 'Vertical, top flange or bridge mounted' },
  { label: 'Wetted materials', value: 'SS 304 / SS 316 / SS 316L' },
  { label: 'Sealing', value: 'Lip seal, stuffing box or single/double mechanical seal' },
  { label: 'Drive', value: 'Helical or bevel-helical gear unit, IE-class motor' },
  { label: 'Speed control', value: 'Fixed speed or VFD controlled' },
  { label: 'Impellers', value: 'Hydrofoil, pitched blade, Rushton, anchor and combinations' },
  { label: 'Surface finish', value: 'Industrial, ground or polished as specified' }],

  related: ['bottom-entry-agitator', 'coaxial-agitator', 'high-shear-dissolver'],
  featured: true
},
{
  id: 'p-02',
  slug: 'side-entry-agitator',
  name: 'Side Entry Agitator',
  shortName: 'Side Entry',
  category: 'side-entry',
  categoryLabel: 'Side Entry',
  tagline: 'Efficient circulation in large-diameter tanks',
  description:
  'Horizontally mounted through the tank wall, creating a wide circulating flow pattern in storage and digester tanks.',
  overview: [
  'Side entry agitators mount horizontally on the tank shell, driving a propeller that generates a broad rotational flow across the tank. They are the economical solution where a top-mounted shaft would be impractically long.',
  'Units can be supplied with an angled mounting to fine-tune the flow pattern, and with a shut-off arrangement allowing seal service without emptying the tank.'],

  industries: ['chemical', 'food-beverage', 'dairy'],
  applications: ['blending', 'suspension', 'solid-liquid-mixing', 'heat-transfer'],
  features: [
  'Horizontal wall-mounted drive with compact footprint',
  'Marine propeller optimised for tank diameter',
  'Adjustable swivel angle for flow tuning',
  'Optional shut-off device for in-service seal change'],

  advantages: [
  'No long vertical shaft or tank-top structure required',
  'Low power consumption per m³ of tank volume',
  'Prevents sediment build-up and stratification',
  'Simple retrofit onto existing storage tanks'],

  technicalHighlights: [
  'Mechanical seal arrangements rated for tank static head',
  'Propeller geometry selected by tank diameter and duty',
  'Heavy-duty bearing housing for cantilevered loads',
  'Corrosion-resistant material options for aggressive media'],

  image: images.products.sideEntry,
  gallery: [images.products.sideEntry, images.impellers.propeller],
  specifications: [
  { label: 'Mounting', value: 'Horizontal, flanged to tank shell' },
  { label: 'Wetted materials', value: 'SS 304 / SS 316 / duplex on request' },
  { label: 'Sealing', value: 'Single or double mechanical seal' },
  { label: 'Shut-off', value: 'Optional device for seal service with tank full' },
  { label: 'Drive', value: 'Direct or gear driven, IE-class motor' },
  { label: 'Impeller', value: 'Marine propeller, three blade' }],

  related: ['top-entry-agitator', 'custom-agitator', 'bottom-entry-agitator'],
  featured: true
},
{
  id: 'p-03',
  slug: 'bottom-entry-agitator',
  name: 'Bottom Entry Agitator',
  shortName: 'Bottom Entry',
  category: 'bottom-entry',
  categoryLabel: 'Bottom Entry',
  tagline: 'Clear tank tops and effective low-level mixing',
  description:
  'Mounted through the dished bottom of the vessel, keeping the head plate free and mixing effectively even at low fill levels.',
  overview: [
  'Bottom entry agitators drive a short shaft from beneath the vessel. Because the impeller sits close to the bottom, mixing remains effective at very low liquid levels — valuable for pharmaceutical and small-batch production.',
  'The short shaft removes the need for a steady bearing and reduces overall height, which simplifies installation in low headroom areas and mobile vessels.'],

  industries: ['pharmaceutical', 'dairy', 'biotech', 'cosmetics'],
  applications: ['blending', 'suspension', 'dissolution', 'homogenization'],
  features: [
  'Compact drive mounted below the vessel',
  'Short, rigid shaft with no steady bearing required',
  'Hygienic seal arrangements for sanitary duties',
  'Effective mixing down to low working volumes'],

  advantages: [
  'Tank top stays free for nozzles, CIP heads and instruments',
  'Reduced installation height in low headroom plants',
  'Excellent low-level and heel mixing',
  'Well suited to small and mid-size hygienic vessels'],

  technicalHighlights: [
  'Sanitary mechanical seals with flush and quench options',
  'Drainable geometry supporting CIP routines',
  'Compact drive package for mobile vessel frames',
  'Impellers matched to low-clearance operation'],

  image: images.products.bottomEntry,
  gallery: [images.products.bottomEntry, images.impellers.hydrofoil, images.industries.pharmaceutical],
  specifications: [
  { label: 'Mounting', value: 'Vertical, through dished vessel bottom' },
  { label: 'Wetted materials', value: 'SS 316 / SS 316L' },
  { label: 'Sealing', value: 'Single or double sanitary mechanical seal' },
  { label: 'Drive', value: 'Direct drive or compact gear unit' },
  { label: 'Speed control', value: 'VFD controlled' },
  { label: 'Surface finish', value: 'Polished, Ra on request' }],

  related: ['top-entry-agitator', 'high-shear-dissolver', 'coaxial-agitator'],
  featured: true
},
{
  id: 'p-04',
  slug: 'high-shear-dissolver',
  name: 'High Shear Mixer / Dissolver',
  shortName: 'High Shear',
  category: 'high-shear',
  categoryLabel: 'High Shear / Dissolver',
  tagline: 'Intense shear for emulsions and dispersions',
  description:
  'High tip speed rotor-stator heads and dissolver discs for emulsification, powder wetting and particle size reduction.',
  overview: [
  'The high shear range covers both serrated dissolver discs for wetting and dispersing powders, and rotor-stator heads where product is forced through a narrow gap at high tip speed to create fine, stable emulsions.',
  'High shear units are frequently combined with a slow wall-scraping element in a coaxial arrangement so that bulk turnover and localised shear can be controlled independently.'],

  industries: ['cosmetics', 'pharmaceutical', 'chemical', 'food-beverage'],
  applications: ['emulsification', 'dispersion', 'homogenization', 'dissolution'],
  features: [
  'Interchangeable rotor-stator heads and dissolver discs',
  'High speed drive with VFD control',
  'Configurable tip speed for shear-sensitive products',
  'Available as standalone or as part of a coaxial system'],

  advantages: [
  'Fine, repeatable droplet and particle size distribution',
  'Rapid wetting of powders with fewer agglomerates',
  'Shorter dispersion cycle times',
  'Shear intensity controllable through speed and head design'],

  technicalHighlights: [
  'Rotor-stator gap selectable to the target duty',
  'Balanced high speed shaft assemblies',
  'Mechanical seal arrangements for vacuum operation',
  'Head geometry supporting cleaning and inspection'],

  image: images.products.highShear,
  gallery: [images.products.highShear, images.impellers.rotorStator, images.impellers.dissolverDisc],
  specifications: [
  { label: 'Mounting', value: 'Top entry, vertical' },
  { label: 'Mixing heads', value: 'Rotor-stator, dissolver disc' },
  { label: 'Wetted materials', value: 'SS 316 / SS 316L' },
  { label: 'Drive', value: 'High speed direct drive, VFD controlled' },
  { label: 'Sealing', value: 'Single or double mechanical seal, vacuum rated on request' }],

  related: ['coaxial-agitator', 'top-entry-agitator', 'custom-agitator'],
  featured: true
},
{
  id: 'p-05',
  slug: 'coaxial-agitator',
  name: 'Coaxial Agitator',
  shortName: 'Coaxial',
  category: 'coaxial',
  categoryLabel: 'Coaxial',
  tagline: 'Two independent mixing systems in one vessel',
  description:
  'A slow wall-scraping frame combined with an independently driven high shear element for viscous, multi-phase products.',
  overview: [
  'Coaxial systems run two shafts on the same axis: an outer anchor or spiral frame at low speed maintaining bulk movement and wall heat transfer, and an inner high shear or dissolver element at high speed handling dispersion.',
  'Each drive is controlled independently, so shear history and bulk turnover can be tuned separately at every stage of the batch — essential for creams, gels and emulsified products.'],

  industries: ['cosmetics', 'pharmaceutical', 'food-beverage', 'chemical'],
  applications: ['emulsification', 'viscous-mixing', 'homogenization', 'heat-transfer'],
  features: [
  'Independent slow-speed and high-speed drives',
  'Anchor or spiral outer frame with optional scrapers',
  'Rotor-stator or dissolver inner element',
  'Vacuum-capable configurations available'],

  advantages: [
  'Handles wide viscosity swings within one batch',
  'Excellent wall heat transfer during heating and cooling',
  'Independent control of bulk flow and shear',
  'Consistent texture with minimal air entrainment'],

  technicalHighlights: [
  'Concentric shaft arrangement with dedicated bearing systems',
  'Double mechanical seals for vacuum duty',
  'PTFE scraper blades matched to vessel contour',
  'Combined drive frame engineered for the vessel head plate'],

  image: images.products.coaxial,
  gallery: [images.products.coaxial, images.impellers.anchor, images.impellers.rotorStator],
  specifications: [
  { label: 'Mounting', value: 'Top entry, vertical, combined drive frame' },
  { label: 'Outer element', value: 'Anchor / spiral anchor, optional PTFE scrapers' },
  { label: 'Inner element', value: 'Rotor-stator or dissolver disc' },
  { label: 'Wetted materials', value: 'SS 316 / SS 316L' },
  { label: 'Sealing', value: 'Double mechanical seal, vacuum rated on request' },
  { label: 'Control', value: 'Independent VFD per drive' }],

  related: ['high-shear-dissolver', 'top-entry-agitator', 'custom-agitator'],
  featured: true
},
{
  id: 'p-06',
  slug: 'custom-agitator',
  name: 'Custom Engineered Agitator',
  shortName: 'Custom',
  category: 'custom',
  categoryLabel: 'Custom Engineered',
  tagline: 'Built around your process, vessel and constraints',
  description:
  'Application-specific agitator systems engineered from your process data, vessel drawings and installation limits.',
  overview: [
  'Where a standard configuration does not fit — unusual vessel geometry, extreme viscosity, restricted headroom or a retrofit into existing infrastructure — VOTIX engineers a bespoke solution around the actual constraints.',
  'The process starts with your product data and vessel drawings, moves through impeller selection and mechanical design, and ends with manufacturing, testing and commissioning support.'],

  industries: ['chemical', 'food-beverage', 'pharmaceutical', 'cosmetics', 'biotech', 'dairy'],
  applications: ['viscous-mixing', 'solid-liquid-mixing', 'gas-dispersion', 'blending'],
  features: [
  'Design from your process and vessel data',
  'Non-standard shaft lengths and impeller combinations',
  'Special materials and surface treatments on request',
  'Retrofit engineering for existing tanks and flanges'],

  advantages: [
  'Equipment matched to the real process, not a catalogue average',
  'Solutions for restricted headroom and difficult access',
  'Extended life in abrasive or corrosive service',
  'Single point of responsibility from design to commissioning'],

  technicalHighlights: [
  'Shaft and impeller sizing verified by calculation',
  'Optional CFD study of the proposed flow pattern',
  'Mechanical design reviewed against operating loads',
  'Documentation package aligned to project requirements'],

  image: images.products.custom,
  gallery: [images.products.custom, images.engineering.cfd, images.about.manufacturing],
  specifications: [
  { label: 'Scope', value: 'Application-specific, engineered to order' },
  { label: 'Materials', value: 'SS 304 / SS 316 / SS 316L / special alloys on request' },
  { label: 'Input required', value: 'Process data sheet and vessel drawing' },
  { label: 'Engineering', value: 'Impeller selection, shaft sizing, optional CFD' },
  { label: 'Delivery', value: 'Manufacture, testing, installation and commissioning support' }],

  related: ['top-entry-agitator', 'side-entry-agitator', 'coaxial-agitator']
}];


export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const featuredProducts = products.filter((p) => p.featured);

/** Only the three entry-position types, used by the "Types of Agitators" navigation group. */
export const agitatorTypes = products.filter((p) =>
['top-entry', 'side-entry', 'bottom-entry'].includes(p.category)
);