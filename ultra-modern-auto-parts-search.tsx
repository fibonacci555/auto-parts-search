"use client"

import { useState, useEffect, useRef } from "react"
import {
  Search,
  ArrowRight,
  X,
  ChevronRight,
  Sparkles,
  Zap,
  DollarSign,
  RefreshCw,
  Check,
  Tag,
  Percent,
  Menu,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { TracingBeam } from "@/components/tracing-beam"
import AnimeSphereAnimation from "@/components/anime-sphere-animation"
import { Lens } from "@/components/ui/lens"
import GradientBlinds from "@/components/anime-sphere-animation"
import Hero from "./components/Hero"
import MagicBento from "./components/MagicBento/MagicBento"
import ProfileCardComponent from "./components/ProfileCard/ProfileCard"
import CardSwap, { Card } from "./components/CardSwap/CardSwap"
import GradientText from "./components/GradientText/GradientText"

function AnimatedPlaceholder({ texts, className }: { texts: string[]; className?: string }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(80)

  useEffect(() => {
    const text = texts[currentTextIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < text.length) {
          setCurrentText(text.substring(0, currentText.length + 1))
          setTypingSpeed(80)
        } else {
          setIsDeleting(true)
          setTypingSpeed(1000)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(text.substring(0, currentText.length - 1))
          setTypingSpeed(40)
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((currentTextIndex + 1) % texts.length)
          setTypingSpeed(500)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

const dealCategories = {
  "Agency Ad Accounts": [
    { name: "Adrevival", discount: "10% off first month", code: "INSIDER", isTop: true },
    { name: "Agency Aurora", discount: "30% off for 3 months", code: "INSIDER", isTop: false },
    { name: "UpRoas", discount: "30% off first month", code: "INSIDER", isTop: false },
    { name: "Zocket", discount: "15% off for 3 months", code: "INSIDER", isTop: false },
  ],
  "Advertising Library": [
    { name: "Afterlib", discount: "25% off lifetime", code: "INSIDER", url: "afterlib.com", isTop: true },
    { name: "Minea", discount: "20% off for 3 months", code: "INSIDER", isTop: false },
    { name: "Adplexity", discount: "30% off for 3 months", code: "INSIDER", isTop: false },
  ],
  "Ad Tracking Software": [{ name: "WeTracked.io", discount: "15% off for 3 months", code: "INSIDER", isTop: true }],
}

const trendingDeals = [
  {
    name: "Afterlib",
    discount: "25% off lifetime",
    code: "INSIDER",
    url: "afterlib.com",
    category: "Advertising Library",
  },
  { name: "Adrevival", discount: "10% off first month", code: "INSIDER", category: "Agency Ad Accounts" },
  { name: "Make UGC", discount: "25% off for 3 months", code: "INSIDER", category: "Content Creation" },
  { name: "WeTracked.io", discount: "15% off for 3 months", code: "INSIDER", category: "Ad Tracking Software" },
  { name: "Adplexity", discount: "30% off for 3 months", code: "INSIDER", category: "Advertising Library" },
  { name: "UpRoas", discount: "30% off first month", code: "INSIDER", category: "Agency Ad Accounts" },
  { name: "Agency Aurora", discount: "30% off for 3 months", code: "INSIDER", category: "Agency Ad Accounts" },
  { name: "Zocket", discount: "15% off for 3 months", code: "INSIDER", category: "Agency Ad Accounts" },
]

export default function UltraModernAutoPartsSearch() {
  const [activeSection, setActiveSection] = useState("search")
  const [showResults, setShowResults] = useState(true)
  const [selectedDeal, setSelectedDeal] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveringDeal, setHoveringDeal] = useState<string | null>(null)

  const searchSectionRef = useRef<HTMLElement>(null)
  const howSectionRef = useRef<HTMLElement>(null)
  const dealsSectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowResults(false)
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)

    const sectionMap = {
      search: searchSectionRef,
      how: howSectionRef,
    }

    const sectionRef = sectionMap[sectionId as keyof typeof sectionMap]
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToDeals = () => {
    dealsSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "search", ref: searchSectionRef },
        { id: "how", ref: howSectionRef },
      ]

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const filteredDeals = activeCategory
    ? trendingDeals.filter((deal) => deal.category === activeCategory)
    : trendingDeals

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px] animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-400/10 blur-[80px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/5">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <span className="font-bold text-lg tracking-tight">Ecom Insider</span>

            <nav className="hidden md:flex items-center gap-2">
              {Object.keys(dealCategories).map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  className="text-white/70 hover:text-white hover:bg-white/20 rounded-full"
                  onClick={() => {
                    setActiveCategory(category)
                    scrollToDeals()
                  }}
                >
                  {category}
                </Button>
              ))}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/5 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {mobileMenuOpen && (
            <div
              className={cn(
                "md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/5 transition-all duration-300",
                mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4",
              )}
            >
              <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
                {Object.keys(dealCategories).map((category) => (
                  <Button
                    key={category}
                    variant="ghost"
                    className="text-white/70 hover:text-white hover:bg-white/5 rounded-lg justify-start w-full"
                    onClick={() => {
                      setActiveCategory(category)
                      scrollToDeals()
                      setMobileMenuOpen(false)
                    }}
                  >
                    {category}
                  </Button>
                ))}
                <Button
                  variant="ghost"
                  className="text-white/70 hover:text-white hover:bg-white/5 rounded-lg justify-start w-full"
                  onClick={() => {
                    setActiveCategory(null)
                    scrollToDeals()
                    setMobileMenuOpen(false)
                  }}
                >
                  All Deals
                </Button>
              </nav>
            </div>
          )}
        </header>

        <TracingBeam className=" pb-16">
          <section
            ref={searchSectionRef}
            id="search"
            className="min-h-[90vh] flex flex-col items-center justify-center px-4 relative"
          >
            <div className="absolute inset-0 ">
              <Hero />

            </div>

          </section>

          <section>

          </section>

          <div className="border border-white/10 rounded-2xl p-8 mb-16 bg-white/5 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Us</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Best Tools",
                  description: "Find the tools you really need at the best price",
                  icon: <Sparkles className="h-6 w-6 text-blue-400" />,
                },
                {
                  title: "Verified Tools",
                  description: "Each tool has been tested and verified before publishing",
                  icon: <Check className="h-6 w-6 text-green-400" />,
                },
                {
                  title: "Non-Profit",
                  description: "We donate every single dollar received in affiliate commissions to charity",
                  icon: <Heart className="h-6 w-6 text-pink-400" />,
                },
                {
                  title: "Save Big",
                  description: "Average savings 10% higher than any online search you try",
                  icon: <DollarSign className="h-6 w-6 text-yellow-400" />,
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-xl p-4 hover:border-blue-500/50 hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <h4 className="font-bold">{benefit.title}</h4>
                  </div>
                  <p className="text-white/70 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>


          <section>
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            />
          </section>



          {showResults && (
            <section ref={dealsSectionRef} className="py-16 px-4 border-t border-white/5 min-h-screen">
              <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">{activeCategory ? `${activeCategory} Deals` : "All Deals"}</h2>
                  {activeCategory && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-white/5"
                      onClick={() => {
                        setActiveCategory(null)
                      }}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  )}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredDeals.map((deal, index) => (
                    <DealCard
                      key={index}
                      deal={deal}
                      isHovering={hoveringDeal === deal.name}
                      setIsHovering={(hovering) => setHoveringDeal(hovering ? deal.name : null)}
                      onClick={() => setSelectedDeal(deal.name)}
                    />
                  ))}
                </div>
              </div>
            </section>
          )}

          <section className="flex flex-col items-center justify-center gap-4 py-16 px-4 border-t border-white/5 max-h-screen">
            <ProfileCardComponent avatarUrl="/avatar.png" name="Partick Werner" handle="patwerX" title="Super Affiliate" miniAvatarUrl="/avatar.png" behindGradient={undefined} innerGradient={undefined} onContactClick={() => console.log("clicked")} />
          </section>

        </TracingBeam>



        <footer className="border-t border-white/5 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="font-bold">Ecom Insider</span>

              <div className="flex gap-6">
                <a href="#" className="text-white/50 hover:text-white transition-colors">
                  About
                </a>
                <a href="#" className="text-white/50 hover:text-white transition-colors">
                  Submit Deal
                </a>
                <a href="#" className="text-white/50 hover:text-white transition-colors">
                  Terms
                </a>
                <a href="#" className="text-white/50 hover:text-white transition-colors">
                  Contact
                </a>
              </div>

              <div className="text-white/50">© {new Date().getFullYear()} Ecom Insider</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

