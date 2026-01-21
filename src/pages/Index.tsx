import { useRef, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import CTASection from "@/components/CTASection";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingBulb from "@/components/FloatingBulb";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLElement>(null);
  const [hasLitUp, setHasLitUp] = useState(false);

  const handleLightUp = () => {
    setHasLitUp(true);
  };

  return (
    <div ref={containerRef} className="min-h-screen">
      <Header />
      
      {/* Lâmpada Animada Flutuante */}
      <FloatingBulb 
        containerRef={containerRef} 
        ctaSectionRef={ctaSectionRef}
        onLightUp={handleLightUp}
        hasLitUp={hasLitUp}
      />
      
      <main>
        <Hero />
        <Services />
        <Benefits />
        <CTASection ref={ctaSectionRef} isLitUp={hasLitUp} />
        <Partners />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
