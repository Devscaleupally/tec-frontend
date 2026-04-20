import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ThemeButton } from "@/components/home/ThemeButton";
import type { ThemeCategory } from "@/lib/home-content";

type BrowseByThemeSectionProps = {
  categories: ThemeCategory[];
};

export function BrowseByThemeSection({
  categories,
}: BrowseByThemeSectionProps) {
  return (
    <section className="border-t border-neutral-200/80 bg-neutral-50/50 pt-8 pb-12 sm:pt-10 sm:pb-16 md:pt-12 md:pb-16">
      <SectionWrapper>
        <div className="mb-6 border-b border-neutral-200 pb-4 sm:mb-8">
          <h2 className="text-center text-xl font-semibold text-tec-brown sm:text-left sm:text-2xl">
            Browse by theme
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {categories.map((c) => (
            <ThemeButton key={c.id} category={c} />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
