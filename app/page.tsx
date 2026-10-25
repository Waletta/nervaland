import CostComparison from './components/CostComparison';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <CostComparison />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
    </main>

  );
}