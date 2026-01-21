import { motion } from "framer-motion";

const partners = [
  { name: "EDP", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop" },
  { name: "Schneider Electric", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop" },
  { name: "ABB", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop" },
  { name: "Legrand", logo: "https://images.unsplash.com/photo-560179707-f14e90ef3623?w=200&h=100&fit=crop" },
  { name: "Hager", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop" },
  { name: "Siemens", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop" },
  { name: "Weidmüller", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop" },
  { name: "Phoenix Contact", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop" },
];

const Partners = () => {
  // Duplicate the array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="parcerias" className="py-16 bg-gradient-to-b from-muted to-[#A7D1EC]/10 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-48 h-48 bg-[#A7D1EC]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-[#A7D1EC]/15 rounded-full blur-2xl" />

      <div className="container-custom mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block bg-[#A7D1EC]/20 text-primary font-body text-sm px-4 py-2 rounded-full mb-4">
            Trabalhamos com os Melhores
          </span>
          <h2 className="text-2xl md:text-3xl text-primary">
            Parceiros de Confiança
          </h2>
        </motion.div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-8 items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 px-8 py-6 bg-white rounded-xl border border-[#A7D1EC]/30 shadow-sm hover:shadow-md hover:shadow-[#A7D1EC]/20 transition-all duration-300"
            >
              <span className="font-body font-medium text-primary whitespace-nowrap text-lg">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Featured Images Row */}
      <div className="container-custom mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="aspect-video rounded-xl overflow-hidden border-2 border-[#A7D1EC]/30">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop"
              alt="Parceria elétrica"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden border-2 border-[#A7D1EC]/30">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=250&fit=crop"
              alt="Instalação profissional"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden border-2 border-[#A7D1EC]/30">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop"
              alt="Energia renovável"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden border-2 border-[#A7D1EC]/30">
            <img
              src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=250&fit=crop"
              alt="Mobilidade elétrica"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
