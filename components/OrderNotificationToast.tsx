"use client";

import { useEffect, useState } from "react";

const NAMES = [
  "Lê Anh Tuấn",
  "Nguyễn Thu Hà",
  "Trần Minh Phương",
  "Phạm Hoàng Nam",
  "Hoàng Thanh Vân",
  "Đỗ Minh Quân",
  "Vũ Thị Lan",
  "Bùi Anh Tú",
  "Đặng Thu Trang",
  "Ngô Hải Yến",
  "Dương Văn Hùng",
  "Phan Thị Hoa",
  "Lý Thành Đạt",
  "Hồ Ngọc Diệp",
  "Trịnh Bá Khoa",
  "Mai Thu Hương",
  "Lưu Quang Minh",
  "Tạ Thị Nhàn",
  "Nguyễn Hữu Phúc",
  "Trần Khánh Linh",
];

/**
 * Toast "ai đó vừa đặt hàng" ở góc trên-trái. Tên random, "X phút trước" random.
 * Cycle: delay 3s đầu → hiện 4s → ẩn 10-15s → hiện tên khác, lặp.
 */
export function OrderNotificationToast() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState(NAMES[0]);
  const [minutes, setMinutes] = useState(3);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let lastIdx = -1;

    function next() {
      let idx = Math.floor(Math.random() * NAMES.length);
      if (idx === lastIdx) idx = (idx + 1) % NAMES.length;
      lastIdx = idx;
      setName(NAMES[idx]);
      setMinutes(1 + Math.floor(Math.random() * 9));
      setVisible(true);
      timeout = setTimeout(() => {
        setVisible(false);
        timeout = setTimeout(next, 10_000 + Math.random() * 5_000);
      }, 4_000);
    }

    timeout = setTimeout(next, 3_000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed left-3 top-3 z-50 w-[260px] rounded-full border border-line bg-white px-3 py-2 shadow-lg transition-all duration-300 ${
        visible ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-4 opacity-0"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <span
          aria-hidden="true"
          className="grid size-8 shrink-0 place-items-center rounded-full bg-sky-500 text-white"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="size-4">
            <path
              fillRule="evenodd"
              d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4L9 11.6l6.3-6.3a1 1 0 011.4 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <div className="min-w-0 leading-tight">
          <p className="truncate text-[13px] font-bold text-ink">{name}</p>
          <p className="text-[12px] text-[#606770]">Đã đặt hàng thành công</p>
          <p className="text-[11px] text-[#90949c]">{minutes} phút trước</p>
        </div>
      </div>
    </div>
  );
}
