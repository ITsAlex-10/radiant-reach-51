import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Activity, Wrench, Zap, BatteryCharging } from "lucide-react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Projetos",
    description: "Desenvolvimento de projetos de engenharia elétrica, licenciamento e consultoria técnica especializada.",
    link: "/servicos#projetos",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
  },
  {
    icon: Activity,
    title: "PLR's",
    description: "Execução de Postos de Ligação à Rede e infraestruturas para ligação à rede de distribuição.",
    link: "/servicos#plrs",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    icon: Wrench,
    title: "Instalações",
    description: "Instalações elétricas de Baixa e Média Tensão para indústria, comércio e habitação.",
    link: "/servicos#instalacoes",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop",
  },
  {
    icon: Zap,
    title: "Postos de Transformação",
    description: "Montagem, manutenção e ensaios de Postos de Transformação (PTs) aéreos e em cabine.",
    link: "/servicos#postos-transformacao",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
  },
  {
    icon: BatteryCharging,
    title: "Postos de Carregamento",
    description: "Soluções chave-na-mão para carregamento de veículos elétricos (PVCE) em espaços públicos e privados.",
    link: "/servicos#postos-carregamento",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#A7D1EC]/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A7D1EC]/10 rounded-full blur-3xl translate-y-1/2" />

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
            O Que Fazemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            As Nossas Áreas de Atuação
          </h2>
          <div className="w-24 h-1 bg-[#A7D1EC] mx-auto rounded-full"></div>
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
              className="group bg-white rounded-2xl overflow-hidden border border-[#A7D1EC]/20 hover:shadow-xl hover:shadow-[#A7D1EC]/10 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 w-14 h-14 rounded-full bg-[#A7D1EC] flex items-center justify-center shadow-lg">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl text-primary mb-3 font-body font-medium">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-[#A7D1EC] transition-colors uppercase tracking-wider group-hover:gap-3"
                >
                  Saber mais
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
