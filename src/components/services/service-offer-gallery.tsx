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
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
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
  const formattedViewerIndex =
    viewerIndex === null ? null : String(viewerIndex + 1).padStart(2, "0");

  const getRelativeOffset = (index: number) => {
    let offset = index - activeIndex;

    if (offset > slides.length / 2) {
      offset -= slides.length;
    }

    if (offset < -slides.length / 2) {
      offset += slides.length;
    }

    return offset;
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

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
    setDragOffset(0);
    setIsDragging(true);
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null) {
      return;
    }

    const currentX = event.touches[0]?.clientX ?? touchStartXRef.current;
    const deltaX = currentX - touchStartXRef.current;
    touchMovedRef.current = Math.abs(deltaX) >= 10;
    setDragOffset(Math.max(-84, Math.min(84, deltaX)));
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartXRef.current;
    const deltaX = touchEndX - touchStartXRef.current;
    touchStartXRef.current = null;
    touchMovedRef.current = Math.abs(deltaX) >= 12;
    setIsDragging(false);
    setDragOffset(0);

    if (Math.abs(deltaX) < 52) {
      return;
    }

    moveToSlide(deltaX < 0 ? 1 : -1);
  };

  const handleTouchCancel = () => {
    touchStartXRef.current = null;
    touchMovedRef.current = false;
    setIsDragging(false);
    setDragOffset(0);
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
        className="group/gallery relative overflow-hidden rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,17,30,0.96),rgba(6,11,21,0.96))] shadow-[0_30px_90px_rgba(2,12,27,0.28)] transition-[transform,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-white/12 hover:shadow-[0_34px_100px_rgba(2,12,27,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_72%)]" />

        <div
          className="relative min-h-[22rem] touch-pan-y select-none sm:min-h-[25rem] lg:min-h-[27.5rem]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchCancel}
        >
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            const relativeOffset = getRelativeOffset(index);
            const horizontalOffset =
              relativeOffset === 0
                ? dragOffset
                : (relativeOffset < 0 ? -36 : 36) + dragOffset * 0.18;

            if (slide.src) {
              return (
                <div
                  key={`${serviceTitle}-${slide.title}`}
                  className={cn(
                    "absolute inset-0 transition-[opacity,transform,filter] ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isDragging ? "duration-75" : "duration-700",
                    isActive
                      ? "opacity-100 blur-0"
                      : "pointer-events-none opacity-0 blur-[3px]"
                  )}
                  style={{
                    transform: `translate3d(${horizontalOffset}px, ${isActive ? 0 : 4}px, 0) scale(${isActive ? 1 : 0.985})`
                  }}
                >
                  <div className="absolute inset-0">
                    <Image
                      fill
                      src={slide.src}
                      alt=""
                      aria-hidden="true"
                      sizes="(min-width: 1280px) 34vw, (min-width: 768px) 72vw, 100vw"
                      className="scale-[1.03] object-cover object-center opacity-[0.16] blur-2xl saturate-[0.85]"
                    />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center p-2.5 sm:p-3.5 lg:p-4">
                    <div
                      className={cn(
                        "relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1.42rem] bg-[linear-gradient(180deg,rgba(10,16,29,0.88),rgba(6,11,21,0.94))] p-2 shadow-[0_26px_74px_rgba(2,12,27,0.36)] transition-[box-shadow,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-3",
                        isActive
                          ? "shadow-[0_28px_78px_rgba(2,12,27,0.4)]"
                          : ""
                      )}
                    >
                      <Image
                        fill
                        src={slide.src}
                        alt={slide.alt ?? `${serviceTitle} sample page screenshot`}
                        sizes="(min-width: 1280px) 34vw, (min-width: 768px) 72vw, 100vw"
                        className={cn(
                          "max-h-full max-w-full object-contain object-center drop-shadow-[0_26px_64px_rgba(2,12,27,0.28)]",
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
                  "absolute inset-0 rounded-none border-0 transition-[opacity,transform,filter] ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isDragging ? "duration-75" : "duration-700",
                  isActive
                    ? "opacity-100 blur-0"
                    : "pointer-events-none opacity-0 blur-[3px]"
                )}
                style={{
                  transform: `translate3d(${horizontalOffset}px, 0, 0) scale(${isActive ? 1 : 0.988})`
                }}
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
                className="group/arrow absolute left-4 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.06))] text-white shadow-[0_18px_40px_rgba(2,12,27,0.34)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.04] hover:border-cyan-200/34 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.08))] hover:shadow-[0_24px_52px_rgba(2,12,27,0.4)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:left-5"
              >
                <span
                  className={cn(
                    "mb-[1px] ml-[3px] block h-3 w-3 rotate-45 border-b-2 border-l-2 border-current transition-transform duration-300 group-hover/arrow:-translate-x-0.5",
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
                className="group/arrow absolute right-4 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.06))] text-white shadow-[0_18px_40px_rgba(2,12,27,0.34)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.04] hover:border-cyan-200/34 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.08))] hover:shadow-[0_24px_52px_rgba(2,12,27,0.4)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:right-5"
              >
                <span
                  className={cn(
                    "mb-[1px] mr-[3px] block h-3 w-3 rotate-45 border-r-2 border-t-2 border-current transition-transform duration-300 group-hover/arrow:translate-x-0.5",
                    arrowIconClassName
                  )}
                />
              </button>
            </>
          ) : null}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-[linear-gradient(180deg,rgba(2,6,23,0),rgba(2,6,23,0.42)_60%,rgba(2,6,23,0.62))]" />

        {slides.length > 1 ? (
          <>
            <div className="pointer-events-none absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[rgba(7,12,23,0.56)] px-3 py-1.5 text-[0.66rem] uppercase tracking-[0.22em] text-slate-300 shadow-[0_18px_40px_rgba(2,12,27,0.26)] backdrop-blur-xl sm:right-5 sm:top-5">
              <span className="text-white">{formattedIndex}</span>
              <span className="h-1 w-1 rounded-full bg-cyan-200/68" />
              <span>{formattedCount}</span>
            </div>

            <div className="absolute bottom-4 left-4 z-20 flex flex-wrap items-center gap-2 sm:bottom-5 sm:left-5">
              {slides.map((slide, index) => {
                const isCurrent = index === activeIndex;

                return (
                  <button
                    key={`${serviceTitle}-${slide.title}-indicator`}
                    type="button"
                    aria-label={`Go to ${slide.title} slide`}
                    aria-pressed={isCurrent}
                    aria-current={isCurrent ? "true" : undefined}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      "group/indicator relative h-2.5 w-8 overflow-hidden rounded-full border transition-[border-color,background-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      isCurrent
                        ? "border-cyan-200/42 bg-cyan-200/8 shadow-[0_0_0_1px_rgba(125,211,252,0.08)]"
                        : "border-white/18 bg-[rgba(7,12,23,0.34)] hover:border-white/28 hover:bg-[rgba(255,255,255,0.06)]"
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-[2px] rounded-full bg-[linear-gradient(90deg,rgba(103,232,249,0.96),rgba(56,189,248,0.88))] shadow-[0_0_14px_rgba(56,189,248,0.22)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isCurrent ? "scale-x-100" : "scale-x-0"
                      )}
                      style={{ transformOrigin: "left center" }}
                    />
                  </button>
                );
              })}
            </div>
          </>
        ) : null}
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
              <div className="flex min-h-full items-center justify-center p-2.5 sm:p-6 lg:p-8">
                <div
                  className="relative flex h-full max-h-[calc(100dvh-1rem)] w-full max-w-[88rem] flex-col overflow-hidden rounded-[1.45rem] border-x border-b border-t-0 border-white/10 bg-[linear-gradient(180deg,rgba(11,17,30,0.98),rgba(5,10,19,0.98))] shadow-[0_36px_120px_rgba(0,0,0,0.45)] sm:max-h-[calc(100dvh-3rem)] sm:rounded-[1.8rem]"
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-3 px-3 py-3 sm:relative sm:items-center sm:border-b sm:border-white/8 sm:px-6 sm:py-3.5">
                    <div className="min-w-[3.25rem] rounded-full border border-white/10 bg-[rgba(7,12,23,0.56)] px-2.5 py-1 backdrop-blur-xl sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-0">
                      {slides.length > 1 && viewerIndex !== null ? (
                        <p className="text-[0.68rem] uppercase tracking-[0.24em] text-slate-400">
                          {formattedViewerIndex} / {formattedCount}
                        </p>
                      ) : null}
                    </div>

                    <div className="pointer-events-none absolute left-1/2 top-3 flex -translate-x-1/2 justify-center sm:hidden landscape:hidden">
                      <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[0.62rem] uppercase tracking-[0.22em] text-cyan-100/72 backdrop-blur-md">
                        Rotate for a fuller view
                      </div>
                    </div>

                    <button
                      type="button"
                      aria-label={`Close ${serviceTitle} image viewer`}
                      onClick={closeViewer}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/8 text-white transition-all duration-300 hover:scale-[1.03] hover:bg-white/14 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
                    >
                      <span className="relative block h-4 w-4">
                        <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rotate-45 bg-current" />
                        <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 -rotate-45 bg-current" />
                      </span>
                    </button>
                  </div>

                  <div className="relative flex min-h-0 flex-1 items-center justify-center bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_60%)]">
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

                    <div className="relative flex min-h-0 w-full flex-1 items-center justify-center px-2 py-2.5 sm:px-6 sm:py-6 lg:px-8">
                      <div className="relative h-[min(72vh,34rem)] w-full max-w-[78rem] landscape:h-[min(82vh,24rem)] sm:h-[min(74vh,52rem)]">
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
                          className="absolute left-2 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/16 bg-white/10 text-white shadow-[0_18px_42px_rgba(0,0,0,0.34)] backdrop-blur-lg transition-all duration-300 hover:scale-[1.04] hover:bg-white/16 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 sm:left-6 sm:h-[3.25rem] sm:w-[3.25rem]"
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
                          className="absolute right-2 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/16 bg-white/10 text-white shadow-[0_18px_42px_rgba(0,0,0,0.34)] backdrop-blur-lg transition-all duration-300 hover:scale-[1.04] hover:bg-white/16 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 sm:right-6 sm:h-[3.25rem] sm:w-[3.25rem]"
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

                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
