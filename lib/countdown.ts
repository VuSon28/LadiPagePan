const DAY = 86_400_000;
const VN_OFFSET = 7 * 3_600_000;

export function msUntilEndOfDayVN(now: number) {
  const vn = now + VN_OFFSET;
  return Math.floor(vn / DAY) * DAY + DAY - vn;
}

export function splitMs(ms: number) {
  const s = Math.floor(ms / 1000);
  return [
    Math.floor(s / 86_400),
    Math.floor(s / 3600) % 24,
    Math.floor(s / 60) % 60,
    s % 60,
  ] as const;
}
