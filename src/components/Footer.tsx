import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";
const Footer = () => {
  return <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Joaquim & Fernandes Logo" className="w-12 h-12 rounded-full object-cover" />
              <div>
                
                
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Há mais de 20 anos a oferecer soluções completas em eletricidade,
              mobilidade elétrica e construção com qualidade e profissionalismo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-medium text-lg mb-6">Links Úteis</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-accent transition-colors duration-300">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-white/80 hover:text-accent transition-colors duration-300">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/#parcerias" className="text-white/80 hover:text-accent transition-colors duration-300">
                  Parcerias
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-white/80 hover:text-accent transition-colors duration-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body font-medium text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/servicos#eletricidade" className="text-white/80 hover:text-accent transition-colors duration-300">
                  Eletricidade Geral
                </Link>
              </li>
              <li>
                <Link to="/servicos#mobilidade" className="text-white/80 hover:text-accent transition-colors duration-300">
                  Mobilidade Elétrica
                </Link>
              </li>
              <li>
                <Link to="/servicos#iluminacao" className="text-white/80 hover:text-accent transition-colors duration-300">
                  Iluminação Festiva
                </Link>
              </li>
              <li>
                <Link to="/servicos#construcao" className="text-white/80 hover:text-accent transition-colors duration-300">
                  Construção
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-body font-medium text-lg mb-6">Contactos</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80">+351 123 456 789</p>
                  <p className="text-white/60 text-sm">Seg - Sex: 8h - 18h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:info@joaquimfernandes.pt" className="text-white/80 hover:text-accent transition-colors">
                  info@joaquimfernandes.pt
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
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
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Joaquim & Fernandes Lda. Todos os
            direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-accent transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/60 hover:text-accent transition-colors">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;