# Architecture Overview

## Tech Stack

- Framework: Next.js 16 (App Router)
- Language: TypeScript (strict)
- Database: Supabase (PostgreSQL) via Prisma ORM
- Authentication: Clerk (webhook sync to local User model)
- Payments: Stripe Connect (platform fees + organizer payouts)
- Email: Resend (transactional ticket delivery)
- Styling: Tailwind CSS v4 with custom Glassmorphism theme

## Directory Structure

```
src/
  app/
    (public)/         - Event discovery, event detail pages (unauthenticated)
    (organizer)/      - Organizer dashboard, event creation (ORGANIZER role)
    (attendee)/       - Attendee ticket dashboard (authenticated)
    api/webhooks/     - Clerk user sync, Stripe payment webhooks
  components/
    ui/               - GlassCard, GlassButton (Glassmorphism design system)
    events/           - Event-specific components
    tickets/          - Ticket display and QR components
  lib/                - Prisma client, Stripe client, Resend client, utilities
  actions/            - Server Actions for events, orders, tickets
prisma/
  schema.prisma       - Database schema (User, Event, TicketTier, Order, AttendeeTicket)
docs/                 - Project documentation and active task tracking
.cursor/rules/        - AI coding rules (MDC format)
.cursor/agents/       - Custom subagents
```

## Data Flow

1. Users sign up via Clerk -> webhook syncs to local User model
2. Organizers create Events with TicketTiers
3. Attendees browse published Events on the discovery feed
4. Checkout creates a Stripe Connect session with platform fee
5. Stripe webhook confirms payment -> Order marked COMPLETED -> QR tickets generated -> Resend delivers email

## Database Models

- User: Clerk-synced user with Role (ATTENDEE or ORGANIZER) and optional stripeAccountId
- Event: Has title, description, location, date, publish status. Belongs to an organizer.
- TicketTier: Named pricing tier (e.g., General Admission, VIP) with capacity. Belongs to an Event.
- Order: Purchase record linking User to Event. Tracks total, platform fee, Stripe session ID, and status.
- AttendeeTicket: Individual ticket with unique QR code hash and scanned status. Belongs to an Order and TicketTier.

## Key Design Decisions

- Monetary values stored as integers (cents) to avoid floating-point errors
- QR codes stored as SHA-256 hashes; the raw UUID is sent to the attendee, and only the hash is stored in the database
- Server Components by default; "use client" only for interactive forms and buttons
- All data mutations go through Server Actions (src/actions/)
- Glassmorphism UI with backdrop-blur, translucent borders, and dark-by-default theme
