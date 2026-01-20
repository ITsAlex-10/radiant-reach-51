import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Activity, Wrench, Zap, BatteryCharging } from "lucide-react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Projetos",
    description:
      "Desenvolvimento de projetos de engenharia elétrica, licenciamento e consultoria técnica especializada.",
    link: "/servicos#projetos",
  },
  {
    icon: Activity,
    title: "PLR's",
    description:
      "Execução de Postos de Ligação à Rede e infraestruturas para ligação à rede de distribuição.",
    link: "/servicos#plrs",
  },
  {
    icon: Wrench,
    title: "Instalações",
    description:
      "Instalações elétricas de Baixa e Média Tensão para indústria, comércio e habitação.",
    link: "/servicos#instalacoes",
  },
  {
    icon: Zap,
    title: "Postos de Transformação",
    description:
      "Montagem, manutenção e ensaios de Postos de Transformação (PTs) aéreos e em cabine.",
    link: "/servicos#postos-transformacao",
  },
  {
    icon: BatteryCharging,
    title: "Postos de Carregamento",
    description:
      "Soluções chave-na-mão para carregamento de veículos elétricos (PVCE) em espaços públicos e privados.",
    link: "/servicos#postos-carregamento",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-background">
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
            Nossas Áreas de Atuação
          </h2>
          <div className="w-12 h-1 bg-accent-light mx-auto"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-muted/30 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl text-primary mb-3 font-body font-medium">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                {service.description}
              </p>
              <Link 
                to={service.link}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors uppercase tracking-wider"
              >
                Saber mais
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
