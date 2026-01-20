import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import benefitsImage from "@/assets/benefits-image.jpg";

const benefits = [
  "Experiência desde 1986",
  "Equipa Técnica Certificada",
  "Soluções Chave-na-mão",
  "Apoio 24/7",
];

const Benefits = () => {
  return (
    <section className="section-padding bg-[#F5F5F5]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={benefitsImage}
              alt="Trabalhos de eletricidade"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
              Porquê escolher a Joaquim & Fernandes?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Combinamos décadas de experiência com as tecnologias mais recentes para entregar
              projetos seguros e eficientes. O nosso compromisso é com a qualidade e o
              cumprimento de prazos.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 border border-border rounded-lg bg-background"
                >
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-primary">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <Link to="/servicos">
              <Button className="bg-primary hover:bg-primary/90 text-white font-body font-medium uppercase tracking-wider px-8 py-6">
                Conheça os Nossos Serviços
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
