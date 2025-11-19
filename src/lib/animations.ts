import { Variants } from 'framer-motion';

// Easing curves
export const ease = {
  smooth: [0.6, 0.05, 0.01, 0.9] as const,
  spring: [0.25, 0.46, 0.45, 0.94] as const,
  expo: [0.7, 0, 0.84, 0] as const,
};

// Fade animations
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: ease.smooth,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: ease.smooth,
    },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: ease.smooth,
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: ease.smooth,
    },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: ease.smooth,
    },
  },
};

// Scale animations
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: ease.spring,
    },
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: ease.spring,
    },
  },
};

// Stagger animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: ease.smooth,
    },
  },
};

// Hover/Tap animations - Enhanced for more dramatic "pop" effect
export const hoverScale = {
  scale: 1.08,
  transition: {
    type: 'spring' as const,
    stiffness: 500,
    damping: 15,
  },
};

export const tapScale = {
  scale: 0.92,
  transition: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 10,
  },
};

export const hoverLift = {
  y: -4,
  boxShadow: '0 12px 40px rgba(212, 175, 55, 0.2)',
  transition: {
    duration: 0.3,
    ease: ease.spring,
  },
};

// Text reveal animations
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.8,
      ease: ease.smooth,
    },
  }),
};

// Slide animations
export const slideInLeft: Variants = {
  hidden: {
    x: '-100%',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: ease.expo,
    },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: ease.expo,
    },
  },
};

export const slideInRight: Variants = {
  hidden: {
    x: '100%',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: ease.expo,
    },
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: ease.expo,
    },
  },
};

// Viewport animation config
export const viewportConfig = {
  once: true,
  margin: '-100px',
  amount: 0.3 as const,
};

// Helper function to create custom stagger delays
export const createStagger = (delay: number = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: delay,
    },
  },
});
