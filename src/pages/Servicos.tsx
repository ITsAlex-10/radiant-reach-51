import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Zap, Car, PartyPopper, Hammer, CheckCircle } from "lucide-react";

const services = [
  {
    id: "eletricidade",
    icon: Zap,
    title: "Eletricidade Geral",
    description:
      "Oferecemos soluções completas de instalações elétricas para habitações, comércios e indústrias. A nossa equipa qualificada garante segurança e eficiência em cada projeto.",
    features: [
      "Instalações elétricas residenciais e comerciais",
      "Quadros elétricos e distribuição",
      "Reparações e manutenção preventiva",
      "Certificação de instalações",
      "Projetos de iluminação interior e exterior",
      "Sistemas de proteção contra descargas atmosféricas",
    ],
  },
  {
    id: "mobilidade",
    icon: Car,
    title: "Mobilidade Elétrica",
    description:
      "Preparamos o seu espaço para o futuro da mobilidade com instalação profissional de postos de carregamento para veículos elétricos.",
    features: [
      "Instalação de wallboxes domésticas",
      "Postos de carregamento comerciais",
      "Soluções para condomínios",
      "Carregadores rápidos DC",
      "Gestão inteligente de energia",
      "Manutenção e assistência técnica",
    ],
  },
  {
    id: "iluminacao",
    icon: PartyPopper,
    title: "Iluminação Festiva",
    description:
      "Criamos ambientes mágicos e festivos com iluminação decorativa para eventos, festividades e espaços comerciais.",
    features: [
      "Decoração de Natal para cidades e vilas",
      "Iluminação para eventos corporativos",
      "Fachadas de edifícios e monumentos",
      "Festas populares e romarias",
      "Casamentos e celebrações",
      "Projetos personalizados",
    ],
  },
  {
    id: "construcao",
    icon: Hammer,
    title: "Construção & Manutenção",
    description:
      "Realizamos obras de construção civil, remodelações e manutenção de edifícios com qualidade e profissionalismo.",
    features: [
      "Remodelações de interiores",
      "Manutenção de edifícios",
      "Obras de construção civil",
      "Pinturas e acabamentos",
      "Impermeabilizações",
      "Pequenas reparações domésticas",
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
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
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
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

                  <Link to="/contacto">
                    <Button variant="cta" size="lg">
                      Pedir Orçamento
                    </Button>
                  </Link>
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
