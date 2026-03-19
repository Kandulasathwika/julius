import { PrismaClient } from "@prisma/client";
import { randomUUID, createHash } from "crypto";

const prisma = new PrismaClient();

function qrHash() {
  const raw = randomUUID();
  return createHash("sha256").update(raw).digest("hex");
}

async function main() {
  // Clear existing data
  await prisma.attendeeTicket.deleteMany();
  await prisma.order.deleteMany();
  await prisma.ticketTier.deleteMany();
  await prisma.event.deleteMany();
  await prisma.user.deleteMany();

  // Create users
  const organizer = await prisma.user.create({
    data: {
      clerkId: "demo_organizer_001",
      email: "organizer@events.demo",
      name: "Jordan Mitchell",
      role: "ORGANIZER",
      stripeAccountId: "acct_demo_001",
    },
  });

  const organizer2 = await prisma.user.create({
    data: {
      clerkId: "demo_organizer_002",
      email: "studio@events.demo",
      name: "Aria Studio Collective",
      role: "ORGANIZER",
      stripeAccountId: "acct_demo_002",
    },
  });

  const attendee = await prisma.user.create({
    data: {
      clerkId: "demo_attendee_001",
      email: "attendee@events.demo",
      name: "Alex Chen",
      role: "ATTENDEE",
    },
  });

  // Create events
  const events = await Promise.all([
    prisma.event.create({
      data: {
        title: "NEON FREQUENCIES",
        description:
          "An immersive electronic music experience in a transformed industrial warehouse. Three stages. Twelve hours. Featuring underground and headline DJs pushing the boundaries of sound design.\n\nExpect floor-shaking bass, mesmerizing visuals projected across 40-foot walls, and a crowd that lives for the music. Curated food vendors and craft cocktails available throughout the night.\n\nDoors open at 8 PM. The music never stops.",
        location: "The Warehouse District, Los Angeles",
        date: new Date("2026-04-18T20:00:00"),
        isPublished: true,
        organizerId: organizer.id,
        ticketTiers: {
          create: [
            { name: "General Admission", price: 4500, capacity: 500, sortOrder: 0 },
            { name: "VIP Lounge", price: 12000, capacity: 100, sortOrder: 1 },
            { name: "Backstage Pass", price: 25000, capacity: 20, sortOrder: 2 },
          ],
        },
      },
    }),
    prisma.event.create({
      data: {
        title: "DESIGN FORWARD",
        description:
          "A two-day conference for designers, engineers, and creative technologists building the future of human-computer interaction.\n\nKeynotes from industry leaders at Apple, Figma, and Linear. Hands-on workshops covering spatial computing, generative UI, and design systems at scale.\n\nNetworking sessions, portfolio reviews, and an after-party you will not forget.",
        location: "Yerba Buena Center, San Francisco",
        date: new Date("2026-05-10T09:00:00"),
        isPublished: true,
        organizerId: organizer2.id,
        ticketTiers: {
          create: [
            { name: "Conference Pass", price: 29900, capacity: 800, sortOrder: 0 },
            { name: "Workshop + Conference", price: 49900, capacity: 200, sortOrder: 1 },
            { name: "Executive Pass", price: 99900, capacity: 50, sortOrder: 2 },
          ],
        },
      },
    }),
    prisma.event.create({
      data: {
        title: "MIDNIGHT RUN",
        description:
          "A 10K night run through the illuminated streets of downtown. Glow gear provided. Live DJs at every kilometer. Finish line festival with food trucks and live performances.\n\nAll fitness levels welcome. Run, jog, or walk - just show up and move.\n\nPacket pickup begins at 7 PM. Race starts at 10 PM sharp.",
        location: "Downtown Austin, TX",
        date: new Date("2026-03-28T22:00:00"),
        isPublished: true,
        organizerId: organizer.id,
        ticketTiers: {
          create: [
            { name: "Runner Entry", price: 5500, capacity: 2000, sortOrder: 0 },
            { name: "Runner + Merch Pack", price: 8500, capacity: 500, sortOrder: 1 },
          ],
        },
      },
    }),
    prisma.event.create({
      data: {
        title: "THE CULINARY LAB",
        description:
          "An exclusive pop-up dining experience pairing a Michelin-starred chef with local artisan producers. Seven courses. Wine pairing included.\n\nEach dish tells a story of the region - sourced within 50 miles, crafted with techniques from around the world.\n\nSeating is limited. This is not dinner. This is an experience.",
        location: "Secret Location, Brooklyn, NY",
        date: new Date("2026-04-05T19:00:00"),
        isPublished: true,
        organizerId: organizer2.id,
        ticketTiers: {
          create: [
            { name: "Dining Seat", price: 18500, capacity: 40, sortOrder: 0 },
            { name: "Chef's Table", price: 35000, capacity: 8, sortOrder: 1 },
          ],
        },
      },
    }),
    prisma.event.create({
      data: {
        title: "CODE/CRAFT",
        description:
          "A 48-hour hackathon for developers, designers, and entrepreneurs. Build something real. Ship something bold.\n\nMentors from Y Combinator, Vercel, and Stripe. Over $50,000 in prizes. Free meals, caffeine on tap, and sleeping pods for the brave.\n\nTeams of 2-4. Solo hackers welcome - we will match you.",
        location: "Pier 48, San Francisco",
        date: new Date("2026-06-14T18:00:00"),
        isPublished: true,
        organizerId: organizer.id,
        ticketTiers: {
          create: [
            { name: "Hacker Pass", price: 0, capacity: 300, sortOrder: 0 },
            { name: "Premium Hacker", price: 4900, capacity: 100, sortOrder: 1 },
          ],
        },
      },
    }),
    prisma.event.create({
      data: {
        title: "ANALOG SESSIONS",
        description:
          "A vinyl-only listening party in an acoustically perfect space. No phones. No cameras. Just pure sound.\n\nCurated sets spanning jazz, soul, electronic, and ambient. Premium headphones provided at each listening station. Full bar with craft selections.\n\nDisconnect from the digital. Reconnect with music.",
        location: "The Sound Room, Chicago",
        date: new Date("2026-04-25T20:00:00"),
        isPublished: true,
        organizerId: organizer2.id,
        ticketTiers: {
          create: [
            { name: "Listener", price: 3500, capacity: 60, sortOrder: 0 },
            { name: "Collector Edition", price: 7500, capacity: 20, sortOrder: 1 },
          ],
        },
      },
    }),
  ]);

  // Create some orders and tickets for the attendee
  const order1 = await prisma.order.create({
    data: {
      userId: attendee.id,
      eventId: events[0].id,
      totalAmount: 12000,
      platformFee: 1200,
      stripeSessionId: `cs_demo_${randomUUID().slice(0, 8)}`,
      status: "COMPLETED",
      attendeeTickets: {
        create: [
          { ticketTierId: (await prisma.ticketTier.findFirst({ where: { eventId: events[0].id, name: "VIP Lounge" } }))!.id, qrCodeHash: qrHash() },
        ],
      },
    },
  });

  const order2 = await prisma.order.create({
    data: {
      userId: attendee.id,
      eventId: events[4].id,
      totalAmount: 0,
      platformFee: 0,
      stripeSessionId: `cs_demo_${randomUUID().slice(0, 8)}`,
      status: "COMPLETED",
      attendeeTickets: {
        create: [
          { ticketTierId: (await prisma.ticketTier.findFirst({ where: { eventId: events[4].id, name: "Hacker Pass" } }))!.id, qrCodeHash: qrHash() },
        ],
      },
    },
  });

  const order3 = await prisma.order.create({
    data: {
      userId: attendee.id,
      eventId: events[2].id,
      totalAmount: 8500,
      platformFee: 850,
      stripeSessionId: `cs_demo_${randomUUID().slice(0, 8)}`,
      status: "COMPLETED",
      attendeeTickets: {
        create: [
          { ticketTierId: (await prisma.ticketTier.findFirst({ where: { eventId: events[2].id, name: "Runner + Merch Pack" } }))!.id, qrCodeHash: qrHash() },
        ],
      },
    },
  });

  console.log("Seeded: 3 users, 6 events, 3 orders with tickets");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
