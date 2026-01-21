import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Lightbulb } from "lucide-react";

interface FloatingBulbProps {
  containerRef: React.RefObject<HTMLDivElement>;
  ctaSectionRef: React.RefObject<HTMLElement>;
  onLightUp: () => void;
  hasLitUp: boolean;
}

const FloatingBulb = ({ containerRef, ctaSectionRef, onLightUp, hasLitUp }: FloatingBulbProps) => {
  const [isNearCTA, setIsNearCTA] = useState(false);
  
  // Rastreia o progresso do scroll da página inteira
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Detectar quando estamos perto da secção CTA
  useEffect(() => {
    const handleScroll = () => {
      if (!ctaSectionRef.current) return;
      
      const ctaRect = ctaSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Quando o topo da secção CTA está visível
      const distanceToTop = ctaRect.top - windowHeight;
      
      if (distanceToTop < 100 && !hasLitUp) {
        setIsNearCTA(true);
        // Acende quando a lâmpada "toca" na secção
        if (distanceToTop < -50) {
          onLightUp();
        }
      } else if (distanceToTop > 200) {
        setIsNearCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ctaSectionRef, onLightUp, hasLitUp]);

  // PHYSICS: Rotação ligada ao scroll (0 a 720 graus)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  // PHYSICS: Posição (X, Y) normal
  const bulbX = useTransform(scrollYProgress, [0, 0.15], ["-50%", "-20%"]);
  const bulbY = useTransform(scrollYProgress, [0, 0.15], ["0%", "35vh"]);

  // Suavização do movimento (Spring physics) para não parecer "robótico"
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 30 });
  const smoothX = useSpring(bulbX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(bulbY, { stiffness: 50, damping: 20 });

  return (
    <AnimatePresence>
      {!hasLitUp && (
        <motion.div
          className="fixed right-10 md:right-16 top-1/2 z-50 pointer-events-none hidden md:block"
          style={{
            rotate: isNearCTA ? 0 : smoothRotate,
            x: smoothX,
            y: smoothY,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: isNearCTA ? 1.2 : 1,
            // Quando perto do CTA, move para o centro-esquerda
            x: isNearCTA ? "calc(50vw - 100px)" : undefined,
            y: isNearCTA ? "20vh" : undefined,
            transition: { 
              opacity: { duration: 0.5 },
              scale: { duration: 0.3 },
              x: { duration: 0.5, ease: "easeOut" },
              y: { duration: 0.5, ease: "easeOut" },
            }
          }}
          exit={{ 
            opacity: 0, 
            scale: 2,
            filter: "blur(20px)",
            transition: { duration: 0.5 } 
          }}
        >
          <motion.div
            animate={{
              // Animação de "abanar" (wobble) independente do scroll
              rotate: isNearCTA ? [0, -10, 10, -5, 5, 0] : [0, -5, 5, -3, 3, 0],
              // Animação de "flutuação" vertical suave (loop)
              y: [0, -10, 0, 5, 0],
            }}
            transition={{
              repeat: isNearCTA ? 0 : Infinity,
              duration: isNearCTA ? 0.5 : 4,
              ease: "easeInOut"
            }}
            className="relative"
          >
            {/* Efeito de Brilho (Glow) - mais intenso quando perto do CTA */}
            <motion.div 
              className="absolute inset-0 bg-[#A7D1EC]/30 blur-[40px] rounded-full"
              animate={{
                scale: isNearCTA ? 1.5 : 1,
                opacity: isNearCTA ? 0.8 : 0.5
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Segundo layer de glow para mais intensidade */}
            <motion.div 
              className="absolute inset-[-20px] bg-[#A7D1EC]/20 blur-[60px] rounded-full"
              animate={{
                scale: isNearCTA ? 2 : 1,
                opacity: isNearCTA ? 0.6 : 0.3
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Terceiro layer quando perto */}
            {isNearCTA && (
              <motion.div 
                className="absolute inset-[-40px] bg-[#A7D1EC]/15 blur-[80px] rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 2.5, opacity: 0.4 }}
                transition={{ duration: 0.5 }}
              />
            )}

            {/* Ícone da Lâmpada */}
            <motion.div
              animate={{
                filter: isNearCTA 
                  ? "drop-shadow(0 0 30px rgba(167,209,236,0.9))" 
                  : "drop-shadow(0 0 15px rgba(167,209,236,0.5))"
              }}
            >
              <Lightbulb
                className="w-32 h-32 md:w-48 md:h-48 text-[#A7D1EC]"
                strokeWidth={1}
                fill={isNearCTA ? "rgba(167,209,236,0.4)" : "rgba(167,209,236,0.15)"}
              />
            </motion.div>

            {/* Partículas de luz ao redor - mais ativas quando perto */}
            <motion.div
              className="absolute -top-2 -right-2 w-3 h-3 bg-[#A7D1EC] rounded-full"
              animate={{
                scale: isNearCTA ? [1, 2, 1] : [1, 1.5, 1],
                opacity: isNearCTA ? [0.7, 1, 0.7] : [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: isNearCTA ? 0.5 : 2,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-1 -left-3 w-2 h-2 bg-[#A7D1EC] rounded-full"
              animate={{
                scale: isNearCTA ? [1, 1.8, 1] : [1, 1.3, 1],
                opacity: isNearCTA ? [0.6, 1, 0.6] : [0.3, 0.8, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: isNearCTA ? 0.6 : 2.5,
                ease: "easeInOut",
                delay: 0.2
              }}
            />
            <motion.div
              className="absolute top-1/2 -right-4 w-2 h-2 bg-[#A7D1EC] rounded-full"
              animate={{
                scale: isNearCTA ? [1, 1.9, 1] : [1, 1.4, 1],
                opacity: isNearCTA ? [0.5, 1, 0.5] : [0.4, 0.9, 0.4],
              }}
              transition={{
                repeat: Infinity,
                duration: isNearCTA ? 0.4 : 3,
                ease: "easeInOut",
                delay: 0.4
              }}
            />
            
            {/* Partículas extras quando perto */}
            {isNearCTA && (
              <>
                <motion.div
                  className="absolute -top-4 left-1/2 w-2 h-2 bg-[#A7D1EC] rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1.5, 0],
                    opacity: [0, 1, 0],
                    y: [-10, -30],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "easeOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 right-1/4 w-1.5 h-1.5 bg-[#A7D1EC] rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1.3, 0],
                    opacity: [0, 0.8, 0],
                    y: [10, 25],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.3
                  }}
                />
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingBulb;
