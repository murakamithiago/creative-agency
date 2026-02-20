"use client";

import Link from "next/link";
import { AnimateIn } from "@/components/animate-in";

export function CtaBanner() {
    return (
        <section className="relative py-32 md:py-44">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent" />
                <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-100/40 to-blue-100/30 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6">
                <AnimateIn>
                    <div className="text-center">
                        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                            Ready to build something{" "}
                            <span className="font-serif italic text-slate-400">
                                exceptional?
                            </span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-500 sm:text-lg">
                            Let&apos;s talk about your next project and make it a reality.
                        </p>
                        <div className="mt-10">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition-all hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20"
                            >
                                Start a Conversation
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </AnimateIn>
            </div>
        </section>
    );
}
