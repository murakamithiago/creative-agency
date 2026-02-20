"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { CaseStudy } from "@/lib/case-studies";

type Props = {
    study: CaseStudy;
};

/* ------------------------------------------------------------------ */
/*  Counter hook                                                       */
/* ------------------------------------------------------------------ */

function useCountUp(
    target: number,
    duration: number = 2,
    start: boolean = false
) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(eased * target);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(step);
            }
        };

        animationFrame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationFrame);
    }, [target, duration, start]);

    return count;
}

/* ------------------------------------------------------------------ */
/*  Stat Card                                                          */
/* ------------------------------------------------------------------ */

function StatCard({
    result,
    index,
    inView,
}: {
    result: CaseStudy["results"][number];
    index: number;
    inView: boolean;
}) {
    const count = useCountUp(result.numericValue, 2, inView);

    // Format the displayed value
    const displayValue = () => {
        const rounded =
            result.numericValue % 1 !== 0 ? count.toFixed(1) : Math.round(count);
        return `${result.prefix}${rounded}${result.suffix}`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative text-center"
        >
            <p className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
                {inView ? displayValue() : `${result.prefix}0${result.suffix}`}
            </p>
            <p className="mt-3 text-sm font-medium uppercase tracking-wider text-slate-400">
                {result.label}
            </p>
        </motion.div>
    );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function CaseStudyResults({ study }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });

    return (
        <section className="relative py-24 md:py-36">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-indigo-50/10 to-slate-50/80" />
            </div>

            <div className="mx-auto max-w-7xl px-6">
                {/* Label */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Results &amp; Impact
                    </span>
                    <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                </motion.div>

                {/* Stats grid */}
                <div
                    ref={ref}
                    className="mt-16 grid gap-12 sm:grid-cols-3 md:mt-20 md:gap-16"
                >
                    {study.results.map((result, i) => (
                        <StatCard
                            key={result.label}
                            result={result}
                            index={i}
                            inView={isInView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
