'use client';

import * as React from 'react';
import { cn } from '@/utils/cn';

export function SectionHeading({
  title,
  description,
  className
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn('space-y-3', className)}>
      <h2 className="text-3xl font-semibold tracking-tight text-brand-950 md:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-6 text-brand-600 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
