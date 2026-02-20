"use client";

import { motion } from "framer-motion";
import { AnimateIn } from "@/components/animate-in";

const values = [
    {
        number: "01",
        statement: "Craft over speed.",
        description:
            "We take the time to do things right — thoughtful design decisions compound into exceptional outcomes.",
    },
    {
        number: "02",
        statement: "Clarity over complexity.",
        description:
            "The best digital experiences feel effortless. We strip away noise to reveal what truly matters.",
    },
    {
        number: "03",
        statement: "Partnership over transactions.",
        description:
            "We invest in relationships that go beyond a single project — your growth is our measure of success.",
    },
];

export function Values() {
    return (
        <section className="relative py-32 md:py-44">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-50/40 to-transparent blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6">
                {/* Section header */}
                <AnimateIn>
                    <div className="text-center">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            Our Values
                        </span>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                            What we{" "}
                            <span className="font-serif italic text-slate-400">
                                believe in
                            </span>
                        </h2>
                    </div>
                </AnimateIn>

                {/* Values list */}
                <div className="mx-auto mt-20 max-w-4xl space-y-0">
                    {values.map((value, i) => (
                        <AnimateIn
                            key={value.number}
                            delay={i * 0.15}
                            direction="up"
                            distance={40}
                        >
                            <motion.div
                                className="group border-t border-slate-200/80 py-12 md:py-16"
                                whileHover={{ x: 8 }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            >
                                <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-12">
                                    {/* Number */}
                                    <span className="shrink-0 text-sm font-medium text-slate-300">
                                        {value.number}
                                    </span>

                                    {/* Statement */}
                                    <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                                        {value.statement}
                                    </h3>

                                    {/* Description */}
                                    <p className="max-w-sm text-sm leading-relaxed text-slate-500 md:ml-auto md:text-base">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimateIn>
                    ))}
                    {/* Final border */}
                    <div className="border-t border-slate-200/80" />
                </div>
            </div>
        </section>
    );
}
