"use client";

import { useState } from "react";

const fieldClass =
  "w-full px-4 py-3 rounded-sm border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 transition-colors focus:border-neutral-900 focus:outline-none";

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
    const whatsappNumber = "15551234567";

    // Format the message for WhatsApp
    const text = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;

    // Open WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-t border-neutral-100">
      <div className="w-full grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 space-y-5">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900">
            Let&apos;s start a conversation.
          </h2>

          <p className="text-lg text-neutral-500 leading-relaxed">
            We are currently accepting new projects. Fill out the form and our team will get back to
            you within 24 hours.
          </p>

          <p className="text-lg text-neutral-500 leading-relaxed">
            <a
              href="mailto:hello@studio.design"
              className="transition-colors hover:text-neutral-900"
            >
              hello@studio.design
            </a>
          </p>

          <p className="text-lg text-neutral-500 leading-relaxed">
            <a href="tel:+15551234567" className="transition-colors hover:text-neutral-900">
              +1 (555) 123-4567
            </a>
          </p>

          <p className="text-lg text-neutral-500 leading-relaxed">
            742 Evergreen Terrace
            <br />
            New York, NY 10012
          </p>
        </div>

        <div className="lg:col-span-7">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-base font-medium text-neutral-700">
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
                placeholder="Jane Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-base font-medium text-neutral-700">
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
                placeholder="jane@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-base font-medium text-neutral-700">
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
              className="w-full py-3 bg-neutral-900 text-white text-base font-medium rounded-sm hover:bg-neutral-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
