export default function MarketingLoading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="mx-auto flex min-h-[54vh] w-full max-w-6xl items-center px-6 py-16 sm:px-8 lg:px-10"
    >
      <span className="sr-only">Loading Elevated Tech Solutions</span>
      <div className="motion-safe-fade-up grid w-full gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)]">
        <div className="surface-panel-strong overflow-hidden p-8 sm:p-10">
          <div className="space-y-6" aria-hidden="true">
            <div className="h-2.5 w-28 rounded-full bg-cyan-200/14" />
            <div className="space-y-3">
              <div className="h-10 max-w-[32rem] rounded-full bg-white/11" />
              <div className="h-10 max-w-[25rem] rounded-full bg-white/7" />
            </div>
            <div className="space-y-3 pt-2">
              <div className="h-3 w-full max-w-[34rem] rounded-full bg-white/8" />
              <div className="h-3 w-full max-w-[30rem] rounded-full bg-white/7" />
              <div className="h-3 w-full max-w-[22rem] rounded-full bg-white/6" />
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="h-11 w-36 rounded-full bg-white/10" />
              <div className="h-11 w-32 rounded-full bg-white/6" />
            </div>
          </div>
        </div>

        <div className="surface-panel relative overflow-hidden p-5 sm:p-6" aria-hidden="true">
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
          <div className="h-full min-h-[20rem] rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)),radial-gradient(circle_at_top,rgba(50,200,255,0.1),transparent_42%)] p-5">
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-3">
                <div className="h-3 w-24 rounded-full bg-white/10" />
                <div className="h-32 rounded-[1.35rem] bg-white/[0.07]" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="h-20 rounded-[1.2rem] bg-white/[0.06]" />
                <div className="h-20 rounded-[1.2rem] bg-white/[0.05]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
