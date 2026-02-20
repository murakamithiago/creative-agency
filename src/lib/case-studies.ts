export type CaseStudy = {
    slug: string;
    title: string;
    description: string;
    client: string;
    year: string;
    services: string;
    gradient: string;
    coverGradient: string;
    challenge: string;
    solution: string;
    visuals: {
        gradient: string;
        label: string;
    }[];
    results: {
        value: string;
        numericValue: number;
        suffix: string;
        prefix: string;
        label: string;
    }[];
    nextSlug: string;
};

export const caseStudies: CaseStudy[] = [
    {
        slug: "lumina",
        title: "Lumina Finance",
        description:
            "A complete digital transformation for a modern fintech platform — from brand identity to a high-performance web application.",
        client: "Lumina Inc.",
        year: "2025",
        services: "Web Design, Development",
        gradient: "from-indigo-200 via-indigo-100 to-blue-50",
        coverGradient: "from-indigo-300 via-indigo-200 to-blue-100",
        challenge:
            "Lumina Finance needed to stand apart in the crowded fintech space. Their existing platform felt dated and failed to communicate the sophistication of their financial products. Users were dropping off during onboarding, and the brand lacked the trust signals needed to convert high-value clients.",
        solution:
            "We redesigned the entire platform from the ground up — starting with a refined brand identity that communicates trust and innovation. The new web application features a streamlined onboarding flow, real-time portfolio dashboards, and an interface built for clarity. Every interaction was designed to reduce friction and build confidence.",
        visuals: [
            { gradient: "from-indigo-200 via-indigo-100 to-blue-50", label: "Dashboard Overview" },
            { gradient: "from-blue-200 via-blue-100 to-indigo-50", label: "Onboarding Flow" },
            { gradient: "from-violet-200 via-indigo-100 to-blue-50", label: "Mobile Experience" },
        ],
        results: [
            { value: "+240%", numericValue: 240, suffix: "%", prefix: "+", label: "Organic Traffic" },
            { value: "3x", numericValue: 3, suffix: "x", prefix: "", label: "Conversion Rate" },
            { value: "98", numericValue: 98, suffix: "", prefix: "", label: "Performance Score" },
        ],
        nextSlug: "verde",
    },
    {
        slug: "verde",
        title: "Verde Wellness",
        description:
            "A holistic brand identity and e-commerce experience for a premium wellness startup entering the European market.",
        client: "Verde Health Ltd.",
        year: "2025",
        services: "Branding, Web Design",
        gradient: "from-emerald-200 via-emerald-100 to-teal-50",
        coverGradient: "from-emerald-300 via-emerald-200 to-teal-100",
        challenge:
            "Verde Wellness was launching into a saturated wellness market with no established brand presence. They needed a visual identity that felt premium yet approachable, and an e-commerce platform that could tell their story while driving sales across multiple product lines.",
        solution:
            "We crafted a brand identity rooted in nature and sophistication — warm earth tones, organic shapes, and thoughtful typography. The e-commerce site was built on a headless CMS architecture, allowing the Verde team to manage content independently while maintaining a pixel-perfect storefront.",
        visuals: [
            { gradient: "from-emerald-200 via-emerald-100 to-teal-50", label: "Brand Identity" },
            { gradient: "from-teal-200 via-emerald-100 to-green-50", label: "Product Pages" },
            { gradient: "from-green-200 via-teal-100 to-emerald-50", label: "Packaging Design" },
        ],
        results: [
            { value: "+180%", numericValue: 180, suffix: "%", prefix: "+", label: "Brand Awareness" },
            { value: "4.8", numericValue: 4.8, suffix: "", prefix: "", label: "Avg. Review Score" },
            { value: "+65%", numericValue: 65, suffix: "%", prefix: "+", label: "Online Revenue" },
        ],
        nextSlug: "archaus",
    },
    {
        slug: "archaus",
        title: "Archaus Studio",
        description:
            "A portfolio platform and booking system for one of São Paulo's most sought-after architecture firms.",
        client: "Archaus Arquitetura",
        year: "2024",
        services: "Development, SEO",
        gradient: "from-amber-200 via-amber-100 to-orange-50",
        coverGradient: "from-amber-300 via-amber-200 to-orange-100",
        challenge:
            "Archaus had an impressive portfolio but their website did not do it justice. A slow, template-based site was costing them leads, and the lack of an integrated booking system meant project inquiries were falling through the cracks. They needed a platform that was as refined as their architecture.",
        solution:
            "We built a bespoke portfolio platform using Next.js, optimized for speed and SEO. High-resolution project galleries load instantly thanks to progressive image optimization. An integrated consultation booking system connects directly with their calendar, reducing the inquiry-to-meeting timeline from days to hours.",
        visuals: [
            { gradient: "from-amber-200 via-amber-100 to-orange-50", label: "Project Gallery" },
            { gradient: "from-orange-200 via-amber-100 to-yellow-50", label: "Booking System" },
            { gradient: "from-yellow-200 via-amber-100 to-orange-50", label: "Responsive Views" },
        ],
        results: [
            { value: "+320%", numericValue: 320, suffix: "%", prefix: "+", label: "Page Speed" },
            { value: "2x", numericValue: 2, suffix: "x", prefix: "", label: "Qualified Leads" },
            { value: "#1", numericValue: 1, suffix: "", prefix: "#", label: "Google Ranking" },
        ],
        nextSlug: "nebula",
    },
    {
        slug: "nebula",
        title: "Nebula SaaS",
        description:
            "A product design and engineering sprint for a B2B analytics platform serving enterprise clients.",
        client: "Nebula Technologies",
        year: "2024",
        services: "Web Design, Development",
        gradient: "from-violet-200 via-violet-100 to-purple-50",
        coverGradient: "from-violet-300 via-violet-200 to-purple-100",
        challenge:
            "Nebula's analytics platform was powerful under the hood but overwhelming on the surface. Enterprise users were struggling with complex workflows, and the onboarding experience had a steep learning curve. The challenge was to simplify without sacrificing capability.",
        solution:
            "Through extensive user research and iterative prototyping, we redesigned the entire dashboard experience. A progressive disclosure approach means users see only what they need, when they need it. Custom data visualizations make complex metrics instantly understandable, and a guided onboarding flow reduced time-to-value by 60%.",
        visuals: [
            { gradient: "from-violet-200 via-violet-100 to-purple-50", label: "Analytics Dashboard" },
            { gradient: "from-purple-200 via-violet-100 to-indigo-50", label: "Data Visualizations" },
            { gradient: "from-indigo-200 via-violet-100 to-purple-50", label: "Onboarding Wizard" },
        ],
        results: [
            { value: "-60%", numericValue: 60, suffix: "%", prefix: "-", label: "Time to Value" },
            { value: "+92%", numericValue: 92, suffix: "%", prefix: "+", label: "User Satisfaction" },
            { value: "45%", numericValue: 45, suffix: "%", prefix: "", label: "Churn Reduction" },
        ],
        nextSlug: "mono",
    },
    {
        slug: "mono",
        title: "Mono Magazine",
        description:
            "A digital-first editorial platform for an independent culture publication redefining long-form journalism.",
        client: "Mono Media Group",
        year: "2024",
        services: "Branding, Development",
        gradient: "from-slate-300 via-slate-200 to-slate-100",
        coverGradient: "from-slate-400 via-slate-300 to-slate-200",
        challenge:
            "Mono Magazine was transitioning from print to digital-first publication. They needed a reading experience that honored the editorial craft of their content while working flawlessly across devices. The brand identity needed to bridge their print heritage with a modern digital presence.",
        solution:
            "We designed a typographically rich reading experience inspired by the best of print editorial design. Custom article layouts, immersive long-form templates, and a bespoke CMS give editors full creative control. The brand refresh maintains Mono's distinctive character while feeling unmistakably digital-native.",
        visuals: [
            { gradient: "from-slate-300 via-slate-200 to-slate-100", label: "Editorial Layout" },
            { gradient: "from-gray-300 via-slate-200 to-zinc-100", label: "Article Templates" },
            { gradient: "from-zinc-300 via-slate-200 to-gray-100", label: "Brand Guidelines" },
        ],
        results: [
            { value: "+400%", numericValue: 400, suffix: "%", prefix: "+", label: "Digital Readers" },
            { value: "6min", numericValue: 6, suffix: "min", prefix: "", label: "Avg. Read Time" },
            { value: "+85%", numericValue: 85, suffix: "%", prefix: "+", label: "Subscriber Growth" },
        ],
        nextSlug: "kinetic",
    },
    {
        slug: "kinetic",
        title: "Kinetic Labs",
        description:
            "A marketing site and developer documentation hub for a fast-growing API infrastructure company.",
        client: "Kinetic Labs Inc.",
        year: "2023",
        services: "Web Design, Development",
        gradient: "from-cyan-200 via-cyan-100 to-sky-50",
        coverGradient: "from-cyan-300 via-cyan-200 to-sky-100",
        challenge:
            "Kinetic Labs needed to communicate complex API infrastructure to both technical and non-technical audiences. Their documentation was scattered, their marketing site underperformed, and developer adoption was stalling because potential users could not quickly understand the product's value.",
        solution:
            "We created a dual-experience platform: a marketing site with clear, jargon-free messaging for decision-makers, and an integrated documentation hub for developers with interactive code examples, live API playgrounds, and version-controlled guides. The result is a single platform that serves every stakeholder in the sales funnel.",
        visuals: [
            { gradient: "from-cyan-200 via-cyan-100 to-sky-50", label: "Marketing Homepage" },
            { gradient: "from-sky-200 via-cyan-100 to-blue-50", label: "Developer Docs" },
            { gradient: "from-blue-200 via-sky-100 to-cyan-50", label: "API Playground" },
        ],
        results: [
            { value: "+150%", numericValue: 150, suffix: "%", prefix: "+", label: "Developer Signups" },
            { value: "3.2x", numericValue: 3.2, suffix: "x", prefix: "", label: "API Adoption" },
            { value: "99.9%", numericValue: 99.9, suffix: "%", prefix: "", label: "Uptime Score" },
        ],
        nextSlug: "forma",
    },
    {
        slug: "forma",
        title: "Forma Architects",
        description:
            "A minimal, immersive portfolio experience for a residential architecture practice based in Lisbon.",
        client: "Forma Arquitectos",
        year: "2023",
        services: "Web Design, Branding",
        gradient: "from-rose-200 via-rose-100 to-pink-50",
        coverGradient: "from-rose-300 via-rose-200 to-pink-100",
        challenge:
            "Forma Architects wanted a portfolio that felt like walking through one of their buildings — spatial, intentional, and unhurried. Their previous site was a generic template that did not reflect the studio's meticulous approach to design.",
        solution:
            "We designed a full-screen, scroll-driven portfolio that reveals projects cinematically. Each case study is a curated sequence of images, drawings, and details that unfolds as the user scrolls. The minimalist interface ensures the architecture remains the hero at every moment.",
        visuals: [
            { gradient: "from-rose-200 via-rose-100 to-pink-50", label: "Home Experience" },
            { gradient: "from-pink-200 via-rose-100 to-red-50", label: "Project Reveal" },
            { gradient: "from-red-200 via-rose-100 to-pink-50", label: "Detail Views" },
        ],
        results: [
            { value: "+210%", numericValue: 210, suffix: "%", prefix: "+", label: "Time on Site" },
            { value: "5x", numericValue: 5, suffix: "x", prefix: "", label: "Project Inquiries" },
            { value: "98", numericValue: 98, suffix: "", prefix: "", label: "Lighthouse Score" },
        ],
        nextSlug: "pulse",
    },
    {
        slug: "pulse",
        title: "Pulse Health",
        description:
            "A patient-facing health dashboard and telehealth platform for a digital health startup.",
        client: "Pulse Digital Health",
        year: "2023",
        services: "Development, Web Design",
        gradient: "from-teal-200 via-teal-100 to-emerald-50",
        coverGradient: "from-teal-300 via-teal-200 to-emerald-100",
        challenge:
            "Pulse Health was building a patient-first telehealth platform but struggled with user trust. Health data is sensitive, and patients needed to feel their information was secure and accessible. The existing prototype was functional but felt cold and clinical.",
        solution:
            "We redesigned the platform with warmth and clarity as guiding principles. Soft colors, clear data visualizations, and a conversational UI for telehealth appointments create an experience that feels human. Under the hood, we implemented end-to-end encryption and HIPAA-compliant architecture.",
        visuals: [
            { gradient: "from-teal-200 via-teal-100 to-emerald-50", label: "Health Dashboard" },
            { gradient: "from-emerald-200 via-teal-100 to-green-50", label: "Telehealth UI" },
            { gradient: "from-green-200 via-emerald-100 to-teal-50", label: "Mobile App" },
        ],
        results: [
            { value: "+95%", numericValue: 95, suffix: "%", prefix: "+", label: "Patient Satisfaction" },
            { value: "4.9", numericValue: 4.9, suffix: "", prefix: "", label: "App Store Rating" },
            { value: "-40%", numericValue: 40, suffix: "%", prefix: "-", label: "No-show Rate" },
        ],
        nextSlug: "lumina",
    },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
    return caseStudies.find((cs) => cs.slug === slug);
}

export function getNextCaseStudy(slug: string): CaseStudy | undefined {
    const current = getCaseStudy(slug);
    if (!current) return undefined;
    return getCaseStudy(current.nextSlug);
}

export function getAllSlugs(): string[] {
    return caseStudies.map((cs) => cs.slug);
}
