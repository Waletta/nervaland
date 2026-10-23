const features = [
  { title: "Multi-model chat", description: "Talk to GPT, Claude, Gemini, Grok, Qwen and more from a single interface. Compare answers side by side." },
  { title: "Real-time web access", description: "Search the live web for news, prices, and events — get up-to-the-minute answers that models alone can't provide." },
  { title: "Algorithmic human", description: "Turn any text into a talking avatar in one click — use your own face and voice, or pick from a library of avatars and voices in every language." },
  { title: "Image generation", description: "Create images from text prompts with the best models available." },
  { title: "Voice & speech", description: "Generate natural voice, or transcribe speech to text in seconds." },
  { title: "Video generation", description: "Turn text into video and video into text with built-in tools." },
  { title: "Skills, souls & workflows", description: "Orchestrate reusable skills, souls, algorithmic humans, and automated workflows." },
  { title: "Manager mode", description: "Schedule tasks, triage your inbox, prioritize what matters, and get instant summaries of long threads and documents." },
  { title: "Code copilot", description: "Write, debug, and explain code in any language. From quick scripts to full features." },
];

export default function Features() {
  return (
    <section id="features" className="w-full bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            All the AI, in one place.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/60">
            Stop juggling tabs and API keys. Nerva brings the best AI tools together so you can focus on creating.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/2 p-6 hover:bg-white/4 transition">
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}