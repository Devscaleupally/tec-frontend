import Link from "next/link";
import { ChevronDown, CircleHelp } from "lucide-react";
import type { ReportWithDetail } from "@/lib/reports-content";
import { ReportMediaSection } from "@/components/reports/ReportMediaSection";

type ReportDetailViewProps = {
  report: ReportWithDetail;
};

export function ReportDetailView({ report }: ReportDetailViewProps) {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-neutral-500">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
          <li>
            <Link href="/" className="hover:text-neutral-800">
              Research Observatory
            </Link>
          </li>
          <li aria-hidden className="text-neutral-300">
            &gt;
          </li>
          <li>
            <Link href="/reports" className="hover:text-neutral-800">
              Reports
            </Link>
          </li>
          <li aria-hidden className="text-neutral-300">
            &gt;
          </li>
          <li className="font-medium text-neutral-800">{report.title}</li>
        </ol>
      </nav>

      <header className=" border-neutral-200 pb-8">
        <h1 className="text-balance text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          {report.title}
        </h1>
        <p className="mt-4 w-full overflow-x-auto whitespace-nowrap text-base leading-relaxed text-neutral-600 sm:text-lg">
          {report.description}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {report.categories.map((category) => (
              <span
                key={category}
                className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600"
              >
                {category}
              </span>
            ))}
          </div>
          <p className="text-sm font-medium text-neutral-500 sm:text-right">
            {report.date}
          </p>
        </div>
      </header>

      <div className="mt-8 space-y-3">
        <details className="group overflow-hidden rounded-md border border-neutral-200 bg-[#f5f5f5]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 text-sm font-medium text-neutral-800 [&::-webkit-details-marker]:hidden">
            <span className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white text-xs font-semibold text-neutral-600">
                i
              </span>
              Why it matters?
            </span>
            <ChevronDown className="h-5 w-5 shrink-0 text-neutral-500 transition group-open:rotate-180" />
          </summary>
          <div className="border-t border-neutral-200 bg-white px-4 py-4 text-sm leading-relaxed text-neutral-600">
            {report.whyItMatters}
          </div>
        </details>

        <details className="group overflow-hidden rounded-md border border-neutral-200 bg-[#f5f5f5]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 text-sm font-medium text-neutral-800 [&::-webkit-details-marker]:hidden">
            <span className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600">
                <CircleHelp className="h-4 w-4" aria-hidden />
              </span>
              Key questions this report explores.
            </span>
            <ChevronDown className="h-5 w-5 shrink-0 text-neutral-500 transition group-open:rotate-180" />
          </summary>
          <div className="border-t border-neutral-200 bg-white px-4 py-4 text-sm leading-relaxed text-neutral-600">
            <p className="mb-3">{report.keyQuestionsIntro}</p>
            <ul className="list-disc space-y-2 pl-5">
              {report.keyQuestions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
        </details>
      </div>

      <div className="mt-10">
        <ReportMediaSection
          mediaAssets={report.mediaAssets}
          mediaContentByKind={report.mediaContentByKind}
          summaryDetail={report.summaryDetail}
          fullDetail={report.fullDetail}
          podcastDetail={report.podcastDetail}
          infographicDetail={report.infographicDetail}
          videoDetail={report.videoDetail}
          glossaryDetail={report.glossaryDetail}
        />
      </div>
    </div>
  );
}
