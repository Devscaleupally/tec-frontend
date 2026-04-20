import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ReportsTopBar } from "@/components/reports/ReportsTopBar";
import { ReportDetailView } from "@/components/reports/ReportDetailView";
import { getReportWithDetail } from "@/lib/reports-content";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const report = getReportWithDetail(id);
  if (!report) return { title: "Report not found" };
  return {
    title: `${report.title} | The TEC Research Observatory`,
    description: report.description,
  };
}

export default async function ReportDetailPage({ params }: PageProps) {
  const { id } = await params;
  const report = getReportWithDetail(id);
  if (!report) notFound();

  return (
    <main className="min-h-screen bg-white">
      <ReportsTopBar />
      <ReportDetailView report={report} />
    </main>
  );
}
