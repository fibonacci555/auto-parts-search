import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, BadgePercent } from "lucide-react";
import GradientBlinds from "./anime-sphere-animation";
import GooeyButton from "./goey/GoeyButton";
import GradientText from "./GradientText/GradientText";
import { IoIosFlash } from "react-icons/io";
import LiquidEther from "./LiquidEther/LiquidEther";
import SplashCursor from "./SplashCursor/SplashCursor";
import { useEffect, useRef, useState } from "react";
import { HyperText } from "@/components/ui/hyper-text";

export default function HeroEcomDeals() {
  return (
    <section className="relative isolate overflow-hidden h-screen">
      {/* ===== Background ===== */}
      <div className="absolute inset-0 -z-10">
        {/* Radial glow - adjusted for responsiveness */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_50%,rgba(120,119,198,0.15),transparent_60%)] sm:bg-[radial-gradient(60%_60%_at_50%_0%,rgba(120,119,198,0.25),transparent_60%)]" />

        {/* Subtle grid overlay - adjusted for mobile */}
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:16px_16px] sm:[background-size:20px_20px] md:[background-size:24px_24px] [mask-image:radial-gradient(80%_80%_at_50%_50%,#000,transparent)] sm:[mask-image:radial-gradient(80%_80%_at_50%_20%,#000,transparent)]" />
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 pt-16 sm:pt-20 md:pt-28 lg:pt-36 pb-12 sm:pb-16 md:pb-20 lg:pb-28">
        <SplashCursor targetSelector="section" intensity={0.7} />
        {/* Top badges */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-white/80">
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
          className="mt-4 sm:mt-6 text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white z-20"
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
          className="mt-4 sm:mt-5 max-w-full sm:max-w-xl md:max-w-2xl text-pretty text-sm sm:text-base md:text-lg text-white/80"
        >
          Insider access to the best Ecom tools at pricing you won't find anywhere else.
        </motion.p>

        {/* CTA row */}
        <div className="mt-6 sm:mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4 relative z-20">
          <Button href="#" icon={<IoIosFlash />}>
            Start Now
          </Button>
        </div>

        {/* Trust row */}
        <div className="mt-8 sm:mt-10 grid w-full grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm text-white/70 z-20">
          <Stat label="Exclusive finds" value="200+" />
          <Stat label="Avg. savings" value="35%" />
          <Stat label="SaaS & Ecom" value="All-in-one" />
          <Stat label="Updated" value="Hourly" />
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center mx-auto px-4 sm:px-6">
        <GradientText className="mt-12 sm:mt-16 md:mt-20 text-base sm:text-lg md:text-xl bg-transparent mx-auto text-center z-20">
          100% of the affiliate profits will be donated to a good cause.
        </GradientText>

        {/* Wrapper for counter and button */}
        <div className="relative mt-4 sm:mt-6">
          {/* Counter behind the button */}
          <DonatedCounter target={100} className="absolute left-1/2 -translate-x-1/2 bottom-[-60px] sm:bottom-[-75px] -translate-y-1/2 -z-10" />

          {/* The @patwer button */}
          <button
            className="relative inline-flex items-center justify-center px-[1px] py-[1px] font-medium text-white rounded-full z-20 bg-gradient-to-r from-[#6AE4FF] to-[#B27DFF] transition-all duration-200 hover:scale-[1.02]"
          >
            <span
              className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#6AE4FF] to-[#B27DFF] pointer-events-none"
              aria-hidden="true"
            />
            <span className="relative z-10 bg-gradient-to-r from-[#3c436d] to-[#3f1480] rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
              An exclusive project by: @patwer
            </span>
          </button>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 sm:h-32 md:h-40 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-3 sm:px-4 py-2 sm:py-3 backdrop-blur">
      <div className="text-xs uppercase tracking-wide text-white/60">{label}</div>
      <div className="text-base sm:text-lg font-semibold text-white">{value}</div>
    </div>
  );
}

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, children, icon }) => {
  const buttonContent = (
    <button
      type="button"
      className="relative inline-flex items-center justify-center h-12 w-fit rounded-[0.75rem] cursor-pointer overflow-hidden transition-all duration-250 ease-in-out bg-gradient-to-b from-[#7a5af8] to-[#7a5af8] hover:scale-95 focus:outline-none p-3"
      style={{
        background: `radial-gradient(65.28% 65.28% at 50% 100%, rgba(223, 113, 255, 0.8) 0%, rgba(223, 113, 255, 0) 100%), linear-gradient(0deg, #7a5af8, #7a5af8)`,
      }}
    >
      <span
        className="absolute top-0 right-0 h-4 w-4 rounded-bl-[0.5rem] rounded-tr-[0.75rem] transition-all duration-500 ease-in-out shadow-[0_0_3px_black]"
        style={{
          background: `radial-gradient(100% 75% at 55%, rgba(223, 113, 255, 0.8) 0%, rgba(223, 113, 255, 0) 100%)`,
        }}
      >
        <span
          className="absolute top-0 right-0 w-[150%] h-[150%] bg-[#e8e8e8] pointer-events-none"
          style={{ transform: 'rotate(45deg) translateX(0%) translateY(-18px)' }}
        ></span>
      </span>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {[...Array(10)].map((_, i) => (
          <i
            key={i}
            className={`absolute bottom-[-10px] w-[2px] h-[2px] bg-white rounded-full animate-floating-points`}
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
        {icon && (
          <span className="w-[18px] h-[18px] stroke-white stroke-[2.5] transition-all duration-100">
            {icon}
          </span>
        )}
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
  
          button::before {
            content: '';
            position: absolute;
            inset: 1px;
            border-radius: calc(0.75rem - 1px);
            background: linear-gradient(
              177.95deg,
              rgba(255, 255, 255, 0.19) 0%,
              rgba(255, 255, 255, 0) 100%
            );
            transition: all 0.5s ease-in-out;
            z-index: 0;
          }
  
          button::after {
            content: '';
            position: absolute;
            inset: 2px;
            border-radius: calc(0.75rem - 2px);
            background: radial-gradient(
                65.28% 65.28% at 50% 100%,
                rgba(223, 113, 255, 0.8) 0%,
                rgba(223, 113, 255, 0) 100%
              ),
              linear-gradient(0deg, #7a5af8, #7a5af8);
            transition: all 0.5s ease-in-out;
            z-index: 0;
          }
  
          button:hover > span:first-child {
            margin-top: -1rem;
            margin-right: -1rem;
          }
  
          button:hover .stroke-white {
            fill: transparent;
            animation: dasharray 1s linear forwards, filled 0.1s linear forwards 0.95s;
          }
  
          button:focus .stroke-white {
            fill: white;
          }
  
          @keyframes dasharray {
            from {
              stroke-dasharray: 0 0 0 0;
            }
            to {
              stroke-dasharray: 68 68 0 0;
            }
          }
  
          @keyframes filled {
            to {
              fill: white;
            }
          }
        `}</style>
    </button>
  );

  return href ? (
    <a href={href} className="inline-flex">
      {buttonContent}
    </a>
  ) : (
    buttonContent
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

  // easeOutCubic
  const ease = (t: number) => 1 - Math.pow(1 - t, 3);

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
      <div className="relative inline-flex items-center justify-center">
        {/* glow */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6AE4FF] to-[#B27DFF] blur-md opacity-40" aria-hidden="true" />
        {/* gradient border */}
        <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#6AE4FF] to-[#B27DFF]" aria-hidden="true" />
        {/* inner pill */}
        <span className="relative rounded-full bg-[#0A0F2C]/85 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm ring-1 ring-white/10 text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
          ${value.toLocaleString()}+ donated
        </span>
      </div>
    </div>
  );
}