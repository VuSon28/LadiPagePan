import { expert } from "@/data/content";
import { Pending } from "../Pending";
import { SectionHeading } from "../SectionHeading";

// Tạm ẩn khỏi trang cho tới khi có ảnh + thông tin chuyên gia đã xác minh (xem app/page.tsx).
export function ExpertSection() {
  return (
    <section aria-labelledby="expert-title" className="section">
      <div className="container-page">
        <SectionHeading id="expert-title" title={expert.title} body={expert.eyebrow} />
        <div className="mt-7 grid justify-items-center gap-5">
          <div
            aria-hidden="true"
            className="grid aspect-square w-32 place-items-center rounded-full border border-dashed border-cream/60 bg-cream/10 text-center text-sm text-cream/80"
          >
            Ảnh chuyên gia
          </div>
          <Pending>{expert.pending}</Pending>
        </div>
      </div>
    </section>
  );
}
