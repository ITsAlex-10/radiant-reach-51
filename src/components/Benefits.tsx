import { motion } from "framer-motion";
import { Award, Shield, Users, Clock, ThumbsUp } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Experiência",
    description: "Mais de 20 anos de experiência no setor da eletricidade e construção.",
  },
  {
    icon: Shield,
    title: "Qualidade Certificada",
    description: "Trabalho certificado e em conformidade com todas as normas de segurança.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Acompanhamento dedicado em cada projeto, do início ao fim.",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    description: "Cumprimento rigoroso de prazos e compromissos assumidos.",
  },
  {
    icon: ThumbsUp,
    title: "Confiança",
    description: "Centenas de clientes satisfeitos confiam no nosso trabalho.",
  },
];

const Benefits = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Porquê Escolher-nos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos uma empresa de referência no setor, reconhecida pela qualidade
            e profissionalismo dos nossos serviços.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-muted flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                <benefit.icon className="w-10 h-10 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg text-primary mb-2 font-body font-medium">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
