import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { randomUUID } from "crypto";
import { createHash } from "crypto";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateQrPayload(): { raw: string; hash: string } {
  const raw = randomUUID();
  const hash = createHash("sha256").update(raw).digest("hex");
  return { raw, hash };
}

export function formatCents(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}

export function absoluteUrl(path: string): string {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}
