import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDownIcon, MailIcon, PhoneIcon, XIcon } from 'lucide-react';
import { navigation, company } from '../../data/navigation';
import { Logo } from '../ui/Logo';
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

  useEffect(() => {
    if (!open) setExpanded(null);
  }, [open]);

  const handleNavigation = () => {
    setExpanded(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && <div className="fixed inset-0 z-[95] xl:hidden">
        <motion.div className="absolute inset-0 bg-[#000b1d]/70 backdrop-blur-[2px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, ease: EASE_SMOOTH }} onClick={onClose} aria-hidden />
        <motion.div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Main menu" initial={reduce ? { opacity: 0 } : { x: '100%' }} animate={reduce ? { opacity: 1 } : { x: 0 }} exit={reduce ? { opacity: 0 } : { x: '100%' }} transition={{ duration: 0.32, ease: EASE_SMOOTH }} className="absolute inset-y-0 right-0 flex w-full max-w-[420px] flex-col border-l border-white/10 bg-[linear-gradient(145deg,#00193C_0%,#00142F_100%)] text-white shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur-[18px]">
          <div className="flex min-h-[80px] items-center justify-between border-b border-white/10 px-5 py-3">
            <Link to="/" onClick={handleNavigation} aria-label="VOTIX Systems home"><Logo className="!h-auto !w-[155px]" /></Link>
            <button type="button" onClick={onClose} aria-label="Close menu" className="flex h-11 w-11 items-center justify-center rounded-md text-white transition-colors duration-150 ease-smooth hover:bg-white/10 hover:text-accent"><XIcon className="h-6 w-6" aria-hidden /></button>
          </div>
          <nav className="flex-1 overflow-y-auto px-4 py-5" aria-label="Mobile">
            <ul className="space-y-0.5">
              {navigation.map((item) => {
                const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                const isOpen = expanded === item.label;
                const linkClass = `flex min-h-[48px] items-center rounded-md px-3 text-[15px] font-semibold transition-colors duration-150 ease-smooth ${isActive ? 'bg-white/10 text-white' : 'text-white/85 hover:bg-white/10 hover:text-white'}`;
                if (!item.groups) return <li key={item.label}><Link to={item.href} onClick={handleNavigation} className={linkClass}>{item.label}</Link></li>;
                return <li key={item.label}>
                  <div className={`flex items-stretch gap-1 ${item.label === 'Industries' ? 'mx-auto w-full max-w-[300px]' : ''}`}><Link to={item.href} onClick={handleNavigation} className={`flex-1 ${linkClass}`}>{item.label}</Link><button type="button" onClick={() => setExpanded(isOpen ? null : item.label)} aria-expanded={isOpen} aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${item.label} links`} className="flex min-h-[48px] w-10 items-center justify-center rounded-md text-white/65 transition-colors duration-150 ease-smooth hover:bg-white/10 hover:text-white"><ChevronDownIcon className={`h-5 w-5 transition-transform duration-200 ease-smooth ${isOpen ? 'rotate-180' : ''}`} aria-hidden /></button></div>
                  <AnimatePresence initial={false}>{isOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22, ease: EASE_SMOOTH }} className="overflow-hidden"><div className="ml-3 space-y-3 border-l border-white/20 py-2 pl-3">{item.groups.map((group, index) => <div key={group.title ?? index}>{group.title && <p className="mb-1 px-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white/55">{group.title}</p>}<ul>{group.items.map((child) => <li key={child.href + child.label}><Link to={child.href} onClick={handleNavigation} className="flex min-h-[44px] items-center rounded-md px-2 text-sm text-white/75 transition-colors duration-150 ease-smooth hover:bg-white/10 hover:text-white">{child.label}</Link></li>)}</ul></div>)}</div></motion.div>}</AnimatePresence>
                </li>;
              })}
            </ul>
          </nav>
          <div className="border-t border-white/10 px-5 py-5"><Link to="/contact" onClick={handleNavigation} className="inline-flex min-h-[48px] w-full items-center justify-center rounded-md bg-accent px-7 py-3.5 text-center text-base font-semibold text-navy-950 shadow-sm transition-colors duration-200 ease-smooth hover:bg-accent-400">Request a Quote</Link><div className="mt-3 space-y-1.5"><a href={company.phoneHref} className="flex min-h-[40px] items-center gap-2 text-sm font-medium text-white/70 hover:text-white"><PhoneIcon className="h-4 w-4" aria-hidden />{company.phone}</a>{company.emails.map((email) => <a key={email} href={`mailto:${email}`} className="flex min-h-[40px] items-center gap-2 text-sm font-medium text-white/70 hover:text-white"><MailIcon className="h-4 w-4" aria-hidden />{email}</a>)}</div></div>
        </motion.div>
      </div>}
    </AnimatePresence>
  );
}
