// app/components/Pricing.tsx
const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Try Nerva with core features.",
    features: [
      "10+ free models",
      "50 free requests per day",
      "5 free image generations per day",
      "Code assistant",
      "Community support",
    ],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Pay as you go",
    price: "Usage-based",
    description: "Only pay for what you use.",
    features: [
      "500+ LLMs instant access",
      "Advanced model settings",
      "Code assistant, avatars, and video",
      "VS Code extension",
      "Priority support",
    ],
    cta: "Get started",
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/60">
            Start free, or pay only for what you use.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-white/30 bg-white/6"
                  : "border-white/10 bg-white/2"
              }`}
            >
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
              </div>
              <p className="mt-2 text-sm text-white/60">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-white/70"
                  >
                    <span className="text-white/40">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-full px-6 py-3 text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-white text-black hover:bg-white/90"
                    : "border border-white/20 text-white hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}