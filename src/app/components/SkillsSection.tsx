"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const groups = [
  {
    icon: "📑",
    title: "Requirements & Documentation",
    accent: "from-burnt-orange to-burnt-orange-light",
    items: ["BRD", "SRS", "User Manuals", "Confluence"],
  },
  {
    icon: "🔀",
    title: "Process Modeling",
    accent: "from-mustard to-mustard-light",
    items: ["BPMN", "Flowchart", "Draw.io"],
  },
  {
    icon: "🎨",
    title: "UI/UX & Project Tools",
    accent: "from-accent-coral to-accent-peach",
    items: ["Figma", "Jira", "Canva", "MS Office"],
  },
  {
    icon: "🗄️",
    title: "Data & Integration",
    accent: "from-warm-brown-light to-burnt-orange",
    items: ["MySQL", "DBeaver", "Postman", "HTTPie", "API Integration"],
  },
  {
    icon: "✅",
    title: "Quality Control",
    accent: "from-burnt-orange-light to-mustard",
    items: ["Test Cases", "UAT", "Defect Tracking", "Retesting"],
  },
  {
    icon: "🤝",
    title: "Soft Skills",
    accent: "from-mustard-light to-accent-peach",
    items: ["Problem Solving", "Negotiation", "Stakeholder Mgmt", "Training"],
  },
];

const domains = ["🏦 Trade Finance · L/C", "📱 Mobile Banking", "💳 Card Management", "🧾 E-statements", "📈 FX Trading", "📊 Stock Account Integration"];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader eyebrow="What I work with" title="Skills &" highlight="Toolkit" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-lg shadow-burnt-orange/5"
            >
              <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${g.accent} opacity-15 transition-transform duration-500 group-hover:scale-150`} />
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${g.accent} text-2xl shadow-md`}>
                {g.icon}
              </div>
              <h3 className="mb-4 text-lg font-bold text-text-dark">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="rounded-full border border-burnt-orange/15 bg-off-white px-3 py-1 text-sm text-text-medium">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="mb-6 text-center font-display text-2xl font-bold text-text-dark">Domain Knowledge</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {domains.map((d, i) => (
              <motion.span
                key={d}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, type: "spring" }}
                whileHover={{ scale: 1.06 }}
                className="rounded-full bg-gradient-to-r from-burnt-orange/10 to-mustard/15 px-5 py-3 font-medium text-text-dark"
              >
                {d}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
