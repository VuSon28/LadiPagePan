export const site = {
  name: "Pancharm",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  messengerUrl: process.env.NEXT_PUBLIC_MESSENGER_URL || "",
  tiktokPixelId: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID ?? "DB2A61JC77U9003F8G9G",
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "",
};

/**
 * Numeric Page ID của Pancharm Trang Sức Phong Thủy.
 * Dùng cho deep link fb-messenger:// và App Links meta tags — resolve nhanh hơn
 * username, không bị kẹt tại trang Facebook web trung gian.
 */
export const MESSENGER_PAGE_ID = "110003875531178";

export type CtaSource = "hero" | "process" | "benefit" | "offer" | "final" | "sticky";

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

/** Deep link mở thẳng app Messenger (bỏ qua trang Facebook web trung gian). */
export function messengerDeepLink(): string {
  return `fb-messenger://user-thread/${MESSENGER_PAGE_ID}`;
}
