"use client";

import { AnimatedToggle } from "@/components/ui/AnimatedToggle";
import { GlassButton } from "@/components/ui/GlassButton";
import { togglePublish, deleteEvent } from "@/actions/event-actions";
import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";

interface EventActionsProps {
  eventId: string;
  isPublished: boolean;
}

export function EventActions({ eventId, isPublished }: EventActionsProps) {
  const [isPending, startTransition] = useTransition();
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  async function handleToggle() {
    await togglePublish(eventId);
    router.refresh();
  }

  function handleDelete() {
    if (!showConfirm) {
      setShowConfirm(true);
      setTimeout(() => setShowConfirm(false), 3000);
      return;
    }
    startTransition(async () => {
      await deleteEvent(eventId);
      router.refresh();
    });
  }

  return (
    <div className="flex items-center gap-3">
      <AnimatedToggle
        isOn={isPublished}
        onToggle={handleToggle}
        labelOn="Live"
        labelOff="Draft"
      />
      <button
        onClick={handleDelete}
        disabled={isPending}
        className={`text-[11px] transition-all duration-300 press-scale ${
          showConfirm
            ? "text-red-500 font-medium"
            : "text-zinc-300 hover:text-zinc-500"
        } disabled:opacity-30`}
      >
        {showConfirm ? "Confirm?" : "Delete"}
      </button>
    </div>
  );
}
