import CostComparison from './components/CostComparison';
import FAQ from './components/FAQ';
import Features from './components/Features';
import GoogleOneTap from './components/GoogleOneTap';
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
      <GoogleOneTap clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!} />
    </main>

  );
}