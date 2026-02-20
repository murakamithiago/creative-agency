import { AboutHero } from "@/components/sections/about-hero";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { Team } from "@/components/sections/team";
import { Values } from "@/components/sections/values";
import { CtaBanner } from "@/components/sections/cta-banner";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About — Craft Studio",
    description:
        "Learn about Craft Studio — a boutique web design and development agency building premium digital experiences for ambitious brands.",
    openGraph: {
        title: "About — Craft Studio",
        description: "Learn about Craft Studio — a boutique web design and development agency building premium digital experiences for ambitious brands.",
        url: "https://craft-studio.com/about",
    },
};

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <WhoWeAre />
            <Team />
            <Values />
            <CtaBanner />
        </>
    );
}
