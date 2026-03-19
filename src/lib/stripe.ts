import Stripe from "stripe";

function getStripeClient() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key || key.includes("REPLACE_ME")) {
    return null;
  }
  return new Stripe(key, {
    apiVersion: "2025-01-27.acacia",
    typescript: true,
  });
}

export const stripe = getStripeClient();

export const PLATFORM_FEE_PERCENT = parseInt(
  process.env.STRIPE_PLATFORM_FEE_PERCENT ?? "10",
  10
);

export function calculatePlatformFee(amountInCents: number): number {
  return Math.round(amountInCents * (PLATFORM_FEE_PERCENT / 100));
}
