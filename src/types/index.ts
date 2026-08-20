export type ProductCategory =
'top-entry' |
'side-entry' |
'bottom-entry' |
'high-shear' |
'coaxial' |
'custom';

export interface SpecRow {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: ProductCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  overview: string[];
  industries: string[];
  applications: string[];
  features: string[];
  advantages: string[];
  technicalHighlights: string[];
  image: string;
  gallery: string[];
  specifications: SpecRow[];
  related: string[];
  featured?: boolean;
}

export interface Impeller {
  id: string;
  slug: string;
  name: string;
  family: 'axial' | 'radial' | 'high-shear' | 'viscous';
  familyLabel: string;
  purpose: string;
  description: string;
  suitableFor: string[];
  viscosity: string;
  image: string;
}

export interface Industry {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  image: string;
  requirements: string[];
  agitators: string[];
  applications: string[];
  benefits: string[];
}

export interface Application {
  slug: string;
  name: string;
  summary: string;
  challenge: string;
  technology: string;
  agitators: string[];
  impellers: string[];
  industries: string[];
  icon: string;
}

export interface Resource {
  id: string;
  slug: string;
  title: string;
  type: 'Brochure' | 'Technical Document' | 'Case Study' | 'News' | 'Video';
  description: string;
  date: string;
  image: string;
  file?: string;
  url?: string;
  keywords: string[];
  content?: string[];
  featured?: boolean;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  industry: string;
  application: string;
  solution: string;
  result: string;
  image: string;
  placeholder: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SearchResult {
  type: 'Product' | 'Impeller' | 'Industry' | 'Application' | 'Resource';
  title: string;
  description: string;
  href: string;
}