import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
}

export function GlassCard({
  children,
  hoverable = false,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl p-6 transition-all duration-200",
        hoverable && "hover:shadow-sm cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { GlassCard as Card };
