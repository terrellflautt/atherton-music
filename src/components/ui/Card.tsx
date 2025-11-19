'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { hoverLift } from '@/lib/animations';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'highlight' | 'glass';
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  as?: 'div' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

export default function Card({
  children,
  variant = 'default',
  hover = true,
  padding = 'md',
  className = '',
  onClick,
  as = 'div',
  href,
  target,
  rel,
}: CardProps) {
  // Base styles
  const baseStyles = 'rounded-2xl transition-all duration-300';

  // Variant styles
  const variantStyles = {
    default:
      'bg-gradient-to-br from-[var(--accent-burgundy)]/20 to-[var(--accent-warm)]/20 hover:bg-[var(--accent-burgundy)]/30',
    elevated:
      'bg-gradient-to-br from-[var(--accent-burgundy)]/30 to-[var(--accent-warm)]/30 shadow-xl hover:shadow-2xl',
    highlight:
      'bg-gradient-to-r from-[var(--accent-burgundy)]/50 to-[var(--accent-warm)]/50 border-2 border-[var(--accent-gold)] shadow-[0_0_30px_rgba(212,175,55,0.2)]',
    glass:
      'bg-black/40 backdrop-blur-lg border border-white/10 hover:border-[var(--accent-gold)]/50',
  };

  // Padding styles
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`;

  // Animation props
  const motionProps = hover
    ? {
        whileHover: hoverLift,
        transition: { duration: 0.3 },
      }
    : {};

  if (as === 'a' && href) {
    return (
      <motion.a
        {...motionProps}
        className={combinedStyles}
        href={href}
        target={target}
        rel={rel}
      >
        {children}
      </motion.a>
    );
  }

  if (onClick) {
    return (
      <motion.div
        {...motionProps}
        className={`${combinedStyles} cursor-pointer`}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div {...motionProps} className={combinedStyles}>
      {children}
    </motion.div>
  );
}
