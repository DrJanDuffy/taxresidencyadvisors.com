import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { StatsSection } from "@/components/StatsSection";
import { ClientsSection } from "@/components/ClientsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <CaseStudiesSection />
        <StatsSection />
        <ClientsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
