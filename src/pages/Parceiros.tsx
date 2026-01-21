import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ExternalLink, Award, Zap, Building2, Cable, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Featured partner - E-Redes
const featuredPartner = {
  name: "E-Redes",
  description: "A E-Redes é o Operador da Rede de Distribuição de eletricidade em Portugal Continental, responsável pela gestão técnica e operacional da rede de média e baixa tensão. A Joaquim & Fernandes é parceiro credenciado E-Redes para instalações elétricas, ligações à rede, postos de transformação e projetos de eletricidade.",
  services: ["Ligação à rede E-Redes", "Instalações elétricas certificadas", "Postos de transformação", "Projetos de eletricidade homologados", "Ramais de alimentação", "Quadros elétricos"],
  keywords: ["instalador credenciado E-Redes", "parceiro E-Redes Portugal", "ligação rede elétrica E-Redes", "posto transformação E-Redes", "eletricista certificado E-Redes"]
};

// Suppliers
const fornecedores = [{
  name: "EDP",
  category: "Energia",
  image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop"
}, {
  name: "Schneider Electric",
  category: "Equipamentos Elétricos",
  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
}, {
  name: "ABB",
  category: "Automação e Energia",
  image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
}, {
  name: "Legrand",
  category: "Infraestrutura Elétrica",
  image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop"
}, {
  name: "Hager",
  category: "Quadros e Proteção",
  image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop"
}, {
  name: "Siemens",
  category: "Tecnologia Industrial",
  image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=300&fit=crop"
}, {
  name: "Weidmüller",
  category: "Conectividade Industrial",
  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop"
}, {
  name: "Phoenix Contact",
  category: "Componentes Eletrónicos",
  image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=300&fit=crop"
}];