function DealCard({
  deal,
  isHovering,
  setIsHovering,
  onClick,
}: {
  deal: (typeof trendingDeals)[0]
  isHovering: boolean
  setIsHovering: (hovering: boolean) => void
  onClick: () => void
}) {
  return (
    <div className="w-full relative rounded-3xl overflow-hidden max-w-md mx-auto bg-gradient-to-r from-[#1D2235] to-[#121318] p-8">
      <Rays />
      <Beams />
      <div className="relative z-10">
        <Lens hovering={isHovering} setHovering={setIsHovering}>
          <div className="w-full h-48 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Percent className="h-10 w-10 text-blue-400" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {deal.discount.split(" ")[0]}
              </div>
            </div>
          </div>
        </Lens>
        <div className={cn("py-4 relative z-20 transition-all duration-300", isHovering ? "blur-sm" : "blur-0")}>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-white text-2xl font-bold">{deal.name}</h2>
            <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
              Active
            </span>
          </div>
          <p className="text-blue-400 text-sm mb-3">{deal.category}</p>
          <p className="text-neutral-200 mb-4">{deal.discount}</p>

          <div className="bg-white/5 rounded-lg p-3 mb-4 border border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/50">Discount Code:</span>
              <code className="text-sm font-mono bg-white/10 px-3 py-1 rounded text-blue-400">{deal.code}</code>
            </div>
          </div>

          {deal.url && (
            <div className="text-xs text-white/50 mb-4 flex items-center gap-2">
              <span>🌐</span>
              <span>{deal.url}</span>
            </div>
          )}

          <Button
            onClick={onClick}
            className="w-full rounded-full bg-blue-600 hover:bg-blue-700 h-10 transition-all duration-300 hover:scale-105"
          >
            Get Deal
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

const Beams = () => {
  return (
    <svg
      width="380"
      height="315"
      viewBox="0 0 380 315"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
    >
      <g filter="url(#filter0_f_120_7473)">
        <circle cx="34" cy="52" r="114" fill="#6925E7" />
      </g>
      <g filter="url(#filter1_f_120_7473)">
        <circle cx="332" cy="24" r="102" fill="#8A4BFF" />
      </g>
      <g filter="url(#filter2_f_120_7473)">
        <circle cx="191" cy="53" r="102" fill="#802FE3" />
      </g>
      <defs>
        <filter
          id="filter0_f_120_7473"
          x="-192"
          y="-174"
          width="452"
          height="452"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="56" result="effect1_foregroundBlur_120_7473" />
        </filter>
        <filter
          id="filter1_f_120_7473"
          x="70"
          y="-238"
          width="524"
          height="524"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_120_7473" />
        </filter>
        <filter
          id="filter2_f_120_7473"
          x="-71"
          y="-209"
          width="524"
          height="524"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_120_7473" />
        </filter>
      </defs>
    </svg>
  )
}

const Rays = ({ className }: { className?: string }) => {
  return (
    <svg
      width="380"
      height="397"
      viewBox="0 0 380 397"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute left-0 top-0 pointer-events-none z-[1]", className)}
    >
      <g filter="url(#filter0_f_120_7480)">
        <path
          d="M-37.4202 -76.0163L-18.6447 -90.7295L242.792 162.228L207.51 182.074L-37.4202 -76.0163Z"
          fill="url(#paint0_linear_120_7480)"
        />
      </g>
      <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.3" filter="url(#filter1_f_120_7480)">
        <path
          d="M-109.54 -36.9027L-84.2903 -58.0902L178.786 193.228L132.846 223.731L-109.54 -36.9027Z"
          fill="url(#paint1_linear_120_7480)"
        />
      </g>
      <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.86" filter="url(#filter2_f_120_7480)">
        <path
          d="M-100.647 -65.795L-69.7261 -92.654L194.786 157.229L139.51 197.068L-100.647 -65.795Z"
          fill="url(#paint2_linear_120_7480)"
        />
      </g>
      <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.31" filter="url(#filter3_f_120_7480)">
        <path
          d="M163.917 -89.0982C173.189 -72.1354 80.9618 2.11525 34.7334 30.1553C-11.495 58.1954 -106.505 97.514 -115.777 80.5512C-125.048 63.5885 -45.0708 -3.23233 1.15763 -31.2724C47.386 -59.3124 154.645 -106.061 163.917 -89.0982Z"
          fill="#8A50FF"
        />
      </g>
      <g style={{ mixBlendMode: "plus-lighter" }} filter="url(#filter4_f_120_7480)">
        <path d="M34.2031 13.2222L291.721 269.534" stroke="url(#paint3_linear_120_7480)" />
      </g>
      <g style={{ mixBlendMode: "plus-lighter" }} filter="url(#filter5_f_120_7480)">
        <path d="M41 -40.9331L298.518 215.378" stroke="url(#paint4_linear_120_7480)" />
      </g>
      <g style={{ mixBlendMode: "plus-lighter" }} filter="url(#filter6_f_120_7480)">
        <path d="M61.3691 3.8999L317.266 261.83" stroke="url(#paint5_linear_120_7480)" />
      </g>
      <g style={{ mixBlendMode: "plus-lighter" }} filter="url(#filter7_f_120_7480)">
        <path d="M-1.46191 9.06348L129.458 145.868" stroke="url(#paint6_linear_120_7480)" strokeWidth="2" />
      </g>
      <defs>
        <filter
          id="filter0_f_120_7480"
          x="-49.4199"
          y="-102.729"
          width="304.212"
          height="296.803"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_120_7480" />
        </filter>
        <filter
          id="filter1_f_120_7480"
          x="-115.54"
          y="-64.0903"
          width="300.326"
          height="293.822"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_120_7480" />
        </filter>
        <filter
          id="filter2_f_120_7480"
          x="-111.647"
          y="-103.654"
          width="317.434"
          height="311.722"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5.5" result="effect1_foregroundBlur_120_7480" />
        </filter>
        <filter
          id="filter3_f_120_7480"
          x="-212.518"
          y="-188.71"
          width="473.085"
          height="369.366"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="48" result="effect1_foregroundBlur_120_7480" />
        </filter>
        <filter
          id="filter4_f_120_7480"
          x="25.8447"
          y="4.84521"
          width="274.234"
          height="273.065"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_120_7480" />
        </filter>
        <filter
          id="filter5_f_120_7480"
          x="32.6416"
          y="-49.3101"
          width="274.234"
          height="273.065"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_120_7480" />
        </filter>
        <filter
          id="filter6_f_120_7480"
          x="54.0078"
          y="-3.47461"
          width="270.619"
          height="272.68"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_120_7480" />
        </filter>
        <filter
          id="filter7_f_120_7480"
          x="-9.2002"
          y="1.32812"
          width="146.396"
          height="152.275"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_120_7480" />
        </filter>
        <linearGradient
          id="paint0_linear_120_7480"
          x1="-57.5042"
          y1="-134.741"
          x2="403.147"
          y2="351.523"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.214779" stopColor="#AF53FF" />
          <stop offset="0.781583" stopColor="#B253FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_120_7480"
          x1="-122.154"
          y1="-103.098"
          x2="342.232"
          y2="379.765"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.214779" stopColor="#AF53FF" />
          <stop offset="0.781583" stopColor="#9E53FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_120_7480"
          x1="-106.717"
          y1="-138.534"
          x2="359.545"
          y2="342.58"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.214779" stopColor="#9D53FF" />
          <stop offset="0.781583" stopColor="#A953FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_120_7480"
          x1="72.701"
          y1="54.347"
          x2="217.209"
          y2="187.221"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AF81FF" />
          <stop offset="1" stopColor="#C081FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_120_7480"
          x1="79.4978"
          y1="0.191681"
          x2="224.006"
          y2="133.065"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AF81FF" />
          <stop offset="1" stopColor="#C081FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_120_7480"
          x1="79.6568"
          y1="21.8377"
          x2="234.515"
          y2="174.189"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B981FF" />
          <stop offset="1" stopColor="#CF81FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_120_7480"
          x1="16.119"
          y1="27.6966"
          x2="165.979"
          y2="184.983"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A981FF" />
          <stop offset="1" stopColor="#CB81FF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
