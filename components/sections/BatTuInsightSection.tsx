import { insight } from "@/data/content";
import { Icon } from "../Icon";
import { SectionHeading } from "../SectionHeading";

export function BatTuInsightSection() {
  return (
    <section aria-labelledby="insight-title" className="band-sand section">
      <div className="container-page">
        <SectionHeading id="insight-title" title={insight.title} body={insight.body} />
        <p className="mx-auto mt-4 max-w-[38ch] text-center text-[13.5px] leading-relaxed text-muted">
          {insight.detail}
        </p>

        <figure
          className="mt-7 rounded-[26px] border border-[var(--line-soft)] bg-[var(--fill-soft)] px-4 py-6"
          aria-label="Giờ, ngày, tháng, năm sinh tạo thành Bát Tự để xác định ngũ hành vượng hoặc khuyết trong năm hành Mộc, Hỏa, Thổ, Kim, Thủy; kết hợp với mục tiêu mong muốn để tìm ra tỷ lệ đá cần bổ sung"
        >
          <ul className="grid grid-cols-4 gap-2">
            {insight.inputs.map((item) => (
              <li key={item.label} className="flex flex-col items-center text-center">
                <span className="icon-ring size-11 text-clay">
                  <Icon name={item.icon} className="size-5" strokeWidth={1.3} />
                </span>
                <span className="mt-2 text-[11.5px] leading-tight font-medium">{item.label}</span>
                <span className="text-[11px] leading-tight text-muted">{item.sub}</span>
              </li>
            ))}
          </ul>

          {/* Bốn trụ gom về một mối rồi đổ xuống ô Bát Tự. */}
          <svg
            aria-hidden="true"
            viewBox="0 0 100 22"
            preserveAspectRatio="none"
            className="h-6 w-full text-clay opacity-45"
          >
            <path
              d="M12.5 0v7a3 3 0 0 0 3 3h69a3 3 0 0 0 3-3V0M37.5 0v10M62.5 0v10M50 10v12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <p className="mx-auto w-fit rounded-full bg-clay px-8 py-2 font-serif text-[17px] font-semibold text-cream">
            {insight.core}
          </p>
          <Connector />
          <p className="mx-auto w-fit rounded-full border border-[var(--line-soft)] px-6 py-2 font-serif text-[15px] font-semibold text-clay">
            {insight.result}
          </p>
          <Connector />

          <ul className="flex items-start justify-between gap-1">
            {insight.elements.map((el) => (
              <li key={el.label} className="flex flex-col items-center">
                <span className="icon-ring size-12 text-clay">
                  <Icon name={el.icon} className="size-[22px]" strokeWidth={1.3} />
                </span>
                <span className="mt-2 text-[12.5px] font-medium">{el.label}</span>
              </li>
            ))}
          </ul>

          <Connector className="mt-4" />
          <p className="mx-auto w-fit rounded-full border border-[var(--line-soft)] px-6 py-2 font-serif text-[15px] font-semibold text-clay">
            {insight.goal}
          </p>
          <Connector />
          <p className="mx-auto w-fit max-w-full rounded-2xl bg-clay px-5 py-3 text-center font-serif text-[16px] leading-snug font-semibold text-cream">
            {insight.outcome}
          </p>
        </figure>
      </div>
    </section>
  );
}

function Connector({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 2 18" className={`mx-auto h-[18px] w-0.5 text-clay opacity-45 ${className}`}>
      <path d="M1 0v18" stroke="currentColor" strokeWidth="1.1" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
