import OpenStatus from "@/components/OpenStatus";
import RequestForm from "@/components/RequestForm";
import {
  AlertIcon,
  ArrowRightIcon,
  BoltIcon,
  CalendarCheckIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ClockIcon,
  DollarIcon,
  DropletIcon,
  GaugeIcon,
  GearIcon,
  LogoMark,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  StarIcon,
} from "@/components/icons";
import {
  PHONE_DISPLAY,
  TEL_HREF,
  business,
  faqs,
  pricing,
  rating,
  serviceArea,
  services,
  testimonials,
  trustBar,
  urgencyBanner,
} from "@/lib/business";

const serviceIcons = {
  bolt: BoltIcon,
  gauge: GaugeIcon,
  gear: GearIcon,
  droplet: DropletIcon,
  calendar: CalendarCheckIcon,
};

const trustIcons = {
  star: StarIcon,
  shield: ShieldCheckIcon,
  clock: ClockIcon,
  bolt: BoltIcon,
};

const pricingIcons = {
  dollar: DollarIcon,
  check: CheckCircleIcon,
  shield: ShieldCheckIcon,
};

const anchorLinks = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#area", label: "Service Area" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

function SectionHeading({ eyebrow, title, sub, align = "center" }) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-ocean-700">
        {eyebrow}
      </p>
      <h2 className="mt-1.5 text-[22px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {sub ? (
        <p className="mt-2 text-[14.5px] leading-relaxed text-slate-600">
          {sub}
        </p>
      ) : null}
    </div>
  );
}

