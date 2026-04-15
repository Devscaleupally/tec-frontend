import { Navbar } from "@/components/layout/Navbar";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Hero } from "@/components/home/Hero";
import { SearchPanel } from "@/components/home/SearchPanel";
import { BrowseByThemeSection } from "@/components/home/BrowseByThemeSection";
import { RecentlyAddedSection } from "@/components/home/RecentlyAddedSection";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import {
  featuredReports,
  recentlyAddedReports,
  themeCategories,
} from "@/lib/home-content";

export default function HomePage() {
  return (
    <main className="min-h-screen flex-1 bg-white">
      <Hero>
        <Navbar />
        <div className="flex flex-1 flex-col justify-end px-4 pb-10 pt-10 sm:pb-12 sm:pt-14 md:pb-16">
          <SectionWrapper className="mx-0 max-w-3xl text-left">
            <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-tight">
              Welcome to The TEC Research Observatory.
            </h1>
            <p className="mt-4 max-w-3xl text-base font-medium text-white/95 sm:text-lg">
              A shared knowledge space for TEC stakeholders.
            </p>
            <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-white/85 sm:text-base">
              Explore curated research, reports, and insights that support
              evidence-based decision making across Dubai Government—organized
              by theme, department, and format for quick discovery.
            </p>
          </SectionWrapper>
        </div>
      </Hero>
      <SearchPanel />
      <BrowseByThemeSection categories={themeCategories} />
      <RecentlyAddedSection reports={recentlyAddedReports} />
      <FeaturedSection reports={featuredReports} />

      <footer
        id="about"
        className="border-t border-neutral-200 bg-neutral-50 py-8 text-center text-sm text-tec-muted"
      >
        <SectionWrapper>
          <p>The TEC Research Observatory — prototype UI aligned to design.</p>
        </SectionWrapper>
      </footer>
    </main>
  );
}