// Closed partnerships
const parceriasAtivas = [{
  name: "E-Redes",
  type: "Parceiro Credenciado",
  featured: true
}, {
  name: "DGEG",
  type: "Entidade Reguladora"
}, {
  name: "Certiel",
  type: "Certificação"
}, {
  name: "ERSE",
  type: "Regulação Energética"
}];
const Parceiros = () => {
  return <>
      <Helmet>
        <title>Parceiros E-Redes e Fornecedores | Joaquim & Fernandes - Instalador Credenciado E-Redes Portugal</title>
        <meta name="description" content="Joaquim & Fernandes é parceiro credenciado E-Redes para ligações à rede elétrica, postos de transformação e projetos de eletricidade em Portugal. Instalador certificado E-Redes, EDP, Schneider Electric, ABB e mais." />
        <meta name="keywords" content="E-Redes, parceiro E-Redes, instalador credenciado E-Redes, ligação rede elétrica E-Redes, posto transformação E-Redes, eletricista certificado E-Redes Portugal, EDP parceiro, Schneider Electric Portugal, instalações elétricas certificadas, operador rede distribuição, ramal alimentação E-Redes, quadros elétricos E-Redes, projetos eletricidade homologados" />
        <link rel="canonical" href="https://radiant-reach-51.lovable.app/parceiros" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Parceiros E-Redes e Fornecedores | Joaquim & Fernandes" />
        <meta property="og:description" content="Parceiro credenciado E-Redes para instalações elétricas, ligações à rede e postos de transformação em Portugal." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://radiant-reach-51.lovable.app/parceiros" />
        
        {/* Structured Data - LocalBusiness with E-Redes partnership */}
        <script type="application/ld+json">
          {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Joaquim & Fernandes Lda",
          "description": "Parceiro credenciado E-Redes para instalações elétricas, ligações à rede de distribuição e postos de transformação em Portugal.",
          "url": "https://radiant-reach-51.lovable.app",
          "areaServed": "Portugal",
          "knowsAbout": ["E-Redes", "Ligação à rede elétrica", "Postos de transformação", "Instalações elétricas", "Projetos de eletricidade", "Operador rede distribuição Portugal"],
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Instalador Credenciado E-Redes"
          }
        })}
        </script>
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=600&fit=crop')"
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
          }} className="text-center max-w-3xl mx-auto text-white">
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Parceiros e Fornecedores
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-6">
                Trabalhamos com os melhores parceiros e fornecedores do setor elétrico para garantir 
                qualidade e certificação em todos os nossos projetos.
              </p>
              <div className="w-24 h-1 bg-[#A7D1EC] mx-auto rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* Featured Partner - E-Redes */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-[#A7D1EC]/10 to-background" aria-labelledby="eredes-partner">
          <div className="container-custom">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#A7D1EC]/30">
              <div className="bg-[#A7D1EC] text-primary py-4 px-6 flex items-center gap-3">
                <Award className="w-6 h-6" />
                <span className="font-body font-semibold uppercase tracking-wide text-sm">
                  Parceiro em Destaque
                </span>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  <div>
                    <h2 id="eredes-partner" className="text-3xl md:text-4xl text-primary mb-4">
                      {featuredPartner.name}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPartner.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPartner.keywords.map(keyword => <span key={keyword} className="px-3 py-1 bg-[#A7D1EC]/20 text-primary text-sm rounded-full font-body">
                          {keyword}
                        </span>)}
                    </div>
                    
                    <a href="https://www.e-redes.pt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-[#A7D1EC] transition-colors font-body font-medium">
                      Visitar E-Redes <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-xl text-primary mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-[#A7D1EC]" />
                      Serviços Certificados E-Redes
                    </h3>
                    <ul className="space-y-3">
                      {featuredPartner.services.map(service => <li key={service} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#A7D1EC]/20 flex items-center justify-center flex-shrink-0">
                            <Zap className="w-4 h-4 text-primary" />
                          </div>
                          <span className="font-body text-foreground">{service}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Active Partnerships */}
        <section className="py-16 md:py-20 bg-background" aria-labelledby="parcerias-title">
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
              
              <h2 id="parcerias-title" className="text-3xl md:text-4xl text-primary mb-4">
                Parcerias Ativas
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Certificações e parcerias que garantem a qualidade e conformidade dos nossos serviços.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {parceriasAtivas.map((parceria, index) => <motion.div key={parceria.name} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className={`p-6 rounded-xl border text-center ${parceria.featured ? "bg-[#A7D1EC]/10 border-[#A7D1EC]/30" : "bg-white border-[#A7D1EC]/20"} hover:shadow-lg hover:shadow-[#A7D1EC]/10 transition-all duration-300`}>
                  <div className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center ${parceria.featured ? "bg-[#A7D1EC]" : "bg-[#A7D1EC]/20"}`}>
                    <Building2 className={`w-7 h-7 ${parceria.featured ? "text-primary" : "text-primary"}`} />
                  </div>
                  <h3 className="text-lg text-primary mb-1">{parceria.name}</h3>
                  <p className="text-sm text-muted-foreground font-body">{parceria.type}</p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Suppliers */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-muted to-[#A7D1EC]/10" aria-labelledby="fornecedores-title">
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
              
              <h2 id="fornecedores-title" className="text-3xl md:text-4xl text-primary mb-4">
                Fornecedores de Confiança
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Trabalhamos exclusivamente com marcas de referência no setor elétrico e de energia.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fornecedores.map((fornecedor, index) => <motion.div key={fornecedor.name} initial={{
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
                  <div className="relative h-32 overflow-hidden">
                    <img src={fornecedor.image} alt={fornecedor.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-8 h-8 bg-[#A7D1EC] rounded-lg flex items-center justify-center">
                      <Cable className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-lg text-primary mb-1">{fornecedor.name}</h3>
                    <p className="text-sm text-muted-foreground font-body">{fornecedor.category}</p>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* SEO Content Block */}
        <section className="py-12 bg-background">
          <div className="container-custom">
            <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground">
              <h2 className="text-2xl text-primary">Instalador Credenciado E-Redes em Portugal</h2>
              <p>
                A <strong>Joaquim & Fernandes</strong> é uma empresa <strong>credenciada pela E-Redes</strong> para 
                a execução de <strong>instalações elétricas</strong>, <strong>ligações à rede de distribuição</strong>, 
                <strong>postos de transformação</strong> e <strong>projetos de eletricidade</strong> em Portugal Continental.
              </p>
              <p>
                Como <strong>parceiro oficial E-Redes</strong>, garantimos que todos os trabalhos cumprem os 
                requisitos técnicos e de segurança exigidos pelo <strong>Operador da Rede de Distribuição</strong>. 
                Realizamos <strong>ramais de alimentação</strong>, <strong>quadros elétricos</strong> e 
                <strong>projetos homologados</strong> com certificação completa.
              </p>
              <p>
                Se procura um <strong>eletricista certificado E-Redes</strong> ou precisa de efetuar uma 
                <strong>ligação à rede elétrica</strong>, contacte-nos para um orçamento gratuito.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>;
};
export default Parceiros;