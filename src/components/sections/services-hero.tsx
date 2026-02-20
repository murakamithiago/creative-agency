"use client";

import { motion } from "framer-motion";

export function ServicesHero() {
    return (
        <section className="relative overflow-hidden pb-24 pt-40 md:pb-32 md:pt-52">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/20 to-slate-50" />
                <div className="absolute right-[-10%] top-[-15%] h-[450px] w-[450px] rounded-full bg-gradient-to-bl from-indigo-100/25 to-violet-50/20 blur-3xl" />
                <div className="absolute bottom-[-20%] left-[-5%] h-[350px] w-[350px] rounded-full bg-gradient-to-tr from-blue-50/30 to-indigo-50/20 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-4xl">
                    {/* Label */}
                    <motion.span
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xs font-semibold uppercase tracking-wider text-slate-400"
                    >
                        Our Services
                    </motion.span>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                        What we{" "}
                        <span className="font-serif italic text-slate-400">do.</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                        className="mt-8 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg md:text-xl"
                    >
                        From strategy to launch, we offer end-to-end digital services
                        designed to elevate your brand and engage your audience. Every
                        detail, refined.
                    </motion.p>
                </div>

                {/* Decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mt-20 h-px origin-left bg-gradient-to-r from-slate-300 via-slate-200 to-transparent"
                />
            </div>
        </section>
    );
}
