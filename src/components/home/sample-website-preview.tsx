import Image from "next/image";

import { CardShell } from "@/components/shared/card-shell";

const previewNotes = [
  {
    title: "Restaurant direction",
    detail: "Sample page views for hospitality sites with stronger atmosphere, menu clarity, and booking intent."
  },
  {
    title: "Nonprofit direction",
    detail: "Mission-led layouts that bring more warmth, structure, and clearer support paths."
  },
  {
    title: "Info-site direction",
    detail: "Brochure-style presentation for service businesses that need a sharper first impression and inquiry path."
  }
] as const;

export function SampleWebsitePreview() {
  return (
    <div aria-hidden="true" className="relative min-h-[32rem] sm:min-h-[36rem]">
      <div className="absolute right-10 top-8 h-40 w-40 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="absolute inset-0 rounded-[2.2rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.08),transparent_48%)]" />
      <div className="absolute inset-6 rounded-[1.8rem] micro-grid opacity-16" />

      <CardShell tone="hero" className="relative z-10 min-h-[32rem] p-4 sm:min-h-[36rem] sm:p-5">
        <div className="flex items-center gap-2 border-b border-white/8 pb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
          <div className="ml-3 rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/70">
            sample examples
          </div>
        </div>

        <div className="mt-5 grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div className="space-y-6 lg:pb-2">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/72">
                Sample page views
              </p>
              <h3 className="mt-4 max-w-sm font-display text-3xl font-semibold tracking-tight text-white">
                Cleaner service cards supported by a few quiet example views.
              </h3>
            </div>

            <div className="space-y-4 border-t border-white/8 pt-5">
              {previewNotes.map((note) => (
                <div key={note.title}>
                  <p className="text-sm font-medium text-slate-100">{note.title}</p>
                  <p className="mt-2 text-sm leading-7 text-text-soft/84">{note.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-4">
            <div className="overflow-hidden rounded-[1.65rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.14),transparent_40%),linear-gradient(180deg,rgba(11,19,34,0.96),rgba(6,10,19,0.96))] p-4">
              <div className="mb-4 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.24em] text-slate-400">
                <span>Sample preview</span>
                <span>Restaurant site</span>
              </div>

              <div className="relative overflow-hidden rounded-[1.2rem] border border-white/8">
                <div className="relative min-h-[16rem] sm:min-h-[20rem]">
                  <Image
                    fill
                    src="/images/services/Restaurant%20Example/restauranthomepage.png"
                    alt="Barro & Brasa sample website preview."
                    sizes="(min-width: 1280px) 28vw, (min-width: 768px) 60vw, 100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04),rgba(2,6,23,0.12)_28%,rgba(2,6,23,0.7)_100%)]" />
                  <div className="flex h-full items-end p-5">
                    <div className="max-w-[16rem] rounded-[1.15rem] border border-white/12 bg-slate-950/42 px-4 py-4 backdrop-blur-md">
                      <p className="text-[0.65rem] uppercase tracking-[0.24em] text-cyan-100/76">
                        Example support
                      </p>
                      <p className="mt-3 text-sm leading-6 text-white/88">
                        Visual direction that supports the offer without turning the
                        page into a gallery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <CardShell className="motion-safe-float-delayed absolute -bottom-5 right-4 hidden w-[11.5rem] p-3 lg:block">
              <div className="rounded-[1.25rem] border border-white/8 bg-slate-950/40 p-3">
                <p className="text-[0.62rem] uppercase tracking-[0.24em] text-cyan-200/72">
                  Nonprofit
                </p>
                <div className="relative mt-3 overflow-hidden rounded-[1rem] border border-white/8">
                  <div className="relative min-h-[8.8rem]">
                    <Image
                      fill
                      src="/images/services/Nonprofit%20Example/nonprofithomepage.png"
                      alt="Kindred Path sample website preview."
                      sizes="184px"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04),rgba(2,6,23,0.18)_100%)]" />
                  </div>
                </div>
              </div>
            </CardShell>

            <CardShell className="absolute -right-2 top-5 hidden w-[11.5rem] p-3 xl:block">
              <div className="rounded-[1.25rem] border border-white/8 bg-slate-950/40 p-3">
                <p className="text-[0.62rem] uppercase tracking-[0.24em] text-cyan-200/72">
                  Info site
                </p>
                <div className="relative mt-3 overflow-hidden rounded-[1rem] border border-white/8">
                  <div className="relative min-h-[8.8rem]">
                    <Image
                      fill
                      src="/images/services/Infosite%20Example/infohomepage.png"
                      alt="Aether and Oak sample website preview."
                      sizes="184px"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04),rgba(2,6,23,0.18)_100%)]" />
                  </div>
                </div>
              </div>
            </CardShell>
          </div>
        </div>
      </CardShell>
    </div>
  );
}
