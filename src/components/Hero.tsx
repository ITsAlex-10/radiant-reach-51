import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, Zap, Building2, BatteryCharging } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import ContactCTAButton from "./ContactCTAButton";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      />

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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#A7D1EC]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Zap className="w-4 h-4 text-[#A7D1EC]" />
              <span className="font-body text-sm">Desde 1986</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
            >
              Soluções de Eletricidade, Construção e Mobilidade Elétrica,
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-1 h-16 flex-shrink-0 bg-[#A7D1EC]" />
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Impulsionamos o seu projeto com excelência técnica, rigor e
                inovação. Há mais de duas décadas a transformar ideias em
                realidade.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <ContactCTAButton href="/contacto">
                Peça um Orçamento
              </ContactCTAButton>
              <ContactCTAButton href="/contacto">
                Contacte-nos
              </ContactCTAButton>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#A7D1EC]/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-[#A7D1EC]" />
                </div>
                <div>
                  <p className="font-heading text-2xl">500+</p>
                  <p className="text-sm text-white/70">Projetos</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#A7D1EC]/20 flex items-center justify-center">
                  <BatteryCharging className="w-6 h-6 text-[#A7D1EC]" />
                </div>
                <div>
                  <p className="font-heading text-2xl">100+</p>
                  <p className="text-sm text-white/70">Postos EV</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Featured Images Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl border-2 border-[#A7D1EC]/30">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop"
                  alt="Instalação elétrica"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>
              <div className="relative overflow-hidden rounded-2xl border-2 border-[#A7D1EC]/30">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=350&fit=crop"
                  alt="Energia solar"
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative overflow-hidden rounded-2xl border-2 border-[#A7D1EC]/30">
                <img
                  src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=350&fit=crop"
                  alt="Mobilidade elétrica"
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>
              <div className="relative overflow-hidden rounded-2xl border-2 border-[#A7D1EC]/30">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
                  alt="Infraestrutura elétrica"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-[#A7D1EC]/50 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-[#A7D1EC] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
