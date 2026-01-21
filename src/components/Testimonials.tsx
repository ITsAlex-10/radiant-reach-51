import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "DIRETOR DE OPERAÇÕES",
    company: "LOGÍSTICA SA",
    text: "A instalação dos carregadores elétricos na nossa frota foi impecável. Profissionalismo e rapidez.",
    rating: 5,
  },
  {
    name: "Ana Pereira",
    role: "PROPRIETÁRIA",
    company: "RESTAURANTE O SOLAR",
    text: "A renovação elétrica e a iluminação festiva transformaram o nosso espaço. Recomendo vivamente.",
    rating: 5,
  },
  {
    name: "Miguel Santos",
    role: "GESTOR DE CONDOMÍNIO",
    company: "GESTCONDO",
    text: "Manutenção de edifícios exemplar. Resolvemos problemas antigos de infiltração e eletricidade.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4 italic">
            O que dizem os nossos clientes
          </h2>
          <div className="w-12 h-1 bg-[#A7D1EC] mx-auto" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm relative"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#A7D1EC]"
                >
                  <path
                    d="M0 24V14.4C0 11.7333 0.4 9.33333 1.2 7.2C2.06667 5.06667 3.26667 3.26667 4.8 1.8C6.33333 0.333333 8.13333 -0.666667 10.2 -1.2L11.4 2.4C9.53333 3.06667 8 4.2 6.8 5.8C5.66667 7.33333 5.06667 9.13333 5 11.2H10V24H0ZM18 24V14.4C18 11.7333 18.4 9.33333 19.2 7.2C20.0667 5.06667 21.2667 3.26667 22.8 1.8C24.3333 0.333333 26.1333 -0.666667 28.2 -1.2L29.4 2.4C27.5333 3.06667 26 4.2 24.8 5.8C23.6667 7.33333 23.0667 9.13333 23 11.2H28V24H18Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <h4 className="font-body font-semibold text-primary text-base">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role},{" "}
                  <span className="text-[#A7D1EC]">{testimonial.company}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
