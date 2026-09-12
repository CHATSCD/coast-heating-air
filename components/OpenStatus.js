"use client";

import { useEffect, useState } from "react";

const NEUTRAL_LABEL = "Mon–Sat 7 AM – 7 PM · emergency on-call 24/7";

/**
 * Small hours badge in the hero. Server-renders a neutral label (no hydration
 * mismatch, no layout shift) then upgrades to a live Open now / After hours
 * state using the service area's timezone and the posted Mon-Sat 7-7 hours.
 */
export default function OpenStatus() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    try {
      const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Chicago",
        weekday: "short",
        hour: "numeric",
        hour12: false,
      }).formatToParts(new Date());

      const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
      const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
      const isOpenDay = weekday !== "Sun";
      const isOpen = isOpenDay && hour >= 7 && hour < 19;

      setStatus(
        isOpen
          ? { open: true, label: "Open now — until 7 PM today" }
          : {
              open: false,
              label: "After hours — our on-call line answers 24/7",
            }
      );
    } catch {
      setStatus(null);
    }
  }, []);

  const label = status ? status.label : NEUTRAL_LABEL;

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white ring-1 ring-inset ring-white/15 sm:text-xs"
      title="Monday–Saturday, 7:00 AM – 7:00 PM. Emergency on-call after hours."
    >
      <span
        aria-hidden="true"
        className={
          "h-2 w-2 rounded-full " +
          (status ? (status.open ? "bg-emerald-400" : "bg-amber-300") : "bg-ocean-300")
        }
      />
      {label}
    </span>
  );
}
