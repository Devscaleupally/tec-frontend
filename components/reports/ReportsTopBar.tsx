"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

const links = [
  { href: "/", label: "Home", match: (p: string) => p === "/" },
  {
    href: "/reports",
    label: "Reports",
    match: (p: string) => p.startsWith("/reports"),
  },
  { href: "/about", label: "About", match: (p: string) => p === "/about" },
] as const;

export function ReportsTopBar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:gap-6 lg:px-8">
        <div className="flex shrink-0 items-center">
          <Image
            src="/logo-god2.png"
            alt="Government of Dubai"
            width={159}
            height={64}
            className="h-8 w-auto max-w-none sm:h-9"
            priority
            sizes="(max-width: 640px) 100px, 120px"
          />
        </div>

        <div className="flex min-w-0 items-center justify-center gap-4 lg:gap-6">
          <nav aria-label="Main">
            <ul className="flex items-center gap-5 text-sm text-neutral-600 lg:gap-6">
              {links.map((link) => {
                const active = link.match(pathname);
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`pb-1 transition ${
                        active
                          ? "border-b-2 border-tec-brown font-semibold text-neutral-900"
                          : "border-b-2 border-transparent hover:text-neutral-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex w-full max-w-xl items-center rounded-full bg-neutral-100 px-4 py-2.5">
            <Search className="mr-2 h-4 w-4 shrink-0 text-neutral-400" />
            <input
              type="search"
              placeholder="Search reports, topics, departments..."
              className="w-full min-w-0 bg-transparent text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none"
              aria-label="Search reports"
            />
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-end">
          <Image
            src="/Frame45.png"
            alt="The Executive Council"
            width={159}
            height={48}
            className="h-8 w-auto max-w-none sm:h-9"
            priority
            sizes="(max-width: 640px) 110px, 130px"
          />
        </div>
      </div>
    </header>
  );
}
