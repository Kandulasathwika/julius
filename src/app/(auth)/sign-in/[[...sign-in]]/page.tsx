import Link from "next/link";
import { GlassButton } from "@/components/ui/GlassButton";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-2xl font-semibold text-zinc-900 mb-3">Sign In</h1>
        <p className="text-sm text-zinc-400 mb-8">
          Authentication requires Clerk API keys. Add keys to .env to enable.
        </p>
        <hr className="border-t border-gray-200 mb-8" />
        <p className="text-xs text-zinc-400 mb-4">Demo access</p>
        <div className="space-y-3">
          <Link href="/attendee/dashboard" className="block">
            <GlassButton size="md" className="w-full">View Tickets</GlassButton>
          </Link>
          <Link href="/organizer/dashboard" className="block">
            <GlassButton variant="outline" size="md" className="w-full">Organizer Dashboard</GlassButton>
          </Link>
        </div>
      </div>
    </main>
  );
}
