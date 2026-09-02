import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { SmartImage } from '../ui/SmartImage';
import { EASE_SMOOTH } from '../../utils/motion';

export interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs = [],
  image,
  imageAlt,
  children
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-steel-100 bg-navy-950">
      {image &&
      <div className="absolute inset-0" aria-hidden>
          <SmartImage
          src={image}
          alt={imageAlt ?? ''}
          ratio="h-full"
          className="h-full w-full bg-transparent opacity-25"
          imgClassName="h-full w-full"
          priority />
        
          <div className="absolute inset-0 bg-navy-950/70" />
        </div>
      }
      {!image && <div className="absolute inset-0 votix-grid-fine opacity-50" aria-hidden />}

      <Container className="relative py-12 sm:py-16 lg:py-20">
        {crumbs.length > 0 &&
        <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1 text-xs font-medium text-steel-300">
              <li>
                <Link to="/" className="hover:text-accent">
                  Home
                </Link>
              </li>
              {crumbs.map((c) =>
            <li key={c.label} className="flex items-center gap-1">
                  <ChevronRightIcon className="h-3.5 w-3.5 text-steel-500" aria-hidden />
                  {c.href ?
              <Link to={c.href} className="hover:text-accent">
                      {c.label}
                    </Link> :

              <span className="text-white">{c.label}</span>
              }
                </li>
            )}
            </ol>
          </nav>
        }

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: EASE_SMOOTH }}
          className="max-w-3xl">
          
          {eyebrow &&
          <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-accent">
              <span className="h-px w-6 bg-accent" aria-hidden />
              {eyebrow}
            </p>
          }
          <h1 className="font-display text-[30px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[52px]">
            {title}
          </h1>
          {description &&
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel-200 sm:text-[17px]">
              {description}
            </p>
          }
          {children && <div className="mt-7">{children}</div>}
        </motion.div>
      </Container>
    </section>);

}