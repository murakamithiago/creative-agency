"use client";

import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/animate-in";
import type { CaseStudy } from "@/lib/case-studies";

type Props = {
    study: CaseStudy;
};

export function CaseStudyVisuals({ study }: Props) {
    return (
        <section className="relative py-8 md:py-16">
            <div className="mx-auto max-w-7xl px-6">
                <div className="space-y-8 md:space-y-12">
                    {study.visuals.map((visual, i) => (
                        <AnimateIn key={visual.label} direction="up" delay={i * 0.1}>
                            <div className="relative overflow-hidden rounded-2xl shadow-lg shadow-slate-200/40 md:rounded-3xl">
                                {/* Gradient placeholder */}
                                <div
                                    className={cn(
                                        "relative bg-gradient-to-br",
                                        i === 0 ? "aspect-[16/8]" : "aspect-[16/9]",
                                        visual.gradient
                                    )}
                                >
                                    {/* Inner mockup */}
                                    <div className="absolute inset-0 flex items-center justify-center p-8 md:p-16">
                                        <div
                                            className={cn(
                                                "relative w-full rounded-xl bg-white/85 shadow-xl shadow-black/5",
                                                i === 0 ? "max-w-3xl" : "max-w-2xl"
                                            )}
                                        >
                                            {/* Browser bar */}
                                            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-2.5">
                                                <div className="h-2 w-2 rounded-full bg-slate-200" />
                                                <div className="h-2 w-2 rounded-full bg-slate-200" />
                                                <div className="h-2 w-2 rounded-full bg-slate-200" />
                                                <div className="ml-2 h-2 w-24 rounded-full bg-slate-100 sm:w-36" />
                                            </div>
                                            {/* Content skeleton */}
                                            <div className="space-y-3 p-5 md:p-6">
                                                <div className="h-2.5 w-2/5 rounded-full bg-slate-100" />
                                                <div className="h-2 w-3/4 rounded-full bg-slate-50" />
                                                <div className="h-2 w-1/2 rounded-full bg-slate-50" />
                                                {i === 0 && (
                                                    <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                                                        <div className="h-12 rounded-lg bg-slate-50 sm:h-16" />
                                                        <div className="h-12 rounded-lg bg-slate-50 sm:h-16" />
                                                        <div className="hidden h-16 rounded-lg bg-slate-50 sm:block" />
                                                    </div>
                                                )}
                                                {i === 1 && (
                                                    <div className="mt-4 flex gap-2">
                                                        <div className="h-20 flex-1 rounded-lg bg-slate-50" />
                                                        <div className="h-20 flex-1 rounded-lg bg-slate-50" />
                                                    </div>
                                                )}
                                                {i === 2 && (
                                                    <div className="mt-4 space-y-2">
                                                        <div className="h-2 w-full rounded-full bg-slate-50" />
                                                        <div className="h-2 w-4/5 rounded-full bg-slate-50" />
                                                        <div className="h-2 w-3/5 rounded-full bg-slate-50" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Image label */}
                                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                                    <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-sm">
                                        {visual.label}
                                    </span>
                                </div>
                            </div>
                        </AnimateIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
