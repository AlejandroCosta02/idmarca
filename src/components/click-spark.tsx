"use client";
import { useRef, useEffect, useCallback } from "react";

interface Spark {
  x: number
  y: number
  angle: number
  startTime: number
}

interface ClickSparkProps {
  children: React.ReactNode
  sparkColor?: string
  sparkSize?: number
  sparkRadius?: number
  sparkCount?: number
  duration?: number
  extraScale?: number
}

const ClickSpark = ({
  sparkColor = "#F59E0C",
  sparkSize = 2,
  sparkRadius = 50,
  sparkCount = 8,
  duration = 500,
  extraScale = 1.0,
  children,
}: ClickSparkProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const startTimeRef = useRef<number | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const animate = useCallback((currentTime: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    if (!startTimeRef.current) {
      startTimeRef.current = currentTime;
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw sparks
    sparksRef.current = sparksRef.current.filter((spark) => {
      const sparkElapsed = currentTime - spark.startTime;
      const sparkProgress = Math.min(sparkElapsed / duration, 1);

      if (sparkProgress >= 1) return false;

      const distance = sparkRadius * sparkProgress * extraScale;
      const x = spark.x + Math.cos(spark.angle) * distance;
      const y = spark.y + Math.sin(spark.angle) * distance;
      const alpha = 1 - sparkProgress;

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = sparkColor;
      ctx.beginPath();
      ctx.arc(x, y, sparkSize, 0, 2 * Math.PI);
      ctx.fill();
      ctx.restore();

      return true;
    });

    if (sparksRef.current.length > 0) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      startTimeRef.current = null;
    }
  }, [duration, sparkRadius, sparkSize, sparkColor, extraScale]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const now = performance.now()
    const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now,
    }))

    sparksRef.current.push(...newSparks)
  }

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationRef.current!);
    };
  }, [animate]);

  return (
    <div className="relative w-full h-full" onClick={handleClick}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block absolute top-0 left-0 select-none pointer-events-none"
      />
      {children}
    </div>
  );
};

export default ClickSpark; 