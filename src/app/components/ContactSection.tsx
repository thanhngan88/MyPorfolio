"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const EMAIL = "tranngocthanhngan278@gmail.com";

const contactInfo = [
  { icon: "📧", label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: "📱", label: "Phone", value: "+84 915 801 909", href: "tel:+84915801909" },
  { icon: "📍", label: "Location", value: "District 2, Ho Chi Minh City", href: undefined },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "Tran Ngoc Thanh Ngan",
    href: "https://www.linkedin.com/search/results/people/?keywords=Tran%20Ngoc%20Thanh%20Ngan",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Opens the visitor's mail client with a pre-filled message (no backend required)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const inputCls =
    "w-full rounded-xl border border-burnt-orange/15 bg-off-white px-4 py-3 text-text-dark placeholder:text-text-light/70 transition focus:border-burnt-orange/40 focus:outline-none focus:ring-2 focus:ring-burnt-orange/20";

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get in touch"
          title="Let's"
          highlight="Connect"
          subtitle="Open to BA opportunities, collaborations, or a friendly chat about digital banking and product delivery."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white p-8 shadow-xl shadow-burnt-orange/5 lg:col-span-3 lg:p-10"
          >
            <div className="mb-6 grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-text-dark">Your Name</span>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="Jane Doe" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-text-dark">Your Email</span>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="jane@company.com" />
              </label>
            </div>
            <label className="mb-6 block">
              <span className="mb-2 block text-sm font-medium text-text-dark">Message</span>
              <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputCls} resize-none`} placeholder="Tell me about your project or opportunity..." />
            </label>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-white shadow-lg shadow-burnt-orange/30 sm:w-auto"
            >
              Send Message ✉️
            </motion.button>
          </motion.form>

          <div className="space-y-4 lg:col-span-2">
            {contactInfo.map((c, i) => {
              const inner = (
                <>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-burnt-orange/10 text-2xl">{c.icon}</span>
                  <div className="min-w-0">
                    <span className="text-xs uppercase tracking-wider text-text-light">{c.label}</span>
                    <p className="truncate font-medium text-text-dark transition-colors group-hover:text-burnt-orange">{c.value}</p>
                  </div>
                </>
              );
              const cls = "group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md shadow-burnt-orange/5 transition-shadow hover:shadow-xl";
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                >
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={cls}>
                      {inner}
                    </a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </motion.div>
              );
            })}

            <motion.a
              href="/Tran-Ngoc-Thanh-Ngan-CV.pdf"
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-mustard to-mustard-light p-5 text-text-dark shadow-lg shadow-mustard/30"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/50 text-2xl">📄</span>
              <div>
                <p className="font-semibold">Download My CV</p>
                <p className="text-xs text-text-medium">PDF format</p>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
