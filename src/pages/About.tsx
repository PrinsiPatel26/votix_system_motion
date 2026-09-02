import React from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Cog,
  Clipboard,
  Zap,
  CheckCircle,
  MessageSquare,
  PenTool,
  Users,
  Shield,
  HandshakeIcon,
  ArrowRight,
  Phone
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { SmartImage } from '../components/ui/SmartImage';
import { usePageMeta } from '../hooks/usePageMeta';
import { images } from '../data/images';

export function About() {
  usePageMeta(
    'VOTIX Systems | About Our Engineering Company',
    'VOTIX Systems designs and manufactures industrial agitators and mixing systems, combining process engineering, precision manufacturing and long-term technical support.'
  );

  return (
    <>
      {/* SECTION 1: ABOUT HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-mist py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* LEFT: Text Content */}
            <div className="flex flex-col justify-center">
              <div>
                <h1 className="font-display text-4xl font-extrabold leading-tight text-navy sm:text-5xl lg:text-6xl">
                  ENGINEERING <br />
                  MOTION WITH <span className="text-accent">PURPOSE.</span>
                </h1>

                <div className="mt-6 h-1 w-16 bg-accent" aria-hidden />
              </div>

              <p className="mt-8 text-base leading-relaxed text-steel-600">
                VOTIX Systems brings together deep engineering knowledge and manufacturing expertise to
                create agitation and mixing solutions that perform where it matters.
              </p>

              <p className="mt-5 text-base leading-relaxed text-steel-600">
                We study the process. Understand the variables. Engineer the right solution. And build it
                with precision.
              </p>

              <div className="mt-8 space-y-2">
                <p className="text-base font-semibold text-navy">We don't just move fluids.</p>
                <p className="font-display text-xl font-extrabold text-accent">
                  We engineer the motion the process requires.
                </p>
              </div>
            </div>

            {/* RIGHT: Large Industrial Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="bg-gradient-to-b from-transparent to-navy/20">
                <SmartImage
                  src="/votix%20system%20motion.png"
                  alt="VOTIX Systems engineering facility"
                  ratio="aspect-[4/3]"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: OUR PHILOSOPHY */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-3 font-display text-4xl font-extrabold text-navy sm:text-5xl">
              OUR PHILOSOPHY
            </h2>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-accent">
              <span className="h-px w-6 bg-accent" aria-hidden />
              PROCESS FIRST. ALWAYS.
              <span className="h-px w-6 bg-accent" aria-hidden />
            </p>
            <div className="mx-auto mt-6 h-1 w-16 bg-accent" aria-hidden />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-2 lg:gap-0 lg:grid-cols-5">
            {[
              {
                icon: Target,
                title: 'UNDERSTAND',
                description: 'Every process has unique behaviour. We begin by understanding it completely.'
              },
              {
                icon: Cog,
                title: 'ENGINEER',
                description: 'Right impeller. Right speed. Right power. Engineered for the desired result.'
              },
              {
                icon: PenTool,
                title: 'DESIGN',
                description: 'Well-designed solutions that integrate performance, reliability and maintainability.'
              },
              {
                icon: Zap,
                title: 'MANUFACTURE',
                description: 'Precision manufacturing with attention to detail in every component we build.'
              },
              {
                icon: CheckCircle,
                title: 'DELIVER',
                description: 'Solutions that perform consistently in real industrial environments.'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center border-b border-steel-100 pb-8 text-center lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8 lg:text-left last:lg:border-r-0 last:lg:pr-0"
                >
                  <Icon className="h-10 w-10 text-navy" aria-hidden />
                  <h3 className="mt-4 font-display text-lg font-extrabold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 3: WHAT DEFINES VOTIX */}
      <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
        {/* Subtle background texture/pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
          aria-hidden
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {/* LEFT: Heading */}
            <div className="lg:col-span-1">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-accent">
                WHAT DEFINES VOTIX
              </p>
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                ENGINEERING <br />
                THAT MAKES A <br />
                DIFFERENCE.
              </h2>
              <div className="mt-6 h-1 w-12 bg-accent" aria-hidden />
            </div>

            {/* RIGHT: Four Feature Columns */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-2">
              {[
                {
                  icon: MessageSquare,
                  title: 'PROCESS UNDERSTANDING',
                  description: 'Solutions shaped by the science of mixing and the needs of your process.'
                },
                {
                  icon: Cog,
                  title: 'ENGINEERING EXCELLENCE',
                  description: 'Application-focused engineering that ensures performance and reliability.'
                },
                {
                  icon: Shield,
                  title: 'MANUFACTURING INTEGRITY',
                  description: 'Built with precision, controlled quality and strong engineering practices.'
                },
                {
                  icon: HandshakeIcon,
                  title: 'PARTNER MINDSET',
                  description: 'We work alongside our customers as an engineering partner, not just a supplier.'
                }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="border-l border-white/20 pl-6">
                    <Icon className="h-10 w-10 text-accent" aria-hidden />
                    <h3 className="mt-4 font-display text-lg font-extrabold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4: OUR APPROACH */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-3 font-display text-4xl font-extrabold text-navy sm:text-5xl">
              OUR APPROACH
            </h2>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-accent">
              <span className="h-px w-6 bg-accent" aria-hidden />
              FROM REQUIREMENT TO RELIABLE PERFORMANCE.
              <span className="h-px w-6 bg-accent" aria-hidden />
            </p>
            <div className="mx-auto mt-6 h-1 w-16 bg-accent" aria-hidden />
          </div>

          {/* Desktop: Horizontal Flow */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-5 gap-4">
              {[
                {
                  number: '01',
                  icon: MessageSquare,
                  title: 'CONSULT',
                  description: 'Share your process requirements and operating conditions.'
                },
                {
                  number: '02',
                  icon: Clipboard,
                  title: 'ANALYZE',
                  description: 'We analyze, calculate and select the right mixing approach.'
                },
                {
                  number: '03',
                  icon: PenTool,
                  title: 'ENGINEER',
                  description: 'Detailed engineering for mechanical design and performance.'
                },
                {
                  number: '04',
                  icon: Zap,
                  title: 'BUILD',
                  description: 'Precision manufacturing with rigorous quality checks.'
                },
                {
                  number: '05',
                  icon: Phone,
                  title: 'SUPPORT',
                  description: 'Installation guidance and after-sales engineering support.'
                }
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.number}>
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className="text-7xl font-extrabold text-steel-100"
                          aria-hidden
                        >
                          {step.number}
                        </span>
                      </div>

                      <div className="relative flex flex-col items-center">
                        <Icon className="relative z-10 h-12 w-12 text-navy" aria-hidden />
                        <h3 className="relative z-10 mt-6 font-display text-sm font-extrabold text-navy">
                          {step.title}
                        </h3>
                        <p className="relative z-10 mt-3 text-center text-xs leading-relaxed text-steel-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile/Tablet: Vertical Flow */}
          <div className="space-y-8 lg:hidden">
            {[
              {
                number: '01',
                icon: MessageSquare,
                title: 'CONSULT',
                description: 'Share your process requirements and operating conditions.'
              },
              {
                number: '02',
                icon: Clipboard,
                title: 'ANALYZE',
                description: 'We analyze, calculate and select the right mixing approach.'
              },
              {
                number: '03',
                icon: PenTool,
                title: 'ENGINEER',
                description: 'Detailed engineering for mechanical design and performance.'
              },
              {
                number: '04',
                icon: Zap,
                title: 'BUILD',
                description: 'Precision manufacturing with rigorous quality checks.'
              },
              {
                number: '05',
                icon: Phone,
                title: 'SUPPORT',
                description: 'Installation guidance and after-sales engineering support.'
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number}>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-extrabold text-steel-100" aria-hidden>
                        {step.number}
                      </span>
                    </div>

                    <div className="relative flex flex-col items-center text-center">
                      <Icon className="relative z-10 h-10 w-10 text-navy" aria-hidden />
                      <h3 className="relative z-10 mt-4 font-display text-sm font-extrabold text-navy">
                        {step.title}
                      </h3>
                      <p className="relative z-10 mt-2 text-xs leading-relaxed text-steel-600">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {index < 4 && (
                    <div className="mt-6 flex justify-center">
                      <ArrowRight className="h-4 w-4 rotate-90 text-steel-300" aria-hidden />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 5: FINAL ENGINEERING CTA */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy to-navy-900 py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* LEFT: Text and CTAs */}
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-accent">
                EVERY PROCESS IS UNIQUE.
              </p>

              <h2 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                LET'S ENGINEER <br />
                THE RIGHT MOTION <br />
                FOR YOUR PROCESS.
              </h2>

              <div className="mt-6 h-1 w-16 bg-accent" aria-hidden />

              <p className="mt-8 text-base leading-relaxed text-white/90">
                Tell us about your process, your vessel and the result you need. Our engineering team will
                help you choose the right agitation solution.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact">
                  <Button variant="accent" size="lg" className="min-w-[200px] justify-center">
                    TALK TO AN ENGINEER
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="min-w-[200px] justify-center bg-white/10 text-white hover:bg-white/20">
                  REQUEST A QUOTE
                </Button>
              </div>
            </div>

            {/* RIGHT: Technical Blueprint Visual */}
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#1a2d47] p-3 shadow-2xl">
              <div className="absolute inset-0 opacity-60" aria-hidden>
                <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:20px_20px]" />
              </div>

              <div className="relative z-10 overflow-hidden rounded-lg bg-[#dfeaf5]/10">
                <img
                  src="/votixsyatem2%20machine.png"
                  alt="Engineering blueprint machine image"
                  className="h-[320px] w-full object-cover object-center"
                />
              </div>

            </div>
          </div>
        </Container>
      </section>
    </>
  );
}