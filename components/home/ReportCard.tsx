import Image from "next/image";
import type { Report } from "@/lib/home-content";

type ReportCardProps = {
  report: Report;
};

export function ReportCard({ report }: ReportCardProps) {
  return (
    <article className="group flex h-full flex-col bg-white">
      <div className="relative aspect-video w-full overflow-hidden rounded-md">
        <Image
          src={report.imageSrc}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 pt-2.5">
        <div className="flex flex-wrap gap-1.5">
          {report.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex rounded-full border border-tec-sand-dark/70 bg-tec-sand px-2 py-0.5 text-[10px] font-medium leading-none text-tec-brown-dark"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="line-clamp-2 min-h-11 text-[22px] font-semibold leading-[1.2] text-neutral-900">
          {report.title}
        </h3>
        <div>
          <p className="mb-1.5 text-[10px] font-medium text-tec-muted">
            Available formats
          </p>
          <div className="flex flex-wrap gap-1.5">
            {report.formats.map((f) => (
              <span
                key={f}
                className="inline-flex rounded-full border border-tec-sand-dark/70 bg-tec-sand px-2 py-0.5 text-[10px] font-medium leading-none text-tec-brown-dark"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-auto pt-2 text-right text-[11px] text-tec-muted">
          {report.date}
        </p>
      </div>
    </article>
  );
}
