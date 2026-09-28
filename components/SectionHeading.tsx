export function SectionHeading({
  eyebrow,
  title,
  body,
  id,
  center = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  id?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="text-[12px] font-semibold tracking-[0.12em] text-gold-deep uppercase">{eyebrow}</p>
      <span className={`mt-3 block h-px w-10 bg-gold ${center ? "mx-auto" : ""}`} />
      <h2 id={id} className="h2 mt-4">
        {title}
      </h2>
      {body && <p className="lead mt-4">{body}</p>}
    </div>
  );
}
