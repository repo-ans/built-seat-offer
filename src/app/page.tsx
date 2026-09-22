import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Challenges from "@/components/Challenges";
import WhyUs from "@/components/WhyUs";
import HowWeHelp from "@/components/HowWeHelp";
import WhatWeBuild from "@/components/WhatWeBuild";
import Proof from "@/components/Proof";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Challenges />
        <WhyUs />
        <HowWeHelp />
        <WhatWeBuild />
        <Proof />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