function StarRow({ count = 5, className = "h-4 w-4" }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-400" aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <StarIcon key={index} className={className} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- NAV */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ocean-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-4 py-2.5">
          <a href="#top" className="flex items-center gap-2">
            <LogoMark className="h-8 w-8 shrink-0" />
            <span className="leading-tight">
              <span className="block text-[13px] font-extrabold uppercase tracking-wide text-white xs:text-sm">
                Coast Heating &amp; Air
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-ocean-300">
                Ocean Springs, MS
              </span>
            </span>
          </a>
          <a
            href={TEL_HREF}
            data-cta="nav-call"
            className="flex shrink-0 items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-2 text-[11px] font-bold text-white ring-1 ring-inset ring-white/20 transition-colors active:bg-white/20 xs:text-xs sm:px-3.5 sm:text-sm"
          >
            <PhoneIcon className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      <main id="top">
        {/* ------------------------------------------------------------ HERO */}
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-ocean-800 via-ocean-900 to-ocean-950 text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-ocean-400/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-28 h-56 w-56 rounded-full bg-ocean-300/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl px-4 pb-9 pt-6 text-center sm:pb-14 sm:pt-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ocean-300">
              {business.name}
            </p>

            <h1 className="mt-2.5 text-[26px] font-extrabold leading-[1.15] tracking-tight text-white xs:text-3xl sm:text-4xl lg:text-[42px]">
              AC Out? Emergency AC Repair in Ocean Springs, MS — Same Day.
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-ocean-100 sm:text-base">
              {business.valueProp} Serving the Gulf Coast for{" "}
              {business.yearsInBusiness}.
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <OpenStatus />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white ring-1 ring-inset ring-white/15 sm:text-xs">
                <BoltIcon className="h-3.5 w-3.5 text-amber-300" />
                Avg response {business.responseTime}
              </span>
            </div>

            {/* Primary CTA — visible without scrolling on a 360x640 phone. */}
            <a
              href={TEL_HREF}
              data-cta="hero-call"
              className="mt-5 flex h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-white text-lg font-extrabold tracking-tight text-ocean-900 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.7)] transition-transform active:scale-[0.99] active:bg-ocean-50 sm:mx-auto sm:max-w-md"
            >
              <PhoneIcon className="h-5 w-5" />
              Call Now: {PHONE_DISPLAY}
            </a>
            <p className="mt-2 text-[12px] font-medium text-ocean-200 sm:text-[13px]">
              Tap to call — a real person answers, day or night. No phone tree.
            </p>

            <a
              href="#request"
              data-cta="hero-form-link"
              className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-white underline decoration-ocean-400 decoration-2 underline-offset-4 sm:text-sm"
            >
              Prefer not to call? Request service in 20 seconds
              <ArrowRightIcon className="h-4 w-4" />
            </a>

            <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[11px] font-semibold text-ocean-200 sm:text-xs">
              <span className="inline-flex items-center gap-1.5">
                <StarIcon className="h-3.5 w-3.5 text-amber-300" />
                {rating.value} stars · {rating.count} reviews
              </span>
              <span aria-hidden="true" className="text-ocean-500">
                •
              </span>
              <span>Licensed, Bonded &amp; Insured</span>
              <span aria-hidden="true" className="text-ocean-500">
                •
              </span>
              <span>Nights, weekends &amp; holidays</span>
            </p>
          </div>
        </section>

        {/* --------------------------------------------------- ANCHOR STRIP */}
        <nav
          aria-label="Page sections"
          className="border-b border-slate-200 bg-ocean-50/80"
        >
          <div className="no-scrollbar mx-auto flex max-w-5xl items-center gap-2 overflow-x-auto px-4 py-2.5 text-[13px] font-semibold text-ocean-800">
            <span className="hidden shrink-0 text-[11px] font-bold uppercase tracking-wider text-slate-500 sm:inline">
              Jump to
            </span>
            {anchorLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap rounded-full bg-white px-3 py-1.5 ring-1 ring-inset ring-ocean-200 transition-colors active:bg-ocean-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#request"
              data-cta="anchor-request"
              className="whitespace-nowrap rounded-full bg-ocean-600 px-3 py-1.5 text-white"
            >
              Request Service
            </a>
          </div>
        </nav>

        {/* -------------------------------------------------------- TRUST BAR */}
        <section
          aria-label="Why Gulf Coast homeowners call us"
          className="bg-white"
        >
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-4 gap-y-5 px-4 py-6 sm:grid-cols-4">
            {trustBar.map((item) => {
              const Icon = trustIcons[item.icon] ?? ShieldCheckIcon;
              return (
                <div key={item.title} className="flex items-start gap-2.5">
                  <Icon
                    className={
                      "mt-0.5 h-5 w-5 shrink-0 " +
                      (item.icon === "star"
                        ? "text-amber-400"
                        : "text-ocean-600")
                    }
                  />
                  <div>
                    <p className="text-[13.5px] font-extrabold leading-tight text-slate-900">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[11.5px] leading-snug text-slate-500">
                      {item.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ---------------------------------------------------------- SERVICES */}
        <section
          id="services"
          className="anchor-offset border-y border-slate-200 bg-slate-50 py-10 sm:py-14"
        >
          <div className="mx-auto max-w-5xl px-4">
            <SectionHeading
              eyebrow="What we fix"
              title="HVAC problems we handle the same day"
              sub="No jargon, no upsell. Tell us what your system is doing and we'll tell you what it needs."
            />

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = serviceIcons[service.icon] ?? BoltIcon;
                return (
                  <article
                    key={service.slug}
                    className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-card"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ocean-50 text-ocean-700 ring-1 ring-inset ring-ocean-100">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-3 text-base font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-slate-600">
                      {service.blurb}
                    </p>
                    <a
                      href={TEL_HREF}
                      data-cta="service-call"
                      className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-ocean-700"
                    >
                      {service.cta}
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </a>
                  </article>
                );
              })}
            </div>

            <p className="mt-5 text-center text-[13px] text-slate-500">
              Not sure what&apos;s wrong? Call{" "}
              <a
                href={TEL_HREF}
                className="font-bold text-ocean-700 underline underline-offset-2"
              >
                {PHONE_DISPLAY}
              </a>{" "}
              and describe it — we&apos;ll tell you what it usually means.
            </p>
          </div>
        </section>

        {/* ----------------------------------------------------------- PRICING */}
        <section id="pricing" className="anchor-offset bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-5xl px-4">
            <SectionHeading
              eyebrow="Pricing"
              title={pricing.headline}
              sub="The most common fear with an HVAC company is a mystery bill. Here's how we avoid that."
            />

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {pricing.points.map((point) => {
                const Icon = pricingIcons[point.icon] ?? DollarIcon;
                return (
                  <div
                    key={point.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <Icon className="h-6 w-6 text-ocean-600" />
                    <h3 className="mt-2.5 text-[15px] font-bold text-slate-900">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">
                      {point.body}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center">
              <a
                href={TEL_HREF}
                data-cta="pricing-call"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-ocean-600 px-6 text-[15px] font-extrabold text-white shadow-cta active:bg-ocean-700 sm:w-auto"
              >
                <PhoneIcon className="h-4 w-4" />
                Get your quote: {PHONE_DISPLAY}
              </a>
              <a
                href="#request"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ocean-700 underline underline-offset-2"
              >
                Or request service online
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ SERVICE AREA */}
        <section
          id="area"
          className="anchor-offset border-y border-slate-200 bg-slate-50 py-10 sm:py-14"
        >
          <div className="mx-auto max-w-5xl px-4">
            <SectionHeading
              eyebrow="Service area"
              title={serviceArea.headline}
              sub="Local techs, stocked trucks, and no out-of-area trip charges across Jackson and Harrison County."
            />

            <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {serviceArea.cities.map((place) => (
                <li
                  key={place.city}
                  className="flex items-start gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5"
                >
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-ocean-600" />
                  <span className="text-[13px] font-bold leading-tight text-slate-800">
                    {place.city}
                    <span className="mt-0.5 block text-[11px] font-medium text-slate-500">
                      {place.zips}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-col items-start gap-3 rounded-2xl border border-ocean-200 bg-ocean-50 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-2.5">
                <AlertIcon className="mt-0.5 h-5 w-5 shrink-0 text-ocean-600" />
                <p className="text-[13.5px] leading-relaxed text-slate-700">
                  <span className="font-bold text-slate-900">
                    Not sure if we cover you?
                  </span>{" "}
                  Call and we&apos;ll answer in about 30 seconds — including{" "}
                  {serviceArea.counties.join(" and ")}.
                </p>
              </div>
              <a
                href={TEL_HREF}
                data-cta="area-call"
                className="flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-ocean-600 px-5 text-[14px] font-extrabold text-white active:bg-ocean-700 sm:w-auto"
              >
                <PhoneIcon className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- REVIEWS */}
        <section id="reviews" className="anchor-offset bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-5xl px-4">
            <SectionHeading
              eyebrow="Reviews"
              title={`Rated ${rating.value} stars by ${rating.count} Gulf Coast homeowners`}
              sub={`Pulled from ${rating.sources}. These are real customers from Ocean Springs and Biloxi.`}
            />

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <StarRow count={testimonial.stars} />
                  <blockquote className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-slate-700">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 border-t border-slate-200 pt-2.5 text-[12.5px] font-semibold text-slate-800">
                    {testimonial.name}
                    <span className="block font-medium text-slate-500">
                      {testimonial.city}, MS
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------- URGENCY BANNER */}
        <section className="bg-ocean-900 py-9 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
              {urgencyBanner.headline}
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-[13.5px] leading-relaxed text-ocean-200">
              {urgencyBanner.sub}
            </p>
            <a
              href={TEL_HREF}
              data-cta="banner-call"
              className="mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-[15px] font-extrabold text-ocean-900 active:bg-ocean-50"
            >
              <PhoneIcon className="h-4 w-4" />
              Call Now: {PHONE_DISPLAY}
            </a>
            <p className="mt-2.5 text-[11.5px] font-semibold uppercase tracking-wide text-ocean-300">
              {business.availabilityLine}
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------- REQUEST */}
        <section
          id="request"
          className="anchor-offset border-b border-slate-200 bg-white py-10 sm:py-14"
        >
          <div className="mx-auto grid max-w-5xl gap-7 px-4 lg:grid-cols-2 lg:gap-10">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Request service"
                title="Request service — we'll call you right back"
                sub="Fill this out and a dispatcher will call the number you give us. Takes about 20 seconds."
              />

              <ul className="mt-5 grid gap-2.5">
                {[
                  business.responseLine,
                  `${business.afterHoursLine} — same phone number`,
                  business.licenseLine,
                  `${business.yearsInBusiness} serving Ocean Springs, Biloxi, Gautier & Jackson County`,
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2.5">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-ocean-600" />
                    <span className="text-[13.5px] leading-relaxed text-slate-700">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-[13px] font-bold text-slate-900">
                  AC completely out right now?
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-600">
                  Don&apos;t wait on a form — call and we&apos;ll start a truck
                  toward you while we talk.
                </p>
                <a
                  href={TEL_HREF}
                  data-cta="request-side-call"
                  className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-ocean-600 text-[15px] font-extrabold text-white shadow-cta active:bg-ocean-700"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Call Now: {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card sm:p-5">
              <RequestForm />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- FAQ */}
        <section id="faq" className="anchor-offset bg-slate-50 py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-4">
            <SectionHeading
              eyebrow="Questions"
              title="The things people ask before they book"
              sub="Straight answers. If yours isn't here, call and ask — no obligation."
            />

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white px-4 sm:px-5">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group border-b border-slate-200 py-4 last:border-b-0"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-[14.5px] font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                    <span>{faq.q}</span>
                    <ChevronDownIcon className="mt-0.5 h-5 w-5 shrink-0 text-ocean-600 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-2.5 pr-7 text-[13.5px] leading-relaxed text-slate-600">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-5 flex flex-col items-center gap-2.5 rounded-2xl bg-ocean-900 p-5 text-center text-white">
              <p className="text-[15px] font-extrabold">
                Still deciding? Talk to a tech, not a salesperson.
              </p>
              <a
                href={TEL_HREF}
                data-cta="faq-call"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 text-[15px] font-extrabold text-ocean-900 active:bg-ocean-50 sm:w-auto"
              >
                <PhoneIcon className="h-4 w-4" />
                Call Now: {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ----------------------------------------------------------- FOOTER */}
      <footer className="border-t border-slate-200 bg-white pb-32 pt-9">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <LogoMark tone="onLight" className="h-9 w-9 shrink-0" />
              <span className="text-[13px] font-extrabold uppercase leading-tight tracking-wide text-slate-900">
                Coast Heating &amp; Air Conditioning
              </span>
            </div>
            <p className="mt-2.5 text-[12.5px] leading-relaxed text-slate-600">
              Same-day emergency HVAC repair on the Mississippi Gulf Coast.{" "}
              {business.yearsInBusiness} in business.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Emergency line
            </h3>
            <a
              href={TEL_HREF}
              data-cta="footer-call"
              className="mt-2 inline-flex items-center gap-1.5 text-[15px] font-extrabold text-ocean-700"
            >
              <PhoneIcon className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
            <p className="mt-2 text-[12.5px] leading-relaxed text-slate-600">
              {business.officeHoursLine}
              <br />
              {business.afterHoursLine}
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Service area
            </h3>
            <p className="mt-2 text-[12.5px] leading-relaxed text-slate-600">
              {serviceArea.cities.map((place) => place.city).join(" · ")}
            </p>
            <p className="mt-1 text-[12.5px] font-semibold text-slate-700">
              {serviceArea.counties.join(" · ")}
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Credentials
            </h3>
            <p className="mt-2 text-[12.5px] leading-relaxed text-slate-600">
              {business.licenseLine}
              <br />
              Master-certified technicians
              <br />
              {rating.value} stars · {rating.count} reviews
            </p>
          </div>
        </div>

        <div className="mx-auto mt-7 max-w-5xl border-t border-slate-200 px-4 pt-4 text-[11.5px] leading-relaxed text-slate-500">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
          <span className="mt-1 block">
            Emergency AC repair, refrigerant leak repair, compressor repair,
            drain line clearing and seasonal tune-ups in Ocean Springs, Biloxi,
            Gautier, Jackson County and Harrison County, MS.
          </span>
        </div>
      </footer>
    </>
  );
}
