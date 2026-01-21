import { motion } from "framer-motion";
import ContactCTAButton from "./ContactCTAButton";
const CTASection = () => {
  return <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1920&h=600&fit=crop')"
    }} />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#A7D1EC]/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#A7D1EC]/15 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-[#A7D1EC]/10 blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center">
          

          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Tem um projeto em mente?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Contacte-nos para uma avaliação gratuita e sem compromisso. A nossa
            equipa está pronta para ajudar no seu projeto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactCTAButton href="/contacto" className="w-full sm:w-auto">
              Peça Avaliação Gratuita
            </ContactCTAButton>
          </div>

          {/* Trust Badges */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} className="flex flex-wrap justify-center gap-6 mt-10 pt-8 border-t border-white/20">
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 rounded-full bg-[#A7D1EC]" />
              <span className="text-sm">Orçamento Gratuito</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 rounded-full bg-[#A7D1EC]" />
              <span className="text-sm">Resposta em 24h</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 rounded-full bg-[#A7D1EC]" />
              <span className="text-sm">Sem Compromisso</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default CTASection;