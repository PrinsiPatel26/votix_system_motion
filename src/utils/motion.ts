import type { Variants } from 'framer-motion';

export const EASE_SMOOTH = [0.23, 1, 0.32, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: EASE_SMOOTH } }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25, ease: EASE_SMOOTH } }
};

export const staggerParent = (stagger = 0.05): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger } }
});

export const viewportOnce = { once: true, amount: 0.2 } as const;