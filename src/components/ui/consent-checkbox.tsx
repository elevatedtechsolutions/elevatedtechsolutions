import type { ReactNode } from "react";

type ConsentCheckboxProps = {
  checked: boolean;
  disabled?: boolean;
  id: string;
  name: string;
  invalid?: boolean;
  label: ReactNode;
  description: ReactNode;
  onChange: (checked: boolean) => void;
  required?: boolean;
  value?: string;
};

export function ConsentCheckbox({
  checked,
  disabled = false,
  id,
  name,
  invalid = false,
  label,
  description,
  onChange,
  required = false,
  value = "agreed"
}: ConsentCheckboxProps) {
  return (
    <label
      className={`group flex items-start gap-4 rounded-[1.45rem] border bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.02))] px-4 py-4 text-sm leading-6 text-text-soft/84 transition-colors duration-300 hover:border-white/12 hover:bg-white/[0.045] ${invalid ? "border-rose-300/24 bg-[linear-gradient(180deg,rgba(244,63,94,0.08),rgba(255,255,255,0.02))]" : "border-white/8"}`}
    >
      <input
        id={id}
        name={name}
        type="checkbox"
        value={value}
        required={required}
        disabled={disabled}
        checked={checked}
        onChange={(event) => onChange(event.currentTarget.checked)}
        className="peer sr-only"
      />
      <span
        className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-[0.42rem] border bg-[linear-gradient(180deg,rgba(8,15,28,0.92),rgba(2,6,23,0.96))] text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_24px_rgba(2,6,23,0.18)] transition-all duration-300 peer-focus-visible:ring-2 peer-focus-visible:ring-cyan-300/45 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background peer-disabled:opacity-60 peer-checked:border-cyan-200/60 peer-checked:bg-[linear-gradient(180deg,rgba(160,245,255,1),rgba(63,201,255,0.94))] peer-checked:text-slate-950 peer-checked:shadow-[0_0_0_1px_rgba(149,241,255,0.16),0_12px_26px_rgba(34,211,238,0.22)] ${invalid ? "border-rose-300/26" : "border-white/18"}`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5 scale-75 opacity-0 transition-all duration-200 peer-checked:scale-100 peer-checked:opacity-100"
          fill="none"
        >
          <path
            d="M3.25 8.4 6.35 11.35 12.75 4.95"
            stroke="currentColor"
            strokeWidth="2.15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="grid gap-1.5">
        <span className="text-sm font-medium text-white">{label}</span>
        <span>{description}</span>
      </span>
    </label>
  );
}
