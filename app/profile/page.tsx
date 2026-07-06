'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from '@/services/auth';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';

export default function ProfilePage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);

  async function handleSignOut() {
    try {
      setIsSigningOut(true);
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
      setIsSigningOut(false);
    }
  }

  if (isLoading) {
    return <div className="text-brand-700">Loading profile...</div>;
  }

  if (!user) {
    router.push('/login');
    return null;
  }

  const userEmail = user.email || 'User';
  const userDisplayName = user.user_metadata?.full_name || 'Ritika Client';

  return (
    <section className="space-y-10 rounded-[2.5rem] border border-brand-200/70 bg-white/90 p-10 shadow-soft">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-600">Profile</p>
        <h1 className="text-3xl font-semibold text-brand-950">Your account</h1>
        <p className="max-w-2xl text-sm leading-7 text-brand-700">Manage your account, wishlist, and product enquiry history.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-brand-200/70 bg-brand-100/80 p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-600">Name</p>
          <p className="mt-3 text-xl font-semibold text-brand-950">{userDisplayName}</p>
        </div>
        <div className="rounded-[2rem] border border-brand-200/70 bg-brand-100/80 p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-600">Email</p>
          <p className="mt-3 text-xl font-semibold text-brand-950">{userEmail}</p>
        </div>
      </div>
      <div className="rounded-[2.5rem] border border-brand-200/70 bg-white/90 p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.25em] text-brand-600">Actions</p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Button onClick={handleSignOut} size="lg" disabled={isSigningOut}>
            Sign out
          </Button>
          <Button variant="outline" size="lg" onClick={() => router.push('/contact')}>
            Contact support
          </Button>
        </div>
      </div>
    </section>
  );
}
