import { motion } from "framer-motion";

const partners = [
  "EDP",
  "Schneider Electric",
  "ABB",
  "Legrand",
  "Hager",
  "Siemens",
  "Weidmüller",
  "Phoenix Contact",
];

const Partners = () => {
  // Duplicate the array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="parcerias" className="py-12 bg-muted overflow-hidden">
      <div className="container-custom mb-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-lg text-muted-foreground"
        >
          Parceiros de Confiança
        </motion.h3>
      </div>

      {/* Infinite Marquee */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-12 items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="flex-shrink-0 px-8 py-4 bg-background rounded-lg border border-border"
            >
              <span className="font-body font-medium text-primary whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
