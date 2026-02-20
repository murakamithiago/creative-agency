"use client";

import { AnimateIn } from "@/components/animate-in";

const team = [
    {
        name: "Elena Vasquez",
        role: "Founder & Creative Director",
        bio: "10+ years shaping digital brands. Previously led design at a top London agency.",
        initials: "EV",
        gradient: "from-indigo-200 via-indigo-100 to-blue-50",
    },
    {
        name: "Marcus Chen",
        role: "Lead Developer",
        bio: "Full-stack engineer obsessed with performance, accessibility, and clean code.",
        initials: "MC",
        gradient: "from-emerald-100 via-teal-50 to-cyan-50",
    },
    {
        name: "Sofia Andersson",
        role: "Brand Strategist",
        bio: "Turns complex ideas into clear, compelling brand narratives that connect.",
        initials: "SA",
        gradient: "from-amber-100 via-orange-50 to-rose-50",
    },
    {
        name: "James Okafor",
        role: "Motion & Interaction Designer",
        bio: "Brings interfaces to life with fluid animations and thoughtful micro-interactions.",
        initials: "JO",
        gradient: "from-violet-100 via-purple-50 to-fuchsia-50",
    },
];

export function Team() {
    return (
        <section className="relative py-32 md:py-44">
            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent" />

            <div className="mx-auto max-w-7xl px-6">
                {/* Section header */}
                <AnimateIn>
                    <div className="max-w-xl">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            The Team
                        </span>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                            Small team,{" "}
                            <span className="font-serif italic text-slate-400">
                                big ambition
                            </span>
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-slate-500">
                            Every member of our studio brings senior-level expertise and a
                            genuine love for the craft.
                        </p>
                    </div>
                </AnimateIn>

                {/* Team grid */}
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {team.map((member, i) => (
                        <AnimateIn key={member.name} delay={i * 0.1}>
                            <div className="group rounded-2xl border border-slate-200/60 bg-white/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50">
                                {/* Avatar placeholder */}
                                <div
                                    className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${member.gradient} transition-transform duration-300 group-hover:scale-105`}
                                >
                                    <span className="text-lg font-semibold text-slate-600/70">
                                        {member.initials}
                                    </span>
                                </div>

                                <h3 className="mt-5 text-base font-semibold text-slate-900">
                                    {member.name}
                                </h3>
                                <p className="mt-0.5 text-sm font-medium text-indigo-400/80">
                                    {member.role}
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                                    {member.bio}
                                </p>
                            </div>
                        </AnimateIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
