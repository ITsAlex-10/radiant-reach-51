import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import ContactCTAButton from "./ContactCTAButton";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    name: "Início",
    href: "/"
  }, {
    name: "Serviços",
    href: "/servicos"
  }, {
    name: "Parcerias",
    href: "/#parcerias"
  }, {
    name: "Contacto",
    href: "/contacto"
  }];
  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href.split("#")[0]);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-nav py-3" : "bg-transparent py-5"}`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Joaquim & Fernandes Logo" className="w-16 h-16 rounded-full object-cover" />
        </Link>

        {/* Desktop Navigation + CTA - aligned right */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map(link => <Link key={link.name} to={link.href} className={`font-body font-medium text-sm uppercase tracking-wider transition-colors duration-300 hover:text-accent ${isScrolled ? "text-primary" : "text-white"} ${isActive(link.href) ? "text-accent" : ""}`}>
                {link.name}
              </Link>)}
          </nav>
          <ContactCTAButton href="/contacto">
            Peça um Orçamento
          </ContactCTAButton>
        </div>

        {/* Mobile Menu Button */}
        <button className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-primary" : "text-white"}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="lg:hidden bg-white border-t">
            <nav className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map(link => <Link key={link.name} to={link.href} className={`font-body font-medium text-base py-2 transition-colors hover:text-accent ${isActive(link.href) ? "text-accent" : "text-primary"}`} onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </Link>)}
              <ContactCTAButton 
                href="/contacto" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full mt-4"
              >
                Peça um Orçamento
              </ContactCTAButton>
            </nav>
          </motion.div>}
      </AnimatePresence>
    </header>;
};
export default Header;