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
{
  label: 'Products',
  href: '/products',
  groups: [
  {
    title: 'All Agitators',
    items: [
    {
      label: 'Complete Agitator Range',
      href: '/agitators',
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
    { label: 'Top Entry Agitators', href: '/products/top-entry-agitators' },
    { label: 'Side Entry Agitators', href: '/products/side-entry-agitators' },
    { label: 'Bottom Entry Agitators', href: '/products/bottom-entry-agitators' }]

  },
  {
    title: 'Types of Impellers',
    items: [
    { label: 'All Impeller Range', href: '/products/impellers' },
    { label: 'Hydrofoil & Propeller', href: '/products/impellers?family=axial' },
    { label: 'Rushton & Radial', href: '/products/impellers?family=radial' },
    { label: 'High Shear Elements', href: '/products/impellers?family=high-shear' },
    { label: 'Viscous / Wall Contact', href: '/products/impellers?family=viscous' },
    { label: 'Axial Flow', href: '/products/impellers?family=axial' },
    ]

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
    { label: 'Biotech', href: '/industries/biotech' }]

  }]

},
{ label: 'Applications', href: '/applications' },
{ label: 'About Us', href: '/about' }];


export const company = {
  name: 'VOTIX SYSTEMS',
  tagline: 'Motion, Engineered.',
  phone: '+91 99749 95554',
  phoneHref: 'tel:+919974995554',
  emails: ['info@votixsystems.com', 'sales@votixsystems.com'],
  addressLines: ['SF-209 Satva Avenue', 'Near Avsar Party Plot', 'Sama Savli Road, Vadodara - Pin 390024'],
  hours: [
  { days: 'Monday – Friday', time: '09:00 – 18:00 IST' },
  { days: 'Saturday', time: '09:00 – 13:00 IST' },
  { days: 'Sunday', time: 'Closed' }]

};