export type QuoteRequestOption = {
  value: string;
  label: string;
};

export const projectTypeOptions: QuoteRequestOption[] = [
  { value: "info-site", label: "Info Site" },
  { value: "restaurant-menu-info", label: "Restaurant Site (Menu / Info)" },
  { value: "restaurant-online-ordering", label: "Restaurant Site (Online Ordering)" },
  { value: "ecommerce-site", label: "Ecommerce Site" },
  { value: "website-redesign", label: "Website Redesign" },
  { value: "website-maintenance-support", label: "Website Maintenance / Support" },
  { value: "landing-promo-page", label: "Landing Page / Promo Page" },
  { value: "nonprofit-organization-site", label: "Nonprofit / Organization Site" },
  { value: "other", label: "Other" }
];

export const budgetRangeOptions: QuoteRequestOption[] = [
  { value: "less-than-500", label: "Less than $500" },
  { value: "500-1000", label: "$500 - $1,000" },
  { value: "1000-1500", label: "$1,000 - $1,500" },
  { value: "1500-2000", label: "$1,500 - $2,000" },
  { value: "2000-2500", label: "$2,000 - $2,500" },
  { value: "2500-plus", label: "$2,500+" }
];

export const timelineOptions: QuoteRequestOption[] = [
  { value: "asap", label: "As soon as possible" },
  { value: "2-4-weeks", label: "Within 2-4 weeks" },
  { value: "1-2-months", label: "Within 1-2 months" },
  { value: "2-3-months", label: "Within 2-3 months" },
  { value: "planning", label: "Still planning / exploring options" }
];

export type QuoteRequestSubmission = {
  fullName: string;
  businessName: string;
  email: string;
  phone: string | null;
  projectType: string;
  customProjectType: string | null;
  budgetRange: string;
  timeline: string;
  message: string;
  emailConsent: true;
};

type QuoteRequestParseResult =
  | { success: true; data: QuoteRequestSubmission }
  | { success: false; message: string };

const projectTypeValues = new Set(projectTypeOptions.map((option) => option.value));
const budgetRangeValues = new Set(budgetRangeOptions.map((option) => option.value));
const timelineValues = new Set(timelineOptions.map((option) => option.value));

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeOptionalText(value: unknown) {
  const normalized = normalizeText(value);
  return normalized.length > 0 ? normalized : null;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function hasConsent(value: unknown) {
  return value === true || value === "true" || value === "agreed" || value === "on";
}

export function parseQuoteRequestSubmission(values: Record<string, unknown>): QuoteRequestParseResult {
  const fullName = normalizeText(values.name);
  if (fullName.length < 2) {
    return { success: false, message: "Please enter your full name." };
  }

  const businessName = normalizeText(values.businessName);
  if (businessName.length < 2) {
    return { success: false, message: "Please enter your business or organization name." };
  }

  const email = normalizeText(values.email).toLowerCase();
  if (!isValidEmail(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const projectType = normalizeText(values.projectType);
  if (!projectTypeValues.has(projectType)) {
    return { success: false, message: "Please choose a valid project type." };
  }

  const customProjectType = normalizeOptionalText(values.projectTypeOther);
  if (projectType === "other" && !customProjectType) {
    return { success: false, message: "Please describe your project type." };
  }

  const budgetRange = normalizeText(values.budgetRange);
  if (!budgetRangeValues.has(budgetRange)) {
    return { success: false, message: "Please choose a valid budget range." };
  }

  const timeline = normalizeText(values.timeline);
  if (!timelineValues.has(timeline)) {
    return { success: false, message: "Please choose a valid timeline." };
  }

  const message = normalizeText(values.message);
  if (message.length < 20) {
    return { success: false, message: "Please share a bit more detail about the project." };
  }

  if (!hasConsent(values.contactConsent)) {
    return {
      success: false,
      message: "Please confirm that Elevated Tech Solutions may contact you by email about your inquiry."
    };
  }

  return {
    success: true,
    data: {
      fullName,
      businessName,
      email,
      phone: normalizeOptionalText(values.phone),
      projectType,
      customProjectType: projectType === "other" ? customProjectType : null,
      budgetRange,
      timeline,
      message,
      emailConsent: true
    }
  };
}
