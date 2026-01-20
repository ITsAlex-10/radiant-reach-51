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
  const isFullWidth = Boolean(className && /(^|\s)w-full(\s|$)/.test(className));
  
  const buttonContent = (
    <Link
      to={href}
      onClick={onClick}
      className={`contact-cta-button ${animated ? (isFullWidth ? "w-full" : "") : (className ?? "")}`}
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
        width: animated && isFullWidth ? "100%" : undefined,
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
        className={className}
        style={{ borderRadius: 16, width: isFullWidth ? "100%" : undefined }}
      >
        {buttonContent}
      </ElectricBorder>
    );
  }

  return buttonContent;
};

export default ContactCTAButton;
