import { expert } from "@/data/content";
import { Pending } from "../Pending";
import { SectionHeading } from "../SectionHeading";

export function ExpertSection() {
  return (
    <section aria-labelledby="expert-title" className="section">
      <div className="container-page">
        <SectionHeading id="expert-title" eyebrow={expert.eyebrow} title={expert.title} />
        <div className="card mt-8 grid gap-5 p-5">
          <div
            aria-hidden="true"
            className="grid aspect-square w-32 place-items-center rounded-full border border-dashed border-gold bg-beige text-sm text-muted"
          >
            Ảnh chuyên gia
          </div>
          <Pending>{expert.pending}</Pending>
        </div>
      </div>
    </section>
  );
}
