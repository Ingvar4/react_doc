"use client";
import Link from 'next/link';
import { useState, useEffect } from "react";

interface MousePositionProps {
  x: number;
  y: number;
}

export default function HomePage() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setMounted(true);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const [mousePosition, setMousePosition] = useState<MousePositionProps>({
    x: 50,
    y: 30,
  });

  useEffect(() => {
    // Only add mouse tracking for non-mobile devices
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window === "undefined") return;
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  const containerStyle = {
    background: `
      radial-gradient(ellipse 40% 60% at ${mousePosition.x}% ${
      mousePosition.y * 0.8
    }%, rgba(255, 255, 255, 0.12), transparent 70%),
      radial-gradient(ellipse 100% 80% at 50% 0%, rgba(255, 255, 255, 0.06), transparent 60%),
      #000000
    `,
    transition: "background 2s ease-out",
  };

  const gridStyle = {
    backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
    `,
    backgroundSize: "80px 80px",
    transform: `translate(${mousePosition.x * 0.02}px, ${
      mousePosition.y * 0.02
    }px)`,
    animation: "gridFloat 20s linear infinite",
  };

  return (
    <div
      className={`min-h-screen w-full relative bg-black overflow-hidden ${
        !isMobile ? "cursor-none" : ""
      }`}
    >
      {/* Custom cursor - only render for non-mobile devices */}
      {mounted && !isMobile && (
        <div
          className="fixed w-6 h-6 bg-white/80 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
          style={{
            left: `${(mousePosition.x * window.innerWidth) / 100}px`,
            top: `${(mousePosition.y * window.innerHeight) / 100}px`,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      <style jsx>{`
        @keyframes gridFloat {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, 15px);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-30px);
            opacity: 0.8;
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes scroll {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(12px);
          }
        }
        .float-dot {
          animation: float 4s ease-in-out infinite;
        }
        .pulse-border {
          animation: pulse 3s ease-in-out infinite;
        }
        .scroll-dot {
          animation: scroll 2s ease-in-out infinite;
        }
        .custom-cursor {
          cursor: none;
        }
        button:hover + * .cursor,
        a:hover + * .cursor {
          transform: translate(-50%, -50%) scale(1.5);
        }
      `}</style>

      <div className="absolute inset-0 z-0" style={containerStyle} />

      <div className="absolute inset-0 z-0 opacity-30" style={gridStyle} />

      <div className="absolute inset-0 z-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full float-dot"
            style={{
              left: `${15 + i * 8}%`,
              top: `${20 + ((i * 7) % 60)}%`,
              animationDelay: `${i * 0.3}s`,
              transform: `translateX(${
                mousePosition.x * 0.01 * (i % 2 === 0 ? 1 : -1)
              }px)`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 z-5 flex items-center justify-center pointer-events-none">
        <div
          className="text-[30rem] max-sm:text-[15rem] max-md:text-[15rem] max-xl:text-[10rem] max-2xl:text-[15rem] min-[1920px]:text-[19rem] min-[2560px]:text-[30rem] font-bold text-white/5 select-none"
          style={{
            opacity: 1,
            transition: "opacity 2s ease-out 0.5s",
          }}
        >
          HOW TO
        </div>
      </div>

      <div className="relative z-20">
        <div className="flex flex-col items-center justify-center min-h-screen px-6 pt-20">
          {/* стилизация блока react doc */}
          <div className="text-center space-y-8 max-w-5xl mx-auto absolute inset-x-0 top-50   ">
            <div className="space-y-8">
              <div className="flex items-center justify-center mb-6 ">
                
                <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-4 mb-3  text-cyan-700 dark:text-cyan-800 w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>

              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.9] text-center">
                REACT
                <br />
                <span className="text-white/60">Documentation</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed text-center">
                Библиотека для веб и нативных пользовательских интерфейсов
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={"/docs"}>
                <button
                  className={`px-8 py-4 bg-white text-black rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/20 active:scale-95 ${
                    !isMobile ? "cursor-none" : ""
                  }`}
                >
                  Изучать React
                </button>
              </Link>

              <button
                className={`px-8 py-4 border-2 border-gray-600 rounded-lg font-semibold text-gray-300 hover:text-white hover:border-white hover:scale-105 transition-all duration-300 active:scale-95 ${
                  !isMobile ? "cursor-none" : ""
                }`}
              >
                API Reference
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}