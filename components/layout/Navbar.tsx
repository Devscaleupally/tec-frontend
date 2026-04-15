"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

const navLinks = [
  { href: "#", label: "Home", active: true },
  { href: "#reports", label: "Reports", active: false },
  { href: "#about", label: "About", active: false },
  { href: "#logout", label: "Logout", active: false },
];

function GovernmentOfDubaiMark() {
  return (
    <div className="min-w-0 shrink-0 text-left">
      <Image
        src="/Layer_1.png"
        alt="Government of Dubai"
        width={200}
        height={56}
        className="h-8 w-auto max-w-[140px] object-contain object-left sm:h-9 sm:max-w-[160px]"
        priority
      />
    </div>
  );
}

function ExecutiveCouncilLogo({ compact }: { compact?: boolean }) {
  return (
    <div
      className={`min-w-0 shrink-0 text-right ${compact ? "max-w-[140px] sm:max-w-none" : ""}`}
    >
      <Image
        src="/Frame.png"
        alt="المجلس التنفيذي — The Executive Council"
        width={280}
        height={72}
        className={`ml-auto object-contain object-right ${
          compact
            ? "h-7 w-auto max-w-[120px] sm:h-8 sm:max-w-[160px]"
            : "h-8 w-auto max-w-[180px] sm:h-9 sm:max-w-[220px] md:h-10 md:max-w-[260px]"
        }`}
        priority
      />
    </div>
  );
}

function NavLinksList({
  variant,
  onNavigate,
}: {
  variant: "desktop" | "mobile";
  onNavigate?: () => void;
}) {
  if (variant === "desktop") {
    return (
      <ul className="flex list-none items-center justify-center gap-8 xl:gap-10">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={`inline-block whitespace-nowrap text-sm font-medium text-white transition hover:text-white ${
                link.active
                  ? "border-b-2 border-white pb-1"
                  : "border-b-2 border-transparent pb-1 hover:border-white/40"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="flex list-none flex-col gap-0.5">
      {navLinks.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className={`block rounded-md px-2 py-2.5 text-center text-sm font-medium text-white/95 transition hover:bg-white/10 hover:text-white ${
              link.active ? "border-b-2 border-white" : ""
            }`}
            onClick={onNavigate}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 bg-transparent">
      <SectionWrapper className="relative py-3 sm:py-4">
        {/* Mobile / tablet: menu + council */}
        <div className="flex items-center justify-between gap-2 lg:hidden">
          <button
            type="button"
            className="inline-flex shrink-0 rounded-lg p-2 text-white hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <ExecutiveCouncilLogo compact />
        </div>

        <div
          className={`mt-3 border-t border-white/15 pt-3 lg:mt-0 lg:border-t-0 lg:pt-0 ${
            open ? "block" : "hidden"
          } lg:hidden`}
        >
          <NavLinksList variant="mobile" onNavigate={() => setOpen(false)} />
        </div>

        {/* Desktop: left label | centered nav | council */}
        <div className="mt-4 hidden items-center lg:mt-0 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          <div className="justify-self-start min-w-0">
            <GovernmentOfDubaiMark />
          </div>
          <nav aria-label="Main">
            <NavLinksList variant="desktop" />
          </nav>
          <div className="justify-self-end">
            <ExecutiveCouncilLogo />
          </div>
        </div>
      </SectionWrapper>
    </header>
  );
}
