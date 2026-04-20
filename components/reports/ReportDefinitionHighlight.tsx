import { Globe2, Puzzle } from "lucide-react";
import type { ReportFullDefinitionCard } from "@/lib/reports-content";

export function ReportDefinitionHighlightCard({
  card,
}: {
  card: ReportFullDefinitionCard;
}) {
  const isBlue = card.accent === "blue";
  return (
    <article className="flex min-h-22 overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      <div
        className={`flex w-24 shrink-0 items-center justify-center self-stretch rounded-tl-[2.5rem] rounded-bl-[2.5rem] text-white ${
          isBlue ? "bg-[#2D88C4]" : "bg-[#E21F26]"
        }`}
        aria-hidden
      >
        {isBlue ? (
          <Globe2 className="h-10 w-10" strokeWidth={1.25} />
        ) : (
          <Puzzle className="h-10 w-10" strokeWidth={1.25} />
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center px-4 py-3.5 sm:px-6 sm:py-4">
        <h4 className="text-base font-bold leading-snug text-neutral-900 sm:text-lg">
          {card.title}
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-neutral-900 sm:text-[0.9375rem]">
          {card.body}
        </p>
      </div>
    </article>
  );
}

export function ReportDefinitionHighlightRow({
  cards,
}: {
  cards: ReportFullDefinitionCard[];
}) {
  if (cards.length === 0) return null;
  return (
    <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
      {cards.map((card) => (
        <ReportDefinitionHighlightCard key={card.title} card={card} />
      ))}
    </div>
  );
}
