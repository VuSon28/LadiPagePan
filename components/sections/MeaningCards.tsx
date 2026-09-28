import { meaning } from "@/data/content";
import { Icon } from "../Icon";

export function MeaningCards() {
  return (
    <section aria-labelledby="meaning-title" className="section">
      <div className="container-page">
        <h2 id="meaning-title" className="h2">
          {meaning.title}
        </h2>
        <p className="lead mt-3">{meaning.body}</p>
        <ul className="snap-row mt-6" aria-label="Các nhóm ý nghĩa, vuốt ngang để xem thêm">
          {meaning.items.map((item) => (
            <li
              key={item.title}
              className="card soft-shadow flex w-[40%] shrink-0 snap-start flex-col items-center px-3 py-4 text-center"
            >
              <span className="grid size-12 place-items-center rounded-full bg-beige text-gold-deep">
                <Icon name={item.icon} className="size-6" />
              </span>
              <h3 className="mt-3 text-[14px] leading-snug font-semibold text-ink">{item.title}</h3>
              <p className="mt-1.5 text-[12.5px] leading-snug text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 flex gap-2 text-[13px] leading-snug text-muted italic">
          <Icon name="leaf" className="mt-0.5 size-4 shrink-0 text-gold-deep" />
          {meaning.disclaimer}
        </p>
      </div>
    </section>
  );
}
