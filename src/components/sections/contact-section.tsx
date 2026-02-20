"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/*  Contact info items                                                  */
/* ------------------------------------------------------------------ */

const contactInfo = [
    {
        label: "Email",
        value: "hello@craftstudio.com",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
        ),
    },
    {
        label: "Location",
        value: "São Paulo, Brazil",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
    {
        label: "Social",
        value: "Twitter · LinkedIn · Dribbble",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" x2="21" y1="14" y2="3" />
            </svg>
        ),
    },
];

/* ------------------------------------------------------------------ */
/*  Animation variants                                                  */
/* ------------------------------------------------------------------ */

const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
};

const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] },
    },
};

const staggerUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.5 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
    }),
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function ContactSection() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section className="relative overflow-hidden py-32 md:py-44">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/15 to-slate-50" />
                <div className="absolute left-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-gradient-to-br from-indigo-100/20 to-violet-50/15 blur-3xl" />
                <div className="absolute bottom-[10%] right-[-5%] h-[350px] w-[350px] rounded-full bg-gradient-to-tl from-blue-50/20 to-indigo-50/10 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
                    {/* ---- Left: Headline + Info ---- */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col justify-center"
                    >
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            Contact
                        </span>

                        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                            Let&apos;s build
                            <br />
                            something{" "}
                            <span className="font-serif italic text-slate-400">
                                great.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-md text-base leading-relaxed text-slate-500 sm:text-lg">
                            Have a project in mind? We&apos;d love to hear about it. Fill out the
                            form and we&apos;ll get back to you within 24 hours.
                        </p>

                        {/* Decorative line */}
                        <div className="my-10 h-px w-full max-w-[200px] bg-gradient-to-r from-slate-300 to-transparent" />

                        {/* Contact info */}
                        <div className="space-y-5">
                            {contactInfo.map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    custom={i}
                                    variants={staggerUp}
                                    initial="hidden"
                                    animate="visible"
                                    className="flex items-center gap-4"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50/50 text-slate-400">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                                            {item.label}
                                        </p>
                                        <p className="text-sm font-medium text-slate-700">
                                            {item.value}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ---- Right: Form ---- */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        animate="visible"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="rounded-2xl border border-slate-200/60 bg-white/70 p-8 shadow-sm backdrop-blur-sm sm:p-10"
                        >
                            <div className="space-y-6">
                                {/* Name */}
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-sm font-medium text-slate-700">
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        placeholder="Your full name"
                                        required
                                        className="border-slate-200/80 bg-slate-50/50 transition-colors focus:border-indigo-300 focus:bg-white focus-visible:ring-indigo-200/50"
                                    />
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="you@company.com"
                                        required
                                        className="border-slate-200/80 bg-slate-50/50 transition-colors focus:border-indigo-300 focus:bg-white focus-visible:ring-indigo-200/50"
                                    />
                                </div>

                                {/* Project type */}
                                <div className="space-y-2">
                                    <Label htmlFor="project-type" className="text-sm font-medium text-slate-700">
                                        Project Type
                                    </Label>
                                    <Select>
                                        <SelectTrigger
                                            id="project-type"
                                            className="border-slate-200/80 bg-slate-50/50 transition-colors focus:border-indigo-300 focus:bg-white focus:ring-indigo-200/50"
                                        >
                                            <SelectValue placeholder="Select a project type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="web-design">Web Design</SelectItem>
                                            <SelectItem value="web-development">Web Development</SelectItem>
                                            <SelectItem value="branding">Brand Identity</SelectItem>
                                            <SelectItem value="seo">SEO &amp; Performance</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-sm font-medium text-slate-700">
                                        Message
                                    </Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your project, goals, and timeline..."
                                        rows={5}
                                        required
                                        className="resize-none border-slate-200/80 bg-slate-50/50 transition-colors focus:border-indigo-300 focus:bg-white focus-visible:ring-indigo-200/50"
                                    />
                                </div>

                                {/* Submit */}
                                <Button
                                    type="submit"
                                    disabled={submitted}
                                    className="w-full rounded-full bg-slate-900 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/10 disabled:opacity-60"
                                >
                                    {submitted ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            Send Message
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                                <path d="m12 5 7 7-7 7" />
                                            </svg>
                                        </span>
                                    )}
                                </Button>
                            </div>

                            {/* Success feedback */}
                            {submitted && (
                                <motion.p
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-4 text-center text-sm text-emerald-600"
                                >
                                    ✓ Message sent! We&apos;ll be in touch soon.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
