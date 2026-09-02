import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

type Variant = 'primary' | 'accent' | 'outline' | 'ghost' | 'onDark';
type Size = 'sm' | 'md' | 'lg';

const base =
'inline-flex items-center justify-center gap-2 font-display font-semibold rounded-md tracking-[0.1em] transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-smooth disabled:opacity-60 disabled:pointer-events-none min-h-[44px] text-center';

const variants: Record<Variant, string> = {
  primary: 'bg-navy text-white hover:bg-navy-700 shadow-sm active:translate-y-[1px]',
  accent: 'bg-accent text-navy-950 hover:bg-accent-400 shadow-sm active:translate-y-[1px]',
  outline:
  'border border-steel-200 bg-white text-navy hover:border-brand hover:text-brand active:translate-y-[1px]',
  ghost: 'text-navy hover:bg-navy-50 active:translate-y-[1px]',
  onDark:
  'border border-white/30 text-white hover:bg-white hover:text-navy active:translate-y-[1px]'
};

const sizes: Record<Size, string> = {
  sm: 'text-sm px-4 py-2',
  md: 'text-[15px] px-5 py-2.5',
  lg: 'text-base px-7 py-3.5'
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = CommonProps &
React.ButtonHTMLAttributes<HTMLButtonElement> & {to?: undefined;href?: undefined;};
type LinkProps = CommonProps & {to: string;href?: undefined;};
type AnchorProps = CommonProps &
React.AnchorHTMLAttributes<HTMLAnchorElement> & {href: string;to?: undefined;};

export function Button(props: ButtonProps | LinkProps | AnchorProps) {
  const { variant = 'primary', size = 'md', className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ('to' in props && props.to) {
    const { to } = props;
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>);

  }

  if ('href' in props && props.href) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>);

  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as ButtonProps;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>);

}