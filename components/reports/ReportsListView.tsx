import { CircleHelp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { ReportListItem } from "@/components/reports/ReportListItem";
import type { ReportsListItem as ReportItem } from "@/lib/reports-content";

type ReportsListViewProps = {
  reports: ReportItem[];
};

export function ReportsListView({ reports }: ReportsListViewProps) {
  return (
    <section className="rounded-xl border border-neutral-200 bg-white p-4 sm:p-6">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-4">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold text-neutral-800">All Reports</h1>
          <span className="text-sm text-neutral-400">{reports.length} Reports</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700"
          >
            Sort
            <ChevronDown className="h-4 w-4" />
          </button>
          <CircleHelp className="h-4 w-4 text-neutral-400" />
        </div>
      </div>

      <div>
        {reports.map((report) => (
          <ReportListItem key={report.id} report={report} />
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 text-sm text-neutral-500">
        <p>Page 1 of 1</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-neutral-400"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-tec-brown text-sm font-semibold text-white">
            1
          </span>
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-neutral-400"
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
