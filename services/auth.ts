import { supabase, isSupabaseConfigured } from '@/lib/supabase';

function requireSupabase() {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error('Supabase is not configured');
  }
  return supabase;
}

export async function loginUser(email: string, password: string) {
  return requireSupabase().auth.signInWithPassword({
    email,
    password
  });
}

export async function registerUser(email: string, password: string) {
  return requireSupabase().auth.signUp({
    email,
    password
  });
}

export async function loginWithGoogle() {
  return requireSupabase().auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${typeof window !== 'undefined' ? window.location.origin : ''}/auth/callback`
    }
  });
}

export async function sendResetPassword(email: string) {
  return requireSupabase().auth.resetPasswordForEmail(email, {
    redirectTo: `${typeof window !== 'undefined' ? window.location.origin : ''}/auth/reset-password`
  });
}

export async function signOut() {
  return requireSupabase().auth.signOut();
}
