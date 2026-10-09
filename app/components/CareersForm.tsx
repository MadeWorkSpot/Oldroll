"use client";

import { useState } from "react";
import { Phone, Mail, User, MessageSquare } from "lucide-react";
import Reveal from "./Reveal";
import { whatsappUrl } from "../lib/whatsapp";

const fieldClass =
  "w-full rounded-sm border border-slate-800 bg-slate-950/60 py-3 pl-11 pr-4 text-base text-white placeholder:text-slate-500 transition-colors duration-300 hover:border-slate-700 focus:outline-none";

const labelClass = "text-sm font-medium text-slate-300";

const iconClass =
  "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500";

export default function CareersForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const url = whatsappUrl([
      "*New Career Application*",
      "",
      `*Name:* ${formData.name}`,
      `*Email:* ${formData.email}`,
      `*Phone:* ${formData.phone}`,
      "",
      `*Message:* ${formData.message}`,
    ]);

    window.open(url, "_blank");
  };

  return (
    <Reveal delay={120}>
      <div className="relative overflow-hidden rounded-sm border border-slate-800 bg-slate-900/40 p-6 md:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset ring-white/5"
        />

        <form className="relative space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="name" className={labelClass}>
              Name
            </label>
            <div className="relative">
              <User size={16} className={iconClass} aria-hidden />
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className={fieldClass}
                placeholder="Full Name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <div className="relative">
              <Mail size={16} className={iconClass} aria-hidden />
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className={fieldClass}
                placeholder="E-mail"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className={labelClass}>
              Phone number
            </label>
            <div className="relative">
              <Phone size={16} className={iconClass} aria-hidden />
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                autoComplete="tel"
                className={fieldClass}
                placeholder="+91 00000 00000"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <div className="relative">
              <MessageSquare
                size={16}
                aria-hidden
                className={`${iconClass} top-4 translate-y-0`}
              />
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className={`${fieldClass} resize-none`}
                placeholder="Tell us about yourself and the role you're interested in..."
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-sm bg-white py-3.5 text-sm font-medium text-slate-950 transition-all duration-300 hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:text-base"
          >
            Send Application
          </button>
        </form>
      </div>
    </Reveal>
  );
}