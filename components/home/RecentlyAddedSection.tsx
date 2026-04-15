"use client";

import { useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ReportCard } from "@/components/home/ReportCard";
import type { Report } from "@/lib/home-content";

type RecentlyAddedSectionProps = {
  reports: Report[];
};

export function RecentlyAddedSection({ reports }: RecentlyAddedSectionProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCards = useCallback((dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const width = card ? (card as HTMLElement).offsetWidth : 280;
    const gap = 16;
    el.scrollBy({ left: dir * (width + gap), behavior: "smooth" });
  }, []);

  return (
    <section id="reports" className="py-12 sm:py-16">
      <SectionWrapper>
        <h2 className="mb-6 text-xl font-semibold text-tec-brown sm:text-2xl">
          Recently Added
        </h2>
        <div className="relative">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 -translate-x-2 items-center justify-center rounded-full border border-black/10 bg-white text-tec-brown shadow-md transition hover:bg-neutral-50 md:flex lg:-translate-x-4"
            aria-label="Previous items"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 translate-x-2 items-center justify-center rounded-full border border-black/10 bg-white text-tec-brown shadow-md transition hover:bg-neutral-50 md:flex lg:translate-x-4"
            aria-label="Next items"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:px-12 [&::-webkit-scrollbar]:hidden"
          >
            {reports.map((report) => (
              <div
                key={report.id}
                data-card
                className="w-[min(100%,280px)] shrink-0 snap-start sm:w-[300px] lg:w-[calc(33.333%-11px)]"
              >
                <ReportCard report={report} />
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
