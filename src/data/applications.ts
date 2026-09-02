import type { Application } from '../types';

export const applications: Application[] = [
{
  slug: 'blending',
  name: 'Blending',
  summary: 'Bringing miscible liquids to a uniform composition throughout the vessel.',
  challenge:
  'Poorly placed impellers leave stagnant zones near the wall and below the bottom impeller, so samples taken from different heights show different concentrations.',
  technology:
  'A high-flow axial impeller sized to roughly one third of the tank diameter, positioned to produce a full top-to-bottom circulation loop with a verified blend time.',
  agitators: ['top-entry-agitator', 'side-entry-agitator', 'bottom-entry-agitator'],
  impellers: ['hydrofoil', 'pitched-blade-turbine', 'marine-propeller'],
  industries: ['dairy', 'food-beverage', 'chemical'],
  icon: 'Waves'
},
{
  slug: 'homogenization',
  name: 'Homogenization',
  summary: 'Reducing droplet or particle size to a narrow, stable distribution.',
  challenge:
  'Bulk circulation alone cannot reduce droplet size; without a defined shear zone the product separates or shows visible texture variation.',
  technology:
  'A rotor-stator head providing a controlled high shear zone, combined with a bulk impeller that ensures the entire batch passes through it a sufficient number of times.',
  agitators: ['high-shear-dissolver', 'coaxial-agitator', 'top-entry-agitator'],
  impellers: ['rotor-stator', 'hydrofoil'],
  industries: ['cosmetics', 'pharmaceutical', 'dairy', 'food-beverage'],
  icon: 'Layers'
},
{
  slug: 'suspension',
  name: 'Solids Suspension',
  summary: 'Keeping settling solids lifted and evenly distributed in the liquid.',
  challenge:
  'Below the just-suspended speed, solids build a layer on the vessel bottom that reduces active volume, blocks outlets and causes off-spec discharge.',
  technology:
  'Axial impellers with adequate bottom clearance and power input to exceed the just-suspended condition for the specific particle size and density.',
  agitators: ['top-entry-agitator', 'side-entry-agitator', 'bottom-entry-agitator'],
  impellers: ['pitched-blade-turbine', 'hydrofoil', 'marine-propeller'],
  industries: ['chemical', 'food-beverage', 'pharmaceutical'],
  icon: 'ArrowDownUp'
},
{
  slug: 'dispersion',
  name: 'Dispersion',
  summary: 'Wetting powders and breaking agglomerates into the liquid phase.',
  challenge:
  'Powders float, form lumps or fisheyes and take excessive time to incorporate, leaving unreacted material and inconsistent product properties.',
  technology:
  'A serrated dissolver disc at high tip speed creating a controlled vortex that draws powder into the shear zone and breaks agglomerates apart.',
  agitators: ['high-shear-dissolver', 'coaxial-agitator'],
  impellers: ['dissolver-disc', 'rotor-stator'],
  industries: ['chemical', 'cosmetics', 'food-beverage'],
  icon: 'Sparkles'
},
{
  slug: 'emulsification',
  name: 'Emulsification',
  summary: 'Creating a stable dispersion of two immiscible liquid phases.',
  challenge:
  'Insufficient or uneven shear produces coarse droplets that cream or separate during storage, and over-shearing wastes energy and can damage the product.',
  technology:
  'A rotor-stator element sized for the required droplet distribution, generally combined with wall scraping for heat control during the emulsification phase.',
  agitators: ['coaxial-agitator', 'high-shear-dissolver'],
  impellers: ['rotor-stator', 'anchor-scraper'],
  industries: ['cosmetics', 'pharmaceutical', 'food-beverage'],
  icon: 'Droplets'
},
{
  slug: 'dissolution',
  name: 'Dissolution',
  summary: 'Bringing solids fully into solution within the required cycle time.',
  challenge:
  'Slow dissolution extends batch time and leaves undissolved material at the vessel bottom, especially for fine or hygroscopic powders.',
  technology:
  'Sufficient bulk turnover to keep the concentration gradient at the particle surface high, supported by localised shear where the powder is introduced.',
  agitators: ['top-entry-agitator', 'bottom-entry-agitator', 'high-shear-dissolver'],
  impellers: ['pitched-blade-turbine', 'dissolver-disc'],
  industries: ['pharmaceutical', 'dairy', 'chemical', 'food-beverage'],
  icon: 'FlaskConical'
},
{
  slug: 'heat-transfer',
  name: 'Heat Transfer',
  summary: 'Maintaining temperature uniformity and jacket efficiency.',
  challenge:
  'Product stagnating at the jacket wall forms an insulating boundary layer, slowing heating and cooling and risking local overheating of sensitive products.',
  technology:
  'Flow directed along the vessel wall — by an axial impeller in low viscosity duty, or by an anchor with scrapers where the product is viscous.',
  agitators: ['top-entry-agitator', 'coaxial-agitator', 'side-entry-agitator'],
  impellers: ['anchor-scraper', 'hydrofoil', 'spiral-anchor'],
  industries: ['dairy', 'cosmetics', 'chemical', 'biotech'],
  icon: 'Thermometer'
},
{
  slug: 'gas-dispersion',
  name: 'Gas Dispersion',
  summary: 'Breaking a gas stream into fine bubbles for effective mass transfer.',
  challenge:
  'Large bubbles rise straight through the liquid, giving short contact time and poor oxygen transfer, which directly limits fermentation yield.',
  technology:
  'A radial disc turbine positioned above the sparger to shear the gas stream, with upper axial stages distributing the bubbles through the vessel.',
  agitators: ['top-entry-agitator', 'bottom-entry-agitator'],
  impellers: ['rushton-turbine', 'hydrofoil'],
  industries: ['biotech', 'chemical'],
  icon: 'Wind'
},
{
  slug: 'solid-liquid-mixing',
  name: 'Solid–Liquid Mixing',
  summary: 'Handling high solid loadings and fibrous or abrasive substrates.',
  challenge:
  'High solids content increases apparent viscosity and abrasion, forming floating layers on top and sediment at the bottom of the vessel.',
  technology:
  'Robust impellers with wear-resistant detailing and a flow pattern designed to break floating layers while keeping the bottom free of deposits.',
  agitators: ['side-entry-agitator', 'custom-agitator', 'top-entry-agitator'],
  impellers: ['marine-propeller', 'pitched-blade-turbine'],
  industries: ['chemical', 'food-beverage'],
  icon: 'Boxes'
},
{
  slug: 'viscous-mixing',
  name: 'Viscous Product Mixing',
  summary: 'Achieving genuine turnover in pastes, gels and creams.',
  challenge:
  'In the laminar regime a conventional impeller carves a rotating cavern around itself while the rest of the batch stands still.',
  technology:
  'Large-diameter wall-contact elements — anchors and helical ribbons — that mechanically move the whole batch, often paired with a high shear element.',
  agitators: ['coaxial-agitator', 'custom-agitator', 'top-entry-agitator'],
  impellers: ['spiral-anchor', 'anchor-scraper', 'dissolver-disc'],
  industries: ['cosmetics', 'food-beverage', 'chemical', 'pharmaceutical'],
  icon: 'Spline'
}];


export const getApplication = (slug: string) => applications.find((a) => a.slug === slug);