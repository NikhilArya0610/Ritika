'use client';

import type React from 'react';
import { useState } from 'react';
import { sendResetPassword } from '@/services/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await sendResetPassword(email);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="mx-auto max-w-md space-y-8 rounded-[2.5rem] border border-brand-200/70 bg-white/90 p-10 shadow-soft">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-600">Reset password</p>
        <h1 className="text-3xl font-semibold text-brand-950">Forgot your password?</h1>
        <p className="text-sm leading-7 text-brand-700">Enter your email address and we’ll send instructions to reset your password.</p>
      </div>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <Input placeholder="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        <Button type="submit" size="lg">
          Send reset link
        </Button>
        {status === 'success' && <p className="text-sm text-accent">Password reset email sent.</p>}
        {status === 'error' && <p className="text-sm text-red-600">Unable to send reset email.</p>}
      </form>
    </section>
  );
}
