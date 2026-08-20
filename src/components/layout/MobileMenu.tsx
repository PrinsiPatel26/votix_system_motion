import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDownIcon, MailIcon, PhoneIcon, XIcon } from 'lucide-react';
import { navigation, company } from '../../data/navigation';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { EASE_SMOOTH } from '../../utils/motion';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const { pathname } = useLocation();
  const reduce = useReducedMotion();
  useBodyScrollLock(open);

  return (
    <AnimatePresence>
      {open &&
      <div className="fixed inset-0 z-[95] xl:hidden">
          <motion.div
          className="absolute inset-0 bg-navy-950/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: EASE_SMOOTH }}
          onClick={onClose}
          aria-hidden />
        
          <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          initial={reduce ? { opacity: 0 } : { x: '100%' }}
          animate={reduce ? { opacity: 1 } : { x: 0 }}
          exit={reduce ? { opacity: 0 } : { x: '100%' }}
          transition={{ duration: 0.28, ease: EASE_SMOOTH }}
          className="absolute inset-y-0 right-0 flex w-full max-w-[380px] flex-col bg-white shadow-lift">
          
            <div className="flex items-center justify-between border-b border-steel-100 px-4 py-3">
              <Link to="/" onClick={onClose} aria-label="VOTIX Systems home">
                <Logo compact showTagline={false} />
              </Link>
              <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-md text-steel-600 transition-colors duration-150 ease-smooth hover:bg-mist hover:text-navy">
              
                <XIcon className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-2 py-3" aria-label="Mobile">
              <ul className="space-y-0.5">
                {navigation.map((item) => {
                const isActive =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                const isOpen = expanded === item.label;

                if (!item.groups) {
                  return (
                    <li key={item.label}>
                        <Link
                        to={item.href}
                        onClick={onClose}
                        className={`flex min-h-[48px] items-center rounded-md px-3 text-[15px] font-semibold transition-colors duration-150 ease-smooth ${
                        isActive ? 'bg-navy-50 text-brand-600' : 'text-navy hover:bg-mist'}`
                        }>
                        
                          {item.label}
                        </Link>
                      </li>);

                }

                return (
                  <li key={item.label}>
                      <div className="flex items-stretch gap-1">
                        <Link
                        to={item.href}
                        onClick={onClose}
                        className={`flex min-h-[48px] flex-1 items-center rounded-md px-3 text-[15px] font-semibold transition-colors duration-150 ease-smooth ${
                        isActive ? 'bg-navy-50 text-brand-600' : 'text-navy hover:bg-mist'}`
                        }>
                        
                          {item.label}
                        </Link>
                        <button
                        type="button"
                        onClick={() => setExpanded(isOpen ? null : item.label)}
                        aria-expanded={isOpen}
                        aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${item.label} links`}
                        className="flex min-h-[48px] w-12 items-center justify-center rounded-md text-steel-600 transition-colors duration-150 ease-smooth hover:bg-mist">
                        
                          <ChevronDownIcon
                          className={`h-5 w-5 transition-transform duration-200 ease-smooth ${
                          isOpen ? 'rotate-180' : ''}`
                          }
                          aria-hidden />
                        
                        </button>
                      </div>

                      <AnimatePresence initial={false}>
                        {isOpen &&
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: EASE_SMOOTH }}
                        className="overflow-hidden">
                        
                            <div className="ml-3 space-y-3 border-l border-steel-100 py-2 pl-3">
                              {item.groups.map((group, gi) =>
                          <div key={group.title ?? gi}>
                                  {group.title &&
                            <p className="mb-1 px-1 text-[11px] font-bold uppercase tracking-[0.12em] text-steel-500">
                                      {group.title}
                                    </p>
                            }
                                  <ul>
                                    {group.items.map((child) =>
                              <li key={child.href + child.label}>
                                        <Link
                                  to={child.href}
                                  onClick={onClose}
                                  className="flex min-h-[44px] items-center rounded-md px-2 text-sm text-steel-600 transition-colors duration-150 ease-smooth hover:bg-mist hover:text-brand-600">
                                  
                                          {child.label}
                                        </Link>
                                      </li>
                              )}
                                  </ul>
                                </div>
                          )}
                            </div>
                          </motion.div>
                      }
                      </AnimatePresence>
                    </li>);

              })}
              </ul>
            </nav>

            <div className="border-t border-steel-100 px-4 py-4">
              <Button to="/contact" variant="accent" className="w-full" size="lg">
                Contact Us
              </Button>
              <div className="mt-3 space-y-1.5">
                <a
                href={company.phoneHref}
                className="flex min-h-[40px] items-center gap-2 text-sm font-medium text-steel-600 hover:text-brand-600">
                
                  <PhoneIcon className="h-4 w-4" aria-hidden />
                  {company.phone}
                </a>
                <a
                href={company.emailHref}
                className="flex min-h-[40px] items-center gap-2 text-sm font-medium text-steel-600 hover:text-brand-600">
                
                  <MailIcon className="h-4 w-4" aria-hidden />
                  {company.email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      }
    </AnimatePresence>);

}