import { images } from './images';
import type { Impeller } from '../types';

export const impellerFamilies = [
{ id: 'all', label: 'All Impellers' },
{ id: 'axial', label: 'Axial Flow' },
{ id: 'radial', label: 'Radial Flow' },
{ id: 'high-shear', label: 'High Shear' },
{ id: 'viscous', label: 'Viscous / Wall Contact' }] as
const;

export const impellers: Impeller[] = [
{
  id: 'imp-01',
  slug: 'hydrofoil',
  name: 'Hydrofoil',
  family: 'axial',
  familyLabel: 'Axial Flow',
  purpose: 'High flow, low shear axial pumping',
  description:
  'Swept, profiled blades generate a strong top-to-bottom circulation with minimal power draw, making the hydrofoil the default choice for large-volume blending and solids suspension.',
  suitableFor: ['Blending', 'Suspension', 'Heat transfer'],
  viscosity: 'Low to medium',
  image: images.impellers.hydrofoil
},
{
  id: 'imp-02',
  slug: 'marine-propeller',
  name: 'Marine Propeller',
  family: 'axial',
  familyLabel: 'Axial Flow',
  purpose: 'Directional axial flow in small and side-entry duties',
  description:
  'A compact three-blade propeller producing a defined axial jet. Widely used on side-entry units and smaller portable agitators where a strong directional flow pattern is required.',
  suitableFor: ['Storage tank mixing', 'Side entry duties', 'Blending'],
  viscosity: 'Low',
  image: images.impellers.propeller
},
{
  id: 'imp-03',
  slug: 'pitched-blade-turbine',
  name: 'Pitched Blade Turbine',
  family: 'axial',
  familyLabel: 'Axial Flow',
  purpose: 'Balanced axial and radial flow',
  description:
  'Four angled flat blades deliver a mixed flow pattern with moderate shear — a versatile workhorse for blending, suspension and heat transfer across many process types.',
  suitableFor: ['Blending', 'Solids suspension', 'Heat transfer'],
  viscosity: 'Low to medium',
  image: images.impellers.pitchedBlade
},
{
  id: 'imp-04',
  slug: 'rushton-turbine',
  name: 'Rushton Turbine',
  family: 'radial',
  familyLabel: 'Radial Flow',
  purpose: 'Gas dispersion and high radial shear',
  description:
  'A disc turbine with six vertical blades that breaks incoming gas into fine bubbles and creates strong radial discharge — the reference impeller for aeration and fermentation.',
  suitableFor: ['Gas dispersion', 'Fermentation', 'Reaction vessels'],
  viscosity: 'Low',
  image: images.impellers.rushton
},
{
  id: 'imp-05',
  slug: 'rotor-stator',
  name: 'High Shear Rotor Stator',
  family: 'high-shear',
  familyLabel: 'High Shear',
  purpose: 'Fine emulsification and particle size reduction',
  description:
  'Product is drawn through a narrow rotor–stator gap at high tip speed, producing intense hydraulic shear for fine emulsions, dispersions and wet milling duties.',
  suitableFor: ['Emulsification', 'Dispersion', 'Homogenization'],
  viscosity: 'Low to medium',
  image: images.impellers.rotorStator
},
{
  id: 'imp-06',
  slug: 'dissolver-disc',
  name: 'Dissolver Disc',
  family: 'high-shear',
  familyLabel: 'High Shear',
  purpose: 'Powder wetting and pigment dispersion',
  description:
  'A serrated sawtooth disc running at high tip speed to wet out powders, break agglomerates and disperse pigments and fillers into liquid carriers.',
  suitableFor: ['Dispersion', 'Powder incorporation', 'Paints & coatings'],
  viscosity: 'Medium to high',
  image: images.impellers.dissolverDisc
},
{
  id: 'imp-07',
  slug: 'anchor-scraper',
  name: 'Anchor / Anchor Scraper',
  family: 'viscous',
  familyLabel: 'Viscous / Wall Contact',
  purpose: 'Wall heat transfer in viscous products',
  description:
  'A wide frame following the vessel contour, optionally fitted with PTFE scrapers, keeping product moving along the wall for effective heating and cooling of viscous batches.',
  suitableFor: ['Viscous mixing', 'Heat transfer', 'Creams & pastes'],
  viscosity: 'High',
  image: images.impellers.anchor
},
{
  id: 'imp-08',
  slug: 'spiral-anchor',
  name: 'Spiral Anchor / Helical Ribbon',
  family: 'viscous',
  familyLabel: 'Viscous / Wall Contact',
  purpose: 'Top-to-bottom turnover of very viscous media',
  description:
  'Helical ribbons move product axially along the wall and back down the centre, achieving genuine bulk turnover in media where conventional impellers only cavitate.',
  suitableFor: ['Very viscous mixing', 'Gels & pastes', 'Homogeneity'],
  viscosity: 'Very high',
  image: images.impellers.spiralAnchor
}];


export const getImpeller = (slug: string) => impellers.find((i) => i.slug === slug);