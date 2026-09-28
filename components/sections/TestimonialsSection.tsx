"use client";

import Image from "next/image";
import { useState } from "react";
import { testimonials, type Review } from "@/data/content";
import { gaEvent } from "@/lib/analytics";
import { Icon } from "../Icon";

/** Danh sách đánh giá kiểu bình luận sàn TMĐT: hiện vài đánh giá đầu, bấm để xem hết. */
export function TestimonialsSection() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? testimonials.items : testimonials.items.slice(0, testimonials.initialCount);
  const hidden = testimonials.items.length - testimonials.initialCount;

  return (
    <section id="danh-gia" aria-labelledby="reviews-title" className="section bg-white">
      <div className="container-page">
        <h2 id="reviews-title" className="h2">
          {testimonials.title}
        </h2>
        <p className="mt-2 text-[13px] text-muted">{testimonials.items.length} lời nhắn được trích từ tin nhắn thật</p>

        <ul className="mt-5 divide-y divide-line border-y border-line">
          {visible.map((review, i) => (
            <ReviewItem key={i} review={review} />
          ))}
        </ul>

        {!expanded && hidden > 0 && (
          <button
            type="button"
            onClick={() => {
              setExpanded(true);
              gaEvent("reviews_expand");
            }}
            className="mt-4 flex min-h-12 w-full items-center justify-center gap-1.5 rounded-full border border-line text-[14px] font-semibold text-ink hover:bg-ivory"
          >
            Xem thêm {hidden} đánh giá
            <Icon name="chevron" className="size-4 rotate-90" strokeWidth={2} />
          </button>
        )}
        <p className="mt-4 text-[12.5px] leading-snug text-muted">{testimonials.note}</p>
      </div>
    </section>
  );
}

function ReviewItem({ review }: { review: Review }) {
  const initial = review.name.startsWith("Khách") ? "P" : review.name[0];
  return (
    <li className="flex gap-3 py-4">
      <span
        aria-hidden="true"
        className="grid size-9 shrink-0 place-items-center rounded-full bg-beige font-serif text-[15px] font-semibold text-gold-deep"
      >
        {initial}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[14px] font-semibold text-ink">{review.name}</p>
        <p className="mt-0.5 flex items-center gap-1 text-[12px] text-muted">
          <Icon name="check" className="size-3.5 text-forest" strokeWidth={2.4} />
          {review.meta}
        </p>
        <div className="mt-2 space-y-1.5 text-[14px] leading-relaxed text-ink">
          {review.quotes.map((quote) => (
            <p key={quote}>{quote}</p>
          ))}
        </div>
        {review.photos && (
          <ul className="mt-2.5 flex flex-wrap gap-1.5">
            {review.photos.map((photo) => (
              <li key={photo.src}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={160}
                  height={160}
                  sizes="80px"
                  className="size-20 rounded-lg border border-line object-cover"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
