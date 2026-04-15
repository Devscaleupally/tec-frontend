import type { ThemeCategory } from "@/lib/home-content";
import { BarChart3, Building2, Leaf, Users } from "lucide-react";

const icons = {
  chart: BarChart3,
  leaf: Leaf,
  users: Users,
  building: Building2,
} as const;

type ThemeButtonProps = {
  category: ThemeCategory;
};

export function ThemeButton({ category }: ThemeButtonProps) {
  const Icon = icons[category.icon];
  return (
    <button
      type="button"
      className="flex w-full min-w-0 items-center gap-2 rounded-lg bg-tec-brown px-3 py-3 text-left text-xs font-semibold text-white shadow-sm transition hover:bg-tec-brown-dark sm:gap-3 sm:px-4 sm:text-sm"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/15">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
      </span>
      <span className="leading-snug">{category.label}</span>
    </button>
  );
}
