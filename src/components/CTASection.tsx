import { motion } from "framer-motion";
import { forwardRef, ForwardedRef } from "react";
import ContactCTAButton from "./ContactCTAButton";

interface CTASectionProps {
  isLitUp?: boolean;
}

const CTASection = forwardRef<HTMLElement, CTASectionProps>(
  function CTASection({ isLitUp = false }, ref: ForwardedRef<HTMLElement>) {
    return (
      <section 
        ref={ref}
        className="py-20 relative overflow-hidden transition-all duration-1000"
        style={{
          backgroundColor: isLitUp ? 'hsl(var(--primary))' : '#1a1a2e',
        }}
      >
        {/* Background Image - mais visível quando aceso */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1920&h=600&fit=crop')"
          }}
          animate={{
            opacity: isLitUp ? 0.1 : 0.02
          }}
          transition={{ duration: 1 }}
        />

        {/* Dark Overlay quando apagado */}
        <motion.div 
          className="absolute inset-0 bg-black/60"
          animate={{
            opacity: isLitUp ? 0 : 0.7
          }}
          transition={{ duration: 0.8 }}
        />

        {/* Decorative Elements - só aparecem quando aceso */}
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-[#A7D1EC]/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"
          animate={{
            opacity: isLitUp ? 1 : 0,
            scale: isLitUp ? 1 : 0.5
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-72 h-72 bg-[#A7D1EC]/15 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"
          animate={{
            opacity: isLitUp ? 1 : 0,
            scale: isLitUp ? 1 : 0.5
          }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-[#A7D1EC]/10 blur-3xl"
          animate={{
            opacity: isLitUp ? 1 : 0
          }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        {/* Efeito de "flash" quando acende */}
        <motion.div 
          className="absolute inset-0 bg-[#A7D1EC]/40 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isLitUp ? [0, 0.6, 0] : 0
          }}
          transition={{ duration: 0.6, times: [0, 0.3, 1] }}
        />

        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isLitUp ? 1 : 0.3,
              y: isLitUp ? 0 : 30,
              filter: isLitUp ? 'blur(0px)' : 'blur(2px)'
            }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge que aparece quando acende */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: isLitUp ? 1 : 0,
                scale: isLitUp ? 1 : 0
              }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-[#A7D1EC]/20 px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-[#A7D1EC] rounded-full animate-pulse" />
              <span className="text-[#A7D1EC] text-sm font-medium">Estamos aqui para ajudar</span>
            </motion.div>

            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl text-white mb-4"
              animate={{
                textShadow: isLitUp ? '0 0 20px rgba(167,209,236,0.3)' : 'none'
              }}
              transition={{ duration: 0.8 }}
            >
              Tem um projeto em mente?
            </motion.h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contacte-nos para uma avaliação gratuita e sem compromisso. A nossa
              equipa está pronta para ajudar no seu projeto.
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              animate={{
                opacity: isLitUp ? 1 : 0.5,
                scale: isLitUp ? 1 : 0.95
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactCTAButton href="/contacto" className="w-full sm:w-auto">
                Peça Avaliação Gratuita
              </ContactCTAButton>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isLitUp ? 1 : 0.2,
                y: isLitUp ? 0 : 20
              }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 mt-10 pt-8 border-t border-white/20"
            >
              <div className="flex items-center gap-2 text-white/70">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-[#A7D1EC]"
                  animate={{
                    boxShadow: isLitUp ? '0 0 10px rgba(167,209,236,0.8)' : 'none'
                  }}
                />
                <span className="text-sm">Orçamento Gratuito</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-[#A7D1EC]"
                  animate={{
                    boxShadow: isLitUp ? '0 0 10px rgba(167,209,236,0.8)' : 'none'
                  }}
                />
                <span className="text-sm">Resposta em 24h</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-[#A7D1EC]"
                  animate={{
                    boxShadow: isLitUp ? '0 0 10px rgba(167,209,236,0.8)' : 'none'
                  }}
                />
                <span className="text-sm">Sem Compromisso</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }
);

export default CTASection;
