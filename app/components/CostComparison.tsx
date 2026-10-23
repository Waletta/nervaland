// app/components/CostComparison.tsx
export default function CostComparison() {
  return (
    <section className="w-full bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs sm:text-sm font-semibold text-white/50 uppercase tracking-[0.2em] mb-6">
            The subscription trap
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Stop paying for subscriptions you&apos;ll never use
          </h2>
          <p className="mt-6 text-base sm:text-lg text-white/60 leading-relaxed">
            Our research shows the average user spends{" "}
            <span className="text-white font-semibold">less than $3/month</span> on AI when
            most people pay{" "}
            <span className="text-white font-semibold">$10–$20/month</span> for subscriptions
            they barely touch.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Typical subscription */}
          <div className="rounded-2xl border border-white/10 bg-white/2 p-8">
            <p className="text-sm font-semibold text-white/50 uppercase tracking-wider">
              Typical subscription
            </p>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-5xl font-bold text-white/40 line-through">$10–20</span>
              <span className="text-sm text-white/40">/month</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-white/50">
              <li className="flex items-start gap-2">
                <span className="text-white/30">✗</span>Locked into one provider
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/30">✗</span>Pay for features you don&apos;t use
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/30">✗</span>Wasted spend every month
              </li>
            </ul>
          </div>

          {/* Nerva */}
          <div className="rounded-2xl border border-white/30 bg-white/6 p-8">
            <p className="text-sm font-semibold text-white uppercase tracking-wider">
              With Nerva
            </p>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-5xl font-bold text-lime-400">&lt;$3</span>
              <span className="text-sm text-white/60">/month avg</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-white">✓</span>Every LLM in one app
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white">✓</span>Pay only for what you use
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white">✓</span>Save up to 85% vs subscriptions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}