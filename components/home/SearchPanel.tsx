"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

const filterOptions = ["All", "Reports", "Topics", "Departments"];

export function SearchPanel() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full bg-white py-8 sm:py-10">
      <SectionWrapper>
        <div className="flex flex-col items-stretch gap-6 md:flex-row md:items-start md:gap-8">
          <div className="mx-auto flex shrink-0 md:mx-0 md:pt-2">
            {/* <div className="relative h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-lg ring-2 ring-black/5 sm:h-20 sm:w-20">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
                alt="User profile"
                fill
                className="object-cover"
                sizes="80px"
              />
            </div> */}
          </div>

          <div className="min-w-0 flex-1 space-y-4">
            <div className="flex w-full items-center gap-0 overflow-hidden rounded-full border border-black/5 bg-neutral-100 shadow-sm ring-1 ring-black/5">
              <div className="relative shrink-0" ref={menuRef}>
                <button
                  type="button"
                  onClick={() => setFilterOpen((v) => !v)}
                  className="flex items-center gap-1 whitespace-nowrap border-r border-black/10 bg-neutral-100 px-3 py-3.5 text-sm font-medium text-neutral-800 transition hover:bg-neutral-200/80 sm:px-4 sm:py-4"
                  aria-haspopup="listbox"
                  aria-expanded={filterOpen}
                >
                  Filter
                  <ChevronDown className="h-4 w-4 opacity-70" />
                </button>
                {filterOpen ? (
                  <ul
                    className="absolute left-0 top-full z-30 mt-1 min-w-40 rounded-lg border border-black/10 bg-white py-1 shadow-lg"
                    role="listbox"
                  >
                    {filterOptions.map((opt) => (
                      <li key={opt}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={filter === opt}
                          className="block w-full px-3 py-2 text-left text-sm text-neutral-800 hover:bg-neutral-100"
                          onClick={() => {
                            setFilter(opt);
                            setFilterOpen(false);
                          }}
                        >
                          {opt}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <input
                type="search"
                placeholder="Search reports, topics, departments..."
                className="min-w-0 flex-1 bg-transparent px-3 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none sm:px-4 sm:py-4"
                aria-label="Search publications"
              />
              <button
                type="button"
                className="flex shrink-0 items-center justify-center px-4 py-3.5 text-tec-brown transition hover:text-tec-brown-dark sm:px-5 sm:py-4"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>

            <p className="w-full text-right text-sm text-neutral-600">
              Total Publications:{" "}
              <span className="font-semibold text-neutral-800">4</span>
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
              <button
                type="button"
                className="rounded-lg bg-tec-brown px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-tec-brown-dark"
              >
                View all reports
              </button>
              <button
                type="button"
                className="rounded-lg border-2 border-tec-brown bg-white px-6 py-3 text-sm font-semibold text-tec-brown transition hover:bg-neutral-50"
              >
                Browse by theme
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
