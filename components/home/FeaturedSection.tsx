import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ReportCard } from "@/components/home/ReportCard";
import type { Report } from "@/lib/home-content";

type FeaturedSectionProps = {
  reports: Report[];
};

export function FeaturedSection({ reports }: FeaturedSectionProps) {
  const featuredReports = reports.slice(0, 4);

  return (
    <section className="border-t border-neutral-200/80 bg-neutral-50/40 pt-8 pb-12 sm:pt-10 sm:pb-16 md:pt-12 md:pb-16">
      <SectionWrapper>
        <div className="mb-6 border-b border-neutral-200 pb-4 sm:mb-8">
          <h2 className="text-xl font-semibold text-tec-brown sm:text-2xl">
            Featured
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {featuredReports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
