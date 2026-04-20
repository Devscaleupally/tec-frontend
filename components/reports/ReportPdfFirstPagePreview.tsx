"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

type ReportPdfFirstPagePreviewProps = {
  pdfUrl: string;
  /** Used if the PDF cannot be loaded or rendered (e.g. network, worker). */
  fallback: ReactNode;
};

export function ReportPdfFirstPagePreview({
  pdfUrl,
  fallback,
}: ReportPdfFirstPagePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width ?? 0;
      setContainerWidth(Math.floor(w));
    });
    ro.observe(node);
    setContainerWidth(Math.floor(node.getBoundingClientRect().width));
    return () => ro.disconnect();
  }, []);

  const onDocumentLoadError = useCallback(() => {
    setFailed(true);
  }, []);

  if (failed) {
    return <>{fallback}</>;
  }

  return (
    <div ref={containerRef} className="w-full">
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
        {containerWidth > 0 ? (
          <Document
            file={pdfUrl}
            onLoadError={onDocumentLoadError}
            loading={
              <div
                className="flex min-h-[min(70vh,520px)] w-full items-center justify-center bg-neutral-50 text-sm text-neutral-500"
                role="status"
              >
                Loading preview…
              </div>
            }
          >
            <Page
              pageNumber={1}
              width={containerWidth}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="bg-white [&_canvas]:mx-auto [&_canvas]:block [&_canvas]:max-h-none [&_canvas]:h-auto [&_canvas]:w-full"
            />
          </Document>
        ) : (
          <div
            className="min-h-[min(70vh,520px)] w-full animate-pulse bg-neutral-100"
            aria-hidden
          />
        )}
      </div>
    </div>
  );
}
