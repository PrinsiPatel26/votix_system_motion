import { images } from './images';
import type { Industry } from '../types';

export const industries: Industry[] = [
{
  slug: 'dairy',
  name: 'Dairy',
  shortName: 'Dairy',
  tagline: 'Gentle, hygienic agitation for sensitive dairy products',
  description:
  'Dairy processing demands hygienic construction, gentle product handling and reliable temperature uniformity. VOTIX agitators are configured for milk, cream, yoghurt, cheese and fermented products, with hygienic finishes, sanitary seals and drainable geometries that support CIP routines.',
  image: images.industries.dairy,
  requirements: [
  'Hygienic, crevice-free construction with polished contact surfaces',
  'Gentle shear to protect fat globules and protein structures',
  'CIP-friendly, fully drainable shaft and impeller geometry',
  'Uniform temperature distribution in jacketed vessels'],

  agitators: ['top-entry-agitator', 'side-entry-agitator', 'bottom-entry-agitator'],
  applications: ['blending', 'homogenization', 'heat-transfer', 'dissolution'],
  benefits: [
  'Stable product quality batch after batch',
  'Reduced cleaning time between product changeovers',
  'Lower energy input through correctly sized impellers',
  'Long service life of seals in wet, wash-down environments']

},
{
  slug: 'food-beverage',
  name: 'Food & Beverage',
  shortName: 'Food & Bev',
  tagline: 'Consistent blending across sauces, syrups and beverages',
  description:
  'From beverage syrups and juices to sauces, dressings and starch slurries, food production covers a wide viscosity range. VOTIX selects impeller combinations that keep solids in suspension, blend rapidly and protect delicate ingredients.',
  image: images.industries.foodBeverage,
  requirements: [
  'Hygienic design suited to frequent product changeover',
  'Handling of both thin liquids and high-viscosity pastes',
  'Reliable suspension of sugars, starches and particulates',
  'Food-contact compliant materials and surface finishes'],

  agitators: ['top-entry-agitator', 'high-shear-dissolver', 'coaxial-agitator'],
  applications: ['blending', 'suspension', 'dissolution', 'emulsification'],
  benefits: [
  'Faster batch turnaround with shorter blend times',
  'Homogeneous taste, colour and texture in every batch',
  'Flexible operation across a wide recipe portfolio',
  'Simplified cleaning and inspection']

},
{
  slug: 'pharmaceutical',
  name: 'Pharmaceutical',
  shortName: 'Pharma',
  tagline: 'Controlled, documented mixing for regulated processes',
  description:
  'Pharmaceutical manufacturing requires traceable materials, sanitary detailing and repeatable process conditions. VOTIX supplies agitators with sanitary seal arrangements, documented material specification and geometries designed for validation-friendly cleaning.',
  image: images.industries.pharmaceutical,
  requirements: [
  'Sanitary seal arrangements and low dead-space design',
  'Documented material traceability and surface finish',
  'Repeatable, low-variation mixing conditions',
  'Compatibility with clean-in-place and steam cleaning'],

  agitators: ['top-entry-agitator', 'bottom-entry-agitator', 'high-shear-dissolver'],
  applications: ['dissolution', 'suspension', 'homogenization', 'emulsification'],
  benefits: [
  'Reproducible batch results supporting quality control',
  'Design detail that supports cleaning validation',
  'Full documentation package with each unit',
  'Scalable from pilot to production volumes']

},
{
  slug: 'chemical',
  name: 'Chemical',
  shortName: 'Chemical',
  tagline: 'Robust agitation for demanding chemical duties',
  description:
  'Chemical processes place high mechanical and corrosive loads on mixing equipment. VOTIX engineers shaft, seal and impeller systems for the specific media, temperature and pressure of your reactor or storage vessel.',
  image: images.industries.chemical,
  requirements: [
  'Corrosion-resistant material selection for aggressive media',
  'Sealing systems suited to pressure and vacuum duties',
  'Shaft dynamics verified for long, unsupported lengths',
  'Reliable operation in continuous 24/7 service'],

  agitators: ['top-entry-agitator', 'side-entry-agitator', 'custom-agitator'],
  applications: ['blending', 'gas-dispersion', 'suspension', 'heat-transfer'],
  benefits: [
  'Extended equipment life in aggressive service',
  'Predictable reaction and blend times',
  'Reduced unplanned downtime through robust design',
  'Engineering support for retrofits into existing vessels']

},
{
  slug: 'cosmetics',
  name: 'Cosmetics',
  shortName: 'Cosmetics',
  tagline: 'Stable emulsions and flawless product texture',
  description:
  'Creams, lotions, gels and serums depend on stable emulsions and a controlled shear history. VOTIX combines slow wall-scraping elements with high shear heads so viscous cosmetic products are mixed thoroughly without air entrainment.',
  image: images.industries.cosmetics,
  requirements: [
  'Combined low-speed scraping and high-shear dispersion',
  'Effective wall heat transfer for heating and cooling phases',
  'Air-free mixing to preserve product appearance',
  'Handling of viscosity changes through the batch cycle'],

  agitators: ['coaxial-agitator', 'high-shear-dissolver', 'top-entry-agitator'],
  applications: ['emulsification', 'homogenization', 'viscous-mixing', 'dispersion'],
  benefits: [
  'Fine, stable emulsions with consistent droplet size',
  'Uniform texture and colour throughout the batch',
  'Shorter cycle times for heating and cooling',
  'Repeatable results when scaling recipes up']

},
{
  slug: 'biotech',
  name: 'Biotech',
  shortName: 'Biotech',
  tagline: 'Controlled mass transfer for living systems',
  description:
  'Fermentation and cell culture processes need effective oxygen transfer with controlled shear. VOTIX configures impeller stacks and drive systems for bioreactors where mixing intensity directly influences yield.',
  image: images.industries.biotech,
  requirements: [
  'Efficient gas dispersion and oxygen mass transfer',
  'Shear levels matched to cell or organism sensitivity',
  'Sterile-capable seal arrangements',
  'Homogeneous nutrient and pH distribution'],

  agitators: ['top-entry-agitator', 'bottom-entry-agitator'],
  applications: ['gas-dispersion', 'blending', 'suspension', 'heat-transfer'],
  benefits: [
  'Improved mass transfer at controlled power input',
  'Reduced stress on sensitive cultures',
  'Consistent conditions throughout the vessel',
  'Reliable scale-up from lab to production']

}];


export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);