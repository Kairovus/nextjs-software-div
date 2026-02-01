import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Stats from "@/components/stats";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
