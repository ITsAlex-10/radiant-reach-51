import { motion } from "framer-motion";
import { Check, Award, Users, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import benefitsImage from "@/assets/benefits-image.jpg";
const benefits = [{
  icon: Award,
  text: "Experiência desde 1986"
}, {
  icon: Users,
  text: "Equipa Técnica Certificada"
}, {
  icon: Shield,
  text: "Soluções Chave-na-mão"
}, {
  icon: Clock,
  text: "Apoio 24/7"
}];
const Benefits = () => {
  return <section className="section-padding bg-gradient-to-br from-[#F5F5F5] to-[#A7D1EC]/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#A7D1EC]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-[#A7D1EC]/15 rounded-full blur-2xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with Decorative Frame */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="relative">
            {/* Background Decoration */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-[#A7D1EC]/30 rounded-2xl" />
            
            <img src={benefitsImage} alt="Trabalhos de eletricidade" className="relative w-full h-auto rounded-2xl shadow-xl z-10" />

            {/* Floating Badge */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="absolute -bottom-8 -right-8 bg-[#A7D1EC] p-6 rounded-2xl shadow-xl z-20">
              <p className="font-heading text-3xl text-primary">35+</p>
              <p className="font-body text-sm text-primary/80">Anos de Experiência</p>
            </motion.div>

            {/* Additional Image */}
            
          </motion.div>

          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <span className="inline-block bg-[#A7D1EC]/20 text-primary font-body text-sm px-4 py-2 rounded-full mb-4">
              Porquê Escolher-nos
            </span>
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
              {benefits.map((benefit, index) => <motion.div key={benefit.text} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: 0.3 + index * 0.1
            }} className="flex items-center gap-3 p-4 border border-[#A7D1EC]/30 rounded-xl bg-white hover:shadow-md hover:shadow-[#A7D1EC]/10 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[#A7D1EC]/20 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary">{benefit.text}</span>
                </motion.div>)}
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
    </section>;
};
export default Benefits;