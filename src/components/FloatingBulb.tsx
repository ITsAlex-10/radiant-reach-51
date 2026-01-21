import { useEffect, useState } from "react";
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
  const [isHammering, setIsHammering] = useState(false);
  const [hammerPosition, setHammerPosition] = useState({ x: 0, y: 0 });
  
  // Rastreia o progresso do scroll da página inteira
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Detectar quando a secção CTA está 100% visível
  useEffect(() => {
    const handleScroll = () => {
      if (!ctaSectionRef.current || hasLitUp) return;
      
      const ctaRect = ctaSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Secção 100% visível quando o topo está visível e o fundo também
      const isFullyVisible = ctaRect.top >= 0 && ctaRect.top < windowHeight * 0.3;
      
      // Quando estamos a aproximar
      const distanceToTop = ctaRect.top - windowHeight;
      
      if (distanceToTop < 100 && !isHammering) {
        setIsNearCTA(true);
      } else if (distanceToTop > 200) {
        setIsNearCTA(false);
      }
      
      // Quando a secção está 100% visível, iniciar animação de martelada
      if (isFullyVisible && !isHammering && !hasLitUp) {
        // Calcular posição do título para a martelada
        const titleElement = ctaSectionRef.current.querySelector('h2');
        if (titleElement) {
          const titleRect = titleElement.getBoundingClientRect();
          setHammerPosition({
            x: titleRect.left + titleRect.width / 2,
            y: titleRect.top + titleRect.height / 2
          });
        }
        setIsHammering(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ctaSectionRef, onLightUp, hasLitUp, isHammering]);

  // PHYSICS: Rotação ligada ao scroll (0 a 720 graus)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  // PHYSICS: Posição (X, Y) normal
  const bulbX = useTransform(scrollYProgress, [0, 0.15], ["-50%", "-20%"]);
  const bulbY = useTransform(scrollYProgress, [0, 0.15], ["0%", "35vh"]);

  // Suavização do movimento (Spring physics) para não parecer "robótico"
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 30 });
  const smoothX = useSpring(bulbX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(bulbY, { stiffness: 50, damping: 20 });

  // Handler para quando a animação de martelada termina
  const handleHammerComplete = () => {
    onLightUp();
  };

  return (
    <AnimatePresence>
      {!hasLitUp && (
        <motion.div
          className="fixed z-50 pointer-events-none hidden md:block"
          style={!isHammering ? {
            right: "2.5rem",
            top: "50%",
            rotate: isNearCTA ? 0 : smoothRotate,
            x: smoothX,
            y: smoothY,
          } : undefined}
          initial={{ opacity: 0, scale: 0 }}
          animate={isHammering ? {
            // Animação de martelada - move para o título
            position: "fixed",
            left: hammerPosition.x,
            top: hammerPosition.y - 150, // Posiciona acima do título
            right: "auto",
            x: "-50%",
            y: 0,
            rotate: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, ease: "easeOut" }
          } : {
            opacity: 1,
            scale: isNearCTA ? 1.2 : 1,
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
            scale: 0,
            transition: { duration: 0.3, delay: 0.1 } 
          }}
        >
          {/* Animação de Martelada */}
          {isHammering ? (
            <motion.div
              className="relative"
              initial={{ y: 0, rotate: -30 }}
              animate={{
                y: [0, -80, 150], // Sobe e depois desce com força
                rotate: [-30, -45, 15], // Rotação de balanço
                scale: [1, 1.1, 0.9],
              }}
              transition={{
                duration: 0.5,
                times: [0, 0.3, 1],
                ease: [0.22, 1, 0.36, 1], // Custom easing para impacto
              }}
              onAnimationComplete={handleHammerComplete}
            >
              {/* Efeito de Brilho Intenso durante martelada */}
              <motion.div 
                className="absolute inset-[-30px] bg-[#A7D1EC]/50 blur-[60px] rounded-full"
                animate={{
                  scale: [1, 2, 3],
                  opacity: [0.5, 1, 0],
                }}
                transition={{
                  duration: 0.5,
                  times: [0, 0.5, 1],
                }}
              />

              {/* Ícone da Lâmpada */}
              <motion.div
                animate={{
                  filter: [
                    "drop-shadow(0 0 20px rgba(167,209,236,0.6))",
                    "drop-shadow(0 0 40px rgba(167,209,236,1))",
                    "drop-shadow(0 0 60px rgba(255,255,255,1))",
                  ]
                }}
                transition={{ duration: 0.5, times: [0, 0.5, 1] }}
              >
                <Lightbulb
                  className="w-32 h-32 md:w-48 md:h-48 text-[#A7D1EC]"
                  strokeWidth={1}
                  fill="rgba(167,209,236,0.6)"
                />
              </motion.div>

              {/* Partículas de impacto */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#A7D1EC] rounded-full"
                    initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                    animate={{
                      x: Math.cos((i * 45 * Math.PI) / 180) * 100,
                      y: Math.sin((i * 45 * Math.PI) / 180) * 100 + 50,
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.35,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              animate={{
                rotate: isNearCTA ? [0, -10, 10, -5, 5, 0] : [0, -5, 5, -3, 3, 0],
                y: [0, -10, 0, 5, 0],
              }}
              transition={{
                repeat: isNearCTA ? 0 : Infinity,
                duration: isNearCTA ? 0.5 : 4,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Efeito de Brilho (Glow) */}
              <motion.div 
                className="absolute inset-0 bg-[#A7D1EC]/30 blur-[40px] rounded-full"
                animate={{
                  scale: isNearCTA ? 1.5 : 1,
                  opacity: isNearCTA ? 0.8 : 0.5
                }}
                transition={{ duration: 0.3 }}
              />

              <motion.div 
                className="absolute inset-[-20px] bg-[#A7D1EC]/20 blur-[60px] rounded-full"
                animate={{
                  scale: isNearCTA ? 2 : 1,
                  opacity: isNearCTA ? 0.6 : 0.3
                }}
                transition={{ duration: 0.3 }}
              />

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

              {/* Partículas de luz ao redor */}
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
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingBulb;
