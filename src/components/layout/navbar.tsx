"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="mx-auto max-w-7xl px-6 py-4">
                <nav className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/70 px-6 py-3 shadow-sm backdrop-blur-xl">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-slate-800 to-slate-600">
                            <span className="text-sm font-bold text-white">C</span>
                        </div>
                        <span className="text-lg font-semibold tracking-tight text-slate-900">
                            Craft<span className="text-slate-400">.</span>
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <ul className="hidden items-center gap-1 md:flex">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <Link
                        href="/contact"
                        className="hidden rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-slate-800 hover:shadow-md md:inline-flex"
                    >
                        Get in Touch
                    </Link>

                    {/* Mobile burger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="flex flex-col gap-1.5 md:hidden"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="block h-0.5 w-6 bg-slate-800"
                        />
                        <motion.span
                            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block h-0.5 w-6 bg-slate-800"
                        />
                        <motion.span
                            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="block h-0.5 w-6 bg-slate-800"
                        />
                    </button>
                </nav>

                {/* Mobile menu */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-lg backdrop-blur-xl md:hidden"
                        >
                            <ul className="flex flex-col gap-1">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-3 border-t border-slate-100 pt-3">
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileOpen(false)}
                                    className="block rounded-full bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-slate-800"
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
