import { ServicesHero } from "@/components/sections/services-hero";
import { ServicesList } from "@/components/sections/services-list";
import { Process } from "@/components/sections/process";
import { CtaBanner } from "@/components/sections/cta-banner";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services — Craft Studio",
    description:
        "Web design, development, brand identity, and SEO services — crafted with precision by Craft Studio.",
    openGraph: {
        title: "Services — Craft Studio",
        description: "Web design, development, brand identity, and SEO services — crafted with precision by Craft Studio.",
        url: "https://craft-studio.com/services",
    },
};

export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <ServicesList />
            <Process />
            <CtaBanner />
        </>
    );
}
