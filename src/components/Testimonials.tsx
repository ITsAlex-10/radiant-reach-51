import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "António Silva",
    role: "Proprietário Residencial",
    text: "Excelente trabalho na instalação elétrica da minha casa. Profissionais competentes e muito atenciosos.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Gestora de Condomínio",
    text: "A Joaquim & Fernandes realizou toda a manutenção elétrica do nosso condomínio com grande profissionalismo.",
    rating: 5,
  },
  {
    name: "Carlos Ferreira",
    role: "Empresário",
    text: "Instalaram os postos de carregamento na minha empresa. Serviço impecável e dentro do prazo.",
    rating: 5,
  },
  {
    name: "Ana Rodrigues",
    role: "Arquiteta",
    text: "Trabalho frequentemente com a equipa JF. São sempre a minha primeira escolha para projetos exigentes.",
    rating: 5,
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
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
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
                  <div className="bg-muted rounded-2xl p-8 md:p-12 text-center">
                    <Quote className="w-12 h-12 text-accent mx-auto mb-6 opacity-50" />
                    <p className="text-lg md:text-xl text-primary mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-accent fill-accent"
                        />
                      ))}
                    </div>
                    <div className="w-16 h-16 rounded-full bg-accent/20 mx-auto mb-3 flex items-center justify-center">
                      <span className="font-body font-medium text-xl text-accent">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
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
                  index === currentIndex ? "bg-accent w-8" : "bg-primary/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
