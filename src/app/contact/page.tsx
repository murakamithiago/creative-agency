import { ContactSection } from "@/components/sections/contact-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact — Craft Studio",
    description:
        "Get in touch with Craft Studio. Let's discuss your next web design, development, or branding project.",
    openGraph: {
        title: "Contact — Craft Studio",
        description: "Get in touch with Craft Studio. Let's discuss your next web design, development, or branding project.",
        url: "https://craft-studio.com/contact",
    },
};

export default function ContactPage() {
    return (
        <>
            <ContactSection />
        </>
    );
}
