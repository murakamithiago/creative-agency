"use client";

import { AnimateIn } from "@/components/animate-in";

export function WhoWeAre() {
    return (
        <section className="relative overflow-hidden py-32 md:py-44">
            <div className="mx-auto max-w-7xl px-6">
                <div className="relative">
                    {/* Oversized background text — text-as-design-element */}
                    <AnimateIn>
                        <div
                            aria-hidden="true"
                            className="pointer-events-none select-none text-[clamp(5rem,15vw,12rem)] font-bold leading-[0.85] tracking-tight text-slate-100"
                        >
                            Who
                            <br />
                            we are
                        </div>
                    </AnimateIn>

                    {/* Content layered on top */}
                    <AnimateIn delay={0.2}>
                        <div className="-mt-16 ml-4 max-w-xl sm:-mt-20 sm:ml-8 md:-mt-28 md:ml-16">
                            <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-8 shadow-lg shadow-slate-100/50 backdrop-blur-md sm:p-10">
                                <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                                    A studio built on craft
                                </h2>
                                <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
                                    We&apos;re a small, senior team of designers and engineers who
                                    believe that great digital products come from deep
                                    collaboration, honest conversations, and relentless attention
                                    to detail. We don&apos;t do assembly lines — every project
                                    gets our full focus.
                                </p>
                                <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
                                    Founded in 2020, we&apos;ve grown from a two-person freelance
                                    partnership into a focused studio serving clients across
                                    fintech, wellness, architecture, and e-commerce.
                                </p>

                                {/* Small accent detail */}
                                <div className="mt-6 flex items-center gap-3">
                                    <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
                                    <span className="text-xs font-medium text-slate-400">
                                        EST. 2020
                                    </span>
                                </div>
                            </div>
                        </div>
                    </AnimateIn>
                </div>
            </div>
        </section>
    );
}
