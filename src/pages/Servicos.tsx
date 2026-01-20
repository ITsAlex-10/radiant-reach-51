import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ContactCTAButton from "@/components/ContactCTAButton";
import { FileText, Activity, Wrench, Zap, BatteryCharging, CheckCircle } from "lucide-react";

const services = [
  {
    id: "projetos",
    icon: FileText,
    title: "Projetos",
    description:
      "Desenvolvimento de projetos de engenharia elétrica, licenciamento e consultoria técnica especializada para garantir a conformidade e eficiência das suas instalações.",
    features: [
      "Projetos de instalações elétricas",
      "Licenciamento junto das entidades competentes",
      "Consultoria técnica especializada",
      "Estudos de viabilidade",
      "Dimensionamento de sistemas",
      "Acompanhamento de obras",
    ],
  },
  {
    id: "plrs",
    icon: Activity,
    title: "PLR's",
    description:
      "Execução de Postos de Ligação à Rede e infraestruturas para ligação à rede de distribuição, garantindo a conformidade com as normas técnicas.",
    features: [
      "Postos de Ligação à Rede (PLR)",
      "Infraestruturas de ligação",
      "Ligação à rede de distribuição",
      "Conformidade com normas técnicas",
      "Coordenação com operadores de rede",
      "Ensaios e certificação",
    ],
  },
  {
    id: "instalacoes",
    icon: Wrench,
    title: "Instalações",
    description:
      "Instalações elétricas de Baixa e Média Tensão para indústria, comércio e habitação, com qualidade e segurança certificada.",
    features: [
      "Instalações de Baixa Tensão",
      "Instalações de Média Tensão",
      "Quadros elétricos e distribuição",
      "Instalações industriais",
      "Instalações comerciais",
      "Instalações residenciais",
    ],
  },
  {
    id: "postos-transformacao",
    icon: Zap,
    title: "Postos de Transformação",
    description:
      "Montagem, manutenção e ensaios de Postos de Transformação (PTs) aéreos e em cabine, garantindo a continuidade do fornecimento de energia.",
    features: [
      "Postos de Transformação aéreos",
      "Postos de Transformação em cabine",
      "Montagem e instalação",
      "Manutenção preventiva e corretiva",
      "Ensaios e certificação",
      "Remodelação de PTs existentes",
    ],
  },
  {
    id: "postos-carregamento",
    icon: BatteryCharging,
    title: "Postos de Carregamento",
    description:
      "Soluções chave-na-mão para carregamento de veículos elétricos (PVCE) em espaços públicos e privados, preparando o seu espaço para o futuro da mobilidade.",
    features: [
      "Postos de carregamento públicos",
      "Postos de carregamento privados",
      "Wallboxes domésticas",
      "Carregadores rápidos DC",
      "Gestão inteligente de energia",
      "Manutenção e assistência técnica",
    ],
  },
];

const Servicos = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Os Nossos Serviços
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                Soluções completas e integradas para todas as suas necessidades
                de eletricidade, mobilidade elétrica e construção.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Detail */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding ${
              index % 2 === 0 ? "bg-white" : "bg-muted"
            }`}
          >
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Icon */}
                <div
                  className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="w-32 h-32 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto lg:mx-0">
                    <service.icon className="w-16 h-16 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="text-3xl md:text-4xl text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <ContactCTAButton href="/contacto">
                    Pedir Orçamento
                  </ContactCTAButton>
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Servicos;
