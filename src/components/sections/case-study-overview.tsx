"use client";

import { AnimateIn } from "@/components/animate-in";
import type { CaseStudy } from "@/lib/case-studies";

type Props = {
    study: CaseStudy;
};

export function CaseStudyOverview({ study }: Props) {
    return (
        <section className="relative py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                {/* Section label */}
                <AnimateIn direction="up" delay={0}>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Project Overview
                    </span>
                    <div className="mt-4 h-px w-full bg-gradient-to-r from-slate-200 to-transparent" />
                </AnimateIn>

                {/* Two columns */}
                <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
                    {/* Challenge */}
                    <AnimateIn direction="up" delay={0.1}>
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                            The Challenge
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
                            {study.challenge}
                        </p>
                    </AnimateIn>

                    {/* Solution */}
                    <AnimateIn direction="up" delay={0.2}>
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                            The Solution
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
                            {study.solution}
                        </p>
                    </AnimateIn>
                </div>
            </div>
        </section>
    );
}
