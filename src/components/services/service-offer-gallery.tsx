"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent, TouchEvent } from "react";
import { createPortal } from "react-dom";

import { EditorialImage } from "@/components/shared/editorial-image";
import type { StockImageKey } from "@/config/stock-images";
import { cn } from "@/lib/utils";

export type ServiceOfferGallerySlide = {
  title: string;
  caption: string;
  image?: StockImageKey;
  src?: string;
  alt?: string;
  imageClassName?: string;
  arrowIconTone?: "light" | "dark";
};

type ServiceOfferGalleryProps = {
  serviceTitle: string;
  slides: readonly ServiceOfferGallerySlide[];
};

export function ServiceOfferGallery({
  serviceTitle,
  slides
}: ServiceOfferGalleryProps) {
  if (slides.length === 0) {
    return null;
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchMovedRef = useRef(false);

  const activeSlide = slides[activeIndex];
  const formattedIndex = String(activeIndex + 1).padStart(2, "0");
  const formattedCount = String(slides.length).padStart(2, "0");
  const arrowIconClassName =
    activeSlide.arrowIconTone === "dark" ? "text-black" : "text-white";
  const viewerSlide = viewerIndex === null ? null : slides[viewerIndex];
  const viewerArrowIconClassName =
    viewerSlide?.arrowIconTone === "dark" ? "text-black" : "text-white";

  const moveToSlide = (direction: 1 | -1) => {
    setActiveIndex((current) => (current + direction + slides.length) % slides.length);
  };

  const moveViewerSlide = (direction: 1 | -1) => {
    setViewerIndex((current) => {
      if (current === null) {
        return current;
      }

      return (current + direction + slides.length) % slides.length;
    });
  };

  const openViewer = (index: number) => {
    setViewerIndex(index);
  };

  const closeViewer = () => {
    setViewerIndex(null);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? null;
    touchMovedRef.current = false;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartXRef.current;
    const deltaX = touchEndX - touchStartXRef.current;
    touchStartXRef.current = null;
    touchMovedRef.current = Math.abs(deltaX) >= 12;

    if (Math.abs(deltaX) < 44) {
      return;
    }

    moveToSlide(deltaX < 0 ? 1 : -1);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveToSlide(-1);
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveToSlide(1);
    }
  };

  useEffect(() => {
    if (viewerIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleWindowKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeViewer();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        moveViewerSlide(-1);
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        moveViewerSlide(1);
      }
    };

    window.addEventListener("keydown", handleWindowKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleWindowKeyDown);
    };
  }, [viewerIndex, slides.length]);

  return (
    <>
      <div
        className="relative overflow-hidden rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,17,30,0.96),rgba(6,11,21,0.96))] shadow-[0_30px_90px_rgba(2,12,27,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_72%)]" />

        <div
          className="relative min-h-[21rem] touch-pan-y select-none sm:min-h-[24rem] lg:min-h-[26rem]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;

            if (slide.src) {
              return (
                <div
                  key={`${serviceTitle}-${slide.title}`}
                  className={cn(
                    "absolute inset-0 transition-[opacity,transform,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isActive
                      ? "translate-y-0 scale-100 opacity-100 blur-0"
                      : "pointer-events-none translate-y-1 scale-[1.015] opacity-0 blur-[2px]"
                  )}
                >
                  <div className="absolute inset-0">
                    <Image
                      fill
                      src={slide.src}
                      alt=""
                      aria-hidden="true"
                      sizes="(min-width: 1280px) 34vw, (min-width: 768px) 72vw, 100vw"
                      className="scale-[1.03] object-cover object-top opacity-[0.18] blur-2xl saturate-[0.85]"
                    />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-3 lg:p-4">
                    <div className="relative h-full w-full">
                      <Image
                        fill
                        src={slide.src}
                        alt={slide.alt ?? `${serviceTitle} sample page screenshot`}
                        sizes="(min-width: 1280px) 34vw, (min-width: 768px) 72vw, 100vw"
                        className={cn(
                          "object-contain object-center drop-shadow-[0_26px_64px_rgba(2,12,27,0.36)]",
                          slide.imageClassName
                        )}
                      />
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <EditorialImage
                key={`${serviceTitle}-${slide.title}`}
                image={slide.image!}
                alt={slide.alt}
                motion="hover"
                className={cn(
                  "absolute inset-0 rounded-none border-0 transition-[opacity,transform,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isActive
                    ? "scale-100 opacity-100 blur-0"
                    : "pointer-events-none scale-[1.015] opacity-0 blur-[2px]"
                )}
                imageClassName={cn("object-cover object-center", slide.imageClassName)}
                overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.18)_36%,rgba(2,6,23,0.62)_100%)]"
              />
            );
          })}

          <button
            type="button"
            aria-label={`Open ${serviceTitle} image larger`}
            onClick={() => {
              if (touchMovedRef.current) {
                touchMovedRef.current = false;
                return;
              }

              openViewer(activeIndex);
            }}
            className="absolute inset-0 z-10 cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-inset"
          />

          {slides.length > 1 ? (
            <>
              <button
                type="button"
                aria-label={`Previous ${serviceTitle} image`}
                onClick={(event) => {
                  event.stopPropagation();
                  moveToSlide(-1);
                }}
                className="absolute left-4 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/24 bg-white/12 text-white shadow-[0_18px_40px_rgba(2,12,27,0.34)] backdrop-blur-lg transition-all duration-300 hover:border-white/40 hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:left-5"
              >
                <span
                  className={cn(
                    "mb-[1px] ml-[3px] block h-3.5 w-3.5 rotate-45 border-b-2 border-l-2 border-current",
                    arrowIconClassName
                  )}
                />
              </button>

              <button
                type="button"
                aria-label={`Next ${serviceTitle} image`}
                onClick={(event) => {
                  event.stopPropagation();
                  moveToSlide(1);
                }}
                className="absolute right-4 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/24 bg-white/12 text-white shadow-[0_18px_40px_rgba(2,12,27,0.34)] backdrop-blur-lg transition-all duration-300 hover:border-white/40 hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:right-5"
              >
                <span
                  className={cn(
                    "mb-[1px] mr-[3px] block h-3.5 w-3.5 rotate-45 border-r-2 border-t-2 border-current",
                    arrowIconClassName
                  )}
                />
              </button>
            </>
          ) : null}
        </div>

        <div className="relative z-10 border-t border-white/8 bg-[linear-gradient(180deg,rgba(10,16,30,0.9),rgba(7,12,23,0.96))] px-4 py-4 sm:px-5">
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[0.7rem] uppercase tracking-[0.26em] text-cyan-200/72">
                {activeSlide.title}
              </p>
              {slides.length > 1 ? (
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-slate-400">
                  {formattedIndex} / {formattedCount}
                </p>
              ) : null}
            </div>
            <p className="text-sm leading-6 text-text-soft/80">{activeSlide.caption}</p>
          </div>
        </div>
      </div>
      {viewerSlide && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-[120] bg-slate-950/88 backdrop-blur-md"
              role="dialog"
              aria-modal="true"
              aria-label={`${serviceTitle} image viewer`}
              onClick={closeViewer}
            >
              <div className="flex min-h-full items-center justify-center p-4 sm:p-6 lg:p-8">
                <div
                  className="relative flex w-full max-w-[88rem] flex-col overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,17,30,0.98),rgba(5,10,19,0.98))] shadow-[0_36px_120px_rgba(0,0,0,0.45)]"
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="flex items-center justify-between gap-4 border-b border-white/8 px-5 py-4 sm:px-6">
                    <div className="min-w-0">
                      <p className="text-[0.7rem] uppercase tracking-[0.28em] text-cyan-200/72">
                        {serviceTitle}
                      </p>
                      <p className="mt-2 truncate text-sm text-text-soft/84 sm:text-base">
                        {viewerSlide.title}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      {slides.length > 1 && viewerIndex !== null ? (
                        <p className="text-[0.68rem] uppercase tracking-[0.24em] text-slate-400">
                          {String(viewerIndex + 1).padStart(2, "0")} / {formattedCount}
                        </p>
                      ) : null}
                      <button
                        type="button"
                        aria-label={`Close ${serviceTitle} image viewer`}
                        onClick={closeViewer}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/8 text-white transition-colors hover:bg-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
                      >
                        <span className="relative block h-4 w-4">
                          <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rotate-45 bg-current" />
                          <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 -rotate-45 bg-current" />
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="relative min-h-[70vh] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_60%)]">
                    {viewerSlide.src ? (
                      <div className="absolute inset-0">
                        <Image
                          fill
                          src={viewerSlide.src}
                          alt=""
                          aria-hidden="true"
                          sizes="100vw"
                          className="scale-[1.02] object-cover object-center opacity-[0.14] blur-3xl saturate-[0.86]"
                        />
                      </div>
                    ) : null}

                    <div className="relative flex min-h-[70vh] items-center justify-center px-4 py-6 sm:px-6 sm:py-8">
                      <div className="relative h-[62vh] w-full max-w-[76rem] sm:h-[68vh]">
                        {viewerSlide.src ? (
                          <Image
                            fill
                            src={viewerSlide.src}
                            alt={viewerSlide.alt ?? `${serviceTitle} sample page screenshot`}
                            sizes="100vw"
                            className={cn(
                              "object-contain object-center drop-shadow-[0_36px_90px_rgba(0,0,0,0.42)]",
                              viewerSlide.imageClassName
                            )}
                          />
                        ) : (
                          <EditorialImage
                            image={viewerSlide.image!}
                            alt={viewerSlide.alt}
                            motion="static"
                            className="h-full rounded-[1.4rem] border border-white/10"
                            imageClassName={cn("object-contain object-center", viewerSlide.imageClassName)}
                            overlayClassName="bg-transparent"
                          />
                        )}
                      </div>
                    </div>

                    {slides.length > 1 ? (
                      <>
                        <button
                          type="button"
                          aria-label={`Previous ${serviceTitle} image in viewer`}
                          onClick={() => moveViewerSlide(-1)}
                          className="absolute left-4 top-1/2 z-20 inline-flex h-[3.25rem] w-[3.25rem] -translate-y-1/2 items-center justify-center rounded-full border border-white/16 bg-white/10 text-white shadow-[0_18px_42px_rgba(0,0,0,0.34)] backdrop-blur-lg transition-all duration-300 hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 sm:left-6"
                        >
                          <span
                            className={cn(
                              "mb-[1px] ml-[3px] block h-4 w-4 rotate-45 border-b-2 border-l-2 border-current",
                              viewerArrowIconClassName
                            )}
                          />
                        </button>

                        <button
                          type="button"
                          aria-label={`Next ${serviceTitle} image in viewer`}
                          onClick={() => moveViewerSlide(1)}
                          className="absolute right-4 top-1/2 z-20 inline-flex h-[3.25rem] w-[3.25rem] -translate-y-1/2 items-center justify-center rounded-full border border-white/16 bg-white/10 text-white shadow-[0_18px_42px_rgba(0,0,0,0.34)] backdrop-blur-lg transition-all duration-300 hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 sm:right-6"
                        >
                          <span
                            className={cn(
                              "mb-[1px] mr-[3px] block h-4 w-4 rotate-45 border-r-2 border-t-2 border-current",
                              viewerArrowIconClassName
                            )}
                          />
                        </button>
                      </>
                    ) : null}
                  </div>

                  <div className="border-t border-white/8 px-5 py-4 sm:px-6">
                    <p className="text-sm leading-7 text-text-soft/84">{viewerSlide.caption}</p>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
