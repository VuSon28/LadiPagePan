/** Tiêu đề khu vực: canh giữa, serif. Màu lấy theo dải (`band-*`) đang bao ngoài. */
export function SectionHeading({
  title,
  body,
  id,
  className = "",
}: {
  title: string;
  body?: string;
  id?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 id={id} className="h2 whitespace-pre-line">
        {title}
      </h2>
      {body && <p className="lead">{body}</p>}
    </div>
  );
}
