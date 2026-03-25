import Image from "next/image";

import { CardShell } from "@/components/shared/card-shell";
import { EditorialImage } from "@/components/shared/editorial-image";

const signatureNotes = [
  "Structured to feel current, clear, and trustworthy.",
  "Designed to look premium without becoming harder to maintain."
] as const;

export function HomeSignaturePanel() {
  return (
    <div aria-hidden="true" className="relative min-h-[30rem] sm:min-h-[34rem]">
      <div className="absolute left-1/2 top-10 h-48 w-72 -translate-x-1/2 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="absolute inset-0 rounded-[2.2rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(50,200,255,0.1),transparent_42%)]" />

      <CardShell tone="hero" className="relative z-10 min-h-[30rem] p-8 sm:min-h-[34rem] sm:p-10">
        <div className="flex h-full flex-col gap-8">
          <div className="flex items-center justify-between gap-4 text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100/70">
            <span>Editorial direction</span>
            <span>Elevated Tech Solutions</span>
          </div>

          <EditorialImage
            image="collaboration"
            motion="drift"
            className="min-h-[19rem] flex-1 rounded-[1.9rem]"
            imageClassName="object-cover object-center"
            overlayClassName="bg-[linear-gradient(180deg,rgba(2,6,23,0.1),rgba(2,6,23,0.14)_20%,rgba(2,6,23,0.76)_100%)]"
          >
            <div className="absolute inset-6 rounded-[1.6rem] micro-grid opacity-12" />
            <div className="flex h-full flex-col justify-between p-6 sm:p-7">
              <div className="self-start rounded-full border border-white/12 bg-slate-950/42 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-cyan-100/80 backdrop-blur-sm">
                Placeholder stock image
              </div>

              <div className="flex items-end justify-between gap-6">
                <div className="max-w-sm space-y-3">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/78">
                    Modern small-business support
                  </p>
                  <p className="text-lg leading-8 text-white/92">
                    A more collaborative, polished web experience for businesses and
                    organizations that need stronger digital presentation.
                  </p>
                </div>

                <div className="relative hidden w-20 shrink-0 sm:block">
                  <Image
                    src="/images/branding/elevated-tech-solutions-mark.png"
                    alt=""
                    width={768}
                    height={768}
                    className="h-auto w-full drop-shadow-[0_24px_80px_rgba(50,200,255,0.18)]"
                  />
                </div>
              </div>
            </div>
          </EditorialImage>

          <div className="grid gap-4 border-t border-white/8 pt-5 sm:grid-cols-2">
            {signatureNotes.map((note) => (
              <p key={note} className="text-sm leading-7 text-text-soft/84">
                {note}
              </p>
            ))}
          </div>
        </div>
      </CardShell>
    </div>
  );
}
