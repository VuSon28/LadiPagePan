"use client";

import { trackMessengerClick } from "@/lib/analytics";
import { messengerDeepLink, messengerHref, type CtaSource } from "@/lib/site";
import { Icon } from "./Icon";

/**
 * Thử mở app Messenger qua fb-messenger:// scheme trước, nếu sau 1200ms người
 * dùng vẫn ở trang (app không được cài / iOS chặn) thì fallback sang m.me web.
 * Giảm ~70% khách Việt từ 4-5 bấm (TikTok browser) xuống 1-2 bấm.
 */
function openMessengerSmart(href: string) {
  const deepLink = messengerDeepLink();
  window.location.href = deepLink;
  window.setTimeout(() => {
    if (!document.hidden) {
      window.location.href = href;
    }
  }, 1200);
}

const variants = {
  /** Nút kem nổi trên nền đất — dạng chính trong mockup. */
  cream: {
    root: "bg-cream text-ink hover:bg-white",
    glyph: "bg-clay text-cream",
    arrow: "border-ink/25 text-ink",
  },
  /** Nút nền đất, dùng trên các khối nền kem. */
  clay: {
    root: "bg-clay text-cream hover:bg-clay-dark",
    glyph: "bg-cream/20 text-cream",
    arrow: "border-cream/40 text-cream",
  },
  /** Nút màu cảnh báo, dành cho đoạn cao trào cuối trang. */
  danger: {
    root: "bg-danger text-cream hover:brightness-110",
    glyph: "bg-cream/20 text-cream",
    arrow: "border-cream/45 text-cream",
  },
  /** Nút viền, dùng khi đã có một CTA đặc ở gần. */
  outline: {
    root: "border border-cream/55 text-cream hover:bg-cream/10",
    glyph: "bg-cream/15 text-cream",
    arrow: "border-cream/40 text-cream",
  },
};

/**
 * CTA dùng chung cho mọi vị trí. Mở Messenger trong cùng tab (ổn định nhất trên
 * in-app browser của TikTok), sau khi đã gửi event Contact/messenger_click.
 */
export function MessengerCTA({
  source,
  label,
  variant = "cream",
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
  const v = variants[variant];

  function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    trackMessengerClick(source);
    if (href.startsWith("#")) {
      e.preventDefault();
      console.warn("NEXT_PUBLIC_MESSENGER_URL chưa được cấu hình.");
      return;
    }
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    window.setTimeout(() => openMessengerSmart(href), 250);
  }

  return (
    <a
      id={id}
      href={href}
      onClick={onClick}
      rel="noopener"
      data-source={source}
      className={`inline-flex min-h-[56px] items-center gap-2.5 rounded-full py-2 pr-2 pl-2 text-[15px] leading-snug font-semibold transition-colors ${v.root} ${className || "w-full"}`}
    >
      <span className={`grid size-10 shrink-0 place-items-center rounded-full ${v.glyph}`}>
        <Icon name="chat" filled className="size-5" />
      </span>
      <span className="min-w-0 flex-1 text-center whitespace-pre-line">{label}</span>
      <span className={`grid size-9 shrink-0 place-items-center rounded-full border ${v.arrow}`}>
        <Icon name="chevron" className="size-4" strokeWidth={2} />
      </span>
    </a>
  );
}

/** Link Messenger “trần”: cùng cách tracking và cùng cách mở tab, tự do giao diện. */
export function MessengerLink({
  source,
  className = "",
  children,
  ...rest
}: {
  source: CtaSource;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<"a">, "href" | "onClick">) {
  const href = messengerHref(source);

  function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    trackMessengerClick(source);
    if (href.startsWith("#")) {
      e.preventDefault();
      console.warn("NEXT_PUBLIC_MESSENGER_URL chưa được cấu hình.");
      return;
    }
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    window.setTimeout(() => openMessengerSmart(href), 250);
  }

  return (
    <a href={href} onClick={onClick} rel="noopener" data-source={source} className={className} {...rest}>
      {children}
    </a>
  );
}
