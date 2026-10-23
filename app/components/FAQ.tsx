const faqs = [
  { question: "Which models are supported?", answer: "Nerva supports GPT, Claude, Gemini, Grok, Qwen and more (500+ models). You can switch between them anytime." },
  { question: "Can I change how the AI responds?", answer: "Yes. Most AI subscriptions does not offer control over models' settings, but Nerva lets you adjust them when you want. In simple terms, they help shape how focused, accurate, or creative an answer feels. You don’t need to understand the technical names—start with the defaults and experiment when you want a different kind of response." },
  { question: "Is there a VS Code extension?", answer: "Yes. The Nerva VS Code extension brings the same workspace into your editor, so you can work with AI without switching tabs, chat with your code using natural language in VS Code. It can **review your code**, **suggest improvements**, **generate new code**, and **help fix bugs**. Your conversations stay in sync: then pick it up later in the Nerva Web app." },
  { question: "How does pricing work?", answer: "Start free, or use pay-as-you-go." },
  {
    question: "How does pay-as-you-go work?",
    answer:
      "You top up your Nerva balance with credits. Each request deducts only what it actually costs—usually less than a cent. Credits stay in your Nerva balance and never expire. Use them whenever you want, at your own pace.",
  },
   {
    question: "Can I get a refund for unused credits?",
    answer:
      "Yes. You can request a refund for your unused Nerva credit balance. Approved refunds are returned to your original payment method.",
  },
  {
    question: "Are Nerva’s servers located in the European Union?",
    answer:
      "Yes. Nerva’s servers are hosted in the European Union. Some AI requests are routed to third-party model providers, whose processing locations and data practices may differ. See our Privacy Policy for details.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="w-full bg-black border-t border-white/10">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Frequently asked questions</h2>
          <p className="mt-4 text-base sm:text-lg text-white/60">Everything you need to know about Nerva.</p>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-white/10 bg-white/2 p-6">
              <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-white">
                {faq.question}
                <span className="text-white/40 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}