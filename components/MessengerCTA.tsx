"use client";

import { trackMessengerClick } from "@/lib/analytics";
import { messengerHref, type CtaSource } from "@/lib/site";
import { Icon } from "./Icon";

const variants = {
  primary:
    "bg-terracotta text-white hover:bg-terracotta-dark shadow-[0_10px_24px_-12px_rgba(143,67,54,0.75)]",
  light: "bg-ivory text-forest hover:bg-white",
};

/**
 * CTA dùng chung cho mọi vị trí. Mở Messenger trong cùng tab (ổn định nhất trên
 * in-app browser của TikTok), sau khi đã gửi event Contact/messenger_click.
 */
export function MessengerCTA({
  source,
  label,
  variant = "primary",
  className = "",
  id,
}: {
  source: CtaSource;
  label: string;
  variant?: keyof typeof variants;
  className?: string;
  id?: string;
}) {
  const href = messengerHref(source);

  function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    trackMessengerClick(source);
    if (href.startsWith("#")) {
      e.preventDefault();
      console.warn("NEXT_PUBLIC_MESSENGER_URL chưa được cấu hình.");
      return;
    }
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    // Give the pixel beacon a moment before leaving the page.
    e.preventDefault();
    window.setTimeout(() => window.location.assign(href), 250);
  }

  return (
    <a
      id={id}
      href={href}
      onClick={onClick}
      rel="noopener"
      data-source={source}
      className={`inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full px-5 py-3 text-center text-[15px] leading-snug font-semibold transition-colors ${variants[variant]} ${className || "w-full"}`}
    >
      <Icon name="chat" filled className="size-5 shrink-0" />
      <span>{label}</span>
      <Icon name="chevron" className="size-4 shrink-0" strokeWidth={2.2} />
    </a>
  );
}
