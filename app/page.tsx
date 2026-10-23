import CostComparison from './components/CostComparison';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Features />
      <HowItWorks />
      <CostComparison />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}