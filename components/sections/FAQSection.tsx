"use client";

import { faq } from "@/data/content";
import { gaEvent } from "@/lib/analytics";
import { Icon } from "../Icon";
import { Pending } from "../Pending";

export function FAQSection() {
  return (
    <section id="hoi-dap" aria-labelledby="faq-title" className="section">
      <div className="container-page">
        <h2 id="faq-title" className="h2">
          {faq.title}
        </h2>
        <div className="card mt-6 divide-y divide-line">
          {faq.items.map((item) => (
            <details
              key={item.id}
              className="group px-4"
              onToggle={(e) => {
                if (e.currentTarget.open) gaEvent("faq_open", { faq_id: item.id });
              }}
            >
              <summary className="flex min-h-[52px] cursor-pointer list-none items-center justify-between gap-3 py-3 text-[15px] font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <Icon name="plus" className="size-5 shrink-0 text-gold-deep transition-transform group-open:rotate-45" />
              </summary>
              <div className="pb-4 text-[14px] leading-relaxed text-muted">
                {item.a && <p>{item.a}</p>}
                {item.pending && <Pending className={item.a ? "mt-3" : ""}>{item.pending}</Pending>}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
