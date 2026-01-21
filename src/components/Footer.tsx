import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Zap } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#A7D1EC]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A7D1EC]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Joaquim & Fernandes Logo"
                className="w-16 h-16 rounded-full object-cover border-2 border-[#A7D1EC]/30"
              />
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#A7D1EC]" />
                <span className="font-body text-sm text-[#A7D1EC]">Desde 1986</span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Há mais de 35 anos a oferecer soluções completas em eletricidade,
              mobilidade elétrica e construção com qualidade e profissionalismo.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#A7D1EC]/20 flex items-center justify-center hover:bg-[#A7D1EC] hover:text-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#A7D1EC]/20 flex items-center justify-center hover:bg-[#A7D1EC] hover:text-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#A7D1EC]/20 flex items-center justify-center hover:bg-[#A7D1EC] hover:text-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-medium text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#A7D1EC] rounded-full" />
              Links Úteis
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-[#A7D1EC] transition-colors duration-300"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre-nos"
                  className="text-white/80 hover:text-[#A7D1EC] transition-colors duration-300"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-white/80 hover:text-[#A7D1EC] transition-colors duration-300"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/parceiros"
                  className="text-white/80 hover:text-[#A7D1EC] transition-colors duration-300"
                >
                  Parceiros
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-white/80 hover:text-[#A7D1EC] transition-colors duration-300"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body font-medium text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#A7D1EC] rounded-full" />
              Serviços
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/servicos#projetos"
                  className="text-white/80 hover:text-[#A7D1EC] transition-colors duration-300"
                >
                  Projetos Elétricos
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos#instalacoes"
                  className="text-white/80 hover:text-[#A7D1EC] transition-colors duration-300"
                >
                  Instalações
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos#postos-carregamento"
                  className="text-white/80 hover:text-[#A7D1EC] transition-colors duration-300"
                >
                  Mobilidade Elétrica
                </Link>
              </li>
              <li>
                <Link
                  to="/smart-cities"
                  className="text-white/80 hover:text-[#A7D1EC] transition-colors duration-300"
                >
                  Smart Cities
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-body font-medium text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#A7D1EC] rounded-full" />
              Contactos
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#A7D1EC]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#A7D1EC]" />
                </div>
                <div>
                  <p className="text-white/80">+351 123 456 789</p>
                  <p className="text-white/60 text-sm">Seg - Sex: 8h - 18h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#A7D1EC]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#A7D1EC]" />
                </div>
                <a
                  href="mailto:info@joaquimfernandes.pt"
                  className="text-white/80 hover:text-[#A7D1EC] transition-colors"
                >
                  info@joaquimfernandes.pt
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#A7D1EC]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#A7D1EC]" />
                </div>
                <p className="text-white/80">
                  Rua Principal, 123
                  <br />
                  4000-000 Porto, Portugal
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#A7D1EC]/20">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Joaquim & Fernandes Lda. Todos os
            direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-white/60 hover:text-[#A7D1EC] transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-[#A7D1EC] transition-colors"
            >
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
