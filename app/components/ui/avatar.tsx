import { cn } from "~/lib/utils";

interface InitialsAvatarProps {
  name: string;
  className?: string;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function InitialsAvatar({ name, className }: InitialsAvatarProps) {
  const initials = getInitials(name);

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full font-semibold border-2 border-accent",
        "bg-[var(--brand-navy)] text-white",
        className
      )}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
