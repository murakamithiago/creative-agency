import Link from "next/link";

const footerLinks = {
    Services: [
        { label: "Web Design", href: "/services" },
        { label: "Development", href: "/services" },
        { label: "Branding", href: "/services" },
        { label: "SEO & Strategy", href: "/services" },
    ],
    Company: [
        { label: "About", href: "/about" },
        { label: "Work", href: "/work" },
        { label: "Contact", href: "/contact" },
    ],
    Social: [
        { label: "Twitter", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "Dribbble", href: "#" },
    ],
};

export function Footer() {
    return (
        <footer className="border-t border-slate-200/60 bg-white/40 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-slate-800 to-slate-600">
                                <span className="text-sm font-bold text-white">C</span>
                            </div>
                            <span className="text-lg font-semibold tracking-tight text-slate-900">
                                Craft<span className="text-slate-400">.</span>
                            </span>
                        </Link>
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
                            We design and build premium digital experiences for brands that
                            want to stand out.
                        </p>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([heading, links]) => (
                        <div key={heading}>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                {heading}
                            </h4>
                            <ul className="mt-4 space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200/60 pt-8 md:flex-row">
                    <p className="text-xs text-slate-400">
                        © {new Date().getFullYear()} Craft Studio. All rights reserved.
                    </p>
                    <p className="text-xs text-slate-400">
                        Designed with precision. Built with care.
                    </p>
                </div>
            </div>
        </footer>
    );
}
