'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser, loginWithGoogle } from '@/services/auth';
import { registerSchema } from '@/lib/validators';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

type RegisterForm = {
  name: string;
  email: string;
  password: string;
};

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<RegisterForm>({ resolver: zodResolver(registerSchema) });

  async function onSubmit(data: RegisterForm) {
    try {
      await registerUser(data.email, data.password);
      router.push('/profile');
    } catch {
      setError('Unable to create account. Please try again.');
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
        <p className="text-sm uppercase tracking-[0.35em] text-brand-600">Create account</p>
        <h1 className="text-3xl font-semibold text-brand-950">Join Ritika Atelier.</h1>
        <p className="text-sm leading-7 text-brand-700">Register to save your wishlist and make premium product enquiries.</p>
      </div>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Name" {...register('name')} />
        {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
        <Input placeholder="Email" type="email" {...register('email')} />
        {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        <Input placeholder="Password" type="password" {...register('password')} />
        {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" size="lg" disabled={isSubmitting}>
          Create account
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
