/** Khung nhắc nội dung còn thiếu. Phải hết trước khi publish. */
export function Pending({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`rounded-xl border border-dashed border-gold bg-beige/60 px-4 py-3 text-sm text-ink ${className}`}
    >
      <span className="font-semibold text-forest">[CẦN BỔ SUNG]</span> {children}
    </p>
  );
}
