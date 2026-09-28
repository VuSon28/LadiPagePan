const paths: Record<string, React.ReactNode> = {
  gift: (
    <>
      <rect x="3.5" y="8.5" width="17" height="4" rx="1" />
      <path d="M5 12.5V20h14v-7.5M12 8.5V20" />
      <path d="M12 8.5S10.5 4 8.2 4.6C6.4 5.1 7 8.5 12 8.5ZM12 8.5s1.5-4.5 3.8-3.9c1.8.5 1.2 3.9-3.8 3.9Z" />
    </>
  ),
  gem: (
    <>
      <path d="M6.5 4h11l3.5 5-9 11L3 9z" />
      <path d="M3 9h18M9.5 4 8 9l4 11 4-11-1.5-5" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14" />
      <path d="M5 19c3-4 6-7 9.5-9.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5.5c0 4.3 2.9 8 7 9.5 4.1-1.5 7-5.2 7-9.5V6z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  note: (
    <>
      <path d="M14 3.5H6.5a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8z" />
      <path d="M14 3.5V8h4.5M8.5 12h7M8.5 15h5" />
    </>
  ),
  yinyang: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5a4.25 4.25 0 0 1 0 8.5 4.25 4.25 0 0 0 0 8.5" />
      <circle cx="12" cy="7.75" r="1" />
      <circle cx="12" cy="16.25" r="1" />
    </>
  ),
  crystal: (
    <>
      <path d="m12 3 3.5 5-3.5 13-3.5-13z" />
      <path d="M8.5 8 5 10l3 9 4 2M15.5 8 19 10l-3 9-4 2" />
    </>
  ),
  bracelet: (
    <>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="5" r="1.7" />
      <circle cx="17" cy="7" r="1.5" />
      <circle cx="19" cy="12" r="1.7" />
      <circle cx="17" cy="17" r="1.5" />
      <circle cx="12" cy="19" r="1.7" />
      <circle cx="7" cy="17" r="1.5" />
      <circle cx="5" cy="12" r="1.7" />
      <circle cx="7" cy="7" r="1.5" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3.5" y="7.5" width="17" height="12" rx="2" />
      <path d="M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5M3.5 12.5h17M11 12.5v2h2v-2" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="12" cy="6.5" rx="6" ry="2.5" />
      <path d="M6 6.5v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4" />
      <path d="M6 10.5v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4M6 14.5v3c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-3" />
    </>
  ),
  heart: <path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.3 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10Z" />,
  lotus: (
    <>
      <path d="M12 18c-2.5-2-3.5-4.5-3.5-7S10 6 12 4.5C14 6 15.5 8.5 15.5 11s-1 5-3.5 7Z" />
      <path d="M12 18c-3.5.3-6.5-1.2-8-4.5 2.2-.8 4.2-.6 5.5.3M12 18c3.5.3 6.5-1.2 8-4.5-2.2-.8-4.2-.6-5.5.3M4 20.5h16" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 20v-8" />
      <path d="M12 12c0-4 2.5-6.5 7-6.5 0 4.5-2.5 6.5-7 6.5ZM12 14c0-3-2-5-5.5-5 0 3.5 2 5 5.5 5Z" />
      <path d="M8 20h8" />
    </>
  ),
  scroll: (
    <>
      <path d="M7 4h11a2 2 0 0 1 2 2v1H9" />
      <path d="M9 7v11a2 2 0 1 1-4 0V6a2 2 0 0 1 2-2" />
      <path d="M9 18h9a2 2 0 0 0 2-2V9M12 11h5M12 14h4" />
    </>
  ),
  drop: (
    <>
      <path d="M12 3.5s6 6.3 6 10.5a6 6 0 0 1-12 0c0-4.2 6-10.5 6-10.5Z" />
      <path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5" />
    </>
  ),
  box: (
    <>
      <path d="m12 3 8 4v10l-8 4-8-4V7z" />
      <path d="m4 7 8 4 8-4M12 11v10M8 5l8 4" />
    </>
  ),
  infinity: (
    <path d="M12 12c-2-2.7-3.6-4-5.5-4a4 4 0 0 0 0 8c1.9 0 3.5-1.3 5.5-4Zm0 0c2 2.7 3.6 4 5.5 4a4 4 0 0 0 0-8c-1.9 0-3.5 1.3-5.5 4Z" />
  ),
  truck: (
    <>
      <path d="M3 6.5h11v9.5H3zM14 9.5h3.5L21 13v3h-7" />
      <circle cx="7" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </>
  ),
  refund: (
    <>
      <path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3L4.5 9" />
      <path d="M4.5 4.5V9H9M12 8v8M14.2 9.6c-.4-.7-1.2-1.1-2.2-1.1-1.3 0-2.2.7-2.2 1.7 0 2.4 4.6 1.2 4.6 3.6 0 1-1 1.7-2.4 1.7-1.1 0-2-.5-2.4-1.3" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  chat: (
    <path d="M12 3.5c-4.9 0-8.5 3.5-8.5 7.9 0 2.4 1.1 4.5 2.9 6v3.1l2.9-1.6c.9.3 1.8.4 2.7.4 4.9 0 8.5-3.5 8.5-7.9S16.9 3.5 12 3.5Zm-4 9.9 2.8-3 1.9 1.6 2.7-1.6-2.8 3-1.9-1.6z" />
  ),
  chevron: <path d="m9.5 6 6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  plus: <path d="M12 5v14M5 12h14" />,
  zoom: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5M11 8.5v5M8.5 11h5" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
};

export function Icon({
  name,
  className = "size-6",
  filled = false,
  strokeWidth = 1.5,
}: {
  name: string;
  className?: string;
  filled?: boolean;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
