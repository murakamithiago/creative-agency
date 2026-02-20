import { WorkHero } from "@/components/sections/work-hero";
import { ProjectGrid } from "@/components/sections/project-grid";
import { CtaBanner } from "@/components/sections/cta-banner";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work — Craft Studio",
    description:
        "Browse our portfolio of web design, development, and branding projects built for ambitious brands.",
    openGraph: {
        title: "Work — Craft Studio",
        description: "Browse our portfolio of web design, development, and branding projects built for ambitious brands.",
        url: "https://craft-studio.com/work",
    },
};

export default function WorkPage() {
    return (
        <>
            <WorkHero />
            <ProjectGrid />
            <CtaBanner />
        </>
    );
}
