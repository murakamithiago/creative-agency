"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/lib/case-studies";

type Props = {
    next: CaseStudy;
};

export function NextProject({ next }: Props) {
    return (
        <section className="relative py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                {/* Label */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Next Project
                    </span>
                    <div className="mt-4 h-px w-full bg-gradient-to-r from-slate-200 to-transparent" />
                </motion.div>

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mt-10"
                >
                    <Link
                        href={`/work/${next.slug}`}
                        className="group block overflow-hidden rounded-2xl border border-slate-200/60 bg-white/60 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 md:rounded-3xl"
                    >
                        <div className="grid md:grid-cols-2">
                            {/* Cover */}
                            <div
                                className={cn(
                                    "relative aspect-[4/3] overflow-hidden bg-gradient-to-br md:aspect-auto md:min-h-[320px]",
                                    next.gradient
                                )}
                            >
                                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                                    {/* Browser mock */}
                                    <div className="h-[55%] w-[65%] translate-y-4 rounded-t-lg bg-white/90 shadow-lg shadow-black/5">
                                        <div className="flex items-center gap-1.5 border-b border-slate-100 px-3 py-2">
                                            <div className="h-2 w-2 rounded-full bg-slate-200" />
                                            <div className="h-2 w-2 rounded-full bg-slate-200" />
                                            <div className="h-2 w-2 rounded-full bg-slate-200" />
                                            <div className="ml-2 h-2 w-20 rounded-full bg-slate-100" />
                                        </div>
                                        <div className="space-y-2 p-4">
                                            <div className="h-2 w-3/4 rounded-full bg-slate-100" />
                                            <div className="h-2 w-1/2 rounded-full bg-slate-100" />
                                            <div className="h-2 w-2/3 rounded-full bg-slate-50" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    {next.services}
                                </span>
                                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                                    {next.title}
                                </h3>
                                <p className="mt-3 text-base leading-relaxed text-slate-500">
                                    {next.description}
                                </p>
                                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900 transition-colors group-hover:text-indigo-600">
                                    View Project
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
