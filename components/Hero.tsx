import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, BadgePercent } from "lucide-react";
import GradientBlinds from "./anime-sphere-animation";
import GooeyButton from "./goey/GoeyButton";
import GradientText from "./GradientText/GradientText";
import { IoIosFlash } from "react-icons/io";
import LiquidEther from "./LiquidEther/LiquidEther";


export default function HeroEcomDeals() {
  return (
    <section className="relative isolate overflow-hidden h-screen">
      {/* ===== Background ===== */}
      <div className="absolute inset-0 -z-10">
        {/* Radial glow - more circular and less bright on mobile */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(120,119,198,0.15),transparent_60%)] sm:bg-[radial-gradient(60%_60%_at_50%_0%,rgba(120,119,198,0.25),transparent_60%)]" />

        {/* GradientBlinds - adjusted for mobile */}
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />

        {/* Subtle grid overlay - adjusted for mobile */}
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:20px_20px] sm:[background-size:24px_24px] [mask-image:radial-gradient(60%_60%_at_50%_50%,#000,transparent)] sm:[mask-image:radial-gradient(80%_80%_at_50%_20%,#000,transparent)]" />
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10 mx-auto max-w-8xl px-6 pt-28 pb-20 md:pt-36 md:pb-28 lg:px-8">
        {/* Top badges */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-white/80">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Trending now
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20 backdrop-blur">
            <BadgePercent className="h-3.5 w-3.5" /> Ecom
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20 backdrop-blur">
            <BadgePercent className="h-3.5 w-3.5" /> SaaS
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-6 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          <span className="block">Find The Best</span>
          <span className="block bg-gradient-to-r from-[#FF9FFC] via-white to-[#5227FF] bg-clip-text text-transparent">
            Ecom Deals In Seconds
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-5 max-w-2xl text-pretty text-base text-white/80 sm:text-lg"
        >
          Discover trending deals nobody else has. One website for all Ecom & SaaS discounts.
        </motion.p>

        {/* CTA row - garantidamente acima do fundo */}
        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center relative z-20">

          <Button href="#" icon={<IoIosFlash />}>
            Start Now
          </Button>


        </div>

        {/* trust row */}
        <div className="mt-10 grid w-full grid-cols-2 gap-4 text-sm text-white/70 sm:grid-cols-4">
          <Stat label="Exclusive finds" value="200+" />
          <Stat label="Avg. savings" value="35%" />
          <Stat label="SaaS & Ecom" value="All-in-one" />
          <Stat label="Updated" value="Hourly" />
        </div>


      </div>
      <div className="flex flex-col items-center justify-center mx-auto">
      <GradientText className="mt-20 text-xl bg-transparent mx-auto justify-center text-center ">Every dollar generated will be donated to charity - publicly shown on X.</GradientText>
      <GradientText className="mt-20 text-lg bg-transparent mx-auto justify-center text-center ">An exclusive project by: @patwer</GradientText>
      </div>

      {/* Bottom gradient – decorativo, sem capturar cliques */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
      <div className="text-xs uppercase tracking-wide text-white/60">{label}</div>
      <div className="text-lg font-semibold text-white">{value}</div>
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
