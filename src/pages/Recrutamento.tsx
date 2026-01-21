// Recruitment page
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Briefcase, MapPin, Clock, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
const jobPositions = [{
  id: 1,
  title: "Eletricista Industrial",
  type: "Tempo Inteiro",
  location: "Lisboa",
  description: "Procuramos eletricista com experiência em instalações industriais, manutenção preventiva e corretiva de sistemas elétricos.",
  requirements: ["Carta de condução", "Experiência mínima de 3 anos", "Certificação profissional"],
  image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop"
}, {
  id: 2,
  title: "Técnico de Energias Renováveis",
  type: "Tempo Inteiro",
  location: "Lisboa e arredores",
  description: "Instalação e manutenção de sistemas fotovoltaicos e outras soluções de energia renovável.",
  requirements: ["Formação em energias renováveis", "Experiência com painéis solares", "Disponibilidade para deslocações"],
  image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop"
}, {
  id: 3,
  title: "Ajudante de Eletricista",
  type: "Tempo Inteiro",
  location: "Lisboa",
  description: "Apoio em instalações elétricas residenciais e comerciais. Oportunidade de crescimento profissional.",
  requirements: ["Formação básica em eletricidade", "Vontade de aprender", "Boa condição física"],
  image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=600&h=400&fit=crop"
}, {
  id: 4,
  title: "Projetista Elétrico",
  type: "Tempo Inteiro",
  location: "Lisboa (Híbrido)",
  description: "Elaboração de projetos elétricos para instalações residenciais, comerciais e industriais.",
  requirements: ["Licenciatura em Eng. Eletrotécnica", "Domínio de AutoCAD", "Experiência em projetos"],
  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop"
}];
const companyEmail = "recrutamento@joaquimfernandes.pt";
const Recrutamento = () => {
  const handleApply = (jobTitle: string) => {
    const subject = encodeURIComponent(`Candidatura: ${jobTitle}`);
    const body = encodeURIComponent(`Olá,\n\nVenho por este meio candidatar-me à vaga de ${jobTitle}.\n\nSegue em anexo o meu currículo.\n\nCom os melhores cumprimentos,\n[O seu nome]`);
    window.location.href = `mailto:${companyEmail}?subject=${subject}&body=${body}`;
  };
  return <>
      <Helmet>
        <title>Recrutamento | Joaquim & Fernandes - Trabalhe Connosco</title>
        <meta name="description" content="Junte-se à equipa Joaquim & Fernandes. Veja as vagas disponíveis para eletricistas, técnicos e projetistas. Envie o seu currículo." />
      </Helmet>

      <Header />

      <main className="pb-20">
        {/* Hero Section */}
        <section className="bg-primary text-white pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=1920&h=600&fit=crop')"
        }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#A7D1EC]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A7D1EC]/15 rounded-full blur-3xl" />
          
          <div className="container-custom text-center relative z-10">
            
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1
          }} className="font-heading font-normal text-4xl md:text-5xl lg:text-6xl mb-6">
              Trabalhe Connosco
            </motion.h1>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="font-body text-lg md:text-xl max-w-2xl mx-auto text-white/90 mb-6">
              Faça parte de uma equipa líder em soluções elétricas. 
              Estamos sempre à procura de profissionais talentosos e dedicados.
            </motion.p>
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.3
          }} className="w-24 h-1 bg-[#A7D1EC] mx-auto rounded-full" />
          </div>
        </section>

        {/* Team Images */}
        

        {/* Job Listings */}
        <section className="py-16 bg-gradient-to-b from-background to-[#A7D1EC]/10">
          <div className="container-custom">
            <div className="text-center mb-12">
              
              <h2 className="font-heading font-normal text-3xl md:text-4xl text-primary mb-4">
                Vagas Disponíveis
              </h2>
              <p className="font-body text-muted-foreground max-w-xl mx-auto">
                Explore as nossas oportunidades de carreira e encontre a posição ideal para si.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {jobPositions.map((job, index) => <motion.div key={job.id} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }}>
                  <Card className="h-full flex flex-col hover:shadow-xl hover:shadow-[#A7D1EC]/10 transition-all duration-300 border-[#A7D1EC]/20 overflow-hidden">
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden">
                      <img src={job.image} alt={job.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                      <div className="absolute bottom-3 left-3 bg-[#A7D1EC] p-2 rounded-lg">
                        <Briefcase className="text-primary" size={20} />
                      </div>
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl text-primary mb-2 font-normal">
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
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-base mb-4">
                        {job.description}
                      </CardDescription>
                      <div>
                        <p className="font-medium text-sm text-primary mb-2">Requisitos:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {job.requirements.map((req, i) => <li key={i} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#A7D1EC] rounded-full" />
                              {req}
                            </li>)}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button onClick={() => handleApply(job.title)} className="w-full bg-[#3A445C] hover:bg-[#3A445C]/90">
                        <Mail size={18} className="mr-2" />
                        Enviar Currículo
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Candidatura Espontânea */}
        <section className="py-16 bg-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A7D1EC]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#A7D1EC]/15 rounded-full blur-2xl" />
          
          <div className="container-custom text-center relative z-10">
            <div className="inline-block bg-[#A7D1EC]/20 px-4 py-2 rounded-full mb-6">
              <span className="text-white font-body text-sm">Candidatura Espontânea</span>
            </div>
            <h2 className="font-heading font-normal text-3xl text-white mb-4">
              Não encontrou a vaga ideal?
            </h2>
            <p className="font-body text-white/80 max-w-xl mx-auto mb-8">
              Envie-nos uma candidatura espontânea. Estamos sempre interessados em conhecer novos talentos.
            </p>
            <Button onClick={() => handleApply("Candidatura Espontânea")} size="lg" className="bg-[#A7D1EC] text-primary hover:bg-[#A7D1EC]/90 max-w-full whitespace-normal text-center">
              <Mail size={18} className="mr-2 flex-shrink-0" />
              Enviar Candidatura Espontânea
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>;
};
export default Recrutamento;