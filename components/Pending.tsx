/** Khung nhắc nội dung còn thiếu. Phải hết trước khi publish. */
export function Pending({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`rounded-2xl border border-dashed border-cream/60 bg-cream/10 px-4 py-3 text-sm text-cream/90 ${className}`}
    >
      <span className="font-semibold text-cream">[CẦN BỔ SUNG]</span> {children}
    </p>
  );
}
