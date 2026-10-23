const steps = [
  { step: "01", title: "Sign up", description: "Create your account, get your private key, and get instant access to 500+ models." },
  { step: "02", title: "All in one", description: "Chat, Code assistant, generate images, create voice, build avatars, or make video—all from one single input." },
  { step: "03", title: "Create and orchestrate", description: "Use skills, souls, algorithmic human, and workflows to automate and scale your creative process." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">How Nerva works</h2>
          <p className="mt-4 text-base sm:text-lg text-white/60">From idea to output in three simple steps.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="relative">
              <span className="text-5xl font-bold text-white/10">{item.step}</span>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}