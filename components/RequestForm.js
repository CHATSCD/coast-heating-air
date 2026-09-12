"use client";

import { useState } from "react";
import {
  PHONE_DISPLAY,
  TEL_HREF,
  services,
  urgencyOptions,
} from "@/lib/business";
import {
  AlertIcon,
  CheckCircleIcon,
  FormIcon,
  PhoneIcon,
} from "@/components/icons";

const fieldClass =
  "block w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/30";

export default function RequestForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const payload = {
      name: (formData.get("name") || "").toString().trim(),
      phone: (formData.get("phone") || "").toString().trim(),
      service: (formData.get("service") || "").toString(),
      urgency: (formData.get("urgency") || "").toString(),
      notes: (formData.get("notes") || "").toString().trim(),
      company: (formData.get("company") || "").toString(), // spam honeypot
    };

    const nextErrors = {};
    if (payload.name.length < 2) nextErrors.name = "Please enter your name.";
    if (payload.phone.replace(/\D/g, "").length < 10)
      nextErrors.phone = "Please enter a 10-digit phone number.";
    if (!payload.service) nextErrors.service = "Choose the service you need.";
    if (!payload.urgency) nextErrors.urgency = "Let us know how urgent this is.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setSubmitted({ name: payload.name, phone: payload.phone });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done" && submitted) {
    const firstName = submitted.name.split(" ")[0];
    return (
      <div className="rounded-2xl border border-ocean-200 bg-ocean-50 p-5 text-center">
        <CheckCircleIcon className="mx-auto h-11 w-11 text-ocean-600" />
        <h3 className="mt-3 text-lg font-extrabold text-slate-900">
          Request received{firstName ? `, ${firstName}` : ""}.
        </h3>
        <p className="mx-auto mt-1.5 max-w-sm text-sm leading-relaxed text-slate-600">
          A dispatcher will call you at{" "}
          <span className="font-semibold text-slate-800">{submitted.phone}</span>{" "}
          shortly. If your AC is down right now, calling is faster:
        </p>
        <a
          href={TEL_HREF}
          data-cta="form-confirm-call"
          className="mt-4 flex h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-ocean-600 text-lg font-extrabold tracking-tight text-white shadow-cta active:bg-ocean-700"
        >
          <PhoneIcon className="h-5 w-5" />
          Call Now: {PHONE_DISPLAY}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative">
      {/* Honeypot: hidden from humans, tempting to bots. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden"
      >
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" ? (
        <div className="mb-4 flex items-start gap-2.5 rounded-xl border border-amber-300 bg-amber-50 p-3.5 text-[13px] text-amber-900">
          <AlertIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
          <p>
            We couldn&apos;t send that form. Please call{" "}
            <a href={TEL_HREF} className="font-bold underline">
              {PHONE_DISPLAY}
            </a>{" "}
            — we&apos;ll get you on the schedule right away.
          </p>
        </div>
      ) : null}

      <div className="grid gap-4">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-[13px] font-bold text-slate-800"
          >
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="First and last name"
            required
            className={fieldClass}
          />
          {errors.name ? (
            <p className="mt-1 text-[12px] font-semibold text-red-600">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-[13px] font-bold text-slate-800"
          >
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(228) 555-0123"
            required
            className={fieldClass}
          />
          <p className="mt-1 text-[12px] text-slate-500">
            We&apos;ll call this number back — no spam, no sales calls.
          </p>
          {errors.phone ? (
            <p className="mt-1 text-[12px] font-semibold text-red-600">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="service"
            className="mb-1.5 block text-[13px] font-bold text-slate-800"
          >
            What do you need?
          </label>
          <select id="service" name="service" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Choose a service…
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Not sure / something else">
              Not sure — something else
            </option>
          </select>
          {errors.service ? (
            <p className="mt-1 text-[12px] font-semibold text-red-600">
              {errors.service}
            </p>
          ) : null}
        </div>

        <fieldset>
          <legend className="mb-1.5 block text-[13px] font-bold text-slate-800">
            How urgent is it?
          </legend>
          <div className="grid gap-2">
            {urgencyOptions.map((option) => (
              <label
                key={option.value}
                className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-300 bg-white p-3 transition-colors hover:border-ocean-400 has-[:checked]:border-ocean-500 has-[:checked]:bg-ocean-50"
              >
                <input
                  type="radio"
                  name="urgency"
                  value={option.value}
                  className="mt-1 h-4 w-4 shrink-0 accent-ocean-600"
                />
                <span>
                  <span className="block text-[14px] font-semibold text-slate-900">
                    {option.label}
                  </span>
                  <span className="block text-[12px] text-slate-500">
                    {option.hint}
                  </span>
                </span>
              </label>
            ))}
          </div>
          {errors.urgency ? (
            <p className="mt-1 text-[12px] font-semibold text-red-600">
              {errors.urgency}
            </p>
          ) : null}
        </fieldset>

        <div>
          <label
            htmlFor="notes"
            className="mb-1.5 block text-[13px] font-bold text-slate-800"
          >
            Anything else?{" "}
            <span className="font-medium text-slate-500">(optional)</span>
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={2}
            placeholder="Warm air upstairs, water on the floor, unit keeps shutting off…"
            className={fieldClass}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="flex h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-ocean-600 text-base font-extrabold tracking-tight text-white shadow-cta transition-colors active:bg-ocean-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <FormIcon className="h-5 w-5" />
          {status === "sending" ? "Sending…" : "Request Service"}
        </button>

        <p className="text-center text-[12px] leading-relaxed text-slate-500">
          In a no-cool emergency, calling is still fastest —{" "}
          <a
            href={TEL_HREF}
            className="font-bold text-ocean-700 underline underline-offset-2"
          >
            {PHONE_DISPLAY}
          </a>
        </p>
      </div>
    </form>
  );
}
