import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-[46rem] space-y-5 sm:space-y-6",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <div className={cn("flex items-center gap-3.5", align === "center" && "justify-center")}>
        <span className="h-px w-12 bg-gradient-to-r from-cyan-300/0 via-cyan-200/90 to-cyan-300/0" />
        <p className="font-display text-[0.7rem] font-medium uppercase tracking-[0.34em] text-cyan-200/72">
          {eyebrow}
        </p>
      </div>
      <h2 className="max-w-[44rem] text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[3.35rem]">
        {title}
      </h2>
      <p
        className={cn(
          "max-w-[40rem] text-base leading-8 text-text-soft/88 sm:text-[1.02rem]",
          align === "center" && "mx-auto"
        )}
      >
        {description}
      </p>
    </div>
  );
}
