import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Zap } from "lucide-react";
import { toast } from "sonner";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Mensagem enviada com sucesso!", {
      description: "Entraremos em contacto consigo brevemente.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=600&fit=crop')"
            }}
          />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#A7D1EC]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A7D1EC]/15 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <div className="inline-flex items-center gap-2 bg-[#A7D1EC]/20 px-4 py-2 rounded-full mb-6">
                <Zap className="w-4 h-4 text-[#A7D1EC]" />
                <span className="font-body text-sm">Fale Connosco</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Contacte-nos
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-6">
                Estamos disponíveis para esclarecer as suas dúvidas e apresentar
                soluções à medida das suas necessidades.
              </p>
              <div className="w-24 h-1 bg-[#A7D1EC] mx-auto rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-gradient-to-b from-white to-[#A7D1EC]/10 relative overflow-hidden">
          <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#A7D1EC]/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block bg-[#A7D1EC]/20 text-primary font-body text-sm px-4 py-2 rounded-full mb-4">
                  Formulário de Contacto
                </span>
                <h2 className="text-3xl text-primary mb-6">
                  Peça um Orçamento
                </h2>
                <p className="text-muted-foreground mb-8">
                  Preencha o formulário abaixo e entraremos em contacto consigo
                  o mais rapidamente possível.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="O seu nome"
                        required
                        className="h-12 border-[#A7D1EC]/30 focus:border-[#A7D1EC]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@exemplo.pt"
                        required
                        className="h-12 border-[#A7D1EC]/30 focus:border-[#A7D1EC]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+351 912 345 678"
                      className="h-12 border-[#A7D1EC]/30 focus:border-[#A7D1EC]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva o seu projeto ou pedido..."
                      required
                      rows={6}
                      className="resize-none border-[#A7D1EC]/30 focus:border-[#A7D1EC]"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="xl"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block bg-[#A7D1EC]/20 text-primary font-body text-sm px-4 py-2 rounded-full mb-4">
                  Informações
                </span>
                <h2 className="text-3xl text-primary mb-6">
                  Informações de Contacto
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#A7D1EC]/20 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-[#A7D1EC]/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-body font-medium text-primary mb-1">
                        Telefone
                      </h3>
                      <a
                        href="tel:+351123456789"
                        className="text-muted-foreground hover:text-[#A7D1EC] transition-colors"
                      >
                        +351 123 456 789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#A7D1EC]/20 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-[#A7D1EC]/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-body font-medium text-primary mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:info@joaquimfernandes.pt"
                        className="text-muted-foreground hover:text-[#A7D1EC] transition-colors"
                      >
                        info@joaquimfernandes.pt
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#A7D1EC]/20 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-[#A7D1EC]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-body font-medium text-primary mb-1">
                        Morada
                      </h3>
                      <p className="text-muted-foreground">
                        Rua Principal, 123
                        <br />
                        4000-000 Porto, Portugal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#A7D1EC]/20 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-[#A7D1EC]/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-body font-medium text-primary mb-1">
                        Horário
                      </h3>
                      <p className="text-muted-foreground">
                        Segunda a Sexta: 8h00 - 18h00
                        <br />
                        Sábado: 9h00 - 13h00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Why Contact Us */}
                <div className="bg-primary rounded-2xl p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#A7D1EC]/20 rounded-full blur-2xl" />
                  <h3 className="font-body font-medium text-lg mb-4 relative z-10">
                    Porquê contactar-nos?
                  </h3>
                  <ul className="space-y-3 relative z-10">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#A7D1EC]/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-[#A7D1EC]" />
                      </div>
                      <span className="text-white/90">Orçamento gratuito</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#A7D1EC]/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-[#A7D1EC]" />
                      </div>
                      <span className="text-white/90">
                        Resposta em 24 horas
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#A7D1EC]/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-[#A7D1EC]" />
                      </div>
                      <span className="text-white/90">
                        Atendimento personalizado
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#A7D1EC]/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-[#A7D1EC]" />
                      </div>
                      <span className="text-white/90">Sem compromisso</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Image Gallery before Map */}
        <section className="py-8 bg-[#A7D1EC]/10">
          <div className="container-custom">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              <div className="aspect-square rounded-xl overflow-hidden border-2 border-[#A7D1EC]/30">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=200&h=200&fit=crop" 
                  alt="Trabalho elétrico"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden border-2 border-[#A7D1EC]/30">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop" 
                  alt="Rede elétrica"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden border-2 border-[#A7D1EC]/30">
                <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=200&h=200&fit=crop" 
                  alt="Energia solar"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden border-2 border-[#A7D1EC]/30 hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=200&h=200&fit=crop" 
                  alt="Carregamento EV"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden border-2 border-[#A7D1EC]/30 hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=200&h=200&fit=crop" 
                  alt="Equipa técnica"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden border-2 border-[#A7D1EC]/30 hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&h=200&fit=crop" 
                  alt="Projeto"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 bg-muted">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48346.04684908799!2d-8.6394!3d41.1579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465abc4e153c1%3A0xa648a34181e5e!2sPorto%2C%20Portugal!5e0!3m2!1spt-PT!2spt!4v1600000000000!5m2!1spt-PT!2spt"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Joaquim & Fernandes"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
