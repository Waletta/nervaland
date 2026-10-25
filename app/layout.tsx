import type { Metadata } from 'next';

import { Geist_Mono } from "next/font/google";
import "./global.css";

import Script from 'next/dist/client/script';
import Footer from './components/Footer';
import Topbar from './components/Topbar';

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
});


export const metadata: Metadata = {
    metadataBase: new URL("https://www.nerva.live"),

    title: {
        default: "Nerva — One app for All AI",
        template: "%s | Nerva",
    },

    description:
        "Nerva gives you AI chat, images, voice, avatars, and video in one smooth workspace. No multiples API keys, no providers to learn—just create. And unlike most AI apps, Nerva lets you adjust model settings like temperature, top-p, and top-k when you want deeper control. Also available inside VS Code.",

    keywords: [
        "AI workspace for non-technical users",
        "AI app no coding",
        "simple AI app",
        "AI without prompt engineering",
        "AI model settings control",
        "advanced LLM settings",
        "AI image generation app",
        "AI video maker app",
        "AI voice generator app",
        "text to video",
        "video to text",
        "text to speech",
        "speech to text",
        "AI chat app",
        "multi-model AI chat",
        "AI agent platform",
        "AI skills management",
        "AI soul",
        "AI human manager",
        "AI workflow manager",
        "AI workflow automation",
        "VS Code AI extension, integration",
        "Connect Github Copilot",
        "Connect Gitlab Copilot",
        "Connect GitKraken Copilot",
        "pay as-you-go AI app",
        "Nerva",
    ],
    authors: [{ name: "Nerva" }],
    creator: "Nerva",
    publisher: "Nerva",

    alternates: {
        canonical: "/",
    },

    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.nerva.live",
        siteName: "Nerva",
        title: "Nerva — One app for every LLM, voice, and avatar",
        description:
            "Chat with any LLM, generate voice with ElevenLabs, create AI avatars with HeyGen, and orchestrate skills, souls, algorithmic humans, and workflows—from the web or inside VS Code.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Nerva — One app for 500+ LLM, voice, speech, and workflow models",
        description:
            "Chat with any LLM, generate voice with ElevenLabs, create AI avatars with HeyGen, and orchestrate skills, souls, algorithmic humans, and workflows.",
        images: ["/og-image.png"],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${geistMono.className} bg-black text-white antialiased`}>
                <Topbar />
                {children}
                <Footer />
                <Script src="https://accounts.google.com/gsi/client" strategy="afterInteractive" />
            </body>
        </html>
    );
}