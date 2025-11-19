'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react';
import { hoverScale, tapScale } from '@/lib/animations';

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: 'full';
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button';
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: 'link';
    href: string;
  };

type ButtonAsExternal = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: 'external';
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsExternal;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth, children, className = '', ...props }, ref) => {
    // Base styles
    const baseStyles =
      'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 relative overflow-hidden';

    // Variant styles with enhanced magical hover effects
    const variantStyles = {
      primary:
        'bg-[var(--accent-gold)] text-black hover:bg-[var(--accent-gold)] shadow-lg hover:shadow-[0_15px_60px_rgba(212,175,55,0.6)] hover:brightness-110',
      secondary:
        'bg-[var(--accent-burgundy)] text-white hover:bg-[var(--accent-burgundy)] shadow-lg hover:shadow-[0_15px_60px_rgba(114,47,55,0.6)] hover:brightness-110',
      outline:
        'bg-transparent border-2 border-[var(--accent-gold)] text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-black shadow-lg hover:shadow-[0_15px_60px_rgba(212,175,55,0.5)]',
      ghost:
        'bg-transparent border-2 border-white text-white hover:bg-white/10 hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] hover:shadow-[0_10px_40px_rgba(212,175,55,0.4)]',
    };

    // Size styles
    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-8 py-4 text-base',
      lg: 'px-10 py-5 text-lg',
    };

    // Width styles
    const widthStyles = fullWidth ? 'w-full' : '';

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

    // Animation props
    const motionProps = {
      whileHover: hoverScale,
      whileTap: tapScale,
    };

    if (props.as === 'link') {
      const { href, as, ...rest } = props as ButtonAsLink;
      return (
        <Link href={href} ref={ref as React.Ref<HTMLAnchorElement>}>
          <motion.span {...motionProps} className={combinedStyles}>
            {children}
          </motion.span>
        </Link>
      );
    }

    if (props.as === 'external') {
      const { href, as, ...rest } = props as ButtonAsExternal;
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...motionProps}
          className={combinedStyles}
        >
          {children}
        </motion.a>
      );
    }

    const { as, type = 'button', onClick, disabled, ...rest } = props as ButtonAsButton;
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        {...motionProps}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={combinedStyles}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
