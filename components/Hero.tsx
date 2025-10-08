import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, BadgePercent, Heart } from "lucide-react";
import GradientBlinds from "./anime-sphere-animation";
import GooeyButton from "./goey/GoeyButton";
import GradientText from "./GradientText/GradientText";
import { IoIosFlash } from "react-icons/io";
import LiquidEther from "./LiquidEther/LiquidEther";
import SplashCursor from "./SplashCursor/SplashCursor";
import { useEffect, useRef, useState } from "react";
import { HyperText } from "@/components/ui/hyper-text";

export default function HeroEcomDeals() {
  const [viewportHeight, setViewportHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      const viewport = window.visualViewport
      const rawHeight = viewport?.height ?? window.innerHeight
      const header = document.querySelector<HTMLElement>("[data-site-header]")
      const isMobileViewport = window.innerWidth < 768
      const headerOffset = header && isMobileViewport ? header.offsetHeight : 0
      const computedHeight = Math.max(rawHeight - headerOffset, 0)
      setViewportHeight(computedHeight)
    }

    updateHeight()

    window.addEventListener("resize", updateHeight)
    window.addEventListener("orientationchange", updateHeight)

    const visualViewport = window.visualViewport
    visualViewport?.addEventListener("resize", updateHeight)
    visualViewport?.addEventListener("scroll", updateHeight)

    return () => {
      window.removeEventListener("resize", updateHeight)
      window.removeEventListener("orientationchange", updateHeight)
      visualViewport?.removeEventListener("resize", updateHeight)
      visualViewport?.removeEventListener("scroll", updateHeight)
    }
  }, [])

  const heroMinHeight = viewportHeight ? `${viewportHeight}px` : undefined

  return (
    <section
      className="relative isolate overflow-hidden min-h-screen"
      style={{ minHeight: heroMinHeight }}
    >
      {/* ===== Background FULL-WIDTH ===== */}
      <div className="absolute inset-0 -z-10">
        {/* Radial glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_50%,rgba(120,119,198,0.15),transparent_60%)] sm:bg-[radial-gradient(60%_60%_at_50%_0%,rgba(120,119,198,0.25),transparent_60%)]" />
        {/* Subtle grid */}
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:16px_16px] sm:[background-size:20px_20px] md:[background-size:24px_24px] [mask-image:radial-gradient(80%_80%_at_50%_50%,#000,transparent)] sm:[mask-image:radial-gradient(80%_80%_at_50%_20%,#000,transparent)]" />
      </div>

      {/* ===== Content (CONSTRAINED) ===== */}
      <div
        className="
          relative mx-auto w-full
          max-w-[1120px]
          px-6 sm:px-8 lg:px-12
          pt-16 sm:pt-20 md:pt-28 lg:pt-36
          pb-12 sm:pb-16 md:pb-20 lg:pb-28
        "
      >
        <div className="z-10">
          <SplashCursor targetSelector="section" intensity={0.7} />
        </div>

        {/* Top badges */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-white/80 lg:mt-0 mt-10">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 sm:px-3 py-1 ring-1 ring-white/20 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Trending now
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 sm:px-3 py-1 ring-1 ring-white/20 backdrop-blur">
            <BadgePercent className="h-3.5 w-3.5" /> Ecom
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 sm:px-3 py-1 ring-1 ring-white/20 backdrop-blur">
            <BadgePercent className="h-3.5 w-3.5" /> SaaS
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-4 sm:mt-6 text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white"
        >
          <span className="block">Find The Best</span>
          <span className="block bg-gradient-to-r from-[#FF9FFC] via-white to-[#5227FF] bg-clip-text text-transparent">
            Ecom Tools In Seconds
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-4 sm:mt-5 max-w-full sm:max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg text-white/80"
        >
          Insider access to the best Ecom tools at pricing you won't find anywhere else.
        </motion.p>

        {/* CTA row */}
        <div className="mt-6 sm:mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
          <CTAButton icon={<IoIosFlash />}>Start Now</CTAButton>
        </div>

        {/* Trust row */}
        <div className="mt-8 sm:mt-10 grid w-full grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm text-white/70">
          <Stat label="Exclusive finds" value="10+" />
          <Stat label="Avg. savings" value="25%" />
          <Stat label="SaaS & Ecom" value="All-in-one" />
          <Stat label="Updated" value="Hourly" />
        </div>
      </div>

      {/* ===== Lower block (CONSTRAINED) ===== */}
      <div className="relative mx-auto w-full max-w-[1120px] px-6 sm:px-8 lg:px-12">
        <div className="relative mt-4 sm:mt-16 md:mt-0 z-20 flex justify-center">
          {/* Mobile donation capsule */}
          <div className="relative inline-flex w-full max-w-[min(420px,90vw)] sm:hidden">
            <span
              className="pointer-events-none absolute -inset-x-4 -inset-y-2 rounded-[26px] bg-gradient-to-r from-[#6AE4FF]/35 via-[#B27DFF]/30 to-[#6AE4FF]/35 blur-xl opacity-80 animate-pulse"
              aria-hidden="true"
            />
            <span
              className="pointer-events-none absolute inset-[1px] rounded-[28px] bg-gradient-to-r from-[#6AE4FF]/20 via-[#B27DFF]/16 to-[#6AE4FF]/20 opacity-85"
              aria-hidden="true"
            />
            <div className="relative flex flex-col gap-4 px-5 py-5 rounded-[30px] backdrop-blur-lg border border-white/25 bg-[#060E25]/100 shadow-[0_0_28px_rgba(106,228,255,0.28)]">
              <div className="flex items-center gap-3 text-left">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#6AE4FF] to-[#B27DFF] text-black shadow-[0_0_18px_rgba(106,228,255,0.45)]">
                  <Heart className="h-5 w-5" aria-hidden="true" />
                </span>
                <GradientText className="flex-1 text-base font-semibold tracking-tight leading-tight text-left">
                  100% of Affiliate Profits will be Donated to a Good Cause.
                </GradientText>
              </div>
              <div className="flex w-full items-stretch gap-3">
                <DonatedCounter target={100} className="flex-1 min-w-0" />
                <a
                  href="https://x.com/patwerX"
                  className="relative flex-1 flex items-center justify-center px-[1px] py-[1px] font-medium text-white rounded-[20px] bg-gradient-to-r from-[#6AE4FF] to-[#B27DFF] transition-all duration-200 hover:scale-[1.02]"
                >
                  <span
                    className="absolute inset-0 rounded-[20px] p-[1px] bg-gradient-to-r from-[#6AE4FF] to-[#B27DFF] pointer-events-none"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 w-full rounded-[18px] bg-gradient-to-r from-[#3c436d] to-[#3f1480] px-4 py-2 text-xs sm:text-sm text-center">
                    Exclusive project by: @patwer
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Desktop / tablet donation panel */}
          <div className="relative hidden sm:flex w-full justify-center">
            <div className="relative inline-flex w-full max-w-[520px]">
              <span
                className="pointer-events-none absolute -inset-x-6 -inset-y-3 rounded-[30px] bg-gradient-to-r from-[#6AE4FF]/35 via-[#B27DFF]/30 to-[#6AE4FF]/35 blur-[42px] opacity-80 animate-pulse"
              aria-hidden="true"
            />
            <span
                className="pointer-events-none absolute inset-[1px] rounded-[31px] bg-gradient-to-r from-[#6AE4FF]/18 via-[#B27DFF]/16 to-[#6AE4FF]/18 opacity-85"
              aria-hidden="true"
            />
            <div className="relative flex w-full flex-col items-center gap-6 px-8 py-10 rounded-[32px] backdrop-blur-xl border border-white/25 bg-[#060E25]/100 shadow-[0_0px_16px_rgba(106,228,255,0.28)] text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6AE4FF] to-[#B27DFF] text-black shadow-[0_0px_8px_rgba(106,228,255,0.45)]">
                  <Heart className="h-6 w-6" aria-hidden="true" />
                </span>
                <GradientText className="text-2xl font-semibold tracking-tight text-balance">
                  100% of Affiliate Profits will be Donated to a Good Cause.
                </GradientText>
                <DonatedCounter target={100} className="relative" />
                <a
                  href="https://x.com/patwerX"
                  className="relative inline-flex items-center justify-center px-[1px] py-[1px] font-medium text-white rounded-full bg-gradient-to-r from-[#6AE4FF] to-[#B27DFF] transition-all duration-200 hover:scale-[1.02]"
                >
                  <span
                    className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#6AE4FF] to-[#B27DFF] pointer-events-none"
                    aria-hidden="true"
                  />
                    <span className="relative z-10 bg-gradient-to-r from-[#3c436d] to-[#3f1480] rounded-full px-6 py-2.5 text-sm whitespace-nowrap">
                      Exclusive project by: @patwer
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient (FULL-WIDTH) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 sm:h-32 md:h-40 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}

/* ------------ Subcomponents ------------ */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-3 sm:px-4 py-2 sm:py-3 backdrop-blur z-10">
      <div className="text-xs uppercase tracking-wide text-white/60 z-10">{label}</div>
      <div className="text-lg sm:text-xl md:text-2xl font-semibold text-white z-10 tracking-tight">{value}</div>
    </div>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

/** Botão com scroll suave para #deals e efeitos decorativos que não bloqueiam cliques */
const CTAButton: React.FC<ButtonProps> = ({ children, icon }) => {
  const handleClick = () => {
    const deals = document.getElementById("deals");
    if (deals) {
      const headerOffset = 0; // ajusta se tiveres navbar fixa (ex.: 72)
      const top = deals.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    } else {
      // fallback: navega pelo hash; útil se #deals for carregado mais tarde
      window.location.hash = "#deals";
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="relative inline-flex items-center justify-center h-12 w-fit rounded-[0.75rem] cursor-pointer overflow-hidden transition-all duration-250 ease-in-out hover:scale-95 focus:outline-none p-3"
      style={{
        background:
          "radial-gradient(65.28% 65.28% at 50% 100%, rgba(223, 113, 255, 0.8) 0%, rgba(223, 113, 255, 0) 100%), linear-gradient(0deg, #7a5af8, #7a5af8)",
      }}
    >
      {/* cantinho brilhante */}
      <span
        className="absolute top-0 right-0 h-4 w-4 rounded-bl-[0.5rem] rounded-tr-[0.75rem] transition-all duration-500 ease-in-out shadow-[0_0_3px_black] pointer-events-none"
        style={{
          background: "radial-gradient(100% 75% at 55%, rgba(223, 113, 255, 0.8) 0%, rgba(223, 113, 255, 0) 100%)",
        }}
      >
        <span
          className="absolute top-0 right-0 w-[150%] h-[150%] bg-[#e8e8e8] pointer-events-none"
          style={{ transform: "rotate(45deg) translateX(0%) translateY(-18px)" }}
        />
      </span>

      {/* partículas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {[...Array(10)].map((_, i) => (
          <i
            key={i}
            className="absolute bottom-[-10px] w-[2px] h-[2px] bg-white rounded-full animate-floating-points"
            style={{
              left: `${[10, 30, 25, 44, 50, 75, 88, 58, 98, 65][i]}%`,
              opacity: [1, 0.7, 0.8, 0.6, 1, 0.5, 0.9, 0.8, 0.6, 1][i],
              animationDuration: `${[2.35, 2.5, 2.2, 2.05, 1.9, 1.5, 2.2, 2.25, 2.6, 2.5][i]}s`,
              animationDelay: `${[0.2, 0.5, 0.1, 0, 0, 1.5, 0.2, 0.2, 0.1, 0.2][i]}s`,
            }}
          />
        ))}
      </div>

      <span className="relative z-[2] flex items-center justify-center gap-1.5 text-white text-base font-medium leading-6 transition-colors duration-200">
        {icon && <span className="w-[18px] h-[18px] stroke-white stroke-[2.5]">{icon}</span>}
        {children}
      </span>

      <style jsx>{`
        .animate-floating-points {
          animation: floating-points infinite ease-in-out;
        }
        @keyframes floating-points {
          0% {
            transform: translateY(0);
          }
          85% {
            opacity: 0;
          }
          100% {
            transform: translateY(-55px);
            opacity: 0;
          }
        }
        /* impedir pseudo-elementos de bloquear cliques */
        button::before,
        button::after {
          pointer-events: none;
        }
        /* brilhos internos decorativos */
        button::before {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: calc(0.75rem - 1px);
          background: linear-gradient(177.95deg, rgba(255, 255, 255, 0.19) 0%, rgba(255, 255, 255, 0) 100%);
          transition: all 0.5s ease-in-out;
          z-index: 0;
        }
        button::after {
          content: '';
          position: absolute;
          inset: 2px;
          border-radius: calc(0.75rem - 2px);
          background:
            radial-gradient(65.28% 65.28% at 50% 100%, rgba(223, 113, 255, 0.8) 0%, rgba(223, 113, 255, 0) 100%),
            linear-gradient(0deg, #7a5af8, #7a5af8);
          transition: all 0.5s ease-in-out;
          z-index: 0;
        }
        button:hover > span:first-child {
          margin-top: -1rem;
          margin-right: -1rem;
        }
      `}</style>
    </button>
  );
};

function DonatedCounter({
  target = 100,
  duration = 1400,
  className = "",
}: {
  target?: number;
  duration?: number;
  className?: string;
}) {
  const [value, setValue] = useState(0);
  const raf = useRef<number | null>(null);

  const ease = (t: number) => 1 - Math.pow(1 - t, 3); // easeOutCubic

  useEffect(() => {
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setValue(Math.round(ease(p) * target));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [target, duration]);

  return (
    <div className={className}>
      <div className="relative flex w-full items-center justify-center z-10">
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6AE4FF] to-[#B27DFF] blur-md opacity-40" aria-hidden="true" />
        <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#6AE4FF] to-[#B27DFF]" aria-hidden="true" />
        <span className="relative w-full rounded-full bg-[#0A0F2C]/85 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm ring-1 ring-white/10 text-xs sm:text-sm font-semibold text-white text-center">
          ${value.toLocaleString()}+ donated
        </span>
      </div>
    </div>
  );
}
