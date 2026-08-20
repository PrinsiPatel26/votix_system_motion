import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRightIcon,
  FanIcon,
  HeadphonesIcon,
  SettingsIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon } from
'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { SmartImage } from '../ui/SmartImage';
import { images } from '../../data/images';
import { industries } from '../../data/industries';
import { useQuote } from '../../contexts/QuoteContext';
import { EASE_SMOOTH } from '../../utils/motion';

const callouts = [
{
  icon: SettingsIcon,
  title: 'Premium Gearbox',
  text: 'High efficiency drive systems'
},
{
  icon: FanIcon,
  title: 'Engineered for Performance',
  text: 'Optimised impellers for your process'
},
{
  icon: ShieldCheckIcon,
  title: 'Hygienic Design',
  text: 'SS 304 / SS 316 construction'
},
{
  icon: SlidersHorizontalIcon,
  title: 'Custom Solutions',
  text: 'Tailored to your process needs'
},
{
  icon: HeadphonesIcon,
  title: 'Reliable Support',
  text: 'At every step'
}];


export function HeroSection() {
  const reduce = useReducedMotion();
  const { openQuote } = useQuote();

  return (
    <section className="hero-section relative overflow-hidden bg-white" aria-labelledby="hero-title">
      {/* Atmospheric technical background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 votix-grid opacity-60" />
        <div className="hero-flow hero-flow-orange absolute -left-32 top-10 h-[420px] w-[420px] rounded-full blur-3xl" />
        <div className="hero-flow hero-flow-blue absolute -right-24 bottom-0 h-[460px] w-[460px] rounded-full blur-3xl" />
        <div className="hero-rings absolute left-1/2 top-1/2 h-[min(72vw,760px)] w-[min(72vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-full border" aria-hidden />
        <div className="hero-rings absolute left-[58%] top-[42%] h-[min(46vw,500px)] w-[min(46vw,500px)] -translate-x-1/2 -translate-y-1/2 rounded-full border" aria-hidden />
        {/* Liquid flow curves */}
        <svg
          className="hero-liquid absolute inset-x-0 bottom-0 h-2/3 w-full"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          fill="none">
          
          <motion.path
            d="M-40 150 C 240 60, 420 210, 700 130 S 1180 40, 1480 120"
            stroke="#1D55A6"
            strokeOpacity="0.25"
            strokeWidth="2"
            initial={reduce ? undefined : { pathLength: 0 }}
            animate={reduce ? undefined : { pathLength: 1 }}
            transition={{ duration: 1.6, ease: EASE_SMOOTH }} />
          
          <motion.path
            d="M-40 186 C 260 110, 460 240, 760 168 S 1220 92, 1480 158"
            stroke="#FF9500"
            strokeOpacity="0.32"
            strokeWidth="2"
            initial={reduce ? undefined : { pathLength: 0 }}
            animate={reduce ? undefined : { pathLength: 1 }}
            transition={{ duration: 1.8, delay: 0.1, ease: EASE_SMOOTH }} />
          
          <path
            d="M-40 210 C 300 150, 520 260, 820 200 S 1240 140, 1480 196"
            stroke="#1D55A6"
            strokeOpacity="0.12"
            strokeWidth="6" />
          
        </svg>
      </div>

      <Container className="hero-container relative">
        <div className="hero-content grid grid-cols-1 items-center gap-8 xl:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] xl:gap-8">
          {/* Copy */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE_SMOOTH }}
            className="hero-copy">
            
            <h1
              id="hero-title"
              className="hero-title font-display text-[clamp(44px,6vw,96px)] font-black leading-[0.92] tracking-[-0.055em] text-navy">
              
              MOTION,
              <span className="block text-accent">ENGINEERED.</span>
            </h1>

            <div className="mt-5 flex items-center gap-2" aria-hidden>
              <span className="h-1.5 w-16 rounded-full bg-navy" />
              <span className="h-1.5 w-8 rounded-full bg-brand-200" />
            </div>

            <p className="mt-5 font-display text-base font-bold uppercase tracking-[0.16em] text-brand-600">
              Industrial Agitation &amp; Mixing
            </p>

            <p className="mt-3 max-w-lg text-[17px] leading-relaxed text-steel-600">
              High performance mixing &amp; agitation solutions for food, dairy, pharmaceutical
              &amp; process industries.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/products" variant="primary" size="lg">
                Explore Products
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </Button>
              <Button variant="primary" size="lg" onClick={() => openQuote()}>
                Talk to an Expert
              </Button>
            </div>
          </motion.div>

          <div className="hero-visual-column">
            {/* Product visual */}
            <motion.div
              initial={false}
              transition={{ duration: 0.45, delay: 0.05, ease: EASE_SMOOTH }}
              className="hero-product relative">
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
                <span className="h-[78%] w-[78%] rounded-full border border-brand/15" />
                <span className="absolute h-[92%] w-[92%] rounded-full border border-brand/10" />
                <span className="absolute h-[58%] w-[58%] rounded-full border border-accent/20" />
              </div>
              <SmartImage
                src={images.hero.agitator}
                alt="VOTIX top entry agitator shown in a cutaway stainless steel tank with an orange motor and gearbox and a blue mixing vortex"
                ratio=""
                className="hero-product-image relative bg-transparent"
                imgClassName="object-contain mix-blend-multiply"
                objectFit="contain"
                priority />
            </motion.div>

            {/* Engineering callouts */}
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
              className="hero-callouts grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1 lg:gap-5">
              {callouts.map(({ icon: Icon, title, text }) =>
              <motion.li
                key={title}
                variants={{
                  hidden: reduce ? { opacity: 0 } : { opacity: 0, x: 14 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.28, ease: EASE_SMOOTH } }
                }}
                className="relative flex items-start gap-3 rounded-lg border border-steel-100 bg-white/90 p-3 shadow-card backdrop-blur-sm lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                <span
                  className="hidden lg:absolute lg:-left-6 lg:top-6 lg:block lg:h-px lg:w-5 lg:bg-accent"
                  aria-hidden />
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-700 ring-1 ring-accent-100">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[13px] font-extrabold uppercase leading-tight tracking-[0.06em] text-navy">
                    {title}
                  </span>
                  <span className="mt-1 block text-[12px] leading-snug text-steel-600">{text}</span>
                </span>
              </motion.li>
              )}
            </motion.ul>
          </div>
        </div>

        {/* Industries strip */}
        <div className="hero-industries relative mt-10 rounded-xl border border-steel-100 bg-white/95 p-4 shadow-card backdrop-blur sm:p-5">
          <p className="mb-3 text-center font-display text-xs font-extrabold uppercase tracking-[0.18em] text-navy sm:text-left">
            Industries We Serve
          </p>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
            {industries.map((industry) =>
            <li key={industry.slug}>
                <Link
                to={`/industries/${industry.slug}`}
                className="group flex min-h-[48px] items-center justify-center rounded-lg border border-transparent px-2 py-2.5 text-center text-[13px] font-semibold text-steel-600 transition-[background-color,border-color,color] duration-200 ease-smooth hover:border-steel-100 hover:bg-mist hover:text-brand-600">
                
                  {industry.shortName}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </Container>
    </section>);

}