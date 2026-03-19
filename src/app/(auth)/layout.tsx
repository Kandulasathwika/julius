import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-center">
          <Link href="/" className="text-base font-semibold text-zinc-900">events</Link>
        </nav>
      </header>
      {children}
    </>
  );
}
