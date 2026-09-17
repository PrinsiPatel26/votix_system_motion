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
    'Industrial Agitator Manufacturer in India | VOTIX Systems',
    'VOTIX Systems designs and supplies industrial agitators, mixing systems, high shear mixers and impellers for food, dairy, pharmaceutical, biotech, cosmetics, chemical and process industries. Based in Vadodara, Gujarat.'
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