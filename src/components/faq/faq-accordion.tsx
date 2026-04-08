"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

export type FaqAccordionItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: readonly FaqAccordionItem[];
  initialOpenIndex?: number | null;
};

export function FaqAccordion({
  items,
  initialOpenIndex = 0
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpenIndex);

  return (
    <div className="mt-12 grid gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `faq-answer-${index}`;

        return (
          <article
            key={item.question}
            className={cn(
              "group/faq relative overflow-hidden rounded-[1.7rem] border transition-[border-color,background-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isOpen
                ? "border-cyan-200/24 bg-[linear-gradient(180deg,rgba(18,29,45,0.96),rgba(10,16,28,0.98))] shadow-[0_28px_78px_rgba(2,12,27,0.3)]"
                : "border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.018))] hover:-translate-y-0.5 hover:border-white/12 hover:bg-white/[0.04] hover:shadow-[0_24px_64px_rgba(2,12,27,0.26)]"
            )}
          >
            <div
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent opacity-0 transition-opacity duration-500",
                isOpen && "opacity-100"
              )}
            />

            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-inset sm:px-7 sm:py-6"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "inline-flex h-8 min-w-8 items-center justify-center rounded-full border px-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300",
                        isOpen
                          ? "border-cyan-200/26 bg-cyan-300/12 text-cyan-50"
                          : "border-cyan-200/18 bg-cyan-300/8 text-cyan-100/78"
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p
                      className={cn(
                        "text-[0.68rem] uppercase tracking-[0.26em] transition-colors duration-300",
                        isOpen ? "text-cyan-100/84" : "text-cyan-200/72"
                      )}
                    >
                      Question
                    </p>
                  </div>

                  <h3
                    className={cn(
                      "mt-4 max-w-4xl font-display text-[1.55rem] font-semibold leading-tight transition-colors duration-300 sm:text-[1.9rem]",
                      isOpen ? "text-white" : "text-white/94"
                    )}
                  >
                    {item.question}
                  </h3>
                </div>

                <span
                  className={cn(
                    "relative mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                    isOpen
                      ? "border-cyan-200/26 bg-cyan-300/10"
                      : "border-white/10 bg-white/[0.03]"
                  )}
                >
                  <span
                    className={cn(
                      "absolute h-[2px] w-4 rounded-full transition-colors duration-300",
                      isOpen ? "bg-cyan-100" : "bg-white/70"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute h-4 w-[2px] rounded-full transition-[opacity,transform,background-color] duration-300",
                      isOpen
                        ? "scale-y-0 opacity-0 bg-cyan-100"
                        : "scale-y-100 opacity-100 bg-white/70"
                    )}
                  />
                </span>
              </div>
            </button>

            <div
              id={answerId}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-80"
              )}
            >
              <div className="overflow-hidden">
                <div
                  className={cn(
                    "px-6 pb-6 sm:px-7 sm:pb-7",
                    "transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isOpen ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                  )}
                >
                  <div className="grid gap-3 border-t border-white/8 pt-5">
                    <p className="text-[0.68rem] uppercase tracking-[0.26em] text-slate-400">
                      Answer
                    </p>
                    <p className="max-w-4xl text-base leading-8 text-text-soft/86">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
