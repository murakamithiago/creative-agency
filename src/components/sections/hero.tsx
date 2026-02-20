"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Soft gradient background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/40 to-slate-100" />
                {/* Decorative glassy orbs */}
                <div className="absolute right-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-indigo-200/30 to-violet-200/20 blur-3xl" />
                <div className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-blue-100/40 to-indigo-100/30 blur-3xl" />
                {/* Subtle radial arc decoration inspired by image 1 */}
                <div className="absolute bottom-0 right-0 h-[500px] w-[500px]">
                    <svg viewBox="0 0 500 500" className="h-full w-full opacity-[0.06]">
                        {[...Array(6)].map((_, i) => (
                            <circle
                                key={i}
                                cx="500"
                                cy="500"
                                r={200 + i * 40}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                className="text-slate-600"
                            />
                        ))}
                    </svg>
                </div>
            </div>

            <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-32">
                {/* Small badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-white/60 px-4 py-1.5 text-xs font-medium text-slate-600 backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                        Now accepting new projects for 2026
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl"
                >
                    Design Smarter.
                    <br />
                    Build{" "}
                    <span className="font-serif italic text-slate-500">Beautiful.</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mt-6 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg"
                >
                    We craft premium web experiences that captivate your audience and
                    elevate your brand. Strategy, design, and code — refined to
                    perfection.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mt-10 flex flex-wrap items-center gap-4"
                >
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition-all hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20"
                    >
                        Start a Project
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </Link>
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/60 px-7 py-3 text-sm font-medium text-slate-700 backdrop-blur-sm transition-all hover:border-slate-400 hover:bg-white hover:shadow-md"
                    >
                        View Our Work
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
