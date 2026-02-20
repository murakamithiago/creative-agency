"use client";

import { AnimateIn } from "@/components/animate-in";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const steps = [
    {
        number: "01",
        title: "Discovery",
        description:
            "We immerse ourselves in your brand, audience, and goals. Research, workshops, and strategic conversations shape a clear project brief.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Design",
        description:
            "Wireframes evolve into high-fidelity designs. We iterate rapidly, refining every detail until the visual direction feels exactly right.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Build",
        description:
            "Designs become production-ready code. We build with modern technologies, focusing on performance, accessibility, and scalability.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Launch",
        description:
            "We deploy, test, and optimize. Post-launch, we monitor performance and iterate to ensure long-term success.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2 11 13" />
                <path d="m22 2-7 20-4-9-9-4 20-7z" />
            </svg>
        ),
    },
];

export function Process() {
    return (
        <section className="relative py-32 md:py-44">
            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-slate-50/60 to-transparent" />

            <div className="mx-auto max-w-7xl px-6">
                {/* Section header */}
                <AnimateIn>
                    <div className="text-center">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            Our Process
                        </span>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                            How we{" "}
                            <span className="font-serif italic text-slate-400">work</span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-500">
                            A clear, collaborative process that keeps things moving and ensures
                            nothing falls through the cracks.
                        </p>
                    </div>
                </AnimateIn>

                {/* Steps grid */}
                <div className="relative mt-20">
                    {/* Connecting line — visible on lg+ */}
                    <div className="absolute left-0 right-0 top-[60px] z-0 hidden lg:block">
                        <AnimateIn delay={0.4}>
                            <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                        </AnimateIn>
                    </div>

                    <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, i) => (
                            <AnimateIn key={step.number} delay={i * 0.12} direction="up">
                                <Card className="group h-full border-slate-200/60 bg-white/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50">
                                    <CardHeader className="pb-4">
                                        {/* Step number + icon row */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50/50 text-slate-500 transition-colors duration-300 group-hover:from-indigo-50 group-hover:to-violet-50 group-hover:text-indigo-500">
                                                {step.icon}
                                            </div>
                                            <span className="text-xs font-medium text-slate-300">
                                                {step.number}
                                            </span>
                                        </div>

                                        <CardTitle className="mt-4 text-lg font-semibold tracking-tight text-slate-900">
                                            {step.title}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent>
                                        <p className="text-sm leading-relaxed text-slate-500">
                                            {step.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </AnimateIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
