import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Briefcase, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const jobPositions = [
  {
    id: 1,
    title: "Eletricista Industrial",
    type: "Tempo Inteiro",
    location: "Lisboa",
    description: "Procuramos eletricista com experiência em instalações industriais, manutenção preventiva e corretiva de sistemas elétricos.",
    requirements: ["Carta de condução", "Experiência mínima de 3 anos", "Certificação profissional"],
  },
  {
    id: 2,
    title: "Técnico de Energias Renováveis",
    type: "Tempo Inteiro",
    location: "Lisboa e arredores",
    description: "Instalação e manutenção de sistemas fotovoltaicos e outras soluções de energia renovável.",
    requirements: ["Formação em energias renováveis", "Experiência com painéis solares", "Disponibilidade para deslocações"],
  },
  {
    id: 3,
    title: "Ajudante de Eletricista",
    type: "Tempo Inteiro",
    location: "Lisboa",
    description: "Apoio em instalações elétricas residenciais e comerciais. Oportunidade de crescimento profissional.",
    requirements: ["Formação básica em eletricidade", "Vontade de aprender", "Boa condição física"],
  },
  {
    id: 4,
    title: "Projetista Elétrico",
    type: "Tempo Inteiro",
    location: "Lisboa (Híbrido)",
    description: "Elaboração de projetos elétricos para instalações residenciais, comerciais e industriais.",
    requirements: ["Licenciatura em Eng. Eletrotécnica", "Domínio de AutoCAD", "Experiência em projetos"],
  },
];

const companyEmail = "recrutamento@joaquimfernandes.pt";

const Recrutamento = () => {
  const handleApply = (jobTitle: string) => {
    const subject = encodeURIComponent(`Candidatura: ${jobTitle}`);
    const body = encodeURIComponent(`Olá,\n\nVenho por este meio candidatar-me à vaga de ${jobTitle}.\n\nSegue em anexo o meu currículo.\n\nCom os melhores cumprimentos,\n[O seu nome]`);
    window.location.href = `mailto:${companyEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Helmet>
        <title>Recrutamento | Joaquim & Fernandes - Trabalhe Connosco</title>
        <meta name="description" content="Junte-se à equipa Joaquim & Fernandes. Veja as vagas disponíveis para eletricistas, técnicos e projetistas. Envie o seu currículo." />
      </Helmet>

      <Header />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16">
          <div className="container-custom text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6"
            >
              Trabalhe Connosco
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-body text-lg md:text-xl max-w-2xl mx-auto text-white/90"
            >
              Faça parte de uma equipa líder em soluções elétricas. 
              Estamos sempre à procura de profissionais talentosos e dedicados.
            </motion.p>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-16 bg-background-secondary">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
                Vagas Disponíveis
              </h2>
              <p className="font-body text-muted-foreground max-w-xl mx-auto">
                Explore as nossas oportunidades de carreira e encontre a posição ideal para si.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {jobPositions.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl text-primary mb-2">
                            {job.title}
                          </CardTitle>
                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock size={14} />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {job.location}
                            </span>
                          </div>
                        </div>
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Briefcase className="text-primary" size={24} />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-base mb-4">
                        {job.description}
                      </CardDescription>
                      <div>
                        <p className="font-medium text-sm text-primary mb-2">Requisitos:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        onClick={() => handleApply(job.title)}
                        className="w-full"
                        style={{ backgroundColor: "#3A445C", borderRadius: 6 }}
                      >
                        <Mail size={18} className="mr-2" />
                        Enviar Currículo
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Candidatura Espontânea */}
        <section className="py-16 bg-white">
          <div className="container-custom text-center">
            <h2 className="font-heading text-3xl text-primary mb-4">
              Não encontrou a vaga ideal?
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto mb-8">
              Envie-nos uma candidatura espontânea. Estamos sempre interessados em conhecer novos talentos.
            </p>
            <Button
              onClick={() => handleApply("Candidatura Espontânea")}
              size="lg"
              style={{ backgroundColor: "#3A445C", borderRadius: 6 }}
            >
              <Mail size={18} className="mr-2" />
              Enviar Candidatura Espontânea
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Recrutamento;
