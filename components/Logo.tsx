// Tạm thời vẽ lại từ ảnh bìa bảng giá. Thay bằng file logo gốc trước khi chạy ads.
export function Logo({ className = "", tone = "cream" }: { className?: string; tone?: "cream" | "ink" }) {
  const cream = tone === "cream";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={cream ? "/logo-mark-cream.svg" : "/logo-mark.svg"}
        alt=""
        width={30}
        height={30}
        className="size-[30px]"
      />
      <span
        className={`font-serif text-[15px] font-semibold tracking-[0.22em] ${cream ? "text-cream" : "text-ink"}`}
      >
        PANCHARM
      </span>
    </span>
  );
}
