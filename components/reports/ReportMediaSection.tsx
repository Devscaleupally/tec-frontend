"use client";

import type { ComponentType, MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  BookOpen,
  ChevronRight,
  CirclePlay,
  FileText,
  Lightbulb,
  MoreVertical,
  Pause,
  Play,
  Radio,
  Volume2,
} from "lucide-react";
import type {
  ReportFullDetail,
  ReportGlossaryDetail,
  ReportInfographicDetail,
  ReportMediaAsset,
  ReportMediaKind,
  ReportPodcastDetail,
  ReportSummaryDetail,
  ReportVideoDetail,
} from "@/lib/reports-content";
import { ReportDefinitionHighlightCard } from "@/components/reports/ReportDefinitionHighlight";
import { ReportPdfFirstPagePreview } from "@/components/reports/ReportPdfFirstPagePreview";

const mediaIcons: Record<
  ReportMediaKind,
  ComponentType<{ className?: string }>
> = {
  summary: FileText,
  full: FileText,
  podcast: Radio,
  infographic: Lightbulb,
  video: CirclePlay,
  glossary: BookOpen,
};

type ReportMediaSectionProps = {
  mediaAssets: ReportMediaAsset[];
  mediaContentByKind?: Partial<Record<ReportMediaKind, string>>;
  summaryDetail?: ReportSummaryDetail;
  fullDetail?: ReportFullDetail;
  podcastDetail?: ReportPodcastDetail;
  infographicDetail?: ReportInfographicDetail;
  videoDetail?: ReportVideoDetail;
  glossaryDetail?: ReportGlossaryDetail;
};

function formatPlayerTime(totalSeconds: number) {
  const s = Math.floor(Math.max(0, totalSeconds));
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

/** Opens the asset in a new tab and triggers a same-origin file download. */
function ReportDownloadLink({
  href,
  className,
}: {
  href: string;
  className: string;
}) {
  const fileName = href.split("/").pop() ?? "report.pdf";

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(href, "_blank", "noopener,noreferrer");
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      Download
    </a>
  );
}

function selectedFormatCtaLabel(asset: ReportMediaAsset) {
  switch (asset.ctaVariant) {
    case "play":
      return "Playing";
    case "read":
      return "Reading";
    case "view":
      return "Viewing";
    default:
      return asset.cta;
  }
}

