import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import ContactCTAButton from "./ContactCTAButton";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBackground})`
    }} />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />

      {/* Content */}
      <div className="container-custom relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Soluções de Eletricidade, Construção e Mobilidade Elétrica,
            </motion.h1>
            
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="flex items-start gap-4 mb-8">
              <div className="w-1 h-16 flex-shrink-0 bg-[#a8d0eb]" />
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Impulsionamos o seu projeto com excelência técnica, rigor e
                inovação. Há mais de duas décadas a transformar ideias em
                realidade.
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} className="flex flex-col sm:flex-row gap-4">
              <ContactCTAButton href="/contacto">
                Peça um Orçamento
              </ContactCTAButton>
              <ContactCTAButton href="/contacto">
                Contacte-nos
              </ContactCTAButton>
            </motion.div>
          </div>

          {/* Icon Graphic */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }} className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="w-40 h-40 rounded-full border-2 border-white/30 flex items-center justify-center">
                <Lightbulb className="w-20 h-20 text-white/80" strokeWidth={1} />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex flex-col gap-2">
                <div className="w-12 h-1 bg-white/60 rounded-full" />
                <div className="w-8 h-1 bg-white/40 rounded-full ml-2" />
                <div className="w-6 h-1 bg-white/30 rounded-full ml-3" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        
      </motion.div>
    </section>;
};
export default Hero;