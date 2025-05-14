import { useEffect, useRef } from "react";

export default function FallingParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles: { x: number; y: number; speed: number; size: number }[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    window.addEventListener("resize", resize);

    for (let i = 0; i < 13; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.2 + Math.random() * 0.6,
        size: 12 + Math.random() * 2,
      });
    }

    const animate = () => {
      if (!ctx) return;

      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 16px Arial";
      ctx.textAlign = "center";

      for (const p of particles) {
        ctx.font = `bold ${p.size}px Arial`;
        ctx.fillText("★", p.x, p.y);

        p.y += p.speed;
        p.x -= p.speed * 0.8;

        if (p.y > canvas.height || p.x < 0) {
          p.y = 0;
          p.x = Math.random() * canvas.width;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        background: "black",
      }}
    />
  );
}
