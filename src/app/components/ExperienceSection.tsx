"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "Import L/C (Letter of Credit) Module",
    client: "ACB Banking · UAT",
    timeline: "Dec 2025 – Present",
    type: "Corporate Banking",
    description: "Leading UAT for the Import L/C Issuance module serving ACB's corporate banking clients.",
    responsibilities: [
      "Managed the User Acceptance Testing (UAT) process for the Import L/C Issuance module",
      "Refined business requirements with stakeholders and updated functional specifications",
      "Discussed solutions with developers to optimize the release timeline",
      "Tracked progress and reported to stakeholders using MS Office & Canva",
      "Trained banking staff on new features and wrote user manuals on Confluence",
    ],
    achievements: [
      "Import L/C module ready for launch on Production",
      "Reduced 37 manual customer-data verification steps into a single platform",
      "Cut around 50% of manual effort in the LC system",
    ],
    learnings: [
      "Quickly adapted to complex Trade Finance & L/C processes",
      "Sharpened problem-solving by identifying bugs and suggesting fixes",
      "Worked independently while collaborating across client & internal teams",
    ],
    tags: ["Trade Finance", "UAT", "Confluence", "Stakeholder Mgmt"],
  },
  {
    title: "Đi HDBank Mobile Banking App",
    client: "HDBank · Pilot",
    timeline: "Jul 2024 – Nov 2025",
    type: "Retail Banking",
    description: "End-to-end delivery of the HDBank Mobile Banking App renovation for retail customers.",
    responsibilities: [
      "Acted as both BA and QC across the end-to-end delivery cycle",
      "Prepared Business Requirement Documents (BRD) and SRS",
      "Created process flows and diagrams in Draw.io for the tech team",
      "Wrote test cases, validated UI/UX against Figma, and checked API integrations",
      "Handled defect tracking & retesting in JIRA with developers and testers",
    ],
    achievements: [
      "Delivered pilot modules: Card Management, E-statements, FX trading, Stock account integration",
      "Completed on time despite complex scope by managing risks and change",
      "Resolved stakeholder conflicts and kept client satisfaction high",
    ],
    learnings: [
      "Strong knowledge of retail digital banking & financial integrations",
      "Resilience leading cross-functional work under tight deadlines",
      "Balanced analytical system design with user-focused UI/UX validation",
    ],
    tags: ["Mobile App", "BRD", "SRS", "Figma", "JIRA", "API"],
  },
];

const previousRoles = [
  {
    title: "Telemarketing Officer",
    company: "ILA Vietnam",
    period: "Dec 2022 – Jul 2024",
    highlight: "Reached 100% monthly sales KPIs with up to 70 clients; advised solutions based on customer needs using Excel & CRM.",
  },
  {
    title: "Relationship Manager",
    company: "AIA Vietnam",
    period: "2022",
    highlight: "Client account management & retention, business development and personal branding to drive revenue.",
  },
];

function List({ title, items, color, marker }: { title: string; items: string[]; color: string; marker: string }) {
  return (
    <div>
      <h4 className={`mb-3 text-sm font-semibold uppercase tracking-wider ${color}`}>{title}</h4>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it} className="flex gap-2 text-sm text-text-medium">
            <span className={`shrink-0 ${color}`}>{marker}</span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperienceSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="relative bg-off-white-dark/50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="My Journey"
          title="Work"
          highlight="Experience"
          subtitle="Business Analyst cum Manual QC · FPT IS Ho Chi Minh City Branch · Jul 2024 → Now"
        />

        <div className="mb-16 space-y-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`overflow-hidden rounded-3xl bg-white transition-shadow duration-500 ${
                open === i ? "shadow-2xl shadow-burnt-orange/10" : "shadow-md shadow-burnt-orange/5 hover:shadow-xl"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left lg:p-8"
              >
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        i === 0 ? "bg-burnt-orange/10 text-burnt-orange" : "bg-mustard/15 text-warm-brown"
                      }`}
                    >
                      {p.type}
                    </span>
                    <span className="text-sm text-text-light">{p.timeline}</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-dark lg:text-2xl">{p.title}</h3>
                  <p className="mt-1 text-sm text-text-medium">{p.client}</p>
                </div>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-burnt-orange/10 text-burnt-orange"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-burnt-orange/10 px-6 pb-8 pt-6 lg:px-8">
                      <p className="mb-6 text-text-medium">{p.description}</p>
                      <div className="grid gap-8 md:grid-cols-3">
                        <List title="Responsibilities" items={p.responsibilities} color="text-burnt-orange" marker="›" />
                        <List title="Achievements" items={p.achievements} color="text-mustard" marker="★" />
                        <List title="Key Learnings" items={p.learnings} color="text-accent-coral" marker="◆" />
                      </div>
                      <div className="mt-6 flex flex-wrap gap-2 border-t border-burnt-orange/5 pt-6">
                        {p.tags.map((t) => (
                          <span key={t} className="rounded-full bg-off-white-dark px-3 py-1 text-xs font-medium text-text-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-text-dark">
          <span className="h-[2px] w-8 bg-burnt-orange" />
          Previous Roles
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {previousRoles.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl bg-white p-6 shadow-md shadow-burnt-orange/5"
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <h4 className="font-semibold text-text-dark transition-colors group-hover:text-burnt-orange">{r.title}</h4>
                <span className="shrink-0 text-xs text-text-light">{r.period}</span>
              </div>
              <p className="mb-2 text-sm font-medium text-burnt-orange">{r.company}</p>
              <p className="text-sm text-text-medium">{r.highlight}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
