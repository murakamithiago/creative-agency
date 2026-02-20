"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/lib/case-studies";

type Props = {
    study: CaseStudy;
};

export function CaseStudyCover({ study }: Props) {
    return (
        <section className="relative px-6 pb-20 md:pb-28">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.5,
                        ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="relative overflow-hidden rounded-2xl shadow-xl shadow-slate-200/60 md:rounded-3xl"
                >
                    {/* Gradient cover */}
                    <div
                        className={cn(
                            "aspect-[16/8] w-full bg-gradient-to-br md:aspect-[16/7]",
                            study.coverGradient
                        )}
                    >
                        {/* Decorative floating elements */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Large browser mockup */}
                            <div className="relative h-[65%] w-[70%] translate-y-6 rounded-t-xl bg-white/90 shadow-2xl shadow-black/8">
                                {/* Browser chrome */}
                                <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3">
                                    <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                                    <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                                    <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                                    <div className="ml-3 h-2.5 w-48 rounded-full bg-slate-100" />
                                </div>
                                {/* Content skeleton */}
                                <div className="p-6 md:p-8">
                                    <div className="h-3 w-1/3 rounded-full bg-slate-100" />
                                    <div className="mt-4 h-2.5 w-3/4 rounded-full bg-slate-50" />
                                    <div className="mt-2 h-2.5 w-1/2 rounded-full bg-slate-50" />
                                    <div className="mt-6 grid grid-cols-3 gap-3">
                                        <div className="h-16 rounded-lg bg-slate-50 md:h-24" />
                                        <div className="h-16 rounded-lg bg-slate-50 md:h-24" />
                                        <div className="h-16 rounded-lg bg-slate-50 md:h-24" />
                                    </div>
                                    <div className="mt-4 h-2.5 w-2/3 rounded-full bg-slate-50" />
                                    <div className="mt-2 h-2.5 w-1/2 rounded-full bg-slate-50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
