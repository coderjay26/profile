import { useEffect, useRef } from "react";

const COLS = 40;
const ROWS = 30;

export function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let phase = 0;

    const draw = () => {
      if (!ctx || !canvas) return;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const cellW = w / COLS;
      const cellH = h / ROWS;

      ctx.strokeStyle = "rgba(6, 182, 212, 0.06)";
      ctx.lineWidth = 1;

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const x = c * cellW;
          const y = r * cellH;
          const seed = (r * 7 + c * 13) % 4;

          if (seed === 0) {
            ctx.beginPath();
            ctx.moveTo(x, y + cellH / 2);
            ctx.lineTo(x + cellW, y + cellH / 2);
            ctx.stroke();
          } else if (seed === 1) {
            ctx.beginPath();
            ctx.moveTo(x + cellW / 2, y);
            ctx.lineTo(x + cellW / 2, y + cellH);
            ctx.stroke();
          } else if (seed === 2) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + cellW, y + cellH);
            ctx.stroke();
          }

          const glow = Math.sin(phase + r * 0.3 + c * 0.5) * 0.5 + 0.5;
          if (glow > 0.7) {
            ctx.fillStyle = `rgba(6, 182, 212, ${(glow - 0.7) * 0.15})`;
            ctx.fillRect(x - 1, y - 1, 3, 3);
          }
        }
      }

      phase += 0.02;
      animId = requestAnimationFrame(draw);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
}
