import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Car, PartyPopper, Hammer } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Eletricidade Geral",
    description:
      "Instalações elétricas residenciais, comerciais e industriais com qualidade e segurança certificada.",
    link: "/servicos#eletricidade",
  },
  {
    icon: Car,
    title: "Mobilidade Elétrica",
    description:
      "Instalação de postos de carregamento para veículos elétricos em habitações e espaços comerciais.",
    link: "/servicos#mobilidade",
  },
  {
    icon: PartyPopper,
    title: "Iluminação Festiva",
    description:
      "Decoração luminosa para eventos, festas e épocas especiais com soluções criativas e seguras.",
    link: "/servicos#iluminacao",
  },
  {
    icon: Hammer,
    title: "Construção & Manutenção",
    description:
      "Obras de construção civil, remodelações e manutenção de edifícios com profissionalismo.",
    link: "/servicos#construcao",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-muted">
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
            Os Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas e integradas para todas as suas
            necessidades de eletricidade e construção.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-service group bg-white hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link to={service.link}>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300"
                >
                  Saiba mais
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
