"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/lib/case-studies";

type Props = {
    study: CaseStudy;
};

export function CaseStudyHero({ study }: Props) {
    const meta = [
        { label: "Client", value: study.client },
        { label: "Year", value: study.year },
        { label: "Services", value: study.services },
    ];

    return (
        <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-48">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div
                    className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-30",
                        study.gradient
                    )}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white" />
                <div className="absolute left-[30%] top-[-20%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-indigo-100/15 to-violet-50/10 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6">
                {/* Back link */}
                <motion.a
                    href="/work"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-slate-600"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                    All Projects
                </motion.a>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mt-8 text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
                >
                    {study.title}
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mt-6 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg md:text-xl"
                >
                    {study.description}
                </motion.p>

                {/* Meta tags */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="mt-10 flex flex-wrap gap-8"
                >
                    {meta.map((item) => (
                        <div key={item.label}>
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                {item.label}
                            </p>
                            <p className="mt-1 text-sm font-medium text-slate-700">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
