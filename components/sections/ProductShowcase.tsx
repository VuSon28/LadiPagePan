import Image from "next/image";
import { products } from "@/data/content";

const vnd = new Intl.NumberFormat("vi-VN");

export function ProductShowcase() {
  return (
    <section id="mau-vong" aria-labelledby="products-title" className="section bg-white">
      <div className="container-page">
        <h2 id="products-title" className="h2">
          {products.title}
        </h2>
        <p className="lead mt-3">{products.body}</p>

        <div className="mt-6 space-y-7">
          {products.segments.map((segment) => (
            <div key={segment.label}>
              <h3 className="flex items-center gap-2 text-[15px] font-semibold text-ink">
                <span aria-hidden="true" className="h-4 w-1 rounded-full bg-terracotta" />
                {segment.label}
                <span className="text-[13px] font-normal text-muted">· {segment.items.length} mẫu</span>
              </h3>
              <ul className="snap-row mt-3" aria-label={`Mẫu vòng ${segment.label}, vuốt ngang để xem thêm`}>
                {segment.items.map((item) => (
                  <li key={item.name} className="w-[44%] shrink-0 snap-start">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={640}
                      height={640}
                      sizes="(min-width: 480px) 200px, 44vw"
                      className="aspect-square w-full rounded-xl bg-ivory object-cover"
                    />
                    <p className="mt-2 text-[13.5px] leading-snug font-semibold text-ink">{item.name}</p>
                    <p className="mt-0.5 text-[12px] text-muted">{item.collection}</p>
                    <p className="mt-1 text-[15px] font-semibold text-terracotta">{vnd.format(item.price)}đ</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
