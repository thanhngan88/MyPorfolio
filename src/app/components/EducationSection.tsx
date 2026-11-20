"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const education = [
  {
    icon: "📋",
    title: "Business Analysis Course",
    school: "VTI Academy",
    period: "Jul 2024 – Oct 2024",
    description: "Professional BA training that kick-started my career transition into IT & banking projects.",
  },
  {
    icon: "🎓",
    title: "Bachelor of Administration in Marketing",
    school: "International University (IU) — associated with University of the West of England (UK)",
    period: "Sep 2018 – Jul 2022",
    description: "Degree level: Good. A solid foundation in business administration, marketing and customer insight.",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative bg-off-white-dark/50 py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeader eyebrow="Academic background" title="" highlight="Education" />

        <div className="relative">
          <div className="absolute bottom-0 left-6 top-0 w-0.5 bg-gradient-to-b from-burnt-orange via-mustard to-accent-peach" />
          <div className="space-y-8">
            {education.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative pl-16"
              >
                <span className="absolute left-[15px] top-8 h-5 w-5 rounded-full border-[3px] border-burnt-orange bg-off-white shadow-lg shadow-burnt-orange/30" />
                <div className="rounded-3xl bg-white p-6 shadow-lg shadow-burnt-orange/5 lg:p-8">
                  <div className="flex items-start gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-mustard/15 text-3xl">{e.icon}</span>
                    <div>
                      <span className="text-sm font-medium text-text-light">{e.period}</span>
                      <h3 className="mt-1 text-xl font-bold text-text-dark">{e.title}</h3>
                      <p className="mt-1 text-sm font-medium text-burnt-orange">{e.school}</p>
                      <p className="mt-3 text-text-medium">{e.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
