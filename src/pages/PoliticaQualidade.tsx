import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Compass, Heart, Shield, CheckCircle, Users, TrendingUp, BookOpen, HeartPulse, Scale } from "lucide-react";

const PoliticaQualidade = () => {
  const valores = [
    {
      icon: Shield,
      title: "Integridade",
      description: "Predominar a seriedade e a honestidade nas decisões e no dia-a-dia."
    },
    {
      icon: CheckCircle,
      title: "Responsabilidade",
      description: "Compromisso em assumir os deveres e funções que lhe são atribuídas, assim como, garantir o cumprimento do contrato / serviço acordado."
    },
    {
      icon: Target,
      title: "Eficácia no Serviço",
      description: "Fazer bem à primeira."
    },
    {
      icon: Users,
      title: "Orientação para o Cliente",
      description: "Trabalhar em função das expectativas e exigências do cliente."
    }
  ];

  const orientacoes = [
    {
      icon: TrendingUp,
      text: "Melhorar continuamente a eficácia do SGQ e dos nossos serviços para a satisfação de clientes e colaboradores, bem como contribuir para o desenvolvimento da região que servimos, através de uma gestão eficaz, firme e justa, assegurando a constante viabilização económica."
    },
    {
      icon: BookOpen,
      text: "Formar, informar e desenvolver todos os nossos recursos humanos, contribuindo para o desenvolvimento das suas competências."
    },
    {
      icon: HeartPulse,
      text: "Promover as condições de segurança e de saúde de forma a harmonizar o trabalho e proporcionar o bem-estar de todos os colaboradores."
    },
    {
      icon: Scale,
      text: "Garantir o cumprimento de todas as normas, legislação e regulamentação em vigor e especificações técnicas exigidas pelos nossos clientes."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#A7D1EC]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A7D1EC]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 font-normal">
              Política de Qualidade
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              O nosso compromisso com a excelência e a melhoria contínua
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visão Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#A7D1EC]/20 rounded-xl flex items-center justify-center">
                  <Compass className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl text-primary font-normal">Visão</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A Joaquim & Fernandes Lda tem como visão ser uma empresa líder e um parceiro estratégico na construção de infra-estruturas na sua região, acompanhando a inovação e sendo um exemplo na sua área de negócio.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#A7D1EC]/20 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl text-primary font-normal">Missão</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Prestar serviços com eficácia e rapidez na área da construção e manutenção de infra-estruturas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#A7D1EC]/20 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl text-primary font-normal">Valores</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam todas as nossas ações e decisões
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {valores.map((valor, index) => (
              <motion.div
                key={valor.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#A7D1EC]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <valor.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl text-primary mb-2 font-normal">{valor.title}</h3>
                    <p className="text-muted-foreground">{valor.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Orientações Estratégicas Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-primary mb-4 font-normal">Orientações Estratégicas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As diretrizes que orientam o nosso caminho para a excelência
            </p>
          </motion.div>

          <div className="space-y-6">
            {orientacoes.map((orientacao, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-muted rounded-xl"
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <orientacao.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed pt-2">
                  {orientacao.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PoliticaQualidade;
