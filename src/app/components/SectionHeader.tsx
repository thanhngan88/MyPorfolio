"use client";

import { motion } from "framer-motion";

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-burnt-orange">{eyebrow}</span>
      <h2 className="mt-3 font-display text-4xl font-bold lg:text-5xl">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-text-medium">{subtitle}</p>}
    </motion.div>
  );
}
