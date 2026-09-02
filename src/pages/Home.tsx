import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { IndustriesSection } from '../components/home/IndustriesSection';
import { ProductCategories } from '../components/home/ProductCategories';
import { ImpellerRange } from '../components/home/ImpellerRange';
import { TechnologySection } from '../components/home/TechnologySection';
import { WhyVotix } from '../components/home/WhyVotix';
import { CaseStudiesSection } from '../components/home/CaseStudiesSection';
import { SupportSection } from '../components/home/SupportSection';
import { QuoteCTA } from '../components/home/QuoteCTA';
import { usePageMeta } from '../hooks/usePageMeta';

export function Home() {
  usePageMeta(
    'VOTIX Systems | Industrial Agitation & Mixing Solutions',
    'VOTIX Systems engineers industrial agitators, impellers and mixing systems for dairy, food, pharmaceutical, chemical, cosmetics and biotech processes.'
  );

  return (
    <>
      <HeroSection />
      <IndustriesSection />
      <ProductCategories />
      <ImpellerRange />
      <TechnologySection />
      <WhyVotix />
      <CaseStudiesSection />
      <SupportSection />
      <QuoteCTA />
    </>);

}