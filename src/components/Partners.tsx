import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const partners = [
  { name: "EDP", description: "Parceiro em soluções energéticas" },
  { name: "Schneider Electric", description: "Equipamentos elétricos de qualidade" },
  { name: "ABB", description: "Tecnologia de automação" },
  { name: "Legrand", description: "Infraestrutura elétrica e digital" },
  { name: "Hager", description: "Sistemas de distribuição elétrica" },
  { name: "Siemens", description: "Soluções de engenharia" },
  { name: "Weidmüller", description: "Conexões industriais" },
  { name: "Phoenix Contact", description: "Tecnologia de conexão" },
];

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerView >= partners.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? partners.length - itemsPerView : prev - 1
    );
  };

  return (
    <section id="parcerias" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Parcerias
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com os melhores fornecedores e parceiros do setor para
            garantir a qualidade dos nossos serviços.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center hover:bg-accent hover:text-white transition-colors duration-300"
            aria-label="Previous partners"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center hover:bg-accent hover:text-white transition-colors duration-300"
            aria-label="Next partners"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Partners Grid */}
          <div className="overflow-hidden mx-8">
            <motion.div
              className="flex gap-6"
              animate={{ x: -currentIndex * (100 / itemsPerView) + "%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4"
                >
                  <div className="bg-white rounded-lg p-8 h-32 flex items-center justify-center shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer relative">
                    <span className="font-heading font-bold text-xl text-primary group-hover:text-accent transition-colors duration-300">
                      {partner.name}
                    </span>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-primary text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      {partner.description}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
