"use client";

import { AnimateIn } from "@/components/animate-in";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const services = [
    {
        title: "Web Design",
        description:
            "We craft pixel-perfect interfaces that balance beauty with usability — turning your vision into a design system that scales.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-indigo-400"
            >
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
            </svg>
        ),
        features: ["UI/UX Design", "Design Systems", "Prototyping", "User Research"],
    },
    {
        title: "Development",
        description:
            "We build fast, accessible, and scalable web applications with modern technologies — from landing pages to complex platforms.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-indigo-400"
            >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        features: ["Next.js / React", "TypeScript", "API Integration", "CMS Setup"],
    },
    {
        title: "Brand Identity",
        description:
            "We shape brands that resonate — strategic positioning, visual identity, and a cohesive story that connects with your audience.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-indigo-400"
            >
                <path d="M6 3h12l4 6-10 13L2 9Z" />
                <path d="M11 3 8 9l4 13 4-13-3-6" />
                <path d="M2 9h20" />
            </svg>
        ),
        features: ["Logo Design", "Brand Strategy", "Guidelines", "Visual Identity"],
    },
];

export function Services() {
    return (
        <section className="relative py-32 md:py-44">
            {/* Subtle background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-slate-50/80 to-transparent" />

            <div className="mx-auto max-w-7xl px-6">
                {/* Section header */}
                <AnimateIn>
                    <div className="max-w-2xl">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            What We Do
                        </span>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                            Services tailored to{" "}
                            <span className="font-serif italic text-slate-400">
                                your goals
                            </span>
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
                            From concept to launch, we handle every aspect of your digital
                            presence with meticulous attention to detail.
                        </p>
                    </div>
                </AnimateIn>

                {/* Service cards */}
                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {services.map((service, i) => (
                        <AnimateIn key={service.title} delay={i * 0.1}>
                            <Card className="group h-full border-slate-200/60 bg-white/60 shadow-sm shadow-slate-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50">
                                <CardHeader>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50/80">
                                        {service.icon}
                                    </div>
                                    <CardTitle className="mt-4 text-xl font-semibold text-slate-900">
                                        {service.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm leading-relaxed text-slate-500">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {service.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-center gap-2 text-sm text-slate-600"
                                            >
                                                <span className="h-1 w-1 rounded-full bg-indigo-300" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </AnimateIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
