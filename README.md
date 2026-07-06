# Ritika Atelier

A premium luxury product catalogue website built with Next.js 15, TypeScript, Tailwind CSS, Supabase, and Framer Motion.

## Features

- Modern product catalogue with collections, search, filters, sorting, and infinite scroll
- Product detail pages, responsive gallery, specifications, and related products
- Supabase Authentication with email/password and Google login
- Admin dashboard for managing products, categories, enquiries, and homepage content
- WhatsApp enquiry flow with auto-generated message and enquiry persistence
- SEO metadata, sitemap, robots, and fast performance

## Setup

1. **Create a Supabase project:**
   - Go to [supabase.com](https://supabase.com) and create a new project
   - Get your project URL and API key from the project settings

2. **Set up database tables:**
   - Go to Supabase **SQL Editor** tab
   - Click **New Query**
   - Open `supabase/migrations/001_initial_schema.sql` in your editor
   - Copy the SQL text from that file (do not run the filename itself)
   - Paste the SQL into the Supabase query editor
   - Click **Run**
   - This creates all tables with proper indexes and security policies
   - Enable Supabase Authentication (Email/Password & Google pre-configured)

3. **Set up environment variables:**
   - Copy `.env.local.example` to `.env.local`
   - Add your Supabase URL and Anon key:
     ```
     NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
     NEXT_PUBLIC_WHATSAPP_NUMBER=+1234567890
     ```

4. **Install dependencies and run:**
   ```bash
   npm install
   npm run dev
   ```

## Deploy to Vercel

1. Push the project to GitHub.
2. Open [vercel.com](https://vercel.com) and create a new project.
3. Connect your GitHub repository and select the `main` branch.
4. In Vercel Project Settings > Environment Variables, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
5. Set the build command to `npm run build` and the output directory to `.`.
6. Deploy the project.
7. After deployment, open the preview URL and verify the app loads.

If you want automatic deploys on push, keep the GitHub integration enabled.

The free tier includes:
- PostgreSQL database (512MB)
- 100MB file storage
- Unlimited auth users
- Real-time subscriptions
