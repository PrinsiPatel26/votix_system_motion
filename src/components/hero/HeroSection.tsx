import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRightIcon,
  FanIcon,
  HeadphonesIcon,
  SettingsIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
} from
'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { SmartImage } from '../ui/SmartImage';
import { images } from '../../data/images';
import { useQuote } from '../../contexts/QuoteContext';
import { EASE_SMOOTH } from '../../utils/motion';

const callouts = [
{
  icon: SettingsIcon,
  title: 'Premium Gearbox',
  text: 'High efficiency tactical gearbox'
},
{
  icon: ShieldCheckIcon,
  title: 'Robust Shaft Design',
  text: 'Precision engineered for long life'
},
{
  icon: FanIcon,
  title: 'Optimized Impellers',
  text: 'High flow • Low power • Uniform mixing'
},
{
  icon: ShieldCheckIcon,
  title: 'Hygienic Tank Design',
  text: 'Easy to clean • No dead zones • CIP / SIP compatible'
},
{
  icon: SlidersHorizontalIcon,
  title: 'Custom Mounting Solutions',
  text: 'Top, side & bottom entry configurations'
}];

const dashboardFeatures = [
  { icon: SettingsIcon, title: 'Engineered to Perform', text: 'Application focused designs' },
  { icon: ShieldCheckIcon, title: 'Built to Last', text: 'SS304 / SS316 construction' },
  { icon: SlidersHorizontalIcon, title: 'Customised to Your Process', text: 'Tailored to your mixing needs' },
  { icon: HeadphonesIcon, title: 'Supported at Every Step', text: 'End to end support you can count on' },
];

export function HeroSection() {
  const reduce = useReducedMotion();
  const { openQuote } = useQuote();

  return (
    <section
      className="hero-section relative overflow-hidden bg-white"
      aria-labelledby="hero-title">
      <Container className="hero-container relative pt-[var(--header-height)] lg:pt-[var(--header-height)]">
        <div className="hero-content grid grid-cols-1 items-center gap-0 lg:gap-0 xl:gap-0 xl:grid-cols-[minmax(0,0.7fr)_minmax(0,1.45fr)]">
          {/* Left Column - Copy + CTA */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE_SMOOTH }}
            className="hero-section-left">
            
            <h1
              id="hero-title"
              className="hero-title flex flex-col items-start text-left font-display text-[clamp(38px,4vw,70px)] font-semibold leading-[0.92] tracking-[-0.055em] text-brand-700">
              
              MOTION,
              <span className="block text-accent-400">ENGINEERED</span>
            </h1>

            <div className="mt-5 flex items-center gap-2" aria-hidden>
              <span className="h-1.5 w-16 rounded-full bg-navy" />
              <span className="h-1.5 w-8 rounded-full bg-brand-200" />
            </div>

            <p className="mt-5 font-display text-base font-bold uppercase tracking-[0.16em] text-brand-600">
              Industrial Agitation &amp; Mixing
            </p>

            <p className="hero-description mt-3 max-w-lg text-[17px] leading-relaxed text-steel-600">
              High performance mixing &amp; agitation solutions for food, dairy, pharmaceutical
              &amp; process industries.
            </p>

            <div className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/products" variant="primary" size="lg" className="hero-button">
                Explore Products
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </Button>
              <Button variant="primary" size="lg" onClick={() => openQuote()} className="hero-button">
                Talk to an Expert
              </Button>
            </div>
          </motion.div>

          {/* Right-side compact group: machine + feature cards */}
          <div className="hero-right-visuals">
            <motion.div
              initial={false}
              transition={{ duration: 0.45, delay: 0.05, ease: EASE_SMOOTH }}
              className="hero-product-column relative flex items-center justify-center">
              <SmartImage
                src={images.hero.agitator}
                alt="VOTIX top entry agitator shown in a cutaway stainless steel tank with an orange motor and gearbox and a blue mixing vortex"
                ratio=""
                className="hero-product-image relative bg-transparent"
                imgClassName="object-contain mix-blend-multiply"
                objectFit="contain"
                priority />
            </motion.div>

            <div className="hero-features-column flex flex-col justify-center gap-2">
              <motion.div
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
                className="flex flex-col gap-2">
                {callouts.map(({ icon: Icon, title, text }) => {
                  return (
                    <motion.div
                      key={title}
                      variants={{
                        hidden: reduce ? { opacity: 0 } : { opacity: 0, x: 30 },
                        show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE_SMOOTH } }
                      }}
                      className="hero-callout w-full">
                      <div className="flex items-center gap-2 rounded-full border-2 border-accent bg-white px-3 py-2 shadow-md">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-700">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <div className="min-w-0 flex-1">
                          <span className="block font-display text-[10px] font-extrabold uppercase tracking-[0.04em] text-navy leading-tight">
                            {title}
                          </span>
                          <span className="block text-[10px] leading-tight text-steel-600">{text}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>

        <div className="hero-dashboard" aria-label="VOTIX engineering performance highlights">
          <div className="hero-dashboard-features">
            {dashboardFeatures.map(({ icon: Icon, title, text }) =>
            <div key={title} className="hero-dashboard-feature">
                <span className="hero-dashboard-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-white text-accent-700">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <span>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </span>
              </div>
            )}
          </div>
        </div>

      </Container>
    </section>);

}