import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { generateQrPayload } from "@/lib/utils";
import { resend } from "@/lib/resend";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const headerPayload = await headers();
  const signature = headerPayload.get("stripe-signature");

  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const orderId = session.metadata?.orderId;
    if (!orderId) return NextResponse.json({ received: true });

    const order = await prisma.order.update({
      where: { id: orderId },
      data: { status: "COMPLETED" },
      include: {
        user: true,
        event: true,
        attendeeTickets: { include: { ticketTier: true } },
      },
    });

    // Generate QR codes for each ticket if not already generated
    for (const ticket of order.attendeeTickets) {
      if (!ticket.qrCodeHash) {
        const { hash } = generateQrPayload();
        await prisma.attendeeTicket.update({
          where: { id: ticket.id },
          data: { qrCodeHash: hash },
        });
      }
    }

    // Send confirmation email via Resend
    try {
      const ticketListHtml = order.attendeeTickets
        .map(
          (t) =>
            `<tr>
              <td style="padding:12px;border-bottom:1px solid #222;">${t.ticketTier.name}</td>
              <td style="padding:12px;border-bottom:1px solid #222;font-family:monospace;">${t.qrCodeHash.slice(0, 16)}...</td>
            </tr>`
        )
        .join("");

      await resend.emails.send({
        from: "Events <tickets@yourdomain.com>",
        to: order.user.email,
        subject: `Your tickets for ${order.event.title}`,
        html: `
          <div style="background:#0a0a0a;color:#fafafa;padding:40px;font-family:sans-serif;">
            <h1 style="font-size:32px;font-weight:bold;letter-spacing:-0.02em;">YOUR TICKETS</h1>
            <p style="color:#a1a1aa;">${order.event.title} - ${new Date(order.event.date).toLocaleDateString()}</p>
            <table style="width:100%;margin-top:24px;border-collapse:collapse;">
              <thead>
                <tr>
                  <th style="text-align:left;padding:12px;border-bottom:1px solid #333;color:#a1a1aa;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Tier</th>
                  <th style="text-align:left;padding:12px;border-bottom:1px solid #333;color:#a1a1aa;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">QR Code</th>
                </tr>
              </thead>
              <tbody>${ticketListHtml}</tbody>
            </table>
            <p style="color:#a1a1aa;margin-top:32px;font-size:14px;">Present this email or your QR code at the door for entry.</p>
          </div>
        `,
      });
    } catch {
      console.error("Failed to send ticket email");
    }
  }

  return NextResponse.json({ received: true });
}
