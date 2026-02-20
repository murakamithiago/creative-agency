"use client";

import { motion } from "framer-motion";

export function AboutHero() {
    return (
        <section className="relative overflow-hidden pb-24 pt-40 md:pb-32 md:pt-52">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-50" />
                <div className="absolute left-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-indigo-100/30 to-blue-100/20 blur-3xl" />
                <div className="absolute bottom-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-violet-100/20 to-indigo-50/30 blur-3xl" />
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
                        About Us
                    </motion.span>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                        We build the web&apos;s{" "}
                        <span className="font-serif italic text-slate-400">
                            next chapter.
                        </span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                        className="mt-8 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg md:text-xl"
                    >
                        Craft Studio is a boutique web design and development agency. We
                        partner with forward-thinking brands to create digital experiences
                        that are beautiful, functional, and built to last. Every pixel,
                        every interaction — considered.
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
