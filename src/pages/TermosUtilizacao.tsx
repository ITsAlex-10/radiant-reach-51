import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermosUtilizacao = () => {
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
              Termos de Utilização
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Condições gerais de utilização do website
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8">
              {/* Identificação */}
              <div className="bg-muted p-6 rounded-xl">
                <h2 className="text-2xl text-primary mb-4 font-normal">1. Identificação do Titular</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O presente website é propriedade da <strong>Joaquim & Fernandes Lda</strong>, sociedade comercial por quotas, 
                  com sede em Portugal, adiante designada por "Empresa". A utilização deste website está sujeita aos 
                  presentes Termos de Utilização, que o utilizador deve ler atentamente antes de prosseguir a navegação.
                </p>
              </div>

              {/* Aceitação */}
              <div>
                <h2 className="text-2xl text-primary mb-4 font-normal">2. Aceitação dos Termos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ao aceder e utilizar este website, o utilizador declara ter lido, compreendido e aceite os presentes 
                  Termos de Utilização, bem como a Política de Privacidade. Caso não concorde com alguma das condições, 
                  deverá abster-se de utilizar o website.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A Empresa reserva-se o direito de modificar os presentes termos a qualquer momento, sem aviso prévio, 
                  sendo as alterações eficazes a partir da sua publicação no website.
                </p>
              </div>

              {/* Objeto */}
              <div>
                <h2 className="text-2xl text-primary mb-4 font-normal">3. Objeto e Finalidade</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Este website tem como objetivo fornecer informações sobre a Joaquim & Fernandes Lda, os seus serviços, 
                  projetos e atividades no setor da construção de infraestruturas elétricas, mobilidade elétrica e 
                  construção civil. Os conteúdos disponibilizados têm caráter meramente informativo e não constituem 
                  oferta comercial vinculativa.
                </p>
              </div>

              {/* Propriedade Intelectual */}
              <div className="bg-muted p-6 rounded-xl">
                <h2 className="text-2xl text-primary mb-4 font-normal">4. Propriedade Intelectual</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Todos os conteúdos deste website, incluindo mas não limitado a textos, imagens, gráficos, logótipos, 
                  ícones, fotografias, vídeos, software e design, são propriedade exclusiva da Joaquim & Fernandes Lda 
                  ou de terceiros que tenham autorizado a sua utilização, estando protegidos pelos direitos de autor e 
                  direitos conexos, nos termos do Código do Direito de Autor e dos Direitos Conexos (CDADC) e demais 
                  legislação aplicável.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  É expressamente proibida a reprodução, distribuição, comunicação pública, transformação ou qualquer 
                  outra forma de utilização dos conteúdos sem autorização prévia e escrita da Empresa.
                </p>
              </div>

              {/* Utilização do Website */}
              <div>
                <h2 className="text-2xl text-primary mb-4 font-normal">5. Regras de Utilização</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O utilizador compromete-se a utilizar o website de forma lícita, de acordo com a lei, a moral, 
                  os bons costumes e a ordem pública. É proibido:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Utilizar o website para fins ilegais ou não autorizados</li>
                  <li>Transmitir ou difundir conteúdos difamatórios, obscenos, ofensivos ou discriminatórios</li>
                  <li>Introduzir vírus, malware ou outros elementos prejudiciais</li>
                  <li>Tentar aceder a áreas restritas ou sistemas informáticos da Empresa</li>
                  <li>Interferir com o normal funcionamento do website</li>
                  <li>Recolher dados pessoais de outros utilizadores sem consentimento</li>
                </ul>
              </div>

              {/* Responsabilidade */}
              <div>
                <h2 className="text-2xl text-primary mb-4 font-normal">6. Limitação de Responsabilidade</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A Empresa envidará os melhores esforços para manter as informações do website atualizadas e corretas, 
                  mas não garante a exatidão, completude ou atualidade das mesmas. A utilização do website é da 
                  inteira responsabilidade do utilizador.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A Empresa não será responsável por:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Danos diretos ou indiretos decorrentes da utilização ou impossibilidade de utilização do website</li>
                  <li>Interrupções, erros ou falhas de funcionamento</li>
                  <li>Presença de vírus ou outros elementos nocivos</li>
                  <li>Conteúdos de websites de terceiros acedidos através de links</li>
                  <li>Decisões tomadas com base nas informações disponibilizadas</li>
                </ul>
              </div>

              {/* Links */}
              <div className="bg-muted p-6 rounded-xl">
                <h2 className="text-2xl text-primary mb-4 font-normal">7. Links para Terceiros</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Este website pode conter links para websites de terceiros. Estes links são disponibilizados apenas 
                  para conveniência do utilizador, não constituindo qualquer aprovação ou responsabilidade da Empresa 
                  relativamente aos conteúdos, políticas de privacidade ou práticas desses websites. O acesso a 
                  websites de terceiros é da exclusiva responsabilidade do utilizador.
                </p>
              </div>

              {/* Disponibilidade */}
              <div>
                <h2 className="text-2xl text-primary mb-4 font-normal">8. Disponibilidade do Website</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A Empresa não garante a disponibilidade contínua e ininterrupta do website, podendo suspendê-lo 
                  temporariamente para manutenção, atualizações ou por motivos de força maior. A Empresa reserva-se 
                  o direito de modificar, suspender ou descontinuar o website ou qualquer parte do mesmo, a qualquer 
                  momento e sem aviso prévio.
                </p>
              </div>

              {/* Proteção de Dados */}
              <div>
                <h2 className="text-2xl text-primary mb-4 font-normal">9. Proteção de Dados Pessoais</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O tratamento de dados pessoais recolhidos através deste website rege-se pela nossa Política de 
                  Privacidade, elaborada em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) 
                  - Regulamento (UE) 2016/679 - e a Lei n.º 58/2019, de 8 de agosto, que assegura a execução do RGPD 
                  na ordem jurídica portuguesa. Recomendamos a leitura atenta da Política de Privacidade.
                </p>
              </div>

              {/* Lei Aplicável */}
              <div className="bg-muted p-6 rounded-xl">
                <h2 className="text-2xl text-primary mb-4 font-normal">10. Lei Aplicável e Foro Competente</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Os presentes Termos de Utilização regem-se pela legislação portuguesa. Para a resolução de qualquer 
                  litígio emergente da interpretação ou execução dos presentes termos, as partes elegem o foro da 
                  comarca da sede da Empresa, com expressa renúncia a qualquer outro.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sem prejuízo do disposto anteriormente, o utilizador consumidor poderá recorrer aos mecanismos de 
                  resolução alternativa de litígios de consumo, nos termos da Lei n.º 144/2015, de 8 de setembro.
                </p>
              </div>

              {/* Contactos */}
              <div>
                <h2 className="text-2xl text-primary mb-4 font-normal">11. Contactos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para quaisquer questões relacionadas com os presentes Termos de Utilização, o utilizador poderá 
                  contactar a Empresa através dos meios disponibilizados na página de Contacto do website.
                </p>
              </div>

              {/* Data */}
              <div className="border-t pt-6 mt-8">
                <p className="text-muted-foreground text-sm">
                  <strong>Última atualização:</strong> Janeiro de 2025
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermosUtilizacao;
