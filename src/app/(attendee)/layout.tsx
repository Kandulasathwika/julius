import Link from "next/link";

export default function AttendeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Link href="/" className="text-base font-semibold text-zinc-900">events</Link>
            <span className="text-xs text-zinc-300">|</span>
            <span className="text-xs text-zinc-400">My Tickets</span>
          </div>
          <Link href="/" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
            Browse Events
          </Link>
        </nav>
      </header>
      {children}
    </>
  );
}
