import { insight } from "@/data/content";
import { Icon } from "../Icon";
import { SectionHeading } from "../SectionHeading";

export function BatTuInsightSection() {
  return (
    <section aria-labelledby="insight-title" className="section">
      <div className="container-page">
        <SectionHeading id="insight-title" title={insight.title} body={insight.body} />

        <figure
          className="mt-7 rounded-[26px] border border-cream/25 bg-cream/12 px-4 py-6"
          aria-label="Giờ, ngày, tháng, năm sinh tạo thành Bát Tự, từ đó xác định ngũ hành vượng hoặc khuyết trong năm hành Mộc, Hỏa, Thổ, Kim, Thủy"
        >
          <ul className="grid grid-cols-4 gap-2">
            {insight.inputs.map((item) => (
              <li key={item.label} className="flex flex-col items-center text-center">
                <span className="icon-ring size-11 bg-cream/10">
                  <Icon name={item.icon} className="size-5 text-cream" strokeWidth={1.3} />
                </span>
                <span className="mt-2 text-[11.5px] leading-tight font-medium text-cream">{item.label}</span>
                <span className="text-[11px] leading-tight text-cream/70">{item.sub}</span>
              </li>
            ))}
          </ul>

          {/* Bốn trụ gom về một mối rồi đổ xuống ô Bát Tự. */}
          <svg aria-hidden="true" viewBox="0 0 100 22" preserveAspectRatio="none" className="h-6 w-full text-cream/45">
            <path
              d="M12.5 0v7a3 3 0 0 0 3 3h69a3 3 0 0 0 3-3V0M37.5 0v10M62.5 0v10M50 10v12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <p className="mx-auto w-fit rounded-full bg-cream px-8 py-2 font-serif text-[17px] font-semibold text-clay">
            {insight.core}
          </p>
          <Connector />
          <p className="mx-auto w-fit rounded-full border border-cream/45 bg-cream/10 px-6 py-2 font-serif text-[15px] font-semibold text-cream">
            {insight.result}
          </p>
          <Connector />

          <ul className="flex items-start justify-between gap-1">
            {insight.elements.map((el) => (
              <li key={el.label} className="flex flex-col items-center">
                <span className="icon-ring size-12 bg-cream/10">
                  <Icon name={el.icon} className="size-[22px] text-cream" strokeWidth={1.3} />
                </span>
                <span className="mt-2 text-[12.5px] font-medium text-cream">{el.label}</span>
              </li>
            ))}
          </ul>

          <figcaption className="mt-5 text-center text-[13px] leading-snug text-cream/80">{insight.outcome}</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Connector() {
  return (
    <svg aria-hidden="true" viewBox="0 0 2 18" className="mx-auto h-[18px] w-0.5 text-cream/45">
      <path d="M1 0v18" stroke="currentColor" strokeWidth="1.1" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
