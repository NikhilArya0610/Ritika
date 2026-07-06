'use client';

import * as React from 'react';
import { cn } from '@/utils/cn';

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  accent?: boolean;
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, accent, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-3xl border border-brand-200/80 bg-white/80 backdrop-blur-xl shadow-soft overflow-hidden',
        accent && 'border-brand-300/70 bg-brand-100/80',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

export { Card };
