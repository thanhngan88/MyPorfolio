"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const stats = [
  { value: "~2", label: "Years as BA & QC" },
  { value: "37→1", label: "Manual steps unified" },
  { value: "~50%", label: "Manual effort reduced" },
  { value: "100%", label: "Monthly sales KPI (ILA)" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader eyebrow="Get to know me" title="About" highlight="Me" />

        <div className="grid items-start gap-10 lg:grid-cols-5">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="rounded-3xl bg-white rounded-3xl p-8 shadow-xl shadow-burnt-orange/5 lg:col-span-3 lg:p-10">
            <p className="mb-5 text-lg leading-relaxed text-text-medium">
              I&apos;m an active <strong className="text-burnt-orange">Business Analyst</strong> and{" "}
              <strong className="text-burnt-orange">Manual Quality Control</strong> with nearly two years of
              hands-on experience in both web and mobile development projects.
            </p>
            <p className="mb-5 text-lg leading-relaxed text-text-medium">
              At <strong className="text-burnt-orange">FPT IS Ho Chi Minh</strong>, I&apos;ve played a pivotal role in
              bridging business objectives and technical solutions — particularly within the{" "}
              <strong className="text-burnt-orange">Banking domain</strong>.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-text-medium">
              I love applying core BA techniques to deliver efficient, user-focused outcomes, and I&apos;m committed to
              continuous learning and building financial solutions that truly improve customer experience.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Problem Solving", "Negotiation", "Stakeholder Management", "Cross-team Collaboration", "End-user Training"].map((t) => (
                <span key={t} className="rounded-full bg-burnt-orange/10 px-4 py-2 text-sm font-medium text-burnt-orange">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  {...fadeUp}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl bg-white rounded-2xl p-6 text-center shadow-lg shadow-burnt-orange/5"
                >
                  <div className="gradient-text mb-2 font-space text-3xl font-bold lg:text-4xl">{s.value}</div>
                  <div className="text-sm text-text-light">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeUp} transition={{ delay: 0.4 }} className="mt-4 rounded-2xl bg-gradient-to-br from-burnt-orange to-burnt-orange-light p-6 text-white shadow-xl shadow-burnt-orange/25">
              <p className="font-display text-lg italic leading-relaxed">
                &ldquo;Turning complex banking processes into simple, delightful experiences.&rdquo;
              </p>
              <p className="mt-3 text-sm text-white/80">— my working motto</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
