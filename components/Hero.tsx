import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, BadgePercent } from "lucide-react";
import GradientBlinds from "./anime-sphere-animation";

// Assumes GradientBlinds is globally available or imported from your UI lib
// import { GradientBlinds } from "@/components/ui/gradient-blinds";

export default function HeroEcomDeals() {
    return (
        <section className="relative isolate overflow-hidden h-screen">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(120,119,198,0.25),transparent_60%)]" />
                <GradientBlinds
                    gradientColors={['#FF9FFC', '#5227FF']}
                    angle={60}
                    noise={0.3}
                    blindCount={30}
                    blindMinWidth={1}
                    spotlightRadius={0.2} // foco mais pequeno
                    spotlightSoftness={3} // luz mais difusa
                    spotlightOpacity={0.5} // metade da intensidade

                    mouseDampening={0.55}
                    distortAmount={1}
                    shineDirection="left"
                    mixBlendMode="lighten"
                    className="absolute inset-0 opacity-90 [mask-image:radial-gradient(70%_70%_at_50%_20%,#000_40%,transparent_100%)]" dpr={undefined} />
                
                {/* subtle grid overlay */}
                <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(80%_80%_at_50%_20%,#000,transparent)]" />
            </div>

            {/* Content */}
            <div className="mx-auto max-w-8xl px-6 pt-28 pb-20 md:pt-36 md:pb-28 lg:px-8">
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

                {/* CTA row */}
                <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                    <a
                        href="#deals"
                        className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-white/10 transition hover:translate-y-[-1px] hover:shadow-lg active:translate-y-[0px]"
                    >
                        Browse Deals
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>

                    <a
                        href="#newsletter"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
                    >
                        Get Updates
                        <Star className="h-4 w-4" />
                    </a>
                </div>

                {/* trust row */}
                <div className="mt-10 grid w-full grid-cols-2 gap-4 text-sm text-white/70 sm:grid-cols-4">
                    <Stat label="Exclusive finds" value="200+" />
                    <Stat label="Avg. savings" value="35%" />
                    <Stat label="SaaS & Ecom" value="All-in-one" />
                    <Stat label="Updated" value="Hourly" />
                </div>
            </div>

            {/* bottom flourish */}
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
