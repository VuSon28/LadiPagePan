"use client";

import Image from "next/image";
import { testimonials, type Review } from "@/data/content";
import { SectionHeading } from "../SectionHeading";
import { ScrollReveal } from "../ScrollReveal";


export function TestimonialsSection() {
  return (
    <section id="danh-gia" aria-labelledby="reviews-title" className="band-sand section">
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading id="reviews-title" title={testimonials.title} body={testimonials.subtitle} />
        </ScrollReveal>

        <ScrollReveal delay={150}>
        <div className="fb-comments mt-7 rounded-2xl border border-[var(--fb-border)] bg-white px-4 pt-4 pb-2 text-ink shadow-sm">
          <h3 className="text-[22px] font-bold tracking-tight text-[var(--fb-text)]">Tất cả bình luận</h3>
          <div className="mt-3 flex items-center justify-between gap-3 border-b border-[var(--fb-border)] pb-3">
            <p className="text-[14px] font-bold text-[var(--fb-text)]">{testimonials.items.length * 14} Bình luận</p>
            <p className="flex items-center gap-2 text-[12.5px] text-[var(--fb-secondary)]">
              Sắp xếp theo
              <span className="rounded-md border border-[#ccd0d5] bg-[var(--fb-bg)] px-3 py-1.5 text-[13px] font-bold text-[var(--fb-text)]">
                Hàng đầu
              </span>
            </p>
          </div>

          <ul
            tabIndex={0}
            aria-label="Danh sách bình luận, cuộn để xem thêm"
            className="max-h-[min(150vh,1100px)] overflow-y-auto overscroll-contain"
          >
            {testimonials.items.map((review, i) => (
              <Comment key={i} review={review} index={i} total={testimonials.items.length} />
            ))}
          </ul>

          <p
            aria-live="polite"
            className="flex items-center gap-3 border-t border-[var(--fb-border)] py-3 text-[13px] text-[var(--fb-secondary)]"
          >
            <span aria-hidden="true" className="flex items-end gap-1">
              <span className="animate-typing-bounce size-1.5 rounded-full bg-[var(--fb-muted)]" />
              <span className="animate-typing-bounce size-1.5 rounded-full bg-[var(--fb-muted)] [animation-delay:150ms]" />
              <span className="animate-typing-bounce size-1.5 rounded-full bg-[var(--fb-muted)] [animation-delay:300ms]" />
            </span>
            Ai đó đang nhập bình luận…
          </p>
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

const avatarColors = ["bg-clay", "bg-evergreen", "bg-rosewood", "bg-brick", "bg-pine"];

const shopReplies = [
  "Pancharm cảm ơn em đã tin tưởng và dành thời gian chia sẻ cảm nhận",
  "Pancharm cảm ơn em nhiều lắm, chúc em luôn bình an và nhiều năng lượng tích cực",
  "Cảm ơn em, Pancharm luôn ở đây nếu em cần hỗ trợ thêm",
  "Pancharm biết ơn em đã đồng hành cùng shop, chúc em thật nhiều may mắn",
  "Pancharm cảm ơn em đã ủng hộ, chúc em thật nhiều điều tốt lành",
  "Cảm ơn em đã phản hồi, Pancharm rất vui khi em hài lòng",
];

function timeAgo(i: number, total: number): string {
  if (total <= 1) return "vài phút trước";
  const t = i / (total - 1);
  if (t < 0.15) {
    const minutes = Math.max(1, Math.round(3 + (t / 0.15) * 52));
    return `${minutes} phút trước`;
  }
  if (t < 0.5) {
    const hours = Math.max(1, Math.round(1 + ((t - 0.15) / 0.35) * 22));
    return `${hours} giờ trước`;
  }
  const dayRatio = (t - 0.5) / 0.5;
  const days = Math.max(1, Math.round(Math.pow(240, dayRatio)));
  return `${days} ngày trước`;
}

function Comment({ review, index, total }: { review: Review; index: number; total: number }) {
  const anonymous = review.name.startsWith("Khách");
  const initial = anonymous ? "P" : review.name[0];
  const color = avatarColors[index % avatarColors.length];
  const reply = shopReplies[index % shopReplies.length];
  const when = timeAgo(index, total);

  return (
    <li className="flex gap-3 py-4">
      <span
        aria-hidden="true"
        className={`grid size-12 shrink-0 place-items-center rounded-sm font-serif text-[20px] font-semibold text-white ${color}`}
      >
        {initial}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[15px] font-bold text-[var(--fb-text)]">{review.name}</p>
        <div className="mt-1 space-y-1.5 text-[14.5px] leading-relaxed text-[var(--fb-content)]">
          {review.quotes.map((quote) => (
            <p key={quote}>{quote}</p>
          ))}
        </div>

        {review.photos && (
          <ul className="mt-2.5 flex flex-wrap gap-2">
            {review.photos.slice(0, 2).map((photo) => (
              <li key={photo.src} className="w-[calc(33%-0.25rem)] max-w-[110px]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={800}
                  sizes="110px"
                  quality={90}
                  className="aspect-[3/4] w-full object-cover"
                />
              </li>
            ))}
          </ul>
        )}

        <p className="mt-2 text-[13px] text-[var(--fb-link)]">{when}</p>

        <ShopReply reply={reply} when={when} />
      </div>
    </li>
  );
}

function ShopReply({ reply, when }: { reply: string; when: string }) {
  return (
    <div className="mt-3 flex gap-2.5">
      <span
        aria-hidden="true"
        className="grid size-9 shrink-0 place-items-center rounded-sm bg-clay"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-pancharm-icon.png" alt="" width={30} height={30} style={{ width: 30, height: 30 }} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[14px] font-bold text-[var(--fb-text)]">Pancharm</p>
        <p className="mt-0.5 text-[14px] leading-relaxed text-[var(--fb-content)]">{reply}</p>
        <p className="mt-1.5 text-[12.5px] font-semibold text-[var(--fb-secondary)]">Phản hồi · {when}</p>
      </div>
    </div>
  );
}
