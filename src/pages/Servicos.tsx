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
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop",
  },
];

const Servicos = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&h=600&fit=crop')"
            }}
          />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#A7D1EC]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A7D1EC]/15 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <div className="inline-block bg-[#A7D1EC]/20 px-4 py-2 rounded-full mb-6">
                <span className="font-body text-sm">Soluções Completas</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Os Nossos Serviços
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-6">
                Soluções completas e integradas para todas as suas necessidades
                de eletricidade, mobilidade elétrica e construção.
              </p>
              <div className="w-24 h-1 bg-[#A7D1EC] mx-auto rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* Services Detail */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding relative overflow-hidden ${
              index % 2 === 0 ? "bg-white" : "bg-gradient-to-br from-muted to-[#A7D1EC]/10"
            }`}
          >
            {/* Decorative Element */}
            <div className={`absolute ${index % 2 === 0 ? 'top-0 right-0' : 'bottom-0 left-0'} w-64 h-64 bg-[#A7D1EC]/10 rounded-full blur-3xl`} />
            
            <div className="container-custom relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="absolute -top-4 -left-4 w-full h-full bg-[#A7D1EC]/30 rounded-2xl" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative w-full h-80 object-cover rounded-2xl shadow-xl z-10"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-[#A7D1EC] flex items-center justify-center shadow-lg z-20">
                    <service.icon className="w-12 h-12 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="inline-block bg-[#A7D1EC]/20 text-primary font-body text-sm px-4 py-2 rounded-full mb-4">
                    Serviço #{index + 1}
                  </span>
                  <h2 className="text-3xl md:text-4xl text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#A7D1EC]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
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
