import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Cases } from "@/components/Cases";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { LeadMagnet } from "@/components/LeadMagnet";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Cases />
      <About />
      <Process />
      <LeadMagnet />
      <Contact />
    </>
  );
}
