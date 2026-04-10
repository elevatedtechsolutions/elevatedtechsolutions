import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  ariaLabel?: string;
  className?: string;
  itemClassName?: string;
  variant?: "icon" | "pill";
};

const iconWrapClasses: Record<NonNullable<SocialLinksProps["variant"]>, string> = {
  icon: "h-10 w-10 justify-center px-0",
  pill: "h-11 gap-3 px-4"
};

const iconSizeClasses: Record<NonNullable<SocialLinksProps["variant"]>, string> = {
  icon: "h-[1.52rem] w-[1.52rem]",
  pill: "h-[1.32rem] w-[1.32rem]"
};

export function SocialLinks({
  ariaLabel = "Social links",
  className,
  itemClassName,
  variant = "icon"
}: SocialLinksProps) {
  return (
    <nav aria-label={ariaLabel}>
      <ul className={cn("flex list-none flex-wrap gap-3 p-0", className)}>
        {siteConfig.socialLinks.map((item) => {
          const Icon = iconMap[item.platform];

          return (
            <li key={item.platform} className="list-none">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.ariaLabel}
              className={cn(
                "group inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-cyan-300/26 hover:bg-cyan-300/[0.07] hover:text-white hover:shadow-[0_18px_36px_rgba(2,12,27,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                iconWrapClasses[variant],
                itemClassName
              )}
            >
                <Icon
                  className={cn(
                    "shrink-0 text-cyan-100/82 transition-colors duration-300 group-hover:text-cyan-100",
                    iconSizeClasses[variant]
                  )}
                />
                {variant === "pill" ? (
                  <span className="text-sm font-medium tracking-[0.01em]">{item.label}</span>
                ) : (
                  <span className="sr-only">{item.label}</span>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

type IconProps = {
  className?: string;
};

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="4.75" y="4.75" width="14.5" height="14.5" rx="3.25" />
      <circle cx="7.3" cy="7.35" r="1.02" fill="currentColor" stroke="none" />
      <rect
        x="6.4"
        y="9.55"
        width="1.8"
        height="6.2"
        rx="0.9"
        fill="currentColor"
        stroke="none"
      />
      <path
        d="M10.25 10.05h1.72v0.86c0.48-0.66 1.23-1.04 2.17-1.04 1.58 0 2.61 1.1 2.61 2.85V16h-1.79v-3.04c0-0.94-0.49-1.49-1.35-1.49-0.91 0-1.55 0.64-1.55 1.63V16h-1.81Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="4.75" y="4.75" width="14.5" height="14.5" rx="3.25" />
      <path d="M12.5 18v-5.25" />
      <path d="M10.75 12.75h3.5" />
      <path d="M14.25 9.25h-1a1.75 1.75 0 0 0-1.75 1.75v1.75" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="4.75" y="4.75" width="14.5" height="14.5" rx="4" />
      <circle cx="12" cy="12" r="3.1" />
      <circle cx="16.35" cy="7.7" r=".65" fill="currentColor" stroke="none" />
    </svg>
  );
}

const iconMap = {
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon
} as const;
