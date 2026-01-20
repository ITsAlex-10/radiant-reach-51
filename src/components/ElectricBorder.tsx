import { useRef, useEffect, ReactNode, CSSProperties } from "react";

interface ElectricBorderProps {
  children: ReactNode;
  color?: string;
  speed?: number;
  chaos?: number;
  borderRadius?: number;
  style?: CSSProperties;
  className?: string;
}

const ElectricBorder = ({
  children,
  color = "#345093",
  speed = 1,
  chaos = 0.05,
  borderRadius = 16,
  style,
  className,
}: ElectricBorderProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
    };

    const drawElectricBorder = () => {
      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.shadowColor = color;
      ctx.shadowBlur = 8;

      const segments = 60;
      const perimeter = 2 * (width + height - 4 * borderRadius) + 2 * Math.PI * borderRadius;
      const segmentLength = perimeter / segments;

      ctx.beginPath();

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        let x: number, y: number;

        // Calculate position along the rounded rectangle path
        const pos = t * perimeter;
        const offset = Math.sin(time * speed * 5 + i * 0.5) * chaos * 10;

        // Top edge
        if (pos < width - 2 * borderRadius) {
          x = borderRadius + pos + offset;
          y = 2 + Math.sin(time * speed * 3 + i) * chaos * 5;
        }
        // Top-right corner
        else if (pos < width - 2 * borderRadius + (Math.PI * borderRadius) / 2) {
          const angle = (pos - (width - 2 * borderRadius)) / borderRadius;
          x = width - borderRadius + Math.cos(angle - Math.PI / 2) * (borderRadius + offset);
          y = borderRadius + Math.sin(angle - Math.PI / 2) * (borderRadius + offset);
        }
        // Right edge
        else if (pos < width - 2 * borderRadius + (Math.PI * borderRadius) / 2 + height - 2 * borderRadius) {
          const edgePos = pos - (width - 2 * borderRadius + (Math.PI * borderRadius) / 2);
          x = width - 2 + Math.sin(time * speed * 3 + i) * chaos * 5;
          y = borderRadius + edgePos + offset;
        }
        // Bottom-right corner
        else if (pos < width - 2 * borderRadius + Math.PI * borderRadius + height - 2 * borderRadius) {
          const cornerStart = width - 2 * borderRadius + (Math.PI * borderRadius) / 2 + height - 2 * borderRadius;
          const angle = (pos - cornerStart) / borderRadius;
          x = width - borderRadius + Math.cos(angle) * (borderRadius + offset);
          y = height - borderRadius + Math.sin(angle) * (borderRadius + offset);
        }
        // Bottom edge
        else if (pos < 2 * (width - 2 * borderRadius) + Math.PI * borderRadius + height - 2 * borderRadius) {
          const edgeStart = width - 2 * borderRadius + Math.PI * borderRadius + height - 2 * borderRadius;
          const edgePos = pos - edgeStart;
          x = width - borderRadius - edgePos + offset;
          y = height - 2 + Math.sin(time * speed * 3 + i) * chaos * 5;
        }
        // Bottom-left corner
        else if (pos < 2 * (width - 2 * borderRadius) + 1.5 * Math.PI * borderRadius + height - 2 * borderRadius) {
          const cornerStart = 2 * (width - 2 * borderRadius) + Math.PI * borderRadius + height - 2 * borderRadius;
          const angle = (pos - cornerStart) / borderRadius + Math.PI / 2;
          x = borderRadius + Math.cos(angle) * (borderRadius + offset);
          y = height - borderRadius + Math.sin(angle) * (borderRadius + offset);
        }
        // Left edge
        else if (pos < 2 * (width - 2 * borderRadius) + 1.5 * Math.PI * borderRadius + 2 * (height - 2 * borderRadius)) {
          const edgeStart = 2 * (width - 2 * borderRadius) + 1.5 * Math.PI * borderRadius + height - 2 * borderRadius;
          const edgePos = pos - edgeStart;
          x = 2 + Math.sin(time * speed * 3 + i) * chaos * 5;
          y = height - borderRadius - edgePos + offset;
        }
        // Top-left corner
        else {
          const cornerStart = 2 * (width - 2 * borderRadius) + 1.5 * Math.PI * borderRadius + 2 * (height - 2 * borderRadius);
          const angle = (pos - cornerStart) / borderRadius + Math.PI;
          x = borderRadius + Math.cos(angle) * (borderRadius + offset);
          y = borderRadius + Math.sin(angle) * (borderRadius + offset);
        }

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.closePath();
      ctx.stroke();

      // Add electric glow effect
      ctx.shadowBlur = 15;
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.5;
      ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      time += 0.016;
      drawElectricBorder();
      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [color, speed, chaos, borderRadius]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "relative",
        display: "inline-block",
        borderRadius,
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          borderRadius,
        }}
      />
      {children}
    </div>
  );
};

export default ElectricBorder;
