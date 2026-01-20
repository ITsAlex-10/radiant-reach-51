import { ReactNode, CSSProperties, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import ElectricBorder from "./ElectricBorder";

interface ContactCTAButtonProps {
  children?: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  style?: CSSProperties;
  className?: string;
  animated?: boolean;
}

const ContactCTAButton = ({
  children = "Contactar",
  href = "/contacto",
  onClick,
  style,
  className,
  animated = false,
}: ContactCTAButtonProps) => {
  // Header button (animated) uses #345093 and 16px radius, all others use #3A445C and 6px radius
  const buttonBackground = animated ? "#345093" : "#3A445C";
  const buttonRadius = animated ? 16 : 6;
  
  const buttonContent = (
    <Link
      to={href}
      onClick={onClick}
      className={`contact-cta-button ${className ?? ""}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "14px 28px",
        borderRadius: buttonRadius,
        background: buttonBackground,
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
  );

  if (animated) {
    return (
      <ElectricBorder
        color="#345093"
        speed={1}
        chaos={0.05}
        borderRadius={16}
        style={{ borderRadius: 16 }}
      >
        {buttonContent}
      </ElectricBorder>
    );
  }

  return buttonContent;
};

export default ContactCTAButton;
