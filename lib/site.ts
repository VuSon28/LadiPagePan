export const site = {
  name: "Pancharm",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  messengerUrl: process.env.NEXT_PUBLIC_MESSENGER_URL || "",
  tiktokPixelId: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || "",
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "",
};

export type CtaSource = "hero" | "process" | "benefit" | "final" | "sticky";

/**
 * m.me links carry `ref` through to the Page inbox/webhook, so the CTA
 * position is visible inside Messenger as well as in analytics.
 */
export function messengerHref(source: CtaSource): string {
  if (!site.messengerUrl) return "#messenger-chua-cau-hinh";
  try {
    const url = new URL(site.messengerUrl);
    if (url.hostname === "m.me" || url.hostname.endsWith(".m.me")) {
      url.searchParams.set("ref", `landing_${source}`);
    }
    return url.toString();
  } catch {
    return site.messengerUrl;
  }
}
