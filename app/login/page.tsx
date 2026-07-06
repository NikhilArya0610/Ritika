'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser, loginWithGoogle } from '@/services/auth';
import { loginSchema } from '@/lib/validators';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });

  async function onSubmit(data: LoginForm) {
    try {
      await loginUser(data.email, data.password);
      router.push('/profile');
    } catch (err) {
      setError('Unable to sign in. Please verify your credentials.');
    }
  }

  async function handleGoogle() {
    try {
      await loginWithGoogle();
      router.push('/profile');
    } catch {
      setError('Unable to sign in with Google.');
    }
  }

  return (
    <section className="mx-auto max-w-md space-y-8 rounded-[2.5rem] border border-brand-200/70 bg-white/90 p-10 shadow-soft">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-600">Login</p>
        <h1 className="text-3xl font-semibold text-brand-950">Welcome back.</h1>
        <p className="text-sm leading-7 text-brand-700">Sign in to manage your profile and send product enquiries.</p>
      </div>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Email" type="email" {...register('email')} />
        {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        <Input placeholder="Password" type="password" {...register('password')} />
        {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" size="lg" disabled={isSubmitting}>
          Sign in
        </Button>
      </form>
      <div className="border-t border-brand-200/80 pt-6">
        <Button onClick={handleGoogle} variant="outline" className="w-full" disabled={isSubmitting}>
          Continue with Google
        </Button>
      </div>
    </section>
  );
}
