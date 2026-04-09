import { CardShell } from "@/components/shared/card-shell";
import { cn } from "@/lib/utils";

type ComparisonValue = {
  primary: string;
  secondary: string;
};

type ComparisonOption = {
  key: string;
  label: string;
  eyebrow: string;
  summary: string;
  emphasis?: boolean;
};

type ComparisonRow = {
  label: string;
  values: Record<string, ComparisonValue>;
};

type ComparisonMatrixProps = {
  options: readonly ComparisonOption[];
  rows: readonly ComparisonRow[];
};

export function ComparisonMatrix({
  options,
  rows
}: ComparisonMatrixProps) {
  return (
    <>
      <CardShell tone="hero" className="hidden overflow-hidden lg:block">
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 bg-[radial-gradient(circle_at_top_right,rgba(50,200,255,0.12),transparent_68%)]" />

        <div className="border-b border-white/8 px-6 py-5 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-cyan-200/72">
                Cost-first comparison
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Built to scan in seconds.
              </p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-slate-400">
              6 key factors
            </div>
          </div>
        </div>

        <div className="px-4 py-4 lg:px-5">
          <div className="grid grid-cols-[220px_repeat(3,minmax(0,1fr))] gap-x-4">
            <div />

            {options.map((option) => (
              <CardShell
                key={option.key}
                tone={option.emphasis ? "default" : "quiet"}
                className={cn(
                  "overflow-hidden",
                  option.emphasis &&
                    "border-cyan-300/12 bg-[linear-gradient(180deg,rgba(19,35,58,0.82),rgba(8,14,28,0.92))]"
                )}
              >
                <div className="h-full min-h-[7.75rem] px-5 py-5">
                  <p
                    className={cn(
                      "text-[0.68rem] uppercase tracking-[0.28em]",
                      option.emphasis ? "text-cyan-100/78" : "text-slate-400"
                    )}
                  >
                    {option.eyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                    {option.label}
                  </h3>
                  <p className="mt-3 max-w-[16rem] text-sm leading-6 text-text-soft/82">
                    {option.summary}
                  </p>
                </div>
              </CardShell>
            ))}

            {rows.map((row, index) => (
              <RowDesktop
                key={row.label}
                index={index}
                options={options}
                row={row}
              />
            ))}
          </div>
        </div>
      </CardShell>

      <div className="grid gap-4 lg:hidden">
        <CardShell tone="quiet" className="p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/72">
                Cost-first comparison
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Each factor stacks into a cleaner mobile row.
              </p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-slate-400">
              Mobile
            </div>
          </div>
        </CardShell>

        {rows.map((row, index) => (
          <CardShell key={`${row.label}-mobile`} tone="quiet" className="p-5">
            <div className="space-y-4">
              <div className="border-b border-white/8 pb-4">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-base font-medium leading-7 text-slate-100">
                  {row.label}
                </p>
              </div>

              <div className="grid gap-3">
                {options.map((option) => {
                  const value = row.values[option.key];

                  return (
                    <article
                      key={`${row.label}-${option.key}-mobile`}
                      className={cn(
                        "h-full rounded-[1.2rem] border px-4 py-4",
                        option.emphasis
                          ? "border-cyan-300/18 bg-[linear-gradient(180deg,rgba(34,211,238,0.1),rgba(255,255,255,0.03))]"
                          : "border-white/8 bg-white/[0.025]"
                      )}
                    >
                      <p
                        className={cn(
                          "text-[0.68rem] uppercase tracking-[0.28em]",
                          option.emphasis ? "text-cyan-100/78" : "text-slate-400"
                        )}
                      >
                        {option.label}
                      </p>
                      <p className="mt-2 text-sm font-medium leading-6 text-slate-100">
                        {value.primary}
                      </p>
                      <p className="mt-1.5 text-sm leading-6 text-text-soft/82">
                        {value.secondary}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </CardShell>
        ))}
      </div>
    </>
  );
}

function RowDesktop({
  index,
  options,
  row
}: {
  index: number;
  options: readonly ComparisonOption[];
  row: ComparisonRow;
}) {
  return (
    <>
      <div
        className={cn(
          "flex items-stretch border-t border-white/5 pt-4",
          index === 0 && "mt-6 border-t border-white/8 pt-6"
        )}
      >
        <div className="flex h-full min-h-[5.5rem] flex-col justify-center px-4">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">
            {String(index + 1).padStart(2, "0")}
          </p>
          <p className="mt-2 text-sm font-medium leading-6 text-slate-100">
            {row.label}
          </p>
        </div>
      </div>

      {options.map((option) => {
        const value = row.values[option.key];

        return (
          <div
            key={`${row.label}-${option.key}`}
            className={cn(
              "flex items-stretch border-t border-white/5 pt-4",
              index === 0 && "mt-6 border-t border-white/8 pt-6"
            )}
          >
            <article
              className={cn(
                "flex h-full min-h-[5.5rem] w-full flex-col justify-center rounded-[1.3rem] border px-5 py-4 transition duration-300",
                option.emphasis
                  ? "border-cyan-300/18 bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(255,255,255,0.03))] hover:border-cyan-300/28 hover:bg-[linear-gradient(180deg,rgba(34,211,238,0.11),rgba(255,255,255,0.04))]"
                  : "border-white/8 bg-white/[0.022] hover:border-white/12 hover:bg-white/[0.035]"
              )}
            >
              <p
                className={cn(
                  "text-sm font-medium leading-6",
                  option.emphasis ? "text-white" : "text-slate-100"
                )}
              >
                {value.primary}
              </p>
              <p className="mt-1.5 text-sm leading-6 text-text-soft/78">
                {value.secondary}
              </p>
            </article>
          </div>
        );
      })}
    </>
  );
}
