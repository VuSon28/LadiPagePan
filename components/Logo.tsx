// Tạm thời vẽ lại từ ảnh bìa bảng giá. Thay bằng file logo gốc trước khi chạy ads.
const sizes = {
  md: { mark: 30, text: "text-[15px]", gap: "gap-2.5" },
  /** Header: logo đặt giữa nên cần to hơn để làm điểm nhấn. */
  lg: { mark: 40, text: "text-[20px]", gap: "gap-3" },
};

export function Logo({
  className = "",
  tone = "cream",
  size = "md",
}: {
  className?: string;
  tone?: "cream" | "ink";
  size?: keyof typeof sizes;
}) {
  const cream = tone === "cream";
  const s = sizes[size];
  return (
    <span className={`inline-flex items-center ${s.gap} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={cream ? "/logo-mark-cream.svg" : "/logo-mark.svg"}
        alt=""
        width={s.mark}
        height={s.mark}
        style={{ width: s.mark, height: s.mark }}
      />
      <span className={`font-serif ${s.text} font-semibold tracking-[0.22em] ${cream ? "text-cream" : "text-ink"}`}>
        PANCHARM
      </span>
    </span>
  );
}
