"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const fieldClass =
  "w-full px-4 py-3 rounded-sm border border-slate-700 bg-slate-900 text-white placeholder:text-slate-500 transition-colors focus:border-slate-500 focus:outline-none";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Extract the WhatsApp number (using the one from the UI or replace with yours)
    // Needs to be in international format without any spaces or symbols, e.g. 15551234567
    const whatsappNumber = "917293402204";

    // Format the message for WhatsApp
    const text = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;

    // Open WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-t border-slate-800">
      <div className="w-full grid lg:grid-cols-12 gap-12 lg:gap-16">
        <Reveal className="lg:col-span-5 space-y-1 md:space-y-2">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-2">
            Let&apos;s start a conversation.
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed">
            We are currently accepting new projects. Fill out the form and our team will get back to
            you within 24 hours.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed">
            <a
              href="mailto:info@oldrollentertainments.com"
              className="transition-colors hover:text-white"
            >
              info@oldrollentertainments.com
            </a>
          </p>

          <p className="text-lg text-slate-300 leading-relaxed">
            <a href="tel:+917293402204" className="transition-colors hover:text-white">
              +91 7293402204
            </a>
            <br/>
            <a href="tel:+919061482884" className="transition-colors hover:text-white">
              +91 9061482884
            </a>
          </p>

          <p className="text-lg text-slate-300 leading-relaxed">
            Wayanad Holdings
            <br />
            Vythiri, Wayanad
          </p>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-base font-medium text-slate-300">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={fieldClass}
                placeholder="Full Name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-base font-medium text-slate-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={fieldClass}
                placeholder="E-mail"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-base font-medium text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className={`${fieldClass} resize-none`}
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-white text-slate-950 text-base font-medium rounded-sm transition-all duration-300 hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
