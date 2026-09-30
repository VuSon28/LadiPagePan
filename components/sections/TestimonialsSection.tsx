"use client";

import Image from "next/image";
import { testimonials, type Review } from "@/data/content";
import { MessengerLink } from "../MessengerCTA";
import { SectionHeading } from "../SectionHeading";

/**
 * Đánh giá trình bày kiểu khung bình luận (tên, nội dung, ảnh, dòng thời gian).
 * Chỉ hiển thị số liệu có thật: số bình luận = số trích dẫn đang có; không bịa sao,
 * lượt thích, "x phút trước" hay phản hồi của shop.
 */
export function TestimonialsSection() {
  return (
    <section id="danh-gia" aria-labelledby="reviews-title" className="band-sand section">
      <div className="container-page">
        <SectionHeading id="reviews-title" title={testimonials.title} body={testimonials.subtitle} />

        <div className="mt-7 rounded-2xl border border-line bg-white px-4 pt-4 pb-2 text-ink shadow-sm">
          <h3 className="text-[22px] font-bold tracking-tight text-[#4b4f56]">Tất cả bình luận</h3>
          <div className="mt-3 flex items-center justify-between gap-3 border-b border-[#dddfe2] pb-3">
            <p className="text-[14px] font-bold text-[#4b4f56]">{testimonials.items.length} Bình luận</p>
            <p className="flex items-center gap-2 text-[12.5px] text-[#606770]">
              Sắp xếp theo
              <span className="rounded-md border border-[#ccd0d5] bg-[#f5f6f7] px-3 py-1.5 text-[13px] font-bold text-[#4b4f56]">
                Hàng đầu
              </span>
            </p>
          </div>

          {/* Toàn bộ bình luận trong khung cuộn riêng để trang không bị dài quá. */}
          <ul
            tabIndex={0}
            aria-label="Danh sách bình luận, cuộn để xem thêm"
            className="max-h-[min(150vh,1100px)] overflow-y-auto overscroll-contain"
          >
            {testimonials.items.map((review, i) => (
              <Comment key={i} review={review} index={i} />
            ))}
          </ul>

          {/* Dòng mời gửi cảm nhận, kiểu "đang nhập bình luận" nhưng nội dung đúng sự thật. */}
          <MessengerLink
            source="benefit"
            className="flex items-center gap-3 border-t border-[#dddfe2] py-3 text-[13px] text-[#606770] hover:text-[#385898]"
          >
            <span aria-hidden="true" className="flex gap-1">
              <span className="size-1.5 animate-pulse rounded-full bg-[#90949c]" />
              <span className="size-1.5 animate-pulse rounded-full bg-[#90949c] [animation-delay:150ms]" />
              <span className="size-1.5 animate-pulse rounded-full bg-[#90949c] [animation-delay:300ms]" />
            </span>
            {testimonials.invite}
          </MessengerLink>
        </div>

        <p className="mt-4 text-center text-[12px] leading-snug text-muted">{testimonials.note}</p>
      </div>
    </section>
  );
}

/** Màu nền avatar chữ cái, xoay vòng theo thứ tự cho đỡ đơn điệu. */
const avatarColors = ["bg-clay", "bg-evergreen", "bg-rosewood", "bg-brick", "bg-pine"];

function Comment({ review, index }: { review: Review; index: number }) {
  const anonymous = review.name.startsWith("Khách");
  const initial = anonymous ? "P" : review.name[0];
  const color = avatarColors[index % avatarColors.length];

  return (
    <li className="flex gap-3 py-4">
      <span
        aria-hidden="true"
        className={`grid size-12 shrink-0 place-items-center rounded-sm font-serif text-[20px] font-semibold text-white ${color}`}
      >
        {initial}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[15px] font-bold text-[#4b4f56]">{review.name}</p>
        <div className="mt-1 space-y-1.5 text-[14.5px] leading-relaxed text-[#1c1e21]">
          {review.quotes.map((quote) => (
            <p key={quote}>{quote}</p>
          ))}
        </div>

        {review.photos && (
          <ul className="mt-2.5 flex flex-wrap gap-2">
            {review.photos.slice(0, 2).map((photo) => (
              <li key={photo.src} className="w-[calc(50%-0.25rem)] max-w-[150px]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={300}
                  height={300}
                  sizes="150px"
                  className="aspect-[3/4] w-full object-cover"
                />
              </li>
            ))}
          </ul>
        )}

        <p className="mt-2 text-[13px] text-[#385898]">{review.meta}</p>
      </div>
    </li>
  );
}
