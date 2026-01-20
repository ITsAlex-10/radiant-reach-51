import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Lightbulb, 
  Wifi, 
  Camera, 
  BatteryCharging, 
  Gauge, 
  Shield, 
  Zap, 
  Building2,
  TreePine,
  TrafficCone
} from "lucide-react";

const smartCityServices = [
  {
    icon: Lightbulb,
    title: "Iluminação Pública Inteligente",
    description: "Sistemas de iluminação LED com sensores de presença e luminosidade, permitindo redução de consumo energético até 70% e gestão remota em tempo real.",
  },
  {
    icon: BatteryCharging,
    title: "Postos de Carregamento Elétrico",
    description: "Instalação e manutenção de infraestruturas de carregamento para veículos elétricos em espaços públicos e privados.",
  },
  {
    icon: Camera,
    title: "Videovigilância Urbana",
    description: "Sistemas de CCTV inteligente com análise de vídeo, reconhecimento de padrões e integração com centrais de segurança.",
  },
  {
    icon: Wifi,
    title: "Redes de Comunicação IoT",
    description: "Implementação de redes LoRaWAN e NB-IoT para conectar milhares de sensores e dispositivos urbanos.",
  },
  {
    icon: Gauge,
    title: "Monitorização Ambiental",
    description: "Sensores de qualidade do ar, ruído, temperatura e humidade com dashboards de visualização em tempo real.",
  },
  {
    icon: TrafficCone,
    title: "Gestão de Tráfego Inteligente",
    description: "Semáforos adaptativos, sensores de fluxo de veículos e sistemas de estacionamento inteligente.",
  },
  {
    icon: TreePine,
    title: "Rega Inteligente",
    description: "Sistemas automatizados de rega para espaços verdes com sensores de humidade do solo e previsão meteorológica.",
  },
  {
    icon: Shield,
    title: "Segurança e Emergência",
    description: "Botões de pânico, sistemas de alerta público e integração com serviços de emergência.",
  },
];

const benefits = [
  { title: "Eficiência Energética", description: "Redução significativa do consumo de energia através de automação e gestão inteligente." },
  { title: "Sustentabilidade", description: "Menor pegada de carbono e melhor gestão dos recursos naturais." },
  { title: "Qualidade de Vida", description: "Cidades mais seguras, limpas e acessíveis para todos os cidadãos." },
  { title: "Gestão em Tempo Real", description: "Monitorização e controlo centralizado de todos os sistemas urbanos." },
];

const SmartCities = () => {
  return (
    <>
      <Helmet>
        <title>Smart Cities | Joaquim & Fernandes - Soluções para Cidades Inteligentes</title>
        <meta 
          name="description" 
          content="Transforme a sua cidade com soluções Smart Cities. Iluminação inteligente, postos de carregamento, IoT, videovigilância e monitorização ambiental. Joaquim & Fernandes." 
        />
        <meta 
          name="keywords" 
          content="smart cities, cidades inteligentes, iluminação pública LED, IoT urbano, postos carregamento elétrico, videovigilância urbana, monitorização ambiental, rega inteligente, gestão tráfego, Portugal" 
        />
        <link rel="canonical" href="https://radiant-reach-51.lovable.app/smart-cities" />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white pt-32 pb-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Building2 className="w-5 h-5" />
                <span className="font-body text-sm">Soluções Urbanas Inovadoras</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
                Smart Cities
              </h1>
              <p className="font-body text-lg md:text-xl text-white/90 leading-relaxed">
                Cidades mais eficientes, sustentáveis e conectadas. 
                Implementamos soluções tecnológicas que transformam a forma como vivemos e interagimos com o espaço urbano.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Concept Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-3xl md:text-4xl text-primary mb-6">
                  O que é uma Smart City?
                </h2>
                <div className="space-y-4 font-body text-muted-foreground">
                  <p>
                    Uma <strong className="text-foreground">Smart City</strong> ou Cidade Inteligente é um ecossistema urbano que utiliza 
                    tecnologias de informação e comunicação (TIC) para melhorar a qualidade de vida dos cidadãos, 
                    otimizar a gestão de recursos e reduzir o impacto ambiental.
                  </p>
                  <p>
                    Através da integração de sensores, redes de comunicação e plataformas de gestão centralizadas, 
                    as Smart Cities permitem uma tomada de decisão baseada em dados em tempo real, tornando 
                    os serviços urbanos mais eficientes e responsivos.
                  </p>
                  <p>
                    Na <strong className="text-foreground">Joaquim & Fernandes</strong>, somos especialistas na implementação 
                    das infraestruturas elétricas e de comunicação que suportam estas soluções inovadoras.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                {benefits.map((benefit, index) => (
                  <div 
                    key={benefit.title}
                    className="p-5 bg-primary/5 rounded-xl border border-primary/10"
                  >
                    <Zap className="w-8 h-8 text-accent mb-3" />
                    <h3 className="font-heading text-lg text-primary mb-2">{benefit.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
                Os Nossos Serviços Smart Cities
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Oferecemos soluções completas para a modernização urbana, desde o projeto até à manutenção.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {smartCityServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-background p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg text-primary mb-2">{service.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl mb-4">
                Pronto para Transformar a Sua Cidade?
              </h2>
              <p className="font-body text-white/90 max-w-2xl mx-auto mb-8">
                Contacte-nos para uma consultoria gratuita e descubra como podemos ajudar 
                na modernização das infraestruturas urbanas do seu município.
              </p>
              <a 
                href="/contacto"
                className="inline-block bg-white text-primary px-8 py-3 rounded-md font-body font-medium hover:bg-white/90 transition-colors"
              >
                Falar com Especialista
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SmartCities;
