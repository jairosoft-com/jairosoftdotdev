# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- **Development**: `npm run dev` - Start Next.js development server
- **Build**: `npm run build` - Build the application for production
- **Start**: `npm start` - Start the production server
- **Format**: `prettier --write .` - Format code using Prettier

## Architecture Overview

This is a Next.js 15 SaaS application with Supabase backend integration and Stripe payments.

### Key Architecture Components

**Authentication & Database**:
- Uses Supabase for authentication, database, and real-time features
- Client-side: `/supabase/client.ts` - Browser client with SSR support
- Server-side: `/supabase/server.ts` - Server client with cookie handling
- Auth middleware: `/middleware.ts` and `/supabase/middleware.ts` handle session management

**Payment Processing**:
- Stripe integration for subscription billing
- Webhook handler: `/supabase/functions/payments-webhook/index.ts` processes subscription events
- Subscription management in `/src/app/actions.ts` with `checkUserSubscription`

**UI Framework**:
- Tailwind CSS for styling with custom configuration
- Radix UI components in `/src/components/ui/` for accessible primitives
- Custom components in `/src/components/`

**Development Tools**:
- Tempo DevTools integration for enhanced development experience
- TypeScript configuration excludes Supabase folder from compilation
- Path alias `@/*` maps to `./src/*`

### App Structure

**Pages & Routing**:
- App Router structure under `/src/app/`
- Authentication pages in `/(auth)/` group
- Protected dashboard under `/dashboard/`
- Pricing page with subscription integration

**Server Actions**:
- Authentication actions (`signUpAction`, `signInAction`, etc.) in `/src/app/actions.ts`
- User creation includes database record insertion alongside Supabase auth
- Password reset and user subscription checking

**Middleware & Authentication**:
- Session management across all routes except static files and images
- Automatic session refresh and cookie handling
- Protected routes require authentication

## Environment Variables Required

Based on the codebase, these environment variables are needed:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_TEMPO` (optional, for Tempo DevTools)

## Database Schema

Key tables referenced in the code:
- `users` - User profiles with subscription references
- `subscriptions` - Stripe subscription data with status tracking
- `webhook_events` - Stripe webhook event logging

## Testing & Development

- No specific test framework detected in package.json
- Development server includes hot reloading and TypeScript checking
- Prettier is available for code formatting