import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const timelineEvents = [
  {
    year: "1995",
    title: "Fundação da Empresa",
    description: "A Joaquim & Fernandes foi fundada com o objetivo de prestar serviços de eletricidade de qualidade na região de Lisboa.",
  },
  {
    year: "2002",
    title: "Expansão dos Serviços",
    description: "Alargámos a nossa oferta para incluir instalações industriais e projetos de maior dimensão.",
  },
  {
    year: "2008",
    title: "Certificação E-Redes",
    description: "Tornámo-nos parceiro credenciado E-Redes, consolidando a nossa posição no mercado de instalações elétricas.",
  },
  {
    year: "2015",
    title: "Energias Renováveis",
    description: "Iniciámos a instalação de sistemas fotovoltaicos e soluções de energia renovável para clientes particulares e empresas.",
  },
  {
    year: "2019",
    title: "Mobilidade Elétrica",
    description: "Expandimos para o setor da mobilidade elétrica com instalação de postos de carregamento.",
  },
  {
    year: "2023",
    title: "Smart Cities",
    description: "Lançámos a divisão de Smart Cities, oferecendo soluções de iluminação inteligente e IoT urbano.",
  },
];

const teamMembers = [
  {
    name: "João Joaquim",
    role: "Fundador & Diretor Geral",
    description: "Com mais de 30 anos de experiência no setor elétrico, João fundou a empresa com a visão de oferecer serviços de excelência. Lidera a estratégia e desenvolvimento de negócio da empresa.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "António Fernandes",
    role: "Diretor Técnico",
    description: "Engenheiro eletrotécnico com especialização em sistemas de energia. António é responsável pela supervisão técnica de todos os projetos e pela formação contínua da equipa.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Maria Santos",
    role: "Gestora de Projetos",
    description: "Com formação em gestão de projetos e mais de 10 anos na empresa, Maria coordena as equipas de campo e garante o cumprimento dos prazos e qualidade dos trabalhos.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
];

const values = [
  "Qualidade e rigor em cada projeto",
  "Compromisso com a segurança",
  "Inovação e atualização constante",
  "Relação de confiança com clientes",
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
        {/* Hero Section */}
        <section className="bg-primary text-white pt-32 pb-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
                Sobre Nós
              </h1>
              <p className="font-body text-lg md:text-xl text-white/90">
                Mais de 25 anos a iluminar Portugal com soluções elétricas de excelência.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
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
                  Quem Somos
                </h2>
                <div className="space-y-4 font-body text-muted-foreground">
                  <p>
                    A <strong className="text-foreground">Joaquim & Fernandes Lda</strong> é uma empresa portuguesa 
                    especializada em soluções elétricas, energias renováveis e mobilidade elétrica. 
                    Desde a nossa fundação em 1995, temos vindo a crescer e a evoluir, mantendo sempre 
                    o compromisso com a qualidade e a satisfação dos nossos clientes.
                  </p>
                  <p>
                    Somos parceiros credenciados E-Redes e trabalhamos com as melhores marcas do setor, 
                    garantindo instalações seguras, eficientes e em conformidade com todas as normas.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-primary/5 p-8 rounded-2xl"
              >
                <h3 className="font-heading text-2xl text-primary mb-6">Os Nossos Valores</h3>
                <ul className="space-y-4">
                  {values.map((value, index) => (
                    <motion.li 
                      key={value}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                      <span className="font-body text-foreground">{value}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
                A Nossa História
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Um percurso de crescimento, inovação e compromisso com a excelência.
              </p>
            </motion.div>

            {/* Vertical Timeline */}
            <div className="relative max-w-3xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/20" />

              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-start gap-6 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}>
                    <span className="inline-block bg-primary text-white text-sm font-body px-3 py-1 rounded-full mb-3">
                      {event.year}
                    </span>
                    <h3 className="font-heading text-xl text-primary mb-2">{event.title}</h3>
                    <p className="font-body text-muted-foreground">{event.description}</p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
                A Nossa Equipa
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Profissionais experientes e dedicados ao sucesso de cada projeto.
              </p>
            </motion.div>

            <div className="space-y-12 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row items-center gap-8 bg-muted/50 rounded-2xl p-6 md:p-8"
                >
                  {/* Photo */}
                  <div className="flex-shrink-0">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/20"
                    />
                  </div>

                  {/* Text */}
                  <div className="text-center md:text-left">
                    <h3 className="font-heading text-2xl text-primary mb-1">{member.name}</h3>
                    <p className="font-body text-accent font-medium mb-4">{member.role}</p>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container-custom text-center">
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
                className="inline-block bg-white text-primary px-8 py-3 rounded-md font-body font-medium hover:bg-white/90 transition-colors"
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
