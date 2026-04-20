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
    const cardsPerView = 3;
    el.scrollBy({
      left: dir * (width * cardsPerView + gap * (cardsPerView - 1)),
      behavior: "smooth",
    });
  }, []);

  return (
    <section id="reports" className="py-12 sm:py-16">
      <SectionWrapper>
        <div className="mb-6 border-b border-neutral-200 pb-4 sm:mb-8">
          <h2 className="text-xl font-semibold text-tec-brown sm:text-2xl">
            Recently Added
          </h2>
        </div>
        <div className="relative">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            className="absolute left-2 top-[31%] z-20 hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/90 text-neutral-500 shadow-sm transition-colors hover:text-neutral-700 md:flex"
            aria-label="Previous items"
          >
            <ChevronLeft className="h-7 w-7 stroke-[1.25]" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            className="absolute right-2 top-[31%] z-20 hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/90 text-neutral-500 shadow-sm transition-colors hover:text-neutral-700 md:flex"
            aria-label="Next items"
          >
            <ChevronRight className="h-7 w-7 stroke-[1.25]" />
          </button>

          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reports.map((report) => (
              <div
                key={report.id}
                data-card
                className="w-[min(100%,300px)] shrink-0 snap-start sm:w-[320px] md:w-[calc((100%-2.5rem)/3)]"
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
