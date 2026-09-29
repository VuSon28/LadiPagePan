import { privileges } from "@/data/content";
import { Icon } from "../Icon";
import { Pending } from "../Pending";

export function PrivilegesSection() {
  return (
    <section id="dac-quyen" aria-labelledby="privileges-title" className="band-clay section">
      <div className="container-page">
        <h2 id="privileges-title" className="h2">
          {privileges.title}
        </h2>
        <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
          {privileges.items.map((item) => (
            <li
              key={item.label}
              className="flex w-[calc((100%-1.25rem)/3)] flex-col items-center rounded-2xl border border-[var(--line-soft)] bg-[var(--fill-soft)] px-2 py-4 text-center"
            >
              <Icon name={item.icon} className="size-7" strokeWidth={1.3} />
              <span className="mt-2.5 text-[12px] leading-snug font-medium text-[var(--text-soft)]">{item.label}</span>
            </li>
          ))}
        </ul>
        {privileges.pending && <Pending className="mt-5">{privileges.pending}</Pending>}
      </div>
    </section>
  );
}
