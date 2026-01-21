import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "António Silva",
    role: "Proprietário Residencial",
    text: "Excelente trabalho na instalação elétrica da minha casa. Profissionais competentes e muito atenciosos.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    name: "Maria Santos",
    role: "Gestora de Condomínio",
    text: "A Joaquim & Fernandes realizou toda a manutenção elétrica do nosso condomínio com grande profissionalismo.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Carlos Ferreira",
    role: "Empresário",
    text: "Instalaram os postos de carregamento na minha empresa. Serviço impecável e dentro do prazo.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Ana Rodrigues",
    role: "Arquiteta",
    text: "Trabalho frequentemente com a equipa JF. São sempre a minha primeira escolha para projetos exigentes.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-white to-[#A7D1EC]/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#A7D1EC]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#A7D1EC]/15 rounded-full blur-2xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#A7D1EC]/20 text-primary font-body text-sm px-4 py-2 rounded-full mb-4">
            Testemunhos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            O Que Dizem os Nossos Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é a nossa maior prioridade e o
            melhor indicador da qualidade do nosso trabalho.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: -currentIndex * 100 + "%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg border border-[#A7D1EC]/20">
                    <Quote className="w-12 h-12 text-[#A7D1EC] mx-auto mb-6" />
                    <p className="text-lg md:text-xl text-primary mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-[#A7D1EC] fill-[#A7D1EC]"
                        />
                      ))}
                    </div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mx-auto mb-3 border-4 border-[#A7D1EC]/30 object-cover"
                    />
                    <h4 className="font-body font-medium text-primary">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#A7D1EC] w-8" : "bg-primary/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos/Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                i === currentIndex ? "border-[#A7D1EC] scale-105" : "border-transparent opacity-50"
              }`}
            >
              <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
