"use client";

import Link from "next/link";
import SwapArrow from "./SwapArrow";


export default function Hero() {
  return (
    <>
      {/* ── Main hero ─────────────────────────────────────────── */}
      <section className="relative w-full min-h-[30vh] sm:min-h-[35vh] lg:min-h-[55vh] overflow-hidden bg-black flex items-center">
        <div className="mx-auto max-w-7xl px-6 sm:pt-14 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white">
              All the AI.{" "}
              <span className="text-lime-400">None of the complexity.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              Chat, genrerate code, images, voice, avatars, and video with{" "}
              <span className="text-white font-semibold">500+ models</span> —no coding,
              no prompt engineering, no technical jargon. If you can type, you can master AI.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-black hover:bg-white/90 transition"
              >
                Get started free
               <SwapArrow />
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
              <span>500+ more</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}