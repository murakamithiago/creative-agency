import { notFound } from "next/navigation";
import { getCaseStudy, getNextCaseStudy, getAllSlugs } from "@/lib/case-studies";
import { CaseStudyHero } from "@/components/sections/case-study-hero";
import { CaseStudyCover } from "@/components/sections/case-study-cover";
import { CaseStudyOverview } from "@/components/sections/case-study-overview";
import { CaseStudyVisuals } from "@/components/sections/case-study-visuals";
import { CaseStudyResults } from "@/components/sections/case-study-results";
import { NextProject } from "@/components/sections/next-project";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const study = getCaseStudy(slug);
    if (!study) return {};

    return {
        title: `${study.title} — Craft Studio`,
        description: study.description,
        openGraph: {
            title: `${study.title} — Craft Studio`,
            description: study.description,
            url: `https://craft-studio.com/work/${slug}`,
        }
    };
}

export default async function CaseStudyPage({ params }: Props) {
    const { slug } = await params;
    const study = getCaseStudy(slug);

    if (!study) {
        notFound();
    }

    const nextStudy = getNextCaseStudy(slug);

    return (
        <>
            <CaseStudyHero study={study} />
            <CaseStudyCover study={study} />
            <CaseStudyOverview study={study} />
            <CaseStudyVisuals study={study} />
            <CaseStudyResults study={study} />
            {nextStudy && <NextProject next={nextStudy} />}
        </>
    );
}
