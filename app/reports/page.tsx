import { ReportsTopBar } from "@/components/reports/ReportsTopBar";
import { ReportsFilterSidebar } from "@/components/reports/ReportsFilterSidebar";
import { ReportsListView } from "@/components/reports/ReportsListView";
import { allReports, dateFilters, topicFilters } from "@/lib/reports-content";

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f4]">
      <ReportsTopBar />

      <div className="mx-auto max-w-[1400px] px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-0">
          <div className="order-1 flex min-h-0 flex-col lg:w-[280px] lg:shrink-0">
            <ReportsFilterSidebar topics={topicFilters} years={dateFilters} />
          </div>
          <div className="order-2 min-w-0 flex-1">
            <ReportsListView reports={allReports} />
          </div>
        </div>
      </div>
    </main>
  );
}
