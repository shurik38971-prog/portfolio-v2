import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { WhatIDesign } from "@/components/WhatIDesign";
import { DesignApproach } from "@/components/DesignApproach";
import { Cases } from "@/components/Cases";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Technologies } from "@/components/Technologies";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedProjects />
      <WhatIDesign />
      <DesignApproach />
      <Cases />
      <About />
      <Process />
      <Technologies />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}
