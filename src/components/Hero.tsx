import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, Zap, Building2, BatteryCharging } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import ContactCTAButton from "./ContactCTAButton";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBackground})`
    }} />

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#A7D1EC]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#A7D1EC]/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-[#A7D1EC]/10 rounded-full blur-2xl" />

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
          }} className="flex items-center gap-4 mb-8">
              <div className="w-1 h-16 flex-shrink-0 bg-[#A7D1EC]" />
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

            {/* Stats Row */}
            
          </div>

          {/* Featured Images Grid */}
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.2
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-[#A7D1EC]/50 flex justify-center pt-2">
          <motion.div animate={{
          y: [0, 8, 0]
        }} transition={{
          repeat: Infinity,
          duration: 1.5
        }} className="w-1.5 h-1.5 bg-[#A7D1EC] rounded-full" />
        </div>
      </motion.div>
    </section>;
};
export default Hero;