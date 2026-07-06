'use client';

import * as React from 'react';
import { cn } from '@/utils/cn';

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: 'default' | 'outline';
};

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-brand-950',
        variant === 'outline'
          ? 'border border-brand-200 bg-white/70'
          : 'bg-brand-200 text-brand-950',
        className
      )}
      {...props}
    />
  )
);
Badge.displayName = 'Badge';

export { Badge };
