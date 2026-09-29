/** Khung nhắc nội dung còn thiếu. Phải hết trước khi publish. */
export function Pending({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`rounded-2xl border border-dashed border-[var(--line-soft)] bg-[var(--fill-soft)] px-4 py-3 text-sm ${className}`}
    >
      <span className="font-semibold">[CẦN BỔ SUNG]</span> {children}
    </p>
  );
}
