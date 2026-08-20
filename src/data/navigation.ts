export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  title?: string;
  items: NavChild[];
}

export interface NavItem {
  label: string;
  href: string;
  groups?: NavGroup[];
}

export const navigation: NavItem[] = [
{ label: 'Home', href: '/' },
{
  label: 'Products',
  href: '/products',
  groups: [
  {
    title: 'All Agitators',
    items: [
    {
      label: 'Complete Agitator Range',
      href: '/products',
      description: 'Browse, filter and compare every VOTIX agitator'
    },
    {
      label: 'Custom Engineered',
      href: '/products/custom-agitator',
      description: 'Built around your process and vessel'
    }]

  },
  {
    title: 'Types of Agitators',
    items: [
    { label: 'Top Entry Agitators', href: '/products/top-entry-agitator' },
    { label: 'Side Entry Agitators', href: '/products/side-entry-agitator' },
    { label: 'Bottom Entry Agitators', href: '/products/bottom-entry-agitator' },
    { label: 'High Shear / Dissolver', href: '/products/high-shear-dissolver' },
    { label: 'Coaxial Agitators', href: '/products/coaxial-agitator' }]

  },
  {
    title: 'Types of Impellers',
    items: [
    { label: 'Impeller Range', href: '/products/impellers' },
    { label: 'Hydrofoil & Propeller', href: '/products/impellers?family=axial' },
    { label: 'Rushton & Radial', href: '/products/impellers?family=radial' },
    { label: 'High Shear Elements', href: '/products/impellers?family=high-shear' },
    { label: 'Anchor & Helical', href: '/products/impellers?family=viscous' }]

  }]

},
{
  label: 'Industries',
  href: '/industries',
  groups: [
  {
    items: [
    { label: 'Dairy', href: '/industries/dairy' },
    { label: 'Food & Beverage', href: '/industries/food-beverage' },
    { label: 'Pharmaceutical', href: '/industries/pharmaceutical' },
    { label: 'Chemical', href: '/industries/chemical' },
    { label: 'Cosmetics', href: '/industries/cosmetics' },
    { label: 'Biotech', href: '/industries/biotech' },
    { label: 'Biogas & Renewable Energy', href: '/industries/biogas' }]

  }]

},
{ label: 'Applications', href: '/applications' },
{
  label: 'Technology',
  href: '/technology',
  groups: [
  {
    items: [
    { label: 'Mixing Technology', href: '/technology#mixing-technology' },
    { label: 'Engineering Expertise', href: '/technology#engineering' },
    { label: 'Process Optimization', href: '/technology#process-optimization' },
    { label: 'CFD / Flow Simulation', href: '/technology#cfd' },
    { label: 'Custom Design', href: '/technology#custom-design' }]

  }]

},
{ label: 'About Us', href: '/about' },
{ label: 'Support', href: '/support' },
{
  label: 'Resources',
  href: '/resources',
  groups: [
  {
    items: [
    { label: 'Brochures', href: '/resources?type=Brochure' },
    { label: 'Technical Documents', href: '/resources?type=Technical+Document' },
    { label: 'Case Studies', href: '/resources?type=Case+Study' },
    { label: 'Videos', href: '/resources?type=Video' },
    { label: 'News', href: '/resources?type=News' },
    { label: 'FAQs', href: '/resources#faqs' }]

  }]

}];


export const company = {
  name: 'VOTIX SYSTEMS',
  tagline: 'Motion, Engineered.',
  phone: '+91 98250 00000',
  phoneHref: 'tel:+919825000000',
  email: 'info@votixsystems.com',
  emailHref: 'mailto:info@votixsystems.com',
  addressLines: ['VOTIX Systems', 'Plot 24, Industrial Estate', 'Ahmedabad, Gujarat, India'],
  hours: [
  { days: 'Monday – Friday', time: '09:00 – 18:00 IST' },
  { days: 'Saturday', time: '09:00 – 13:00 IST' },
  { days: 'Sunday', time: 'Closed' }]

};