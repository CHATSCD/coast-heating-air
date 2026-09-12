// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH for all business content.
// Edit phone numbers, services, service area, reviews and FAQs here and the
// page, metadata and schema.org data all update together.
// ---------------------------------------------------------------------------

export const PHONE_DISPLAY = "(228) 875-4674";
export const PHONE_E164 = "+12288754674";
export const TEL_HREF = "tel:+12288754674"; // click-to-call on every device
export const PHONE_SCHEMA = "+1-228-875-4674"; // for schema.org / tel: metadata

export const business = {
  name: "Coast Heating & Air Conditioning",
  shortName: "Coast Heating & Air",
  city: "Ocean Springs",
  region: "MS",
  regionLong: "Mississippi",
  postalCode: "39564",
  tagline: "Same-day emergency AC repair on the Mississippi Gulf Coast",
  valueProp:
    "One call puts a master-certified tech on the road. We diagnose it, quote a flat rate up front, and fix it — no runaround, no surprise bill.",
  yearsInBusiness: "25+ years",
  licenseLine: "Licensed, Bonded & Insured · MS HVAC License",
  responseTime: "45–60 min",
  responseLine: "Same-day emergency service (avg 45–60 minutes)",
  officeHoursLine: "Monday–Saturday, 7:00 AM – 7:00 PM",
  afterHoursLine: "Emergency On-Call After Hours",
  availabilityLine: "Available nights, weekends, and holidays",
  priceRange: "$$",
};

export const rating = {
  value: "4.8",
  count: "790+",
  countNumeric: "790",
  sources: "Google, Angi, BBB & Facebook",
};

// Trust bar directly under the hero.
export const trustBar = [
  {
    icon: "star",
    title: `${rating.value} stars`,
    sub: `${rating.count} reviews on Google, Angi & BBB`,
  },
  {
    icon: "shield",
    title: "Licensed & insured",
    sub: "MS HVAC license · bonded",
  },
  {
    icon: "clock",
    title: business.yearsInBusiness,
    sub: "Master-certified technicians",
  },
  {
    icon: "bolt",
    title: "Same-day service",
    sub: `Avg arrival ${business.responseTime} after you call`,
  },
];

export const services = [
  {
    slug: "emergency-ac-repair",
    icon: "bolt",
    title: "Emergency AC Outage Repair",
    blurb:
      "Blowing warm air, or won't turn on at all? We get your cooling back the same day — most outages are fixed in a single visit.",
    cta: "Call about a no-cool emergency",
  },
  {
    slug: "refrigerant-leak",
    icon: "gauge",
    title: "Refrigerant Leak Repair",
    blurb:
      "Low refrigerant means there's a leak, not just a top-off. We find it, repair it, and recharge the system so the fix actually holds.",
    cta: "Ask about a leak diagnosis",
  },
  {
    slug: "compressor-repair",
    icon: "gear",
    title: "Compressor Repair",
    blurb:
      "A dead compressor sounds like the worst-case repair. We test it first and tell you straight whether it can be repaired or needs replacing.",
    cta: "Get a repair vs. replace answer",
  },
  {
    slug: "drain-line-clearing",
    icon: "droplet",
    title: "Drain Line Clearing",
    blurb:
      "Water pooling around your indoor unit, or a system that keeps shutting itself off? Usually a clogged drain line. We clear it and check it drains right.",
    cta: "Get your drain cleared today",
  },
  {
    slug: "seasonal-tune-ups",
    icon: "calendar",
    title: "Seasonal Tune-Ups",
    blurb:
      "Spring A/C and fall heating checks that catch small problems before they turn into a July emergency. Filters, coils, drainage, refrigerant charge.",
    cta: "Book a tune-up",
  },
];

export const serviceArea = {
  headline: "Serving Ocean Springs, Biloxi & the Mississippi Gulf Coast",
  counties: ["Jackson County, MS", "Harrison County, MS"],
  cities: [
    { city: "Ocean Springs", zips: "39564" },
    { city: "Biloxi", zips: "39530–39532" },
    { city: "Gautier", zips: "39553" },
    { city: "D'Iberville", zips: "39540" },
    { city: "Pascagoula", zips: "39567, 39581" },
    { city: "Moss Point", zips: "39562–39563" },
    { city: "Vancleave", zips: "39565" },
    { city: "Gulfport", zips: "39501, 39503, 39507" },
    { city: "Long Beach", zips: "39560" },
  ],
};

export const testimonials = [
  {
    quote:
      "Joe was professional, efficient, and friendly. He quickly addressed the issue and had my AC back up and running within 30 minutes.",
    name: "Molly H.",
    city: "Ocean Springs",
    stars: 5,
  },
  {
    quote:
      "Incredibly professional and prompt. The problem was diagnosed and fixed in an hour.",
    name: "Marilee M.",
    city: "Biloxi",
    stars: 5,
  },
  {
    quote:
      "We had a clogged line in our HVAC. The technician provided very prompt and informative service. Highly recommend!",
    name: "Laura M.",
    city: "Ocean Springs",
    stars: 5,
  },
];

export const pricing = {
  headline: "Straight answers on price, before we start",
  points: [
    {
      icon: "dollar",
      title: "Upfront diagnostics",
      body: "You'll know what the diagnostic costs before we roll a truck. No surprises when the tech knocks on the door.",
    },
    {
      icon: "check",
      title: "Fair flat-rate quotes",
      body: "You approve a flat-rate repair price before any work starts. The number we quote is the number you pay.",
    },
    {
      icon: "shield",
      title: "No pressure to replace",
      body: "If a repair is the right call, we'll repair it. If a system genuinely isn't worth fixing, we'll tell you that too.",
    },
  ],
};

// TODO (confirm with owner before launch): exact diagnostic fee policy and
// whether replacement estimates are free. Answers below stay deliberately
// accurate until those specifics are confirmed.
export const faqs = [
  {
    q: "How fast can you actually get to my house?",
    a: `Same-day for most calls in Ocean Springs, Biloxi, Gautier and the surrounding Jackson and Harrison County areas. Average arrival is ${business.responseTime} after you call, and after-hours emergencies go straight to our on-call technician.`,
  },
  {
    q: "Is this really 24/7? What happens if I call at 9 PM?",
    a: `Our office is open ${business.officeHoursLine}. Outside those hours, nights, weekends and holidays, our emergency on-call line rings the same number: ${PHONE_DISPLAY}. You reach a person, not a voicemail box, and we'll tell you honestly whether it can safely wait until morning or needs a tech tonight.`,
  },
  {
    q: "Do you charge for estimates or service calls?",
    a: `We're upfront about what a diagnostic visit costs before we schedule it — call ${PHONE_DISPLAY} and we'll tell you exactly what to expect, with no obligation to book the repair. You'll get a flat-rate repair price to approve before any work begins.`,
  },
  {
    q: "How much will my repair cost?",
    a: "Every job gets a flat-rate quote based on the actual repair, not an open-ended hourly clock. You approve the total before we start, so the price you hear is the price you pay.",
  },
  {
    q: "Are you licensed and insured?",
    a: `Yes. ${business.name} is licensed, bonded and insured, holds an MS HVAC license, and our technicians are master-certified. We've been working on Gulf Coast systems for ${business.yearsInBusiness}.`,
  },
  {
    q: "I don't know what's wrong with my AC. Is that a problem?",
    a: "Not at all — that's what the diagnostic is for. Tell us what you're seeing or hearing (warm air, water on the floor, a system that keeps shutting off, a strange noise) and we'll tell you what it usually means and how soon it needs attention.",
  },
  {
    q: "Do you cover my city?",
    a: `We serve ${serviceArea.cities
      .map((c) => c.city)
      .join(", ")} and the rest of Jackson and Harrison County. If you're not sure whether you're in range, call ${PHONE_DISPLAY} and we'll answer in about 30 seconds.`,
  },
];

export const urgencyBanner = {
  headline: "Don't wait in a hot house.",
  sub: "Same-day appointments, an emergency line that's answered nights, weekends and holidays, and a tech on the road in about 45–60 minutes.",
};

export const urgencyOptions = [
  {
    value: "emergency",
    label: "Emergency — no cooling right now",
    hint: "Treated as on-call priority. Calling is fastest.",
  },
  {
    value: "today",
    label: "Today if possible",
    hint: "Same-day scheduling while slots are open.",
  },
  {
    value: "schedule",
    label: "Schedule a visit",
    hint: "Pick a day and time that works for you.",
  },
];
