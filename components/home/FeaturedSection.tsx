import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ReportCard } from "@/components/home/ReportCard";
import type { Report } from "@/lib/home-content";

type FeaturedSectionProps = {
  reports: Report[];
};

export function FeaturedSection({ reports }: FeaturedSectionProps) {
  return (
    <section className="py-12 sm:py-16">
      <SectionWrapper>
        <h2 className="mb-6 text-xl font-semibold text-tec-brown sm:text-2xl">
          Featured
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
