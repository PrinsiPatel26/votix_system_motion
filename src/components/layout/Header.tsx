import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDownIcon, MenuIcon, SearchIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';
import { SearchOverlay } from '../search/SearchOverlay';
import { navigation } from '../../data/navigation';
import { EASE_SMOOTH } from '../../utils/motion';
import { cn } from '../../utils/cn';

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimer = useRef<number>();
  const { pathname } = useLocation();
  const reduce = useReducedMotion();

  useLayoutEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeaderHeight = () => {
      document.documentElement.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`);
    };

    updateHeaderHeight();
    const observer = new ResizeObserver(updateHeaderHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setActiveMenu(null);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveMenu(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const openMenu = (label: string) => {
    window.clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setActiveMenu(null), 120);
  };

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[120] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white">
        
        Skip to content
      </a>

      <header
        ref={headerRef}
        className={cn(
          'sticky top-0 z-[90] w-full border-b border-white/15 bg-navy-950/95 text-white backdrop-blur transition-[box-shadow,border-color] duration-200 ease-smooth',
          scrolled ? 'shadow-header' : ''
        )}>
        
          <Container className="flex h-[68px] items-center justify-between gap-4 lg:h-[76px]">
          <Link to="/" aria-label="VOTIX Systems — home" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden xl:block" aria-label="Main">
            <ul className="flex items-center">
              {navigation.map((item) => {
                const active = isActive(item.href);
                const hasMenu = !!item.groups;
                const isOpen = activeMenu === item.label;
                const wide = item.label === 'Products';

                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => hasMenu && openMenu(item.label)}
                    onMouseLeave={() => hasMenu && scheduleClose()}>
                    
                    <div className="flex items-center">
                      <Link
                        to={item.href}
                        className={cn(
                          'relative flex h-[68px] items-center whitespace-nowrap px-3 text-[14px] font-semibold transition-colors duration-150 ease-smooth lg:h-[76px] xl:px-3.5 xl:text-[15px]',
                          active ? 'text-white' : 'text-steel-200 hover:text-white'
                        )}
                        aria-current={active ? 'page' : undefined}>
                        
                        {item.label}
                        {active &&
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute inset-x-2 bottom-0 h-[3px] rounded-t bg-accent"
                          transition={{ duration: 0.25, ease: EASE_SMOOTH }} />

                        }
                      </Link>
                      {hasMenu &&
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-label={`${isOpen ? 'Hide' : 'Show'} ${item.label} menu`}
                        onClick={() => isOpen ? setActiveMenu(null) : openMenu(item.label)}
                        className="-ml-2.5 flex h-[68px] w-6 items-center justify-center text-steel-300 transition-colors duration-150 ease-smooth hover:text-white lg:h-[76px]">
                        
                          <ChevronDownIcon
                          className={cn(
                            'h-3.5 w-3.5 transition-transform duration-200 ease-smooth',
                            isOpen && 'rotate-180'
                          )}
                          aria-hidden />
                        
                        </button>
                      }
                    </div>

                    <AnimatePresence>
                      {hasMenu && isOpen &&
                      <motion.div
                        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduce ? { opacity: 0 } : { opacity: 0, y: 4 }}
                        transition={{ duration: 0.18, ease: EASE_SMOOTH }}
                        className={cn(
                          'absolute top-full z-50 rounded-b-lg border border-t-0 border-steel-100 bg-white p-5 shadow-lift',
                          wide ?
                          'left-0 w-[760px] -translate-x-24' :
                          item.label === 'Resources' ?
                          'right-0 w-[280px]' :
                          'left-0 w-[280px]'
                        )}
                        onMouseEnter={() => openMenu(item.label)}
                        onMouseLeave={scheduleClose}>
                        
                          <div className={cn(wide ? 'grid grid-cols-3 gap-6' : 'space-y-1')}>
                            {item.groups!.map((group, gi) =>
                          <div key={group.title ?? gi}>
                                {group.title &&
                            <p className="mb-2.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.13em] text-brand-600">
                                    <span className="h-px w-4 bg-accent" aria-hidden />
                                    {group.title}
                                  </p>
                            }
                                <ul className="space-y-0.5">
                                  {group.items.map((child) =>
                              <li key={child.href + child.label}>
                                      <Link
                                  to={child.href}
                                  className="block rounded-md px-2.5 py-2 transition-colors duration-150 ease-smooth hover:bg-mist">
                                  
                                        <span className="block text-sm font-semibold text-navy">
                                          {child.label}
                                        </span>
                                        {child.description &&
                                  <span className="mt-0.5 block text-xs text-steel-500">
                                            {child.description}
                                          </span>
                                  }
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

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search the site"
              className="flex h-11 w-11 items-center justify-center rounded-md text-steel-200 transition-colors duration-150 ease-smooth hover:bg-white/10 hover:text-white">
              
              <SearchIcon className="h-5 w-5" aria-hidden />
            </button>
            <Button to="/contact" variant="accent" size="sm" className="hidden sm:inline-flex">
              Contact Us
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center rounded-md text-white transition-colors duration-150 ease-smooth hover:bg-white/10 xl:hidden">
              
              <MenuIcon className="h-6 w-6" aria-hidden />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>);

}