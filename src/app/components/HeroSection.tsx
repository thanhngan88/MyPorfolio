"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const badges = [
  { label: "📋 BRD & SRS", pos: "-left-3 top-[14%] sm:-left-14", delay: "0s" },
  { label: "🎨 Figma", pos: "-right-2 top-[6%] sm:-right-10", delay: "0.6s" },
  { label: "🧩 Jira · Confluence", pos: "-right-2 top-[50%] sm:-right-16", delay: "1.2s" },
  { label: "🗄️ SQL", pos: "-left-3 top-[60%] sm:-left-10", delay: "1.8s" },
  { label: "🔌 Postman API", pos: "left-1/2 -bottom-5 -translate-x-1/2", delay: "0.9s" },
];

function Leaf({ className, color, delay }: { className: string; color: string; delay: string }) {
  return (
    <svg viewBox="0 0 40 40" className={`float-slow absolute ${className}`} style={{ animationDelay: delay }} aria-hidden>
      <path d="M20 2C30 10 34 22 20 38C6 22 10 10 20 2Z" fill={color} />
      <path d="M20 6V36" stroke="#FDF8F0" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="hero-glow relative flex min-h-screen items-center overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-burnt-orange/10 px-4 py-2 text-sm font-medium text-burnt-orange">
              <span className="h-2 w-2 rounded-full bg-burnt-orange" />
              Open to new opportunities
            </span>

            <h1 className="mb-6 text-5xl font-bold leading-[1.05] sm:text-6xl xl:text-7xl">
              <span className="font-display text-text-dark">Hi, I&apos;m</span>
              <br />
              <span className="gradient-text font-space">Thanh Ngan</span>
              <span className="mt-3 block font-display text-3xl font-semibold italic text-text-medium sm:text-4xl">
                Business Analyst &amp; QC
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-text-medium">
              I bridge business goals and technical solutions in{" "}
              <strong className="text-burnt-orange">digital banking</strong>. With nearly two years at{" "}
              <strong className="text-burnt-orange">FPT IS</strong>, I&apos;ve turned complex Trade Finance and Mobile
              Banking requirements into clear, user-focused products.
            </p>

            <div className="mb-10 flex flex-wrap gap-3">
              {["📍 District 2, HCMC", "🏢 FPT IS · since 2024", "🏦 ACB · HDBank projects"].map((t) => (
                <span key={t} className="rounded-xl bg-white px-3.5 py-2 text-sm text-text-medium shadow-sm">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold"
              >
                Get In Touch
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/Tran-Ngoc-Thanh-Ngan-CV.pdf"
                target="_blank"
                className="inline-flex items-center rounded-full border-2 border-burnt-orange/30 px-8 py-4 font-semibold text-burnt-orange transition-colors hover:bg-burnt-orange/5"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* RIGHT: arched portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="order-1 flex justify-center lg:order-2"
          >
            <div className="relative h-[400px] w-[270px] sm:h-[500px] sm:w-[360px] lg:h-[540px] lg:w-[400px]">
              <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-t-full rounded-b-[2rem] bg-mustard/80" />
              <div className="absolute -right-8 -top-6 h-24 w-24 rounded-full bg-mustard-light/70" />
              <div className="absolute -left-10 bottom-16 grid grid-cols-5 gap-2" aria-hidden>
                {Array.from({ length: 20 }).map((_, i) => (
                  <span key={i} className="h-1.5 w-1.5 rounded-full bg-burnt-orange/40" />
                ))}
              </div>

              <div className="absolute inset-0 overflow-hidden rounded-t-full rounded-b-[2rem] border-[6px] border-white bg-burnt-orange shadow-2xl shadow-burnt-orange/30">
                <Image
                  src="/portrait.png"
                  alt="Tran Ngoc Thanh Ngan"
                  fill
                  priority
                  sizes="(max-width: 640px) 300px, 400px"
                  className="object-cover object-top"
                />
              </div>

              <Leaf className="-left-6 -top-2 h-12 w-12" color="#D2691E" delay="0s" />
              <Leaf className="-right-4 bottom-24 h-10 w-10" color="#E5A100" delay="1s" />
              <Leaf className="-bottom-8 left-8 h-8 w-8" color="#FF6B4A" delay="2s" />

              {badges.map((b) => (
                <div key={b.label} className={`absolute z-20 ${b.pos}`}>
                  <div
                    className="float whitespace-nowrap rounded-full border border-burnt-orange/10 bg-white px-4 py-2 text-xs font-semibold text-text-dark shadow-lg shadow-burnt-orange/15 sm:text-sm"
                    style={{ animationDelay: b.delay }}
                  >
                    {b.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
