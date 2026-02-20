"use client";

import { motion } from "framer-motion";
import { AnimateIn } from "@/components/animate-in";

export function AgencyIntro() {
    return (
        <section className="relative overflow-hidden py-32 md:py-44">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-50/50 to-indigo-50/50 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6">
                <div className="relative">
                    {/* Oversized editorial text */}
                    <AnimateIn>
                        <h2 className="max-w-5xl text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
                            We partner with ambitious brands to{" "}
                            <span className="font-serif italic text-slate-400">
                                design, build,
                            </span>{" "}
                            and launch digital products that people{" "}
                            <span className="font-serif italic text-slate-400">love</span> to
                            use.
                        </h2>
                    </AnimateIn>

                    {/* Floating UI card — inspired by image 3 */}
                    <AnimateIn direction="right" delay={0.3}>
                        <motion.div
                            className="mt-12 ml-auto max-w-sm rounded-2xl border border-slate-200/60 bg-white/80 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-md md:absolute md:right-0 md:top-1/2 md:mt-0 md:-translate-y-1/3"
                            whileHover={{ y: -4, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12)" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Latest Project
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-600">
                                    <span className="h-1 w-1 rounded-full bg-emerald-500" />
                                    Live
                                </span>
                            </div>
                            <h3 className="mt-3 text-lg font-semibold text-slate-900">
                                Meridian Rebrand
                            </h3>
                            <p className="mt-1 text-sm text-slate-500">
                                Complete identity overhaul and web platform for a fintech
                                startup.
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {["bg-indigo-200", "bg-amber-200", "bg-rose-200"].map(
                                        (bg, i) => (
                                            <div
                                                key={i}
                                                className={`h-7 w-7 rounded-full ${bg} border-2 border-white`}
                                            />
                                        )
                                    )}
                                </div>
                                <span className="text-xs text-slate-400">3 team members</span>
                            </div>
                            {/* Stats */}
                            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
                                <div>
                                    <p className="text-2xl font-semibold text-slate-900">94</p>
                                    <p className="text-xs text-slate-400">Performance score</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-semibold text-slate-900">2.1s</p>
                                    <p className="text-xs text-slate-400">Load time</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimateIn>
                </div>

                {/* Supporting stats row */}
                <div className="mt-24 grid grid-cols-2 gap-8 md:mt-32 md:grid-cols-4">
                    {[
                        { value: "50+", label: "Projects Delivered" },
                        { value: "12", label: "Awards Won" },
                        { value: "98%", label: "Client Satisfaction" },
                        { value: "6+", label: "Years of Craft" },
                    ].map((stat, i) => (
                        <AnimateIn key={stat.label} delay={i * 0.1}>
                            <div>
                                <p className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                                    {stat.value}
                                </p>
                                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
                            </div>
                        </AnimateIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
