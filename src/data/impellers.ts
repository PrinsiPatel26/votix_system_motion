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
    slug: 'propeller',
    name: 'Propeller',
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
    id: 'imp-05',
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
    id: 'imp-06',
    slug: 'high-shear-rotor-stator',
    name: 'High-Shear Rotor-Stator',
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
    id: 'imp-07',
    slug: 'dissolver-saw-tooth-disc',
    name: 'Dissolver / Saw-Tooth Disc',
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
    id: 'imp-08',
    slug: 'anchor',
    name: 'Anchor',
    family: 'viscous',
    familyLabel: 'Viscous / Wall Contact',
    purpose: 'Wall-following tangential mixing for viscous products',
    description:
      'A wide frame following the vessel contour, moving product close to the wall for effective heating, cooling and bulk circulation in high-viscosity batches.',
    suitableFor: ['Viscous mixing', 'Heat transfer', 'Creams & pastes'],
    viscosity: 'High',
    image: images.impellers.anchor
  },
  {
    id: 'imp-09',
    slug: 'hollow-blade-turbine',
    name: 'Hollow Blade Turbine',
    family: 'radial',
    familyLabel: 'Radial Flow',
    purpose: 'High-intensity radial flow and gas dispersion',
    description:
      'A hollow-blade disc turbine designed to create strong radial discharge and controlled turbulence for gas dispersion, blending and demanding process duties.',
    suitableFor: ['Gas dispersion', 'Blending', 'Reaction vessels'],
    viscosity: 'Low to medium',
    image: images.impellers.hollowBlade
  },
  {
    id: 'imp-11',
    slug: 'custom',
    name: 'Custom Impellers',
    family: 'viscous',
    familyLabel: 'Process Specific',
    purpose: 'Process-specific design for special tank geometry and duty',
    description:
      'Custom impellers are engineered for non-standard tank geometry, special process requirements, or performance tuning beyond off-the-shelf mixing elements.',
    suitableFor: ['Special tank geometry', 'Special process requirements', 'Custom mixing duty'],
    viscosity: 'Application-specific',
    image: images.impellers.hydrofoil
  }
];

export const getImpeller = (slug: string) => {
  const canonicalSlug = slug === 'rotor-stator' || slug === 'high-speed-impeller' ? 'high-shear-rotor-stator' :
    slug === 'dissolver-disc' ? 'dissolver-saw-tooth-disc' :
    slug === 'custom-impellers' ? 'custom' :
    slug;

  return impellers.find((i) => i.slug === canonicalSlug);
};