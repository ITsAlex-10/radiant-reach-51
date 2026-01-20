import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Zap, Users, Award, TrendingUp } from "lucide-react";

const timelineEvents = [
  {
    year: "1995",
    title: "Fundação da Empresa",
    description: "A Joaquim & Fernandes foi fundada com o objetivo de prestar serviços de eletricidade de qualidade na região de Lisboa.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
  },
  {
    year: "2002",
    title: "Expansão dos Serviços",
    description: "Alargámos a nossa oferta para incluir instalações industriais e projetos de maior dimensão.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
  },
  {
    year: "2008",
    title: "Certificação E-Redes",
    description: "Tornámo-nos parceiro credenciado E-Redes, consolidando a nossa posição no mercado de instalações elétricas.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    year: "2015",
    title: "Energias Renováveis",
    description: "Iniciámos a instalação de sistemas fotovoltaicos e soluções de energia renovável para clientes particulares e empresas.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
  },
  {
    year: "2019",
    title: "Mobilidade Elétrica",
    description: "Expandimos para o setor da mobilidade elétrica com instalação de postos de carregamento.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop",
  },
  {
    year: "2023",
    title: "Smart Cities",
    description: "Lançámos a divisão de Smart Cities, oferecendo soluções de iluminação inteligente e IoT urbano.",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&h=400&fit=crop",
  },
];

const stats = [
  { icon: Zap, value: "25+", label: "Anos de Experiência" },
  { icon: Users, value: "500+", label: "Clientes Satisfeitos" },
  { icon: Award, value: "1000+", label: "Projetos Concluídos" },
  { icon: TrendingUp, value: "50+", label: "Profissionais" },
];

const SobreNos = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nós | Joaquim & Fernandes - A Nossa História</title>
        <meta 
          name="description" 
          content="Conheça a história da Joaquim & Fernandes. Desde 1995 a prestar serviços de eletricidade de qualidade em Portugal. Equipa experiente e certificada." 
        />
        <link rel="canonical" href="https://radiant-reach-51.lovable.app/sobre-nos" />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section with Background Image */}
        <section className="relative bg-primary text-white pt-32 pb-24 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#A7D1EC]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A7D1EC]/15 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-block bg-[#A7D1EC]/30 px-4 py-2 rounded-full mb-6">
                <span className="font-body text-sm text-white/90">Desde 1995</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
                Sobre Nós
              </h1>
              <p className="font-body text-lg md:text-xl text-white/90 mb-8">
                Mais de 25 anos a iluminar Portugal com soluções elétricas de excelência.
              </p>
              <div className="w-24 h-1 bg-[#A7D1EC] mx-auto rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[#A7D1EC]/10 border-b border-[#A7D1EC]/20">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#A7D1EC]/20 rounded-2xl mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-heading text-3xl md:text-4xl text-primary mb-1">{stat.value}</p>
                  <p className="font-body text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block bg-[#A7D1EC]/20 text-primary font-body text-sm px-4 py-2 rounded-full mb-4">
                O Nosso Trabalho
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
                Excelência em Cada Projeto
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Conheça alguns dos nossos trabalhos e a dedicação que colocamos em cada instalação.
              </p>
            </motion.div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="col-span-2 row-span-2"
              >
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=800&fit=crop" 
                  alt="Instalação elétrica profissional"
                  className="w-full h-full object-cover rounded-2xl border-4 border-[#A7D1EC]/30"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=400&fit=crop" 
                  alt="Painéis solares"
                  className="w-full h-48 object-cover rounded-2xl border-4 border-[#A7D1EC]/30"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=400&fit=crop" 
                  alt="Posto de carregamento"
                  className="w-full h-48 object-cover rounded-2xl border-4 border-[#A7D1EC]/30"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop" 
                  alt="Rede elétrica"
                  className="w-full h-48 object-cover rounded-2xl border-4 border-[#A7D1EC]/30"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop" 
                  alt="Equipa técnica"
                  className="w-full h-48 object-cover rounded-2xl border-4 border-[#A7D1EC]/30"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-[#A7D1EC]/10 to-muted">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="inline-block bg-[#A7D1EC]/20 text-primary font-body text-sm px-4 py-2 rounded-full mb-4">
                A Nossa Jornada
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
                A Nossa História
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Um percurso de crescimento, inovação e compromisso com a excelência.
              </p>
            </motion.div>

            {/* Vertical Timeline with Images */}
            <div className="relative max-w-5xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-[#A7D1EC] via-primary to-[#A7D1EC]" />

              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 mb-16 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 bg-[#A7D1EC] rounded-full border-4 border-background z-10 shadow-lg shadow-[#A7D1EC]/50" />

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#A7D1EC]/20 hover:shadow-xl transition-shadow duration-300">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                        <span className="absolute bottom-4 left-4 bg-[#A7D1EC] text-primary text-lg font-heading px-4 py-1 rounded-full">
                          {event.year}
                        </span>
                      </div>
                      {/* Text */}
                      <div className="p-6">
                        <h3 className="font-heading text-xl text-primary mb-2">{event.title}</h3>
                        <p className="font-body text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#A7D1EC]/30 rounded-full blur-2xl" />
                <img 
                  src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&h=600&fit=crop" 
                  alt="Equipa Joaquim & Fernandes"
                  className="relative rounded-2xl shadow-2xl border-4 border-[#A7D1EC]/30"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#A7D1EC] text-primary p-6 rounded-2xl shadow-xl">
                  <p className="font-heading text-3xl">25+</p>
                  <p className="font-body text-sm">Anos de Experiência</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block bg-[#A7D1EC]/20 text-primary font-body text-sm px-4 py-2 rounded-full mb-4">
                  A Nossa Missão
                </span>
                <h2 className="font-heading text-3xl md:text-4xl text-primary mb-6">
                  Iluminar o Futuro de Portugal
                </h2>
                <div className="space-y-4 font-body text-muted-foreground">
                  <p>
                    A nossa missão é proporcionar soluções elétricas inovadoras e sustentáveis 
                    que contribuam para um futuro mais eficiente e ecológico.
                  </p>
                  <p>
                    Acreditamos que a qualidade, a segurança e a inovação são os pilares 
                    fundamentais para construir relações duradouras com os nossos clientes.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-[#A7D1EC]/10 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-[#A7D1EC] rounded-full" />
                    <span className="font-body text-sm text-foreground">Qualidade</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#A7D1EC]/10 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-[#A7D1EC] rounded-full" />
                    <span className="font-body text-sm text-foreground">Segurança</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#A7D1EC]/10 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-[#A7D1EC] rounded-full" />
                    <span className="font-body text-sm text-foreground">Inovação</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#A7D1EC]/10 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-[#A7D1EC] rounded-full" />
                    <span className="font-body text-sm text-foreground">Confiança</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1920&h=600&fit=crop')] bg-cover bg-center opacity-10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A7D1EC]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#A7D1EC]/15 rounded-full blur-2xl" />
          
          <div className="container-custom text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl mb-4">
                Pronto para Trabalhar Connosco?
              </h2>
              <p className="font-body text-white/90 max-w-2xl mx-auto mb-8">
                Contacte-nos para saber como podemos ajudar no seu próximo projeto.
              </p>
              <a 
                href="/contacto"
                className="inline-block bg-[#A7D1EC] text-primary px-8 py-3 rounded-md font-body font-medium hover:bg-[#A7D1EC]/90 transition-colors shadow-lg shadow-[#A7D1EC]/30"
              >
                Entrar em Contacto
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SobreNos;
