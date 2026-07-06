'use client';

import * as React from 'react';
import { cn } from '@/utils/cn';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      'flex h-12 w-full rounded-2xl border border-brand-200 bg-white/90 px-4 text-sm text-brand-950 shadow-none placeholder:text-brand-500 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-accent/20',
      className
    )}
    {...props}
  />
));
Input.displayName = 'Input';

export { Input };
