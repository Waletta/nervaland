"use client";

import Link from "next/link";

const highlights = [
  {
    title: "500+ models, one app",
    description:
      "Access every major model from around the world—GPT, Claude, Gemini, Llama, Mistral, DeepSeek, Qwen, and hundreds more.",
  },
  {
    title: "Latest models, day one",
    description:
      "New models land in Nerva the day after launch. No waiting, no API keys, no setup.",
  },
  {
    title: "Code, images, video",
    description:
      "Generate code, voice, images, avatars, and video—all in one place.",
  },
  {
    title: "Works in VS Code",
    description:
      "Bring the same workspace into your editor with the Nerva VS Code extension.",
  },
];

export default function Hero() {
  return (
    <>
      {/* ── Main hero ─────────────────────────────────────────── */}
      <section className="relative w-full min-h-[70vh] sm:min-h-[75vh] lg:min-h-[85vh] overflow-hidden bg-black flex items-center">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
        
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white">
              All the AI.{" "}
              <span className="text-lime-400">None of the complexity.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              Chat, genrerate code, images, voice, avatars, and video with{" "}
              <span className="text-white font-semibold">500+ models</span> —no coding,
              no prompt engineering, no jargon. If you can type, you can use Nerva.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="w-full sm:w-auto rounded-full bg-white px-8 py-3 text-sm font-semibold text-black hover:bg-white/90 transition"
              >
                Get started free
              </Link>
             
            </div>

            {/* Trust strip */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-white/40">
              <span>GPT · Gemini · Claude</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">·</span>
              <span>Grok · Qwen</span>
              <span>Llama · Mistral · DeepSeek</span>
              <span className="hidden sm:inline">·</span>
              <span>+ hundreds more</span>
            </div>
          </div>
        </div>
      </section>
      {/* ── Feature highlights ────────────────────────────────── */}
      <section className="w-full bg-black border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/2 p-6 hover:bg-white/4 transition"
              >
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}