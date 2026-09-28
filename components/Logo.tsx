// Tạm thời vẽ lại từ ảnh bìa bảng giá. Thay bằng file logo gốc trước khi chạy ads.
export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-mark.svg" alt="" width={28} height={28} className="size-7" />
      <span className={`font-serif text-[16px] font-semibold tracking-[0.2em] ${light ? "text-ivory" : "text-ink"}`}>
        PANCHARM
      </span>
    </span>
  );
}
