"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import { cn } from "@/lib/utils";

export type CustomSelectOption = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  options: CustomSelectOption[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
};

export function CustomSelect({
  id,
  name,
  label,
  placeholder,
  options,
  value,
  onChange,
  required = false,
  disabled = false
}: CustomSelectProps) {
  const generatedId = useId();
  const labelId = `${id}-${generatedId}-label`;
  const buttonId = `${id}-${generatedId}-button`;
  const listboxId = `${id}-${generatedId}-listbox`;
  const helperId = `${id}-${generatedId}-helper`;
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const selectedOption = useMemo(
    () => options.find((option) => option.value === value) ?? null,
    [options, value]
  );

  useEffect(() => {
    if (disabled) {
      setIsOpen(false);
      setActiveIndex(-1);
    }
  }, [disabled]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const nextIndex = Math.max(
      options.findIndex((option) => option.value === value),
      0
    );

    setActiveIndex(nextIndex);
  }, [isOpen, options, value]);

  useEffect(() => {
    if (!isOpen || activeIndex < 0) {
      return;
    }

    optionRefs.current[activeIndex]?.focus();
  }, [activeIndex, isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setActiveIndex(-1);
  };

  const selectOption = (nextValue: string) => {
    onChange(nextValue);
    closeMenu();
    buttonRef.current?.focus();
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  const moveActiveIndex = (direction: 1 | -1) => {
    const currentIndex = activeIndex >= 0 ? activeIndex : Math.max(options.findIndex((option) => option.value === value), 0);
    const nextIndex = (currentIndex + direction + options.length) % options.length;
    setActiveIndex(nextIndex);
  };

  const handleButtonKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) {
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      openMenu();
      setActiveIndex(
        Math.max(options.findIndex((option) => option.value === value), 0)
      );
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen((current) => !current);
    }
  };

  const handleListKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      buttonRef.current?.focus();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      moveActiveIndex(1);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      moveActiveIndex(-1);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      setActiveIndex(options.length - 1);
      return;
    }

    if (event.key === "Tab") {
      closeMenu();
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <label id={labelId} htmlFor={buttonId} className="premium-label">
        {label}
      </label>

      <input type="hidden" name={name} value={value} />

      <button
        ref={buttonRef}
        id={buttonId}
        type="button"
        role="combobox"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-labelledby={`${labelId} ${buttonId}`}
        aria-describedby={required ? helperId : undefined}
        aria-activedescendant={
          isOpen && activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined
        }
        aria-required={required}
        className={cn(
          "group/select premium-input flex min-h-[3.25rem] w-full items-center justify-between gap-4 pr-4 text-left",
          !selectedOption && "text-slate-500",
          disabled && "cursor-not-allowed opacity-60",
          isOpen &&
            "border-cyan-300/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.03))] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_0_1px_rgba(50,200,255,0.12),0_16px_34px_rgba(2,12,27,0.3)]"
        )}
        onClick={() => {
          if (!disabled) {
            setIsOpen((current) => !current);
          }
        }}
        onKeyDown={handleButtonKeyDown}
      >
        <span className="min-w-0">
          <span
            className={cn(
              "block truncate text-sm",
              selectedOption ? "text-white" : "text-slate-500"
            )}
          >
            {selectedOption?.label ?? placeholder}
          </span>
        </span>

        <span
          aria-hidden="true"
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] text-cyan-100/82 transition-all duration-300",
            isOpen && "border-cyan-300/20 bg-cyan-400/10 text-cyan-50"
          )}
        >
          <span
            className={cn(
              "h-2.5 w-2.5 rotate-45 border-b border-r border-current transition-transform duration-300",
              isOpen && "-translate-y-0.5 rotate-[225deg]"
            )}
          />
        </span>
      </button>

      {required ? (
        <p id={helperId} className="sr-only">
          {label} is required.
        </p>
      ) : null}

      {isOpen ? (
        <div
          className="motion-safe-fade absolute left-0 right-0 top-[calc(100%+0.65rem)] z-30"
          onKeyDown={handleListKeyDown}
        >
          <div className="relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,19,34,0.98),rgba(6,10,21,0.98))] p-2 shadow-[0_24px_70px_rgba(2,12,27,0.52)] backdrop-blur-2xl">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_72%)]" />
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
            <div
              id={listboxId}
              role="listbox"
              aria-labelledby={labelId}
              className="max-h-72 space-y-1 overflow-y-auto pr-1"
            >
              {options.map((option, index) => {
                const isSelected = option.value === value;
                const isActive = index === activeIndex;

                return (
                  <button
                    id={`${listboxId}-option-${index}`}
                    key={option.value}
                    ref={(element) => {
                      optionRefs.current[index] = element;
                    }}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    className={cn(
                      "flex w-full items-center justify-between gap-4 rounded-[1.05rem] border px-3.5 py-3 text-left text-sm transition-all duration-200",
                      isSelected
                        ? "border-cyan-300/22 bg-[linear-gradient(180deg,rgba(34,211,238,0.14),rgba(34,211,238,0.08))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                        : "border-transparent bg-transparent text-text-soft/84 hover:border-white/8 hover:bg-white/[0.045] hover:text-white",
                      isActive && !isSelected && "border-white/8 bg-white/[0.04] text-white"
                    )}
                    onClick={() => selectOption(option.value)}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <span className="min-w-0 flex-1 truncate">{option.label}</span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "h-2.5 w-2.5 rounded-full border border-white/15 bg-transparent transition-all duration-200",
                        isSelected && "border-cyan-200/50 bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.5)]"
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
