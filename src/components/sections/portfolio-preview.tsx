"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimateIn } from "@/components/animate-in";
import Link from "next/link";

const projects = [
    {
        title: "Meridian Finance",
        category: "Web Design & Development",
        gradient: "from-indigo-200 via-indigo-100 to-blue-50",
        accent: "bg-indigo-300",
    },
    {
        title: "Solace Wellness",
        category: "Brand Identity & Website",
        gradient: "from-emerald-100 via-teal-50 to-cyan-50",
        accent: "bg-emerald-300",
    },
    {
        title: "Arcline Architecture",
        category: "Portfolio & CMS",
        gradient: "from-amber-100 via-orange-50 to-rose-50",
        accent: "bg-amber-300",
    },
];

// Card rotation presets for the stacked fan effect
const cardPositions = {
    stacked: [
        { rotate: -6, x: -20, y: 10, zIndex: 1 },
        { rotate: 0, x: 0, y: 0, zIndex: 3 },
        { rotate: 6, x: 20, y: 10, zIndex: 2 },
    ],
    fanned: [
        { rotate: -12, x: -100, y: 20, zIndex: 1 },
        { rotate: 0, x: 0, y: -10, zIndex: 3 },
        { rotate: 12, x: 100, y: 20, zIndex: 2 },
    ],
};

export function PortfolioPreview() {
    const [isHovered, setIsHovered] = useState(false);
    const positions = isHovered ? cardPositions.fanned : cardPositions.stacked;

    return (
        <section className="relative py-32 md:py-44">
            <div className="mx-auto max-w-7xl px-6">
                {/* Section header */}
                <AnimateIn>
                    <div className="text-center">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            Selected Work
                        </span>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                            Projects we&apos;re{" "}
                            <span className="font-serif italic text-slate-400">
                                proud of
                            </span>
                        </h2>
                    </div>
                </AnimateIn>

                {/* Stacked / fanned cards */}
                <AnimateIn delay={0.2}>
                    <div
                        className="relative mx-auto mt-20 flex h-[350px] w-full max-w-lg items-center justify-center sm:h-[400px]"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.title}
                                className="absolute h-[260px] w-[220px] cursor-pointer sm:h-[300px] sm:w-[260px]"
                                animate={{
                                    rotate: positions[i].rotate,
                                    x: positions[i].x,
                                    y: positions[i].y,
                                    zIndex: positions[i].zIndex,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 25,
                                }}
                                whileHover={{ scale: 1.05 }}
                                style={{ zIndex: positions[i].zIndex }}
                            >
                                <div
                                    className={`h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} border border-white/80 p-5 shadow-xl shadow-slate-200/40`}
                                >
                                    {/* Fake UI elements inside the card */}
                                    <div className="flex items-center gap-2">
                                        <div className="h-2.5 w-2.5 rounded-full bg-white/60" />
                                        <div className="h-2.5 w-2.5 rounded-full bg-white/60" />
                                        <div className="h-2.5 w-2.5 rounded-full bg-white/60" />
                                    </div>
                                    <div className="mt-6 space-y-3">
                                        <div
                                            className={`h-3 w-3/4 rounded-full ${project.accent} opacity-40`}
                                        />
                                        <div
                                            className={`h-3 w-1/2 rounded-full ${project.accent} opacity-25`}
                                        />
                                    </div>
                                    <div
                                        className={`mt-8 h-24 w-full rounded-xl ${project.accent} opacity-15 sm:h-32`}
                                    />
                                    <div className="mt-auto pt-4">
                                        <p className="text-xs font-semibold text-slate-700">
                                            {project.title}
                                        </p>
                                        <p className="mt-0.5 text-xs text-slate-500">
                                            {project.category}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </AnimateIn>

                {/* Subtext + CTA */}
                <AnimateIn delay={0.3}>
                    <div className="mt-8 text-center">
                        <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
                            We operate at the intersection of design, technology, and
                            strategy.
                        </p>
                        <Link
                            href="/work"
                            className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-2.5 text-sm font-medium text-slate-700 transition-all hover:border-slate-400 hover:bg-white hover:shadow-md"
                        >
                            View all projects →
                        </Link>
                    </div>
                </AnimateIn>
            </div>
        </section>
    );
}
