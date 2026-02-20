"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Project data                                                       */
/* ------------------------------------------------------------------ */

type Project = {
    id: string;
    name: string;
    category: string;
    filterTag: string;
    year: string;
    gradient: string;
    accent: string;
};

const projects: Project[] = [
    {
        id: "lumina",
        name: "Lumina Finance",
        category: "Web Design",
        filterTag: "Web Design",
        year: "2025",
        gradient: "from-indigo-200 via-indigo-100 to-blue-50",
        accent: "bg-indigo-100 text-indigo-600",
    },
    {
        id: "verde",
        name: "Verde Wellness",
        category: "Branding",
        filterTag: "Branding",
        year: "2025",
        gradient: "from-emerald-200 via-emerald-100 to-teal-50",
        accent: "bg-emerald-100 text-emerald-600",
    },
    {
        id: "archaus",
        name: "Archaus Studio",
        category: "Development",
        filterTag: "Development",
        year: "2024",
        gradient: "from-amber-200 via-amber-100 to-orange-50",
        accent: "bg-amber-100 text-amber-600",
    },
    {
        id: "nebula",
        name: "Nebula SaaS",
        category: "Web Design",
        filterTag: "Web Design",
        year: "2024",
        gradient: "from-violet-200 via-violet-100 to-purple-50",
        accent: "bg-violet-100 text-violet-600",
    },
    {
        id: "mono",
        name: "Mono Magazine",
        category: "Branding",
        filterTag: "Branding",
        year: "2024",
        gradient: "from-slate-300 via-slate-200 to-slate-100",
        accent: "bg-slate-200 text-slate-600",
    },
    {
        id: "kinetic",
        name: "Kinetic Labs",
        category: "Development",
        filterTag: "Development",
        year: "2023",
        gradient: "from-cyan-200 via-cyan-100 to-sky-50",
        accent: "bg-cyan-100 text-cyan-600",
    },
    {
        id: "forma",
        name: "Forma Architects",
        category: "Web Design",
        filterTag: "Web Design",
        year: "2023",
        gradient: "from-rose-200 via-rose-100 to-pink-50",
        accent: "bg-rose-100 text-rose-600",
    },
    {
        id: "pulse",
        name: "Pulse Health",
        category: "Development",
        filterTag: "Development",
        year: "2023",
        gradient: "from-teal-200 via-teal-100 to-emerald-50",
        accent: "bg-teal-100 text-teal-600",
    },
];

const filters = ["All", "Web Design", "Development", "Branding"];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function ProjectGrid() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filtered =
        activeFilter === "All"
            ? projects
            : projects.filter((p) => p.filterTag === activeFilter);

    return (
        <section className="relative py-8 md:py-16">
            <div className="mx-auto max-w-7xl px-6">
                {/* Filter buttons */}
                <div className="flex flex-wrap items-center gap-2">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={cn(
                                "relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200",
                                activeFilter === filter
                                    ? "text-slate-900"
                                    : "text-slate-400 hover:text-slate-600"
                            )}
                        >
                            {/* Active indicator pill */}
                            {activeFilter === filter && (
                                <motion.span
                                    layoutId="filter-pill"
                                    className="absolute inset-0 rounded-full border border-slate-200 bg-white shadow-sm"
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 35,
                                    }}
                                />
                            )}
                            <span className="relative z-10">{filter}</span>
                        </button>
                    ))}

                    {/* Result count */}
                    <span className="ml-auto text-sm text-slate-400">
                        {filtered.length} project{filtered.length !== 1 ? "s" : ""}
                    </span>
                </div>

                {/* Grid */}
                <LayoutGroup>
                    <motion.div
                        layout
                        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        <AnimatePresence mode="popLayout">
                            {filtered.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </LayoutGroup>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  Project Card                                                       */
/* ------------------------------------------------------------------ */

function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.article
            layout
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{
                opacity: { duration: 0.25 },
                layout: { type: "spring", stiffness: 400, damping: 30 },
                scale: { duration: 0.3 },
            }}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-2xl border border-slate-200/60 bg-white/60 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/60"
        >
            <Link href={`/work/${project.id}`} className="block">
                {/* Image placeholder */}
                <div className="relative aspect-[4/3] overflow-hidden">
                    <div
                        className={cn(
                            "absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-105",
                            project.gradient
                        )}
                    />

                    {/* Decorative layered elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Floating "browser" mock */}
                        <div className="relative h-[60%] w-[75%] translate-y-4 rounded-t-lg bg-white/90 shadow-lg shadow-black/5 transition-transform duration-500 group-hover:translate-y-2">
                            {/* Browser "dots" */}
                            <div className="flex items-center gap-1.5 border-b border-slate-100 px-3 py-2">
                                <div className="h-2 w-2 rounded-full bg-slate-200" />
                                <div className="h-2 w-2 rounded-full bg-slate-200" />
                                <div className="h-2 w-2 rounded-full bg-slate-200" />
                                <div className="ml-2 h-2 flex-1 rounded-full bg-slate-100" />
                            </div>
                            {/* Content lines */}
                            <div className="space-y-2 p-4">
                                <div className="h-2 w-3/4 rounded-full bg-slate-100" />
                                <div className="h-2 w-1/2 rounded-full bg-slate-100" />
                                <div className="h-2 w-2/3 rounded-full bg-slate-50" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card info */}
                <div className="px-5 pb-6 pt-5">
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <h3 className="text-base font-semibold tracking-tight text-slate-900">
                                {project.name}
                            </h3>
                            <p className="mt-0.5 text-sm text-slate-400">{project.year}</p>
                        </div>
                        <span
                            className={cn(
                                "shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium",
                                project.accent
                            )}
                        >
                            {project.category}
                        </span>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
