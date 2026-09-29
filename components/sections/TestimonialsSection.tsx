"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { testimonials, type Review } from "@/data/content";
import { gaEvent } from "@/lib/analytics";
import { Icon } from "../Icon";
import { SectionHeading } from "../SectionHeading";

const PER_PAGE = 2;

/** Băng đánh giá vuốt ngang, 2 thẻ mỗi trang kèm chấm chỉ trang như mockup. */
export function TestimonialsSection() {
  const [expanded, setExpanded] = useState(false);
  const [page, setPage] = useState(0);
  const railRef = useRef<HTMLUListElement>(null);

  const visible = expanded ? testimonials.items : testimonials.items.slice(0, testimonials.initialCount);
  const hidden = testimonials.items.length - testimonials.initialCount;
  const pages = Math.ceil(visible.length / PER_PAGE);

  // Bề rộng một trang tính từ tổng chiều dài băng, không phụ thuộc bề rộng thẻ.
  function pageWidth(rail: HTMLUListElement) {
    return rail.scrollWidth / pages;
  }

  function onScroll() {
    const rail = railRef.current;
    if (!rail) return;
    const i = Math.round(rail.scrollLeft / pageWidth(rail));
    setPage(Math.min(Math.max(i, 0), pages - 1));
  }

  function goTo(i: number) {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollTo({ left: i * pageWidth(rail), behavior: "smooth" });
  }

  return (
    <section id="danh-gia" aria-labelledby="reviews-title" className="section">
      <div className="container-page">
        <SectionHeading id="reviews-title" title={testimonials.title} body={testimonials.subtitle} />
      </div>

      <ul
        ref={railRef}
        onScroll={onScroll}
        className="snap-row mx-0 mt-7 items-stretch px-5"
        aria-label="Đánh giá của khách hàng, vuốt ngang để xem thêm"
      >
        {visible.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </ul>

      {pages > 1 && (
        <div className="mt-3 flex justify-center gap-1.5">
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Xem nhóm đánh giá ${i + 1}`}
              aria-current={i === page}
              className={`h-1.5 rounded-full transition-all ${i === page ? "w-5 bg-cream" : "w-1.5 bg-cream/45"}`}
            />
          ))}
        </div>
      )}

      <div className="container-page">
        {!expanded && hidden > 0 && (
          <button
            type="button"
            onClick={() => {
              setExpanded(true);
              gaEvent("reviews_expand");
            }}
            className="mt-5 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full border border-cream/55 text-[14.5px] font-semibold text-cream hover:bg-cream/10"
          >
            Xem thêm {hidden} đánh giá
            <Icon name="chevron" className="size-4 rotate-90" strokeWidth={2} />
          </button>
        )}
        <p className="mt-4 text-center text-[12px] leading-snug text-cream/70">{testimonials.note}</p>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const initial = review.name.startsWith("Khách") ? "P" : review.name[0];
  return (
    <li className="card soft-shadow flex w-[calc((100%-0.75rem)/2)] shrink-0 snap-start flex-col p-3">
      <div className="flex items-center gap-2.5">
        <span
          aria-hidden="true"
          className="grid size-9 shrink-0 place-items-center rounded-full bg-cream-dim font-serif text-[15px] font-semibold text-clay"
        >
          {initial}
        </span>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold text-ink">{review.name}</p>
          <p className="truncate text-[11px] text-muted">{review.meta}</p>
        </div>
      </div>

      {review.rating && (
        <div className="mt-2 flex gap-0.5" aria-label={`${review.rating} trên 5 sao`}>
          {Array.from({ length: review.rating }, (_, i) => (
            <Icon key={i} name="star" filled className="size-3.5 text-gold" />
          ))}
        </div>
      )}

      <div className="mt-2.5 space-y-1.5 text-[12.5px] leading-relaxed text-ink">
        {review.quotes.slice(0, 2).map((quote) => (
          <p key={quote}>{quote}</p>
        ))}
      </div>

      {review.photos && (
        <ul className="mt-auto flex gap-1.5 pt-3">
          {review.photos.slice(0, 2).map((photo) => (
            <li key={photo.src} className="min-w-0 flex-1">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={200}
                height={200}
                sizes="100px"
                className="aspect-square w-full rounded-lg object-cover"
              />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
