import Link from "next/link";
import { GlassButton } from "@/components/ui/GlassButton";

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-2xl font-semibold text-zinc-900 mb-3">Create Account</h1>
        <p className="text-sm text-zinc-400 mb-8">
          Authentication requires Clerk API keys. Add keys to .env to enable.
        </p>
        <hr className="border-t border-gray-200 mb-8" />
        <p className="text-xs text-zinc-400 mb-4">Already have an account?</p>
        <Link href="/sign-in">
          <GlassButton variant="outline" size="md">Sign In</GlassButton>
        </Link>
      </div>
    </main>
  );
}
