import { ReactNode, CSSProperties, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import ElectricBorder from "./ElectricBorder";

interface ContactCTAButtonProps {
  children?: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  style?: CSSProperties;
  className?: string;
}

const ContactCTAButton = ({
  children = "Contactar",
  href = "/contacto",
  onClick,
  style,
  className,
}: ContactCTAButtonProps) => {
  return (
    <ElectricBorder
      color="#345093"
      speed={1}
      chaos={0.05}
      borderRadius={16}
      style={{ borderRadius: 16 }}
    >
      <Link
        to={href}
        onClick={onClick}
        className={`contact-cta-button ${className ?? ""}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "14px 28px",
          borderRadius: 16,
          background: "#345093",
          color: "#fff",
          fontWeight: 600,
          textDecoration: "none",
          position: "relative",
          zIndex: 1,
          ...style,
        }}
      >
        {children}
      </Link>
    </ElectricBorder>
  );
};

export default ContactCTAButton;
