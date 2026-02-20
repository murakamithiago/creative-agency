"use client";

import { motion } from "framer-motion";
import { AnimateIn } from "@/components/animate-in";

const services = [
    {
        number: "01",
        name: "Web Design",
        description:
            "We craft pixel-perfect interfaces that balance beauty with usability. From wireframes to high-fidelity prototypes, every screen is designed with your users in mind — creating design systems that scale with your brand.",
        capabilities: ["UI/UX Design", "Design Systems", "Prototyping", "User Research", "Responsive Design"],
    },
    {
        number: "02",
        name: "Web Development",
        description:
            "We build fast, accessible, and scalable web applications using modern technologies. Clean architecture, optimized performance, and code that's built to last — from marketing sites to complex platforms.",
        capabilities: ["Next.js / React", "TypeScript", "API Integration", "CMS Setup", "Headless Architecture"],
    },
    {
        number: "03",
        name: "Brand Identity",
        description:
            "We shape brands that resonate. Through strategic positioning, visual identity, and cohesive storytelling, we help you stand out in crowded markets — giving your brand a voice that connects with your audience.",
        capabilities: ["Logo Design", "Brand Strategy", "Visual Identity", "Brand Guidelines", "Tone of Voice"],
    },
    {
        number: "04",
        name: "SEO & Performance",
        description:
            "We optimize every layer of your digital presence for speed, discoverability, and conversion. Technical SEO, Core Web Vitals, and data-driven strategies that deliver measurable results.",
        capabilities: ["Technical SEO", "Core Web Vitals", "Analytics Setup", "Content Strategy", "Performance Audits"],
    },
];

export function ServicesList() {
    return (
        <section className="relative py-32 md:py-44">
            <div className="mx-auto max-w-7xl px-6">
                <div className="space-y-0">
                    {services.map((service, i) => (
                        <AnimateIn
                            key={service.number}
                            delay={i * 0.1}
                            direction="up"
                            distance={40}
                        >
                            <motion.div
                                className="group border-t border-slate-200/80 py-14 md:py-20"
                                whileHover={{ x: 4 }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            >
                                <div className="grid gap-8 md:grid-cols-12 md:gap-12">
                                    {/* Number */}
                                    <div className="md:col-span-1">
                                        <span className="text-sm font-medium text-slate-300">
                                            {service.number}
                                        </span>
                                    </div>

                                    {/* Service name */}
                                    <div className="md:col-span-4">
                                        <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                                            {service.name}
                                        </h3>
                                    </div>

                                    {/* Description + capabilities */}
                                    <div className="md:col-span-7">
                                        <p className="text-base leading-relaxed text-slate-500">
                                            {service.description}
                                        </p>

                                        {/* Capability tags */}
                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {service.capabilities.map((cap) => (
                                                <span
                                                    key={cap}
                                                    className="rounded-full border border-slate-200/80 bg-white/60 px-3 py-1 text-xs font-medium text-slate-500 transition-colors duration-200 hover:border-indigo-200 hover:text-indigo-500"
                                                >
                                                    {cap}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
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
