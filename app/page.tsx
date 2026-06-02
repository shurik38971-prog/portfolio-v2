import { Hero } from "@/components/Hero";
import { ForWho } from "@/components/ForWho";
import { Intro } from "@/components/Intro";
import { Services } from "@/components/Services";
import { Cases } from "@/components/Cases";
import { WhyMe } from "@/components/WhyMe";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { LeadMagnet } from "@/components/LeadMagnet";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ForWho />
      <Intro />
      <Services />
      <Cases />
      <WhyMe />
      <About />
      <Process />
      <Pricing />
      <FAQ />
      <LeadMagnet />
      <Contact />
    </>
  );
}
