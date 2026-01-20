import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
