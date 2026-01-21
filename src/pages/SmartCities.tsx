import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lightbulb, Wifi, Camera, BatteryCharging, Gauge, Shield, Zap, Building2, TreePine, TrafficCone } from "lucide-react";
const smartCityServices = [{
  icon: Lightbulb,
  title: "Iluminação Pública Inteligente",
  description: "Sistemas de iluminação LED com sensores de presença e luminosidade, permitindo redução de consumo energético até 70% e gestão remota em tempo real.",
  image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=400&fit=crop"
}, {
  icon: BatteryCharging,
  title: "Postos de Carregamento Elétrico",
  description: "Instalação e manutenção de infraestruturas de carregamento para veículos elétricos em espaços públicos e privados.",
  image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop"
}, {
  icon: Camera,
  title: "Videovigilância Urbana",
  description: "Sistemas de CCTV inteligente com análise de vídeo, reconhecimento de padrões e integração com centrais de segurança.",
  image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop"
}, {
  icon: Wifi,
  title: "Redes de Comunicação IoT",
  description: "Implementação de redes LoRaWAN e NB-IoT para conectar milhares de sensores e dispositivos urbanos.",
  image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop"
}, {
  icon: Gauge,
  title: "Monitorização Ambiental",
  description: "Sensores de qualidade do ar, ruído, temperatura e humidade com dashboards de visualização em tempo real.",
  image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&h=400&fit=crop"
}, {
  icon: TrafficCone,
  title: "Gestão de Tráfego Inteligente",
  description: "Semáforos adaptativos, sensores de fluxo de veículos e sistemas de estacionamento inteligente.",
  image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop"
}, {
  icon: TreePine,
  title: "Rega Inteligente",
  description: "Sistemas automatizados de rega para espaços verdes com sensores de humidade do solo e previsão meteorológica.",
  image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop"
}, {
  icon: Shield,
  title: "Segurança e Emergência",
  description: "Botões de pânico, sistemas de alerta público e integração com serviços de emergência.",
  image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&h=400&fit=crop"
}];
const benefits = [{
  title: "Eficiência Energética",
  description: "Redução significativa do consumo de energia através de automação e gestão inteligente.",
  icon: Zap
}, {
  title: "Sustentabilidade",
  description: "Menor pegada de carbono e melhor gestão dos recursos naturais.",
  icon: TreePine
}, {
  title: "Qualidade de Vida",
  description: "Cidades mais seguras, limpas e acessíveis para todos os cidadãos.",
  icon: Shield
}, {
  title: "Gestão em Tempo Real",
  description: "Monitorização e controlo centralizado de todos os sistemas urbanos.",
  icon: Gauge
}];
const SmartCities = () => {
  return <>
      <Helmet>
        <title>Smart Cities | Joaquim & Fernandes - Soluções para Cidades Inteligentes</title>
        <meta name="description" content="Transforme a sua cidade com soluções Smart Cities. Iluminação inteligente, postos de carregamento, IoT, videovigilância e monitorização ambiental. Joaquim & Fernandes." />
        <meta name="keywords" content="smart cities, cidades inteligentes, iluminação pública LED, IoT urbano, postos carregamento elétrico, videovigilância urbana, monitorização ambiental, rega inteligente, gestão tráfego, Portugal" />
        <link rel="canonical" href="https://radiant-reach-51.lovable.app/smart-cities" />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section with Background Image */}
        <section className="relative bg-primary text-white pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1920&h=800&fit=crop')"
        }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#A7D1EC]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A7D1EC]/15 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="text-center max-w-4xl mx-auto">
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
                Smart Cities
              </h1>
              <p className="font-body text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                Cidades mais eficientes, sustentáveis e conectadas. 
                Implementamos soluções tecnológicas que transformam a forma como vivemos e interagimos com o espaço urbano.
              </p>
              
            </motion.div>
          </div>
        </section>

        {/* Concept Section with Images */}
        <section className="py-16 md:py-20 bg-background relative overflow-hidden">
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-[#A7D1EC]/10 rounded-full blur-3xl" />
          
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
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
            }}>
                <span className="inline-block bg-[#A7D1EC]/20 text-primary font-body text-sm px-4 py-2 rounded-full mb-4">
                  O Conceito
                </span>
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

              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => <div key={benefit.title} className="p-5 bg-white rounded-xl border border-[#A7D1EC]/20 hover:shadow-lg hover:shadow-[#A7D1EC]/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-[#A7D1EC]/20 rounded-xl flex items-center justify-center mb-3">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg text-primary mb-2">{benefit.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{benefit.description}</p>
                  </div>)}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-12 bg-[#A7D1EC]/10">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} className="aspect-square rounded-2xl overflow-hidden border-4 border-[#A7D1EC]/30">
                <img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=400&fit=crop" alt="Iluminação urbana" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.1
            }} className="aspect-square rounded-2xl overflow-hidden border-4 border-[#A7D1EC]/30">
                <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop" alt="Cidade inteligente" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2
            }} className="aspect-square rounded-2xl overflow-hidden border-4 border-[#A7D1EC]/30">
                <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=400&fit=crop" alt="Mobilidade elétrica" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.3
            }} className="aspect-square rounded-2xl overflow-hidden border-4 border-[#A7D1EC]/30">
                <img src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=400&fit=crop" alt="IoT e conectividade" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-muted to-[#A7D1EC]/10">
          <div className="container-custom">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="text-center mb-12">
              <span className="inline-block bg-[#A7D1EC]/20 text-primary font-body text-sm px-4 py-2 rounded-full mb-4">
                As Nossas Soluções
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
                Os Nossos Serviços Smart Cities
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Oferecemos soluções completas para a modernização urbana, desde o projeto até à manutenção.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {smartCityServices.map((service, index) => <motion.div key={service.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.05
            }} className="bg-white rounded-2xl overflow-hidden border border-[#A7D1EC]/20 hover:shadow-xl hover:shadow-[#A7D1EC]/10 transition-all duration-300 group">
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 bg-[#A7D1EC] rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-heading text-lg text-primary mb-2">{service.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&h=600&fit=crop')"
        }} />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A7D1EC]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#A7D1EC]/15 rounded-full blur-2xl" />
          
          <div className="container-custom text-center relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }}>
              <div className="inline-block bg-[#A7D1EC]/20 px-6 py-2 rounded-full mb-6">
                <span className="text-white font-body text-sm">Transforme a Sua Cidade</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl mb-4">
                Pronto para Transformar a Sua Cidade?
              </h2>
              <p className="font-body text-white/90 max-w-2xl mx-auto mb-8">
                Contacte-nos para uma consultoria gratuita e descubra como podemos ajudar 
                na modernização das infraestruturas urbanas do seu município.
              </p>
              <a href="/contacto" className="inline-block bg-[#A7D1EC] text-primary px-8 py-3 rounded-md font-body font-medium hover:bg-[#A7D1EC]/90 transition-colors shadow-lg shadow-[#A7D1EC]/30">
                Falar com Especialista
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>;
};
export default SmartCities;