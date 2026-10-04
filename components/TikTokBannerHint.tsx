"use client";

import { useEffect, useState } from "react";

/**
 * Banner mỏng chỉ hiển thị khi khách đến từ in-app browser của TikTok (iOS/Android).
 * Hướng dẫn khách mở trang trong Safari/Chrome để chat Messenger nhanh hơn
 * (TikTok WebView bị iOS chặn deep link, dẫn tới 4-5 bấm; Safari chỉ 1-2 bấm).
 * Khách bấm nút ✕ thì nhớ (localStorage) để không hiện lại trong session đó.
 */
export function TikTokBannerHint() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isTikTok = /tiktok|musical_ly|bytedance|bytelocale/.test(ua);
    let dismissed = false;
    try {
      dismissed = localStorage.getItem("tiktok-hint-dismissed") === "1";
    } catch {
      // localStorage có thể bị chặn ở private mode — bỏ qua
    }
    if (isTikTok && !dismissed) setShow(true);
  }, []);

  function dismiss() {
    setShow(false);
    try {
      localStorage.setItem("tiktok-hint-dismissed", "1");
    } catch {
      // ignore
    }
  }

  if (!show) return null;

  return (
    <div
      role="status"
      className="fixed inset-x-0 top-0 z-[60] mx-auto flex max-w-[480px] items-start gap-2 bg-clay px-3 py-2.5 text-[12.5px] leading-snug text-cream shadow-md"
    >
      <span aria-hidden="true" className="shrink-0 text-base leading-none">
        💡
      </span>
      <p className="flex-1">
        Để chat nhanh hơn, nhấn <strong>⋯</strong> góc trên phải → <strong>Mở trong Safari</strong>
      </p>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Đóng gợi ý"
        className="shrink-0 px-1 text-base leading-none opacity-70 hover:opacity-100"
      >
        ✕
      </button>
    </div>
  );
}
