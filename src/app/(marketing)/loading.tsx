import { BrandPrelude } from "@/components/layout/brand-prelude";

export default function MarketingLoading() {
  return (
    <div role="status" aria-live="polite" className="relative">
      <span className="sr-only">Loading Elevated Tech Solutions</span>
      <BrandPrelude mode="loading" />
    </div>
  );
}
