import type { CtaSource } from "./site";

type TikTokQueue = {
  track: (event: string, params?: Record<string, unknown>) => void;
};

declare global {
  interface Window {
    ttq?: TikTokQueue;
    gtag?: (...args: unknown[]) => void;
  }
}

function device(): "mobile" | "tablet" | "desktop" {
  const w = window.innerWidth;
  if (w < 768) return "mobile";
  if (w < 1024) return "tablet";
  return "desktop";
}

export function gaEvent(name: string, params: Record<string, unknown> = {}) {
  window.gtag?.("event", name, params);
}

/** TikTok "Contact" + GA4 "messenger_click". Never send customer data here. */
export function trackMessengerClick(source: CtaSource) {
  window.ttq?.track("Contact", {
    content_id: "pancharm-battu-consult",
    content_type: "product",
    content_name: `messenger_${source}`,
  });
  gaEvent("messenger_click", { source, section: source, device: device() });
}
