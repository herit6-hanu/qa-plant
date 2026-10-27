import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CategoryPreview from "@/components/home/CategoryPreview";
import Roadmap from "@/components/home/Roadmap";
import Stats from "@/components/home/Stats";
import FutureFeatures from "@/components/home/FutureFeatures";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
        <Hero />
        <Features />
        <CategoryPreview />
        <Roadmap />
        <Stats />
        <FutureFeatures />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
