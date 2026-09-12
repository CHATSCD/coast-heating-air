import { PHONE_DISPLAY, TEL_HREF } from "@/lib/business";
import { ArrowRightIcon, PhoneIcon } from "@/components/icons";

/**
 * Fixed to the bottom of the viewport at ALL times and all breakpoints.
 * Rendered from the root layout so it survives every scroll position.
 */
export default function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ocean-950/95 backdrop-blur">
      <div className="safe-pb mx-auto max-w-3xl px-3 pt-2 pb-1.5 sm:flex sm:items-center sm:gap-3 sm:px-6 sm:pb-2.5">
        <a
          href={TEL_HREF}
          data-cta="sticky-call"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-ocean-500 text-[15px] font-extrabold tracking-tight text-white shadow-cta transition-colors active:bg-ocean-600 xs:text-base"
        >
          <PhoneIcon className="h-[18px] w-[18px]" />
          <span>Call Now: {PHONE_DISPLAY}</span>
        </a>

        <a
          href="#request"
          className="mt-1 flex items-center justify-center gap-1 text-center text-[11px] font-semibold text-ocean-200 underline decoration-ocean-500 underline-offset-2 sm:mt-0 sm:shrink-0 sm:text-xs"
        >
          or request service online <ArrowRightIcon className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
