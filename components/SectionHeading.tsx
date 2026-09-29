/** Tiêu đề khu vực theo mockup: canh giữa, serif, kèm câu dẫn ngắn. */
export function SectionHeading({
  title,
  body,
  id,
  tone = "cream",
  className = "",
}: {
  title: string;
  body?: string;
  id?: string;
  tone?: "cream" | "ink";
  className?: string;
}) {
  const ink = tone === "ink";
  return (
    <div className={className}>
      <h2 id={id} className={`h2 whitespace-pre-line ${ink ? "text-ink" : "text-cream"}`}>
        {title}
      </h2>
      {body && <p className={`lead ${ink ? "text-muted" : ""}`}>{body}</p>}
    </div>
  );
}
