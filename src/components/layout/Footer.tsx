import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
  YoutubeIcon } from
'lucide-react';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';
import { company } from '../../data/navigation';
import { industries } from '../../data/industries';
import { products } from '../../data/products';
import { applications } from '../../data/applications';
import { EMAIL_RE } from '../../utils/validation';

const quickLinks = [
{ label: 'Home', href: '/' },
{ label: 'Products', href: '/products' },
{ label: 'Industries', href: '/industries' },
{ label: 'Applications', href: '/applications' },
{ label: 'Technology', href: '/technology' },
{ label: 'About Us', href: '/about' },
{ label: 'Support', href: '/support' },
{ label: 'Resources', href: '/resources' },
{ label: 'Contact', href: '/contact' }];


export function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setError('Enter a valid email address');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-steel-200">
      <div className="pointer-events-none absolute inset-0 votix-grid-fine opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-brand/10 blur-3xl"
        aria-hidden />
      

      <Container className="relative py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo variant="light" showTagline={false} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel-200">
              VOTIX Systems engineers industrial agitators, impellers and mixing systems for food,
              dairy, pharmaceutical, chemical and process industries — designed around your product,
              vessel and duty.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                <span className="text-steel-200">{company.addressLines.join(', ')}</span>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                <a href={company.phoneHref} className="text-steel-200 hover:text-white">
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                <a href={company.emailHref} className="break-all text-steel-200 hover:text-white">
                  {company.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="VOTIX Systems on LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-steel-200 transition-colors duration-150 ease-smooth hover:border-accent hover:text-accent">
                
                <LinkedinIcon className="h-5 w-5" aria-hidden />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="VOTIX Systems on YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-steel-200 transition-colors duration-150 ease-smooth hover:border-accent hover:text-accent">
                
                <YoutubeIcon className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>

          <nav className="lg:col-span-2" aria-label="Quick links">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-white">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((l) =>
              <li key={l.href}>
                  <Link to={l.href} className="text-steel-200 transition-colors duration-150 ease-smooth hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <nav className="lg:col-span-2" aria-label="Products">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-white">
              Products
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {products.map((p) =>
              <li key={p.slug}>
                  <Link
                  to={`/products/${p.slug}`}
                  className="text-steel-200 transition-colors duration-150 ease-smooth hover:text-accent">
                  
                    {p.shortName}
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to="/products/impellers"
                  className="text-steel-200 transition-colors duration-150 ease-smooth hover:text-accent">
                  
                  Impellers
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="lg:col-span-2" aria-label="Industries and applications">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-white">
              Industries
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {industries.map((i) =>
              <li key={i.slug}>
                  <Link
                  to={`/industries/${i.slug}`}
                  className="text-steel-200 transition-colors duration-150 ease-smooth hover:text-accent">
                  
                    {i.shortName}
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <div className="sm:col-span-2 lg:col-span-2">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-white">
              Applications
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {applications.slice(0, 6).map((a) =>
              <li key={a.slug}>
                  <Link
                  to={`/applications/${a.slug}`}
                  className="text-steel-200 transition-colors duration-150 ease-smooth hover:text-accent">
                  
                    {a.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-lg border border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-md">
            <h2 className="font-display text-lg font-extrabold text-white">
              Technical updates from VOTIX
            </h2>
            <p className="mt-1 text-sm text-steel-200">
              Occasional notes on mixing technology, new documents and application guides.
            </p>
          </div>
          {subscribed ?
          <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent lg:mt-0">
              <CheckIcon className="h-4 w-4" aria-hidden />
              Thanks — you are on the list.
            </p> :

          <form onSubmit={handleSubscribe} noValidate className="mt-4 w-full max-w-md lg:mt-0">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                placeholder="your.name@company.com"
                aria-invalid={!!error}
                aria-describedby={error ? 'newsletter-error' : undefined}
                className={`min-h-[44px] w-full rounded-md border bg-navy-900 px-3.5 py-2.5 text-[15px] text-white placeholder:text-steel-400 focus:outline-none ${
                error ? 'border-red-400' : 'border-white/15 focus:border-accent'}`
                } />
              
                <button
                type="submit"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-accent px-5 text-[15px] font-semibold text-navy-950 transition-colors duration-200 ease-smooth hover:bg-accent-400">
                
                  Subscribe
                  <SendIcon className="h-4 w-4" aria-hidden />
                </button>
              </div>
              {error &&
            <p id="newsletter-error" role="alert" className="mt-2 text-xs font-medium text-red-300">
                  {error}
                </p>
            }
            </form>
          }
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-steel-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} VOTIX Systems. All rights reserved.</p>
          <p className="text-steel-400">
            Engineering resources and mixing technology from VOTIX Systems.
          </p>
        </div>
      </Container>
    </footer>);

}