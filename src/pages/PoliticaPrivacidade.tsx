import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Eye, Lock, Users, Clock, Globe, Mail } from "lucide-react";

const PoliticaPrivacidade = () => {
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
              Política de Privacidade
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Proteção dos seus dados pessoais em conformidade com o RGPD
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl shadow-card text-center"
            >
              <div className="w-12 h-12 bg-[#A7D1EC]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg text-primary mb-2 font-normal">RGPD Compliant</h3>
              <p className="text-muted-foreground text-sm">Em conformidade com o Regulamento (UE) 2016/679</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-6 rounded-xl shadow-card text-center"
            >
              <div className="w-12 h-12 bg-[#A7D1EC]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg text-primary mb-2 font-normal">Dados Protegidos</h3>
              <p className="text-muted-foreground text-sm">Medidas técnicas e organizativas adequadas</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-6 rounded-xl shadow-card text-center"
            >
              <div className="w-12 h-12 bg-[#A7D1EC]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg text-primary mb-2 font-normal">Seus Direitos</h3>
              <p className="text-muted-foreground text-sm">Acesso, retificação, apagamento e portabilidade</p>
            </motion.div>
          </div>
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
              {/* Introdução */}
              <div className="bg-muted p-6 rounded-xl">
                <h2 className="text-2xl text-primary mb-4 font-normal">1. Responsável pelo Tratamento</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A <strong>Joaquim & Fernandes Lda</strong> (adiante designada por "Empresa") é a entidade responsável 
                  pelo tratamento dos dados pessoais recolhidos através deste website, nos termos do Regulamento Geral 
                  sobre a Proteção de Dados (RGPD) - Regulamento (UE) 2016/679 do Parlamento Europeu e do Conselho, de 
                  27 de abril de 2016 - e da Lei n.º 58/2019, de 8 de agosto, que assegura a execução do RGPD na ordem 
                  jurídica portuguesa.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A Empresa está comprometida com a proteção da privacidade e dos dados pessoais dos utilizadores deste 
                  website, garantindo o tratamento dos mesmos de forma lícita, leal e transparente.
                </p>
              </div>

              {/* Dados Recolhidos */}
              <div>
                <h2 className="text-2xl text-primary mb-4 font-normal">2. Dados Pessoais Recolhidos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A Empresa pode recolher os seguintes tipos de dados pessoais:
                </p>
                
                <h3 className="text-xl text-primary mb-3 font-normal">2.1. Dados fornecidos diretamente pelo utilizador:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                  <li>Nome completo</li>
                  <li>Endereço de correio eletrónico</li>
                  <li>Número de telefone</li>
                  <li>Morada</li>
                  <li>Informações profissionais (no caso de candidaturas)</li>
                  <li>Curriculum Vitae e documentos anexos</li>
                  <li>Outras informações fornecidas através de formulários de contacto</li>
                </ul>

                <h3 className="text-xl text-primary mb-3 font-normal">2.2. Dados recolhidos automaticamente:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Endereço IP</li>
                  <li>Tipo de browser e dispositivo utilizado</li>
                  <li>Sistema operativo</li>
                  <li>Páginas visitadas e tempo de permanência</li>
                  <li>Data e hora de acesso</li>
                  <li>Dados de cookies (consultar a secção específica)</li>
                </ul>
              </div>

              {/* Finalidades */}
              <div className="bg-muted p-6 rounded-xl">
                <h2 className="text-2xl text-primary mb-4 font-normal">3. Finalidades do Tratamento</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Os dados pessoais recolhidos são tratados para as seguintes finalidades:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Resposta a pedidos de contacto:</strong> Para responder às suas solicitações, pedidos de orçamento ou informação</li>
                  <li><strong>Gestão de candidaturas:</strong> Para avaliar candidaturas a ofertas de emprego</li>
                  <li><strong>Prestação de serviços:</strong> Para executar contratos e prestar os serviços solicitados</li>
                  <li><strong>Comunicações comerciais:</strong> Para enviar informações sobre produtos e serviços (mediante consentimento)</li>
                  <li><strong>Melhoria do website:</strong> Para analisar a utilização e melhorar a experiência do utilizador</li>
                  <li><strong>Cumprimento de obrigações legais:</strong> Para cumprir obrigações legais e regulamentares aplicáveis</li>
                </ul>
              </div>

              {/* Base Legal */}
              <div>
                <h2 className="text-2xl text-primary mb-4 font-normal">4. Base Legal do Tratamento</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O tratamento dos dados pessoais baseia-se nas seguintes condições de licitude, previstas no artigo 6.º do RGPD:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Consentimento do titular:</strong> Quando o utilizador consente expressamente no tratamento (ex: envio de newsletter)</li>
                  <li><strong>Execução de contrato:</strong> Quando o tratamento é necessário para a execução de um contrato ou diligências pré-contratuais</li>
                  <li><strong>Cumprimento de obrigação legal:</strong> Quando o tratamento é necessário para cumprir obrigações legais</li>
                  <li><strong>Interesses legítimos:</strong> Quando o tratamento é necessário para prosseguir interesses legítimos da Empresa, desde que não prevaleçam os interesses ou direitos do titular</li>
                </ul>
              </div>

              {/* Prazo de Conservação */}
              <div>
                <h2 className="text-2xl text-primary mb-4 font-normal flex items-center gap-3">
                  <Clock className="w-6 h-6 text-accent" />
                  5. Prazo de Conservação
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Os dados pessoais são conservados apenas durante o período necessário para as finalidades que motivaram 
                  a sua recolha, ou pelo período legalmente exigido:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Dados de contacto:</strong> Até 2 anos após o último contacto, salvo relação contratual</li>
                  <li><strong>Candidaturas:</strong> Até 1 ano após a receção, salvo consentimento para período superior</li>
                  <li><strong>Dados contratuais:</strong> 10 anos após o termo do contrato (obrigações fiscais)</li>
                  <li><strong>Dados de faturação:</strong> 10 anos (Código Comercial e legislação fiscal)</li>
                </ul>
              </div>

              {/* Destinatários */}
              <div className="bg-muted p-6 rounded-xl">
                <h2 className="text-2xl text-primary mb-4 font-normal">6. Destinatários dos Dados</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Os dados pessoais podem ser comunicados às seguintes categorias de destinatários:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Colaboradores da Empresa, no âmbito das suas funções</li>
                  <li>Prestadores de serviços (alojamento web, software de gestão), mediante contratos de subcontratação que garantem o cumprimento do RGPD</li>
                  <li>Autoridades públicas, quando legalmente exigido</li>
                  <li>Entidades parceiras, apenas com o consentimento prévio do titular</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  A Empresa não vende, aluga ou cede dados pessoais a terceiros para fins de marketing direto.
                </p>
              </div>

              {/* Transferências Internacionais */}
              <div>
                <h2 className="text-2xl text-primary mb-4 font-normal flex items-center gap-3">
                  <Globe className="w-6 h-6 text-accent" />
                  7. Transferências Internacionais
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Os dados pessoais são tratados e armazenados em servidores localizados na União Europeia. Caso seja 
                  necessária qualquer transferência para países terceiros, a Empresa garantirá que existem garantias 
                  adequadas de proteção, nomeadamente decisões de adequação da Comissão Europeia ou cláusulas 
                  contratuais-tipo aprovadas, nos termos dos artigos 44.º a 49.º do RGPD.
                </p>
              </div>

              {/* Direitos dos Titulares */}
              <div className="bg-muted p-6 rounded-xl">
                <h2 className="text-2xl text-primary mb-4 font-normal">8. Direitos dos Titulares</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nos termos do RGPD e da Lei n.º 58/2019, o titular dos dados tem os seguintes direitos:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                  <li><strong>Direito de acesso (art. 15.º):</strong> Obter confirmação de que os seus dados são tratados e aceder aos mesmos</li>
                  <li><strong>Direito de retificação (art. 16.º):</strong> Solicitar a correção de dados inexatos ou incompletos</li>
                  <li><strong>Direito ao apagamento (art. 17.º):</strong> Solicitar a eliminação dos seus dados ("direito a ser esquecido")</li>
                  <li><strong>Direito à limitação do tratamento (art. 18.º):</strong> Restringir o tratamento em determinadas circunstâncias</li>
                  <li><strong>Direito à portabilidade (art. 20.º):</strong> Receber os seus dados num formato estruturado e de uso corrente</li>
                  <li><strong>Direito de oposição (art. 21.º):</strong> Opor-se ao tratamento, incluindo para marketing direto</li>
                  <li><strong>Direito de retirar o consentimento:</strong> Retirar o consentimento a qualquer momento, sem comprometer a licitude do tratamento anterior</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Para exercer estes direitos, o titular pode contactar a Empresa através dos meios indicados na secção 
                  "Contactos". A Empresa responderá no prazo máximo de 30 dias.
                </p>
              </div>

              {/* Reclamação */}
              <div>
                <h2 className="text-2xl text-primary mb-4 font-normal">9. Direito de Reclamação</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sem prejuízo de qualquer outra via de recurso administrativo ou judicial, o titular tem o direito de 
                  apresentar reclamação à autoridade de controlo competente:
                </p>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <p className="text-muted-foreground">
                    <strong>Comissão Nacional de Proteção de Dados (CNPD)</strong><br />
                    Av. D. Carlos I, 134 - 1.º<br />
                    1200-651 Lisboa<br />
                    Tel: (+351) 213 928 400<br />
                    Email: geral@cnpd.pt<br />
                    Website: www.cnpd.pt
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div className="bg-muted p-6 rounded-xl">
                <h2 className="text-2xl text-primary mb-4 font-normal">10. Política de Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Este website utiliza cookies para melhorar a experiência de navegação. Os cookies são pequenos 
                  ficheiros de texto armazenados no dispositivo do utilizador.
                </p>
                
                <h3 className="text-xl text-primary mb-3 font-normal">Tipos de cookies utilizados:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                  <li><strong>Cookies estritamente necessários:</strong> Essenciais para o funcionamento do website</li>
                  <li><strong>Cookies de desempenho:</strong> Recolhem informação anónima sobre a utilização do website</li>
                  <li><strong>Cookies de funcionalidade:</strong> Permitem memorizar preferências do utilizador</li>
                </ul>
                
                <p className="text-muted-foreground leading-relaxed">
                  O utilizador pode gerir as preferências de cookies através das definições do seu browser, podendo 
                  desativar ou eliminar cookies. Note que a desativação de certos cookies pode afetar a funcionalidade 
                  do website.
                </p>
              </div>

              {/* Segurança */}
              <div>
                <h2 className="text-2xl text-primary mb-4 font-normal flex items-center gap-3">
                  <Lock className="w-6 h-6 text-accent" />
                  11. Medidas de Segurança
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A Empresa implementou medidas técnicas e organizativas adequadas para proteger os dados pessoais 
                  contra perda, destruição, alteração, divulgação ou acesso não autorizado, incluindo:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Encriptação de dados em trânsito (HTTPS/SSL)</li>
                  <li>Controlos de acesso baseados em funções</li>
                  <li>Firewalls e sistemas de deteção de intrusões</li>
                  <li>Backups regulares e planos de recuperação</li>
                  <li>Formação de colaboradores em proteção de dados</li>
                </ul>
              </div>

              {/* Alterações */}
              <div>
                <h2 className="text-2xl text-primary mb-4 font-normal">12. Alterações à Política</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A Empresa reserva-se o direito de alterar a presente Política de Privacidade a qualquer momento. 
                  As alterações serão publicadas nesta página, com indicação da data de última atualização. 
                  Recomendamos a consulta periódica desta página para se manter informado sobre as nossas práticas 
                  de privacidade.
                </p>
              </div>

              {/* Contactos */}
              <div className="bg-muted p-6 rounded-xl">
                <h2 className="text-2xl text-primary mb-4 font-normal flex items-center gap-3">
                  <Mail className="w-6 h-6 text-accent" />
                  13. Contactos
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para quaisquer questões relacionadas com a proteção de dados pessoais ou para exercer os seus 
                  direitos, poderá contactar a Empresa através:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Da página de Contacto deste website</li>
                  <li>Por correio eletrónico para o endereço indicado na página de Contacto</li>
                  <li>Por correio postal para a morada da sede da Empresa</li>
                </ul>
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

export default PoliticaPrivacidade;
