import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';
import { navigation } from '../../data/navigation';
import { EASE_SMOOTH } from '../../utils/motion';
import { cn } from '../../utils/cn';

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [productsMenuStyle, setProductsMenuStyle] = useState<CSSProperties>({});
  const closeTimer = useRef<number>();
  const productsMenuRef = useRef<HTMLDivElement | null>(null);
  const productsItemRef = useRef<HTMLLIElement | null>(null);
  const { pathname } = useLocation();
  const reduce = useReducedMotion();

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
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const updateProductsMenuPosition = () => {
      if (!productsItemRef.current || !productsMenuRef.current) return;

      const itemRect = productsItemRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const padding = 16;
      const baseWidth = 760;
      const width = Math.min(baseWidth, Math.max(280, viewportWidth - padding * 2));
      const minLeft = padding;
      const maxLeft = viewportWidth - padding - width;
      const desiredLeft = itemRect.left + itemRect.width / 2 - width / 2;
      const left = Math.min(Math.max(desiredLeft, minLeft), maxLeft) - itemRect.left;

      setProductsMenuStyle({
        width: `${width}px`,
        left: `${left}px`,
        maxWidth: `${viewportWidth - padding * 2}px`,
      });
    };

    if (activeMenu === 'Products') {
      updateProductsMenuPosition();
      window.addEventListener('resize', updateProductsMenuPosition);
      return () => window.removeEventListener('resize', updateProductsMenuPosition);
    }

    return undefined;
  }, [activeMenu]);

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
          'fixed left-0 top-0 z-[90] w-full border-b border-white/10 bg-[#00193C] text-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-[background-color,backdrop-filter] duration-300',
          scrolled && 'bg-[#00142F]/95 backdrop-blur-md'
        )}>
        
          <Container className="header-container mx-0 flex h-[100px] w-full max-w-[1800px] items-center justify-between gap-0 !px-0 pl-0 sm:pl-0 lg:h-[100px] lg:pl-0">
          <Link to="/" aria-label="VOTIX Systems — home" className="ml-0 mr-auto shrink-0 !pl-0">
            <Logo className="!ml-0 !h-[160px] !w-[380px] sm:!h-[170px] sm:!w-[410px] lg:!h-[185px] lg:!w-[440px] 2xl:!h-[200px] 2xl:!w-[470px]" />
          </Link>

          <nav className="hidden min-w-0 lg:flex lg:flex-1 lg:justify-end lg:pr-2" aria-label="Main">
            <ul className="flex items-center justify-end gap-2 2xl:gap-4 lg:-translate-x-2">
              {navigation.map((item) => {
                const active = isActive(item.href);
                const hasMenu = !!item.groups;
                const isOpen = activeMenu === item.label;
                const wide = item.label === 'Products';

                return (
                  <li
                    key={item.label}
                    ref={item.label === 'Products' ? productsItemRef : undefined}
                    className="relative"
                    onMouseEnter={() => hasMenu && openMenu(item.label)}
                    onMouseLeave={() => hasMenu && scheduleClose()}>
                    
                    <div className="flex items-center">
                      <Link
                        to={item.href}
                        className={cn(
                          'relative flex h-[100px] items-center whitespace-nowrap px-2 text-[13px] font-semibold tracking-[0.1em] transition-colors duration-150 ease-smooth 2xl:h-[100px] 2xl:px-2.5 2xl:text-[14px]',
                          active ? 'text-accent' : 'text-white/90 hover:text-accent'
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
                          className="-ml-2.5 flex h-[100px] w-6 items-center justify-center text-white/75 transition-colors duration-150 ease-smooth hover:text-accent 2xl:h-[100px]">
                        
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
                        ref={wide ? productsMenuRef : undefined}
                        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduce ? { opacity: 0 } : { opacity: 0, y: 4 }}
                        transition={{ duration: 0.18, ease: EASE_SMOOTH }}
                        style={wide ? productsMenuStyle : undefined}
                        className={cn(
                          'absolute top-full z-50 rounded-b-lg border border-t-0 border-steel-100 bg-white p-5 shadow-lift',
                          wide ?
                          'left-0 w-[760px] max-w-[calc(100vw-32px)]' :
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
                                  <span className="nav-description mt-0.5 block text-xs text-steel-500">
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

          <div className="flex shrink-0 items-center gap-1 sm:gap-2 lg:gap-3 pr-2 sm:pr-3 lg:pr-0">
            <Button to="/contact" variant="accent" size="sm" className="hidden px-5 py-3 text-sm sm:inline-flex">
              Contact Us
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center rounded-md text-white transition-[color,transform] duration-200 ease-smooth hover:scale-105 hover:text-accent xl:hidden">
              
              {menuOpen ? <XIcon className="h-7 w-7" aria-hidden /> : <MenuIcon className="h-7 w-7" aria-hidden />}
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>);

}