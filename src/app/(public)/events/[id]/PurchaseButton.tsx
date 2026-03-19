"use client";

import { GlassButton } from "@/components/ui/GlassButton";
import { purchaseTicket } from "@/actions/order-actions";
import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";

interface PurchaseButtonProps {
  eventId: string;
  tierId: string;
  tierName: string;
  price: number;
  soldOut: boolean;
}

export function PurchaseButton({
  eventId,
  tierId,
  tierName,
  price,
  soldOut,
}: PurchaseButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  function handlePurchase() {
    startTransition(async () => {
      const result = await purchaseTicket(eventId, tierId);
      if (result?.success) {
        setSuccess(true);
        setTimeout(() => router.push("/attendee/dashboard"), 1200);
      }
    });
  }

  if (success) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs text-success font-medium animate-in">
        <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Added
      </span>
    );
  }

  return (
    <GlassButton
      onClick={handlePurchase}
      disabled={isPending || soldOut}
      variant={soldOut ? "ghost" : "default"}
      size="sm"
    >
      {soldOut
        ? "Unavailable"
        : isPending
          ? "Adding..."
          : price === 0
            ? "Register"
            : "Get Tickets"}
    </GlassButton>
  );
}
