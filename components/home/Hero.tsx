import Image from "next/image";
import type { ReactNode } from "react";

const HERO_IMAGE = "/dubaie.png";

type HeroProps = {
  children: ReactNode;
};

export function Hero({ children }: HeroProps) {
  return (
    <section className="relative flex min-h-[min(100svh,900px)] flex-col text-white">
      <Image
        src={HERO_IMAGE}
        alt="Dubai skyline at dusk"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/60" />
      <div className="relative z-10 flex min-h-[min(100svh,900px)] flex-1 flex-col">
        {children}
      </div>
    </section>
  );
}
