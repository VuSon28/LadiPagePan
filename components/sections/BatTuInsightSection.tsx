import { insight } from "@/data/content";

export function BatTuInsightSection() {
  return (
    <section aria-labelledby="insight-title" className="section pt-12">
      <div className="container-page">
        <h2 id="insight-title" className="h2">
          {insight.title}
        </h2>
        <p className="lead mt-3">{insight.body}</p>

        <figure
          className="card soft-shadow mt-6 px-4 py-5"
          aria-label="Giờ, ngày, tháng, năm sinh tạo thành Bát Tự, từ đó xác định ngũ hành vượng/khuyết"
        >
          <ul className="grid grid-cols-4 gap-1.5">
            {insight.inputs.map((label) => (
              <li
                key={label}
                className="rounded-full border border-line bg-ivory px-1 py-1.5 text-center text-[12px] leading-tight font-medium"
              >
                {label}
              </li>
            ))}
          </ul>
          <svg aria-hidden="true" viewBox="0 0 100 24" preserveAspectRatio="none" className="h-7 w-full text-gold">
            <path
              d="M12.5 0v8a4 4 0 0 0 4 4h67a4 4 0 0 0 4-4V0M37.5 0v12M62.5 0v12M50 12v12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <p className="mx-auto w-fit rounded-full bg-forest px-7 py-2 font-serif text-[16px] font-semibold text-white">
            {insight.core}
          </p>
          <svg aria-hidden="true" viewBox="0 0 2 20" className="mx-auto h-5 w-0.5 text-gold">
            <path d="M1 0v20" stroke="currentColor" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
          </svg>
          <p className="mx-auto w-fit rounded-full bg-mint px-6 py-2.5 font-serif text-[16px] font-semibold text-forest">
            {insight.result}
          </p>
        </figure>
      </div>
    </section>
  );
}
