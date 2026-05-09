"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** Numeric target. Pass a string to skip animation (e.g. "2024"). */
  value: number | string;
  /** Total animation time in ms. */
  duration?: number;
  /** Optional suffix (e.g. "+", "%"). */
  suffix?: string;
};

export function AnimatedCounter({
  value,
  duration = 1400,
  suffix = "",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);
  const [display, setDisplay] = useState<string>(
    typeof value === "number" ? "0" : String(value),
  );

  useEffect(() => {
    if (typeof value !== "number") return;
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(String(value));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e?.isIntersecting || animated.current) return;
        animated.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          // ease-out cubic
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(String(Math.round(eased * value)));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
