import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Lightbulb } from "lucide-react";

interface FloatingBulbProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const FloatingBulb = ({ containerRef }: FloatingBulbProps) => {
  // Rastreia o progresso do scroll da página inteira
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // PHYSICS: Rotação ligada ao scroll (0 a 720 graus)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  // PHYSICS: Posição (X, Y)
  // X: Move-se da esquerda (-50%) para uma posição mais visível (-20%) nos primeiros 15% do scroll
  const bulbX = useTransform(scrollYProgress, [0, 0.15], ["-50%", "-20%"]);
  // Y: Desce ligeiramente conforme o utilizador faz scroll
  const bulbY = useTransform(scrollYProgress, [0, 0.15], ["0%", "35vh"]);

  // Suavização do movimento (Spring physics) para não parecer "robótico"
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 30 });
  const smoothX = useSpring(bulbX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(bulbY, { stiffness: 50, damping: 20 });

  return (
    <AnimatePresence>
      <motion.div
        className="fixed right-10 md:right-16 top-1/2 z-50 pointer-events-none hidden md:block"
        style={{
          rotate: smoothRotate,
          x: smoothX,
          y: smoothY,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { opacity: { duration: 0.5 } }
        }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
      >
        <motion.div
          animate={{
            // Animação de "abanar" (wobble) independente do scroll
            rotate: [0, -5, 5, -3, 3, 0],
            // Animação de "flutuação" vertical suave (loop)
            y: [0, -10, 0, 5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut"
          }}
          className="relative"
        >
          {/* Efeito de Brilho (Glow) */}
          <div className="absolute inset-0 bg-[#A7D1EC]/30 blur-[40px] rounded-full animate-pulse" />
          
          {/* Segundo layer de glow para mais intensidade */}
          <div className="absolute inset-[-20px] bg-[#A7D1EC]/20 blur-[60px] rounded-full" />

          {/* Ícone da Lâmpada */}
          <Lightbulb
            className="w-32 h-32 md:w-48 md:h-48 text-[#A7D1EC] drop-shadow-[0_0_15px_rgba(167,209,236,0.5)]"
            strokeWidth={1}
            fill="rgba(167,209,236,0.15)"
          />
          
          {/* Partículas de luz ao redor */}
          <motion.div
            className="absolute -top-2 -right-2 w-3 h-3 bg-[#A7D1EC] rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-1 -left-3 w-2 h-2 bg-[#A7D1EC] rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.div
            className="absolute top-1/2 -right-4 w-2 h-2 bg-[#A7D1EC] rounded-full"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingBulb;
