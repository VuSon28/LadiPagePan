"use client";

import Image from "next/image";
import { useState } from "react";
import { products, type Product } from "@/data/content";
import { gaEvent } from "@/lib/analytics";
import { Icon } from "../Icon";
import { MessengerLink } from "../MessengerCTA";
import { SectionHeading } from "../SectionHeading";

const vnd = new Intl.NumberFormat("vi-VN");
const featured = products.segments.flatMap((s) => s.items).filter((item) => item.featured);

export function ProductShowcase() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="mau-vong" aria-labelledby="products-title" className="section">
      <div className="container-page">
        <SectionHeading id="products-title" title={products.title} body={products.body} />

        <ul className="mt-7 space-y-3.5">
          {featured.map((item) => (
            <ProductCard key={item.name} item={item} />
          ))}
        </ul>

        {expanded && (
          <div className="mt-7 space-y-6">
            {products.segments.map((segment) => (
              <div key={segment.label}>
                <h3 className="flex items-center gap-2 text-[14px] font-semibold text-cream">
                  <span aria-hidden="true" className="h-4 w-1 rounded-full bg-cream/70" />
                  {segment.label}
                  <span className="text-[12.5px] font-normal text-cream/70">· {segment.items.length} mẫu</span>
                </h3>
                <ul className="mt-3 grid grid-cols-2 gap-3">
                  {segment.items.map((item) => (
                    <li key={item.name} className="card soft-shadow overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={640}
                        height={640}
                        sizes="(min-width: 480px) 220px, 45vw"
                        className="aspect-square w-full object-cover"
                      />
                      <div className="px-3 pt-2.5 pb-3">
                        <p className="font-serif text-[15px] leading-snug font-semibold text-ink">{item.name}</p>
                        <p className="mt-0.5 text-[11.5px] leading-snug text-muted">{item.collection}</p>
                        <p className="mt-1.5 text-[14.5px] font-semibold text-ink">{vnd.format(item.price)}đ</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={() => {
            setExpanded((v) => !v);
            if (!expanded) gaEvent("products_expand");
          }}
          className="mt-6 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full border border-cream/55 text-[14.5px] font-semibold text-cream transition-colors hover:bg-cream/10"
        >
          {expanded ? products.lessLabel : products.moreLabel}
          <Icon name="chevron" className={`size-4 ${expanded ? "-rotate-90" : ""}`} strokeWidth={2} />
        </button>

        <p className="mt-4 text-center text-[12.5px] leading-snug text-cream/75">{products.note}</p>
      </div>
    </section>
  );
}

function ProductCard({ item }: { item: Product }) {
  return (
    <li className="card soft-shadow flex items-stretch gap-3.5 p-3">
      <Image
        src={item.image}
        alt={item.alt}
        width={400}
        height={400}
        sizes="120px"
        className="size-[104px] shrink-0 rounded-[18px] object-cover"
      />
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <h3 className="font-serif text-[18px] leading-snug font-semibold text-ink">{item.name}</h3>
        <p className="mt-1 text-[12px] leading-snug text-muted">{item.collection}</p>
        <p className="text-[12px] leading-snug text-muted">{item.detail}</p>
        <div className="mt-2 flex items-center justify-between gap-2">
          <p className="text-[17px] font-semibold text-ink">{vnd.format(item.price)}đ</p>
          <MessengerLink
            source="benefit"
            aria-label={`Nhắn Pancharm hỏi về mẫu ${item.name}`}
            className="grid size-9 shrink-0 place-items-center rounded-full bg-clay text-cream transition-colors hover:bg-clay-dark"
          >
            <Icon name="chevron" className="size-4" strokeWidth={2} />
          </MessengerLink>
        </div>
      </div>
    </li>
  );
}
