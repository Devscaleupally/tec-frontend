import Image from "next/image";
import Link from "next/link";
import type { ReportsListItem as ReportItem } from "@/lib/reports-content";

type ReportListItemProps = {
  report: ReportItem;
};

export function ReportListItem({ report }: ReportListItemProps) {
  return (
    <Link
      href={`/reports/${report.id}`}
      className="block transition hover:bg-neutral-50/80"
    >
      <article className="grid grid-cols-1 items-start gap-4 border-b border-neutral-200 py-5 sm:grid-cols-[minmax(0,220px)_minmax(0,1fr)] sm:gap-x-6 sm:gap-y-0">
      <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden rounded-md bg-neutral-100">
        <Image
          src={report.imageSrc}
          alt={report.title}
          fill
          className="object-cover"
          sizes="(max-width: 639px) 100vw, 220px"
        />
      </div>

      <div className="min-w-0">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {report.categories.map((category) => (
            <span
              key={category}
              className="inline-flex rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-500"
            >
              {category}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-semibold leading-tight text-neutral-900 sm:text-xl">
          {report.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          {report.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {report.formats.map((format) => (
            <span
              key={format}
              className="rounded-full bg-tec-sand px-3 py-1 text-xs font-medium text-tec-brown-dark"
            >
              {format}
            </span>
          ))}
        </div>

        <p className="mt-3 text-right text-sm text-neutral-500">{report.date}</p>
      </div>
    </article>
    </Link>
  );
}
