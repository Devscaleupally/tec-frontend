import Image from "next/image";
import type { Report } from "@/lib/home-content";

type ReportCardProps = {
  report: Report;
};

export function ReportCard({ report }: ReportCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={report.imageSrc}
          alt=""
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <p className="text-xs font-medium text-tec-muted">
          {report.tags.join(" · ")}
        </p>
        <h3 className="line-clamp-2 min-h-[2.75rem] text-base font-bold leading-snug text-neutral-900 sm:text-lg">
          {report.title}
        </h3>
        <div>
          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-tec-muted">
            Available formats
          </p>
          <div className="flex flex-wrap gap-1.5">
            {report.formats.map((f) => (
              <span
                key={f}
                className="inline-flex rounded-full bg-tec-sand px-2 py-0.5 text-[11px] font-medium text-tec-brown-dark ring-1 ring-tec-sand-dark/40"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-auto pt-2 text-right text-xs text-tec-muted">
          {report.date}
        </p>
      </div>
    </article>
  );
}
