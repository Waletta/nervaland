import Link from "next/link";

export default function CTA() {
  return (
    <section className="w-full bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/3 px-6 py-16 sm:px-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Ready to create with Nerva?</h2>
          <p className="mt-4 text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
            Join thousands of creators using Nerva to chat, generate, and orchestrate AI—without the complexity.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="w-full sm:w-auto rounded-full bg-white px-8 py-3 text-sm font-semibold text-black hover:bg-white/90 transition">
              Get started free
            </Link>
            <Link href="/docs" className="w-full sm:w-auto rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
              Read the docs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}