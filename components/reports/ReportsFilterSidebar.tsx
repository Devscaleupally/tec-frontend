import { ChevronDown } from "lucide-react";

const filterText = "text-[#6f635a]";
const filterBorder = "border-[#8e796a]";

type ReportsFilterSidebarProps = {
  topics: string[];
  years: string[];
};

function FilterGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <details className="group border-b border-neutral-200 last:border-b-0">
      <summary
        className={`flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-sm font-normal ${filterText} [&::-webkit-details-marker]:hidden`}
      >
        <span>{title}</span>
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <ul className="space-y-2.5 pb-4 pl-0">
        {items.map((item) => (
          <li key={item}>
            <label className={`flex cursor-pointer items-center gap-2.5 text-sm ${filterText} opacity-90`}>
              <input
                type="checkbox"
                className={`h-3.5 w-3.5 rounded border-neutral-300 ${filterText} accent-[#6f635a] focus:ring-1 focus:ring-[#8e796a] focus:ring-offset-0`}
              />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </details>
  );
}

export function ReportsFilterSidebar({ topics, years }: ReportsFilterSidebarProps) {
  return (
    <>
      <aside
        className={`hidden h-full min-h-0 w-full border-t border-r border-neutral-200 bg-white lg:flex lg:flex-col ${filterText}`}
      >
        <div className="px-5 pb-1 pt-5">
          <h2 className={`text-base font-bold leading-tight ${filterText}`}>Filter</h2>
        </div>

        <div className="flex min-h-0 flex-1 flex-col px-5">
          <div className="flex-1">
            <FilterGroup title="Topic" items={topics} />
            <FilterGroup title="Date" items={years} />
          </div>

          <div className="mt-8 pb-5">
            <button
              type="button"
              className={`w-full rounded-full border border-[#8e796a] bg-transparent px-5 py-2.5 text-center text-sm font-medium ${filterText} transition-colors hover:bg-[#faf8f6]`}
            >
              Filter Results
            </button>
            <div className="mt-6 border-t border-neutral-200 pt-5">
              <button
                type="button"
                className="w-full text-center text-sm font-normal text-[#8e796a] transition-colors hover:text-[#6f635a]"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </aside>

      <details className="rounded-xl border border-neutral-200 bg-white p-4 lg:hidden">
        <summary
          className={`flex cursor-pointer list-none items-center justify-between text-base font-semibold ${filterText} [&::-webkit-details-marker]:hidden`}
        >
          Filter Reports
          <ChevronDown className="h-4 w-4 shrink-0" />
        </summary>
        <div className="pt-4">
          <FilterGroup title="Topic" items={topics} />
          <FilterGroup title="Date" items={years} />
          <button
            type="button"
            className={`mt-4 w-full rounded-full border ${filterBorder} bg-transparent px-5 py-2.5 text-sm font-medium ${filterText} transition-colors hover:bg-neutral-50`}
          >
            Filter Results
          </button>
          <div className="mt-4 border-t border-neutral-200 pt-4">
            <button
              type="button"
              className={`w-full text-center text-sm font-normal ${filterText} transition-colors hover:text-[#6f635a]`}
            >
              Logout
            </button>
          </div>
        </div>
      </details>
    </>
  );
}