function MediaCard({
  asset,
  isSelected,
  onSelect,
}: {
  asset: ReportMediaAsset;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const Icon = mediaIcons[asset.kind];
  return (
    <div
      className={`flex h-full flex-col rounded-[10px] border bg-white p-4 transition-colors ${
        isSelected ? "border-neutral-300" : "border-neutral-200"
      }`}
    >
      <div className="flex gap-2.5">
        <Icon className="mt-0.5 h-6 w-6 shrink-0 text-tec-brown" aria-hidden />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-semibold leading-snug text-neutral-900">
              {asset.title}
            </h3>
            <button
              type="button"
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white text-[10px] font-semibold text-neutral-500 transition hover:bg-neutral-50"
              aria-label={`About ${asset.title}`}
            >
              i
            </button>
          </div>
          <p className="mt-0.5 text-xs text-neutral-500">{asset.duration}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-1 items-end">
        <button
          type="button"
          onClick={onSelect}
          aria-pressed={isSelected}
          className={`w-full rounded-full border px-4 py-2 text-sm font-medium transition ${
            isSelected
              ? "border-tec-brown bg-tec-brown text-white hover:bg-tec-brown-dark"
              : "border-neutral-300 bg-white text-neutral-400 hover:bg-neutral-50"
          }`}
        >
          {isSelected ? selectedFormatCtaLabel(asset) : asset.cta}
        </button>
      </div>
    </div>
  );
}

function formatBody(text: string) {
  return text.split(/\n\n+/).map((para, i) => (
    <p key={i} className="mb-3 last:mb-0">
      {para}
    </p>
  ));
}

function FullReportManualCoverHero({
  hero,
}: {
  hero: ReportFullDetail["hero"];
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
      <div className="flex flex-col lg:min-h-[260px] lg:flex-row">
        <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 lg:max-w-[62%]">
          <div>
            {hero.logoSrcs && hero.logoSrcs.length > 0 && (
              <div className="mb-6 flex flex-wrap items-center gap-4">
                {hero.logoSrcs.map((src) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={140}
                    height={40}
                    className="h-9 w-auto object-contain object-left"
                  />
                ))}
              </div>
            )}
            {hero.titleLine1?.trim() ? (
              <>
                <h4 className="text-balance text-2xl font-bold leading-tight text-sky-600 sm:text-3xl">
                  {hero.titleLine1}
                </h4>
                <p className="mt-3 text-balance text-xl font-bold italic leading-snug text-slate-900 sm:text-2xl">
                  {hero.titleLine2}
                </p>
              </>
            ) : (
              <p className="text-balance text-xl font-bold italic leading-snug text-slate-900 sm:text-2xl">
                {hero.titleLine2}
              </p>
            )}
            <div className="mt-5 inline-block bg-tec-brown px-4 py-2 text-sm font-semibold text-white">
              {hero.dateLabel}
            </div>
          </div>
          <p className="mt-8 text-xs text-neutral-500">{hero.preparedBy}</p>
        </div>
        <div className="relative min-h-[180px] w-full lg:min-h-0 lg:w-[38%]">
          <Image
            src={hero.coverImageSrc}
            alt={hero.coverImageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
          />
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-r from-white from-15% via-white/70 to-transparent lg:from-25%"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}

function FullReportDetailPanel({ detail }: { detail: ReportFullDetail }) {
  const downloadClassName =
    "inline-flex shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50";
  const { hero, keyDefinitions } = detail;
  const sectionTitle = detail.sectionTitle ?? "Detailed Report";

  return (
    <div className="mx-auto w-full max-w-[1100px]">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-3xl font-bold tracking-tight text-teal-800">
          {sectionTitle}
        </h3>
        {detail.downloadHref ? (
          <ReportDownloadLink
            href={detail.downloadHref}
            className={downloadClassName}
          />
        ) : (
          <button type="button" className={downloadClassName}>
            Download
          </button>
        )}
      </div>

      {detail.downloadHref ? (
        <ReportPdfFirstPagePreview
          pdfUrl={detail.downloadHref}
          fallback={<FullReportManualCoverHero hero={hero} />}
        />
      ) : (
        <FullReportManualCoverHero hero={hero} />
      )}

      <div className="mt-12">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span
              className="mb-2 inline-block h-1 w-10 rounded-sm bg-tec-brown"
              aria-hidden
            />
            <h4 className="text-2xl font-bold text-neutral-900">
              {keyDefinitions.heading}
            </h4>
          </div>
          {keyDefinitions.logoSrcs && keyDefinitions.logoSrcs.length > 0 && (
            <div className="flex shrink-0 flex-wrap items-center justify-end gap-3">
              {keyDefinitions.logoSrcs.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={120}
                  height={36}
                  className="h-8 w-auto object-contain"
                />
              ))}
            </div>
          )}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {keyDefinitions.cards.map((card) => (
            <ReportDefinitionHighlightCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PodcastDetailPanel({ detail }: { detail: ReportPodcastDetail }) {
  const [episodeIndex, setEpisodeIndex] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const episode = detail.episodes[episodeIndex];
  const useRealAudio = Boolean(episode?.audioSrc?.trim());
  const fallbackDuration = episode?.durationSeconds ?? 0;
  const duration =
    useRealAudio && audioDuration > 0 ? audioDuration : fallbackDuration;
  const sectionTitle = detail.sectionTitle ?? "AI-Generated Podcast";

  useEffect(() => {
    setAudioDuration(0);
    setCurrentSeconds(0);
  }, [episodeIndex]);

  useEffect(() => {
    if (useRealAudio) return;
    if (!playing || duration <= 0) return;
    const id = window.setInterval(() => {
      setCurrentSeconds((t) => Math.min(duration, t + 0.25));
    }, 250);
    return () => window.clearInterval(id);
  }, [playing, duration, useRealAudio]);

  useEffect(() => {
    if (useRealAudio) return;
    if (duration > 0 && currentSeconds >= duration && playing) {
      setPlaying(false);
    }
  }, [currentSeconds, duration, playing, useRealAudio]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el || !useRealAudio) return;
    if (playing) {
      void el.play().catch(() => setPlaying(false));
    } else {
      el.pause();
    }
  }, [playing, useRealAudio, episodeIndex]);

  const toggleMainPlay = () => {
    if (playing) {
      setPlaying(false);
      return;
    }
    if (duration > 0 && currentSeconds >= duration) {
      setCurrentSeconds(0);
      if (useRealAudio && audioRef.current) {
        audioRef.current.currentTime = 0;
      }
    }
    setPlaying(true);
  };

  const selectEpisode = (index: number) => {
    setEpisodeIndex(index);
    setCurrentSeconds(0);
    setPlaying(false);
  };

  const toggleEpisodeRow = (index: number) => {
    if (index === episodeIndex) {
      if (playing) setPlaying(false);
      else {
        if (duration > 0 && currentSeconds >= duration) {
          setCurrentSeconds(0);
          if (useRealAudio && audioRef.current) {
            audioRef.current.currentTime = 0;
          }
        }
        setPlaying(true);
      }
      return;
    }
    setEpisodeIndex(index);
    setCurrentSeconds(0);
    setPlaying(true);
  };

  const handleAudioEnded = () => {
    if (episodeIndex < detail.episodes.length - 1) {
      setEpisodeIndex((i) => i + 1);
    } else {
      setPlaying(false);
    }
  };

  const downloadClassName =
    "inline-flex shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50";

  if (!episode) return null;

  const progressPct = duration > 0 ? (currentSeconds / duration) * 100 : 0;

  return (
    <div className="mx-auto w-full max-w-[1100px]">
      {useRealAudio && episode.audioSrc ? (
        <audio
          key={episodeIndex}
          ref={audioRef}
          src={episode.audioSrc}
          className="sr-only"
          preload="metadata"
          playsInline
          onLoadedMetadata={(e) => {
            const d = e.currentTarget.duration;
            if (!Number.isNaN(d) && d > 0) setAudioDuration(d);
          }}
          onTimeUpdate={(e) =>
            setCurrentSeconds(e.currentTarget.currentTime)
          }
          onEnded={handleAudioEnded}
        />
      ) : null}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-3xl font-bold tracking-tight text-teal-800">
          {sectionTitle}
        </h3>
        {detail.downloadHref ? (
          <ReportDownloadLink
            href={detail.downloadHref}
            className={downloadClassName}
          />
        ) : (
          <button type="button" className={downloadClassName}>
            Download
          </button>
        )}
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,380px)]">
        <div className="space-y-6">
          <div className="flex flex-col gap-3 rounded-2xl bg-tec-sand/80 px-4 py-3.5 sm:flex-row sm:items-center sm:gap-4 sm:px-5">
            <button
              type="button"
              onClick={toggleMainPlay}
              aria-label={playing ? "Pause" : "Play"}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-tec-brown/40 bg-white text-tec-brown-dark transition hover:bg-tec-sand"
            >
              {playing ? (
                <Pause className="h-5 w-5" fill="currentColor" />
              ) : (
                <Play className="h-5 w-5 pl-0.5" fill="currentColor" />
              )}
            </button>
            <span className="shrink-0 text-sm tabular-nums text-neutral-700">
              {formatPlayerTime(currentSeconds)} / {formatPlayerTime(duration)}
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-1.5 sm:pt-0">
              <label className="sr-only" htmlFor="podcast-progress">
                Playback position
              </label>
              <div className="relative h-2 w-full rounded-full bg-neutral-200">
                <div
                  className="absolute left-0 top-0 h-2 rounded-full bg-tec-brown"
                  style={{ width: `${progressPct}%` }}
                  aria-hidden
                />
                <input
                  id="podcast-progress"
                  type="range"
                  min={0}
                  max={duration}
                  step={0.5}
                  value={Math.min(currentSeconds, duration)}
                  onChange={(e) => {
                    const v = Number(e.target.value);
                    setCurrentSeconds(v);
                    if (useRealAudio && audioRef.current) {
                      audioRef.current.currentTime = v;
                    }
                  }}
                  className="absolute inset-0 h-2 w-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-tec-brown [&::-webkit-slider-thumb]:bg-white"
                />
              </div>
            </div>
            <div className="flex shrink-0 items-center justify-end gap-1 sm:gap-2">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-600 transition hover:bg-white/80 hover:text-neutral-900"
                aria-label="Volume"
              >
                <Volume2 className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-600 transition hover:bg-white/80 hover:text-neutral-900"
                aria-label="More options"
              >
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
          </div>

          <ol className="space-y-2" aria-label="Episodes">
            {detail.episodes.map((ep, idx) => {
              const active = idx === episodeIndex;
              return (
                <li key={ep.title}>
                  <div
                    className={`flex items-start gap-3 rounded-xl border px-3 py-3 sm:gap-4 sm:px-4 ${
                      active
                        ? "border-tec-brown/30 bg-tec-sand/70"
                        : "border-neutral-200 bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => selectEpisode(idx)}
                      className="mt-0.5 min-w-0 flex-1 text-left"
                    >
                      <span className="flex items-start gap-3">
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                            active
                              ? "bg-tec-brown text-white"
                              : "border border-neutral-300 bg-neutral-50 text-neutral-700"
                          }`}
                        >
                          {idx + 1}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold leading-snug text-neutral-900">
                            {ep.title}
                          </span>
                          <span className="mt-1 block text-xs text-neutral-500">
                            {ep.durationLabel}
                          </span>
                        </span>
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleEpisodeRow(idx)}
                      aria-label={
                        active && playing
                          ? `Pause ${ep.title}`
                          : `Play ${ep.title}`
                      }
                      className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-tec-brown/40 bg-white text-tec-brown-dark transition hover:bg-tec-sand"
                    >
                      {active && playing ? (
                        <Pause className="h-4 w-4" fill="currentColor" />
                      ) : (
                        <Play className="h-4 w-4 pl-0.5" fill="currentColor" />
                      )}
                    </button>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="flex flex-col gap-4">
          <article className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h4 className="mb-3 text-lg font-bold text-teal-800">
              Episode Summary
            </h4>
            <p className="text-sm leading-relaxed text-neutral-600">
              {episode.summary}
            </p>
          </article>
          <article className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h4 className="mb-3 text-lg font-bold text-teal-800">
              Key Moments (Timestamps)
            </h4>
            <ul className="space-y-2.5 text-sm leading-relaxed text-neutral-600">
              {episode.keyMoments.map((km) => (
                <li key={`${km.time}-${km.label}`}>
                  <span className="font-semibold text-neutral-800">
                    {km.time}
                  </span>
                  <span className="text-neutral-500"> - </span>
                  {km.label}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
}

function SummaryDetailPanel({
  summaryDetail,
}: {
  summaryDetail: ReportSummaryDetail;
}) {
  const downloadClassName =
    "inline-flex shrink-0 items-center justify-center rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50";

  return (
    <div className="mx-auto w-full max-w-[960px]">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-3xl font-bold tracking-tight text-teal-800">
          Summary
        </h3>
        {summaryDetail.downloadHref ? (
          <ReportDownloadLink
            href={summaryDetail.downloadHref}
            className={downloadClassName}
          />
        ) : (
          <button type="button" className={downloadClassName}>
            Download
          </button>
        )}
      </div>
      <div className="space-y-6">
        {summaryDetail.cards.map((card) => (
          <article
            key={card.heading}
            className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <h4 className="mb-5 text-lg font-bold text-teal-700">
              {card.heading}
            </h4>
            <ul className="list-disc space-y-4 pl-5 text-sm leading-relaxed marker:text-neutral-400">
              {card.bullets.map((b, idx) => (
                <li key={`${card.heading}-${idx}`} className="text-neutral-600">
                  <span className="font-semibold text-neutral-800">{b.lead}</span>{" "}
                  {b.body}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

function InfographicDetailPanel({ detail }: { detail: ReportInfographicDetail }) {
  const [index, setIndex] = useState(0);
  const slides = detail.slides;
  const slide = slides[index];
  const n = slides.length;

  const downloadClassName =
    "inline-flex shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50";

  const goNext = () => {
    if (n <= 0) return;
    setIndex((i) => (i + 1) % n);
  };

  const sectionTitle = detail.sectionTitle ?? "Infographics";

  if (!slide) return null;

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-3xl font-bold tracking-tight text-teal-800">
          {sectionTitle}
        </h3>
        {detail.downloadHref ? (
          <ReportDownloadLink
            href={detail.downloadHref}
            className={downloadClassName}
          />
        ) : (
          <button type="button" className={downloadClassName}>
            Download
          </button>
        )}
      </div>

      <div className="w-full rounded-xl border border-amber-200/80 bg-linear-to-b from-amber-50/50 to-white p-1.5 shadow-sm sm:p-2">
        <div className="overflow-hidden rounded-lg bg-neutral-50">
          <Image
            src={slide.src}
            alt={slide.alt}
            width={2400}
            height={1350}
            className="h-auto w-full max-w-full"
            sizes="(max-width: 1200px) calc(100vw - 2rem), 1100px"
            priority={index === 0}
          />
        </div>
      </div>

      <div className="relative mt-5 flex min-h-[40px] items-center justify-center">
        <p className="text-sm tabular-nums text-neutral-600">
          {index + 1}/{n}
        </p>
        {n > 1 && (
          <button
            type="button"
            onClick={goNext}
            className="absolute right-0 flex h-10 w-10 items-center justify-center rounded-full bg-teal-800 text-white shadow-sm transition hover:bg-teal-900"
            aria-label="Next infographic"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        )}
      </div>
    </div>
  );
}

function VideoDetailPanel({ detail }: { detail: ReportVideoDetail }) {
  const downloadClassName =
    "inline-flex shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50";
  const sectionTitle = detail.sectionTitle ?? "Video Explainer";
  const learnTitle = detail.whatYouWillLearn?.title ?? "What you will learn";
  const points = detail.whatYouWillLearn?.points ?? [];

  return (
    <div className="mx-auto w-full max-w-[1100px]">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-3xl font-bold tracking-tight text-teal-800">
          {sectionTitle}
        </h3>
        {detail.downloadHref ? (
          <ReportDownloadLink
            href={detail.downloadHref}
            className={downloadClassName}
          />
        ) : (
          <button type="button" className={downloadClassName}>
            Download
          </button>
        )}
      </div>

      {points.length > 0 && (
        <article className="mb-6 rounded-lg border border-neutral-200 bg-white px-4 py-3.5 sm:px-5">
          <h4 className="text-base font-semibold text-neutral-900">{learnTitle}</h4>
          <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-neutral-600">
            {points.map((point, idx) => (
              <li key={`${idx}-${point}`}>
                <span className="font-semibold text-neutral-800">{`Point ${idx + 1}: `}</span>
                {point}
              </li>
            ))}
          </ul>
        </article>
      )}

      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-black shadow-sm">
        <video
          key={detail.videoSrc}
          className="h-auto max-h-[74vh] w-full bg-black"
          controls
          playsInline
          preload="metadata"
          poster={detail.posterSrc}
          aria-label={detail.videoTitle}
        >
          <source src={detail.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

function GlossaryDetailPanel({ detail }: { detail: ReportGlossaryDetail }) {
  const downloadClassName =
    "inline-flex shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50";
  const sectionTitle = detail.sectionTitle ?? "Technical Glossary";

  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-xl font-bold tracking-tight text-teal-800 sm:text-2xl">
          {sectionTitle}
        </h3>
        {detail.downloadHref ? (
          <ReportDownloadLink
            href={detail.downloadHref}
            className={downloadClassName}
          />
        ) : (
          <button type="button" className={downloadClassName}>
            Download
          </button>
        )}
      </div>

      <div className="space-y-3 rounded-xl border border-neutral-200 bg-white p-3 sm:p-4">
        {detail.sections.map((section) => (
          <section
            key={section.heading}
            className="rounded-lg border border-neutral-200 bg-white p-3 sm:p-4"
          >
            <h4 className="text-base font-bold text-teal-800">{section.heading}</h4>
            <dl className="mt-2 space-y-1.5">
              {section.terms.map((item) => (
                <div key={item.term}>
                  <dt className="text-[15px] font-semibold text-teal-700">
                    {item.term}
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-600">
                    {item.definition}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
}

export function ReportMediaSection({
  mediaAssets,
  mediaContentByKind,
  summaryDetail,
  fullDetail,
  podcastDetail,
  infographicDetail,
  videoDetail,
  glossaryDetail,
}: ReportMediaSectionProps) {
  const [selectedKind, setSelectedKind] = useState<ReportMediaKind | null>(
    null
  );
  const panelRef = useRef<HTMLDivElement>(null);

  const selectedAsset = selectedKind
    ? mediaAssets.find((a) => a.kind === selectedKind)
    : undefined;
  const body =
    selectedKind && mediaContentByKind?.[selectedKind]
      ? mediaContentByKind[selectedKind]
      : null;

  useEffect(() => {
    if (selectedKind && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [selectedKind]);

  return (
    <section
      className="border-t border-neutral-200"
      aria-labelledby="formats-heading"
    >
      <h2 id="formats-heading" className="sr-only">
        Report formats
      </h2>
      <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {mediaAssets.map((asset) => (
          <MediaCard
            key={asset.kind}
            asset={asset}
            isSelected={selectedKind === asset.kind}
            onSelect={() => setSelectedKind(asset.kind)}
          />
        ))}
      </div>

      <div
        ref={panelRef}
        className="min-h-[min(320px,50vh)] border-t border-neutral-100 bg-white px-4 py-8 sm:px-6"
        role="region"
        aria-live="polite"
        aria-label={
          selectedAsset
            ? `${selectedAsset.title} content`
            : "Selected format content"
        }
      >
        {!selectedKind && (
          <span className="sr-only">
            Select a format card above to load content in this area.
          </span>
        )}
        {selectedKind === "summary" && summaryDetail && (
          <SummaryDetailPanel summaryDetail={summaryDetail} />
        )}
        {selectedKind === "full" && fullDetail && (
          <FullReportDetailPanel detail={fullDetail} />
        )}
        {selectedKind === "podcast" && podcastDetail && (
          <PodcastDetailPanel detail={podcastDetail} />
        )}
        {selectedKind === "infographic" && infographicDetail && (
          <InfographicDetailPanel detail={infographicDetail} />
        )}
        {selectedKind === "video" && videoDetail && (
          <VideoDetailPanel detail={videoDetail} />
        )}
        {selectedKind === "glossary" && glossaryDetail && (
          <GlossaryDetailPanel detail={glossaryDetail} />
        )}
        {selectedKind &&
          !(selectedKind === "summary" && summaryDetail) &&
          !(selectedKind === "full" && fullDetail) &&
          !(selectedKind === "podcast" && podcastDetail) &&
          !(selectedKind === "infographic" && infographicDetail) &&
          !(selectedKind === "video" && videoDetail) &&
          !(selectedKind === "glossary" && glossaryDetail) &&
          body && (
            <div className="mx-auto max-w-3xl text-sm leading-relaxed text-neutral-700">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                {selectedAsset?.title}
              </p>
              {formatBody(body)}
            </div>
          )}
      </div>
    </section>
  );
}
