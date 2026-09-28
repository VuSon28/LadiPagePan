import { testimonials } from "@/data/content";

export function TestimonialsSection() {
  return (
    <section aria-labelledby="reviews-title" className="section bg-white">
      <div className="container-page">
        <h2 id="reviews-title" className="h2">
          {testimonials.title}
        </h2>
        <ul className="snap-row mt-6" aria-label="Lời nhắn của khách hàng, vuốt ngang để xem thêm">
          {testimonials.items.map((item, i) => (
            <li
              key={i}
              className="flex w-[78%] shrink-0 snap-start flex-col gap-2 rounded-2xl border border-line bg-ivory p-3.5"
            >
              {item.quotes.map((quote) => (
                <p
                  key={quote}
                  className="w-fit max-w-full rounded-2xl rounded-tl-md bg-white px-3 py-2 text-[14px] leading-snug shadow-[0_1px_0_var(--color-line)]"
                >
                  {quote}
                </p>
              ))}
              <p className="mt-auto pt-1 text-[12px] text-muted">Khách hàng Pancharm · Messenger</p>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[13px] text-muted">{testimonials.note}</p>
      </div>
    </section>
  );
}
