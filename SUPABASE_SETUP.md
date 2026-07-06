# Supabase Setup Guide

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/log in
2. Click "New Project"
3. Enter project name: `ritika-atelier`
4. Set a strong password
5. Choose your region (closest to your users)
6. Wait for the project to be created

## 2. Run Database Migration

1. Go to the **SQL Editor** tab in your Supabase project
2. Click **New Query**
3. Copy the contents of `supabase/migrations/001_initial_schema.sql`
4. Paste it into the query editor
5. Click **Run**

This creates all necessary tables with proper indexes and security policies.

## 3. Configure Authentication

1. Go to **Authentication > Providers**
2. Email is enabled by default
3. For Google login:
   - Click **Google**
   - Follow the instructions to set up Google OAuth
   - Add authorized redirect URIs:
     - `http://localhost:3000/auth/callback` (development)
     - `https://your-domain.com/auth/callback` (production)

## 4. Get Your API Keys

1. Go to **Settings > API**
2. Copy your **Project URL** (looks like `https://xxxxx.supabase.co`)
3. Copy your **Anon Public Key** under the API Keys section

## 5. Update Environment Variables

Create `.env.local` in your project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
NEXT_PUBLIC_WHATSAPP_NUMBER=+1234567890
```

## 6. (Optional) Add Sample Data

You can manually insert sample data via Supabase's table editor:

1. Go to **Table Editor**
2. Select the `categories` table
3. Click **Insert row** and add your categories
4. Select the `products` table and add your products

## 7. Deploy to Vercel

1. Push your code to GitHub
2. Create a Vercel project linked to your repository
3. Add these environment variables to Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
4. Deploy!

## Database Schema

- **categories**: Store product collections
- **products**: Main product catalog
- **enquiries**: Customer product inquiries
- **newsletter**: Newsletter subscribers

All tables have necessary indexes and Row-Level Security (RLS) policies configured for data protection.

## Troubleshooting

**"403 Unauthorized" errors:**
- Check your Supabase URL and Anon Key are correct
- Verify RLS policies are enabled

**"CORS" errors:**
- Go to Supabase > Settings > API > CORS
- Make sure your domain is whitelisted

**Performance issues:**
- Use the Supabase dashboard to review query performance
- Indexes are already created on common filter fields
