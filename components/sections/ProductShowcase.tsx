import Image from "next/image";
import { products, type Product } from "@/data/content";
import { Icon } from "../Icon";
import { MessengerLink } from "../MessengerCTA";
import { SectionHeading } from "../SectionHeading";

/** Mỗi phân khúc giá là một lưới 2×2; phân khúc thiếu mẫu được bù bằng ô "thiết kế riêng". */
export function ProductShowcase() {
  return (
    <section id="mau-vong" aria-labelledby="products-title" className="band-evergreen section">
      <div className="container-page">
        <SectionHeading id="products-title" title={products.title} body={products.body} />

        <div className="mt-7 space-y-7">
          {products.segments.map((segment) => (
            <div key={segment.label}>
              <h3 className="flex items-center gap-2 font-serif text-[18px] font-semibold">
                <span aria-hidden="true" className="h-5 w-1 rounded-full bg-blush" />
                {segment.label}
              </h3>
              <ul className="mt-3 grid grid-cols-2 gap-3">
                {segment.items.map((item) => (
                  <ProductCard key={item.name} item={item} />
                ))}
                {segment.items.length % 2 === 1 && <CustomTile />}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-[12.5px] leading-snug text-[var(--text-soft)]">{products.note}</p>
      </div>
    </section>
  );
}

function ProductCard({ item }: { item: Product }) {
  return (
    <li className="card soft-shadow flex flex-col overflow-hidden">
      <Image
        src={item.image}
        alt={item.alt}
        width={640}
        height={640}
        sizes="(min-width: 480px) 220px, 45vw"
        className="aspect-square w-full object-cover"
      />
      <div className="flex flex-1 flex-col px-3 pt-2.5 pb-3">
        {/* Không hiển thị giá: khách nhắn Pancharm để được báo giá. */}
        <p className="font-serif text-[14.5px] leading-snug font-semibold text-ink">{item.name}</p>
      </div>
    </li>
  );
}

function CustomTile() {
  return (
    <li>
      <MessengerLink
        source="benefit"
        className="flex h-full flex-col items-center justify-center gap-3 rounded-[22px] border border-dashed border-[var(--line-soft)] bg-[var(--fill-soft)] p-4 text-center transition-colors hover:bg-blush/15"
      >
        <span className="icon-ring size-12">
          <Icon name="chat" filled className="size-5" />
        </span>
        <span className="font-serif text-[15px] leading-snug font-semibold">{products.customTile.title}</span>
        <span className="text-[12.5px] leading-snug text-[var(--text-soft)]">{products.customTile.body}</span>
      </MessengerLink>
    </li>
  );
}
