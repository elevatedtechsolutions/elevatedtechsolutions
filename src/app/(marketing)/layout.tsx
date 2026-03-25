import type { ReactNode } from "react";

import { SiteShell } from "@/components/layout/site-shell";

type MarketingLayoutProps = {
  children: ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return <SiteShell>{children}</SiteShell>;
}
