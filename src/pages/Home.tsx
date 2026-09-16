import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { IndustriesSection } from '../components/home/IndustriesSection';
import { ProductCategories } from '../components/home/ProductCategories';
import { ImpellerRange } from '../components/home/ImpellerRange';
import { TechnologySection } from '../components/home/TechnologySection';
import { WhyVotix } from '../components/home/WhyVotix';
import { SupportSection } from '../components/home/SupportSection';
import { QuoteCTA } from '../components/home/QuoteCTA';
import { usePageMeta } from '../hooks/usePageMeta';

export function Home() {
  usePageMeta(
    'VOTIX Systems | Industrial Agitators & Mixing Systems',
    'VOTIX Systems engineers industrial agitators, impellers and custom mixing systems for food, dairy, pharmaceutical, cosmetics and process industries.'
  );

  return (
    <>
      <HeroSection />
      <IndustriesSection />
      <ProductCategories />
      <ImpellerRange />
      <TechnologySection />
      <WhyVotix />
      <SupportSection />
      <QuoteCTA />
    </>);

}