"use client";

import { useState } from "react";
import { faq } from "@/data/content";
import { gaEvent } from "@/lib/analytics";
import { Icon } from "../Icon";

export function FAQSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? faq.items : faq.items.slice(0, faq.initialCount);
  const hidden = faq.items.length - faq.initialCount;

  return (
    <section id="hoi-dap" aria-labelledby="faq-title" className="band-sand section">
      <div className="container-page">
        <div className="flex items-baseline justify-between gap-3">
          <h2 id="faq-title" className="font-serif text-[24px] leading-tight font-semibold text-clay">
            {faq.title}
          </h2>
          {hidden > 0 && (
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="flex shrink-0 items-center gap-1 text-[13px] font-medium text-muted hover:text-clay"
            >
              {showAll ? "Thu gọn" : faq.moreLabel}
              <Icon name="chevron" className={`size-3.5 ${showAll ? "-rotate-90" : ""}`} strokeWidth={2} />
            </button>
          )}
        </div>

        <div className="mt-5 space-y-2.5">
          {visible.map((item) => (
            <details
              key={item.id}
              className="card group px-4"
              onToggle={(e) => {
                if (e.currentTarget.open) gaEvent("faq_open", { faq_id: item.id });
              }}
            >
              <summary className="flex min-h-[54px] cursor-pointer list-none items-center justify-between gap-3 py-3 text-[14.5px] leading-snug font-medium text-ink [&::-webkit-details-marker]:hidden">
                {item.q}
                <Icon name="plus" className="size-5 shrink-0 text-clay transition-transform group-open:rotate-45" />
              </summary>
              <div className="pb-4 text-[13.5px] leading-relaxed text-muted">
                {item.a && <p>{item.a}</p>}
                {item.pending && (
                  <p
                    className={`rounded-xl border border-dashed border-clay/60 bg-sand px-4 py-3 text-[13px] text-ink ${item.a ? "mt-3" : ""}`}
                  >
                    <span className="font-semibold text-clay">[CẦN BỔ SUNG]</span> {item.pending}
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
