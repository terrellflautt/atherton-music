'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeInUp } from '@/lib/animations';

interface SectionHeadingProps {
  children: ReactNode;
  gradient?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  align?: 'left' | 'center' | 'right';
  className?: string;
  subtitle?: string;
}

export default function SectionHeading({
  children,
  gradient = true,
  size = 'lg',
  align = 'center',
  className = '',
  subtitle,
}: SectionHeadingProps) {
  // Size styles
  const sizeStyles = {
    sm: 'text-3xl md:text-4xl',
    md: 'text-4xl md:text-5xl',
    lg: 'text-4xl md:text-5xl lg:text-6xl',
    xl: 'text-5xl md:text-6xl lg:text-7xl',
  };

  // Alignment styles
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  // Gradient or regular text
  const textStyles = gradient ? 'gradient-text' : 'text-white';

  const combinedStyles = `${sizeStyles[size]} ${alignStyles[align]} ${textStyles} font-bold ${className}`;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={alignStyles[align]}
    >
      <h2 className={combinedStyles}>{children}</h2>
      {subtitle && (
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className={`mt-4 text-xl text-gray-300 ${alignStyles[align]}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
