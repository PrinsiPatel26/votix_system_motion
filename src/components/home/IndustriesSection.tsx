import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { industries } from '../../data/industries';
import { fadeUp, staggerParent, viewportOnce } from '../../utils/motion';

const industryIconImages = {
  dairy: '/dairy_icon-removebg-preview.png',
  'food-beverage': '/food_beverage_icon-removebg-preview.png',
  pharmaceutical: '/pharmaceutical_icon-removebg-preview.png',
  chemical: '/chemical_process_icon-removebg-preview.png',
  cosmetics: '/cosmetics_icon-removebg-preview.png',
  biotech: '/biotechnology_icon-removebg-preview.png',
} as const;

const industryLabels = {
  dairy: 'Dairy',
  'food-beverage': 'Food & Beverage',
  pharmaceutical: 'Pharmaceutical',
  chemical: 'Chemical / Process',
  cosmetics: 'Cosmetics',
  biotech: 'Biotechnology',
} as const;

export function IndustriesSection() {
  return (
    <section className="border-t border-steel-100 bg-mist pb-0 pt-16 lg:pt-20" aria-labelledby="industries-heading">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-8 text-center">
          <h2 id="industries-heading" className="font-display text-[clamp(22px,2.2vw,32px)] font-extrabold uppercase tracking-[0.08em] text-navy leading-[1.2]">
            Industries <span className="text-accent">We Serve</span>
          </h2>
          <span className="mx-auto mt-3 block h-0.5 w-12 bg-accent" aria-hidden />
        </motion.div>
        <motion.ul
          variants={staggerParent(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 border-y border-steel-200 bg-white sm:grid-cols-3 lg:grid-cols-6">
          
          {industries.map((industry) => {
            const iconImage = industryIconImages[industry.slug as keyof typeof industryIconImages];

            return (
          <motion.li
            key={industry.slug}
            variants={fadeUp}
            className="border-steel-200 sm:border-r sm:last:border-r-0">
            
              <Link
                to={`/industries/${industry.slug}`}
                className="group flex min-h-36 flex-col items-center justify-center gap-3 px-3 py-6 text-center transition-colors duration-200 ease-smooth hover:bg-mist focus-visible:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                aria-label={`Explore ${industry.name} mixing solutions`}>
                <img
                  src={iconImage}
                  alt=""
                  className="h-12 w-12 object-contain transition-transform duration-200 group-hover:scale-105"
                  aria-hidden />
                <span className="font-display text-xs font-extrabold uppercase leading-tight tracking-[0.04em] text-navy">
                  {industryLabels[industry.slug as keyof typeof industryLabels]}
                </span>
              </Link>
            </motion.li>
            );
          })}
        </motion.ul>
      </Container>
    </section>);

}