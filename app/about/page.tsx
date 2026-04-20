import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReportsTopBar } from "@/components/reports/ReportsTopBar";

export const metadata: Metadata = {
  title: "About — The TEC Research Observatory",
  description:
    "The Research Observatory is TEC's shared space for applied research, global benchmarking, and future-facing insights.",
};

const findItems = [
  {
    title: "Executive Summary",
    body: "A strategic synthesis of key findings and high-level implications for policy and system development.",
  },
  {
    title: "Detailed Report",
    body: "The full analytical research document presenting structural assessment, international benchmarking, and evidence-based directional insights, covering a deliberated scope of work and targeted research objectives.",
  },
  {
    title: "AI-Generated Podcast Series",
    body: "A curated AI – generated three-part audio discussion series examining the report's themes, trade-offs, and systemic implications.",
  },
  {
    title: "Video Explainer",
    body: "A structured visual briefing that communicates the report's core frameworks, insights, and strategic considerations, and serves as a teaser to explore the concepts that the detailed report presents.",
  },
  {
    title: "Technical Glossary",
    body: "An authoritative reference defining the core concepts, methodologies, and analytical constructs used across the research.",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <ReportsTopBar />

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="relative h-[200px] w-full overflow-hidden rounded-lg sm:h-[260px] md:h-[300px] lg:h-[340px]">
          <Image
            src="/Adaptive-Cities/shutterstock_24761386213.png"
            alt="Dubai skyline at night"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <nav
          className="mb-8 text-sm text-neutral-500 sm:mb-10"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition hover:text-neutral-800">
            Research Observatory
          </Link>
          <span className="mx-2 text-neutral-400" aria-hidden>
            &gt;
          </span>
          <span className="text-neutral-600">About</span>
        </nav>

        <article className="space-y-10 text-neutral-700 sm:space-y-12">
          <header className="space-y-4">
            <h1 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              Research Observatory
            </h1>
            <p className="max-w-none text-base leading-relaxed text-neutral-600 sm:text-[17px]">
              The Research Observatory is TEC&apos;s shared space for applied
              research, global benchmarking, and future-facing insights. It
              helps teams explore emerging issues, learn from global practice,
              and support strategic dialogue on Dubai&apos;s long-term
              priorities.
            </p>
          </header>

          <section className="space-y-6">
            <h2 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
              What you will find
            </h2>
            <ul className="list-none space-y-6 p-0">
              {findItems.map((item) => (
                <li key={item.title} className="max-w-none">
                  <p className="font-semibold text-neutral-900">{item.title}</p>
                  <p className="mt-1.5 text-base leading-relaxed text-neutral-600 sm:text-[17px]">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
              How to use it
            </h2>
            <p className="max-w-none text-base leading-relaxed text-neutral-600 sm:text-[17px]">
              Scan what&apos;s new, dive deeper when needed, and connect insights
              across topics. The content is intentionally non-prescriptive: it
              offers perspectives and framing questions, not fixed
              recommendations.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
