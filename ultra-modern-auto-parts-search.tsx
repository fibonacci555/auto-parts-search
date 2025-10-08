"use client"

import React, { useState, useEffect, useRef } from "react"
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
  Copy,
  Tag,
  Percent,
  Menu,
  Heart,
  ExternalLink,
  Mail,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { TracingBeam } from "@/components/tracing-beam"
import Image from "next/image"
import { useCopy } from "@/hooks/use-copy"
import AnimeSphereAnimation from "@/components/anime-sphere-animation"
import GradientBlinds from "@/components/anime-sphere-animation"
import Hero from "./components/Hero"
import MagicBento from "./components/MagicBento/MagicBento"
import ProfileCardComponent from "./components/ProfileCard/ProfileCard"
import CardSwap, { Card } from "./components/CardSwap/CardSwap"
import GradientText from "./components/GradientText/GradientText"
import MobileMenu from "@/components/MobileMenu"
import Stepper, { Step } from "@/components/Stepper/Stepper"
import { toolCategories } from "./lib/tool-data"
import { useRouter } from "next/navigation"




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



// Validated Stepper Component
function ValidatedStepper({
  currentStep,
  onStepChange,
  stepperData,
  setStepperData,
  isStepValid,
  onComplete,
  children
}: {
  currentStep: number
  onStepChange: (step: number) => void
  stepperData: { firstName: string; email: string; completed: boolean }
  setStepperData: (data: any) => void
  isStepValid: (step: number) => boolean
  onComplete: () => void
  children: React.ReactNode
}) {
  const stepsArray = React.Children.toArray(children)
  const totalSteps = stepsArray.length
  const isLastStep = currentStep === totalSteps

  const handleNext = () => {
    if (isStepValid(currentStep) && !isLastStep) {
      onStepChange(currentStep + 1)
    } else if (isStepValid(currentStep) && isLastStep) {
      onComplete()
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      onStepChange(currentStep - 1)
    }
  }

  return (
    <div className="outer-container">

      <div className="step-circle-container bg-gradient-to-br from-slate-800/50 to-slate-900/50" style={{ border: '1px solid #222' }}>
        {/* Step Indicators */}
        <div className="step-indicator-row">
          {stepsArray.map((_, index) => {
            const stepNumber = index + 1
            const isNotLastStep = index < totalSteps - 1
            const isActive = currentStep === stepNumber
            const isComplete = currentStep > stepNumber
            const isInactive = currentStep < stepNumber

            return (
              <React.Fragment key={stepNumber}>
                <div className="step-indicator">
                  <div className={`step-indicator-inner ${isComplete ? 'complete' : isActive ? 'active' : 'inactive'
                    }`}>
                    {isComplete ? (
                      <Check className="check-icon" />
                    ) : isActive ? (
                      <div className="active-dot" />
                    ) : (
                      <span className="step-number">{stepNumber}</span>
                    )}
                  </div>
                </div>
                {isNotLastStep && (
                  <div className="step-connector">
                    <div className={`step-connector-inner ${isComplete ? 'complete' : 'incomplete'}`} />
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </div>

        {/* Step Content */}
        <div className="step-content-default text-white">
          {stepsArray[currentStep - 1]}
        </div>

        {/* Navigation */}
        <div className="footer-container">
          <div className={`footer-nav ${currentStep !== 1 ? 'spread' : 'end'}`}>
            {currentStep !== 1 && (
              <button
                onClick={handleBack}
                className="back-button"
              >
                Previous
              </button>
            )}
            <button
              onClick={handleNext}
              className={`next-button ${!isStepValid(currentStep) ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!isStepValid(currentStep)}
            >
              {isLastStep ? 'Complete' : 'Next Step'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function UltraModernAutoPartsSearch() {
  const [activeSection, setActiveSection] = useState("search")
  const [showResults, setShowResults] = useState(true)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const [stepperData, setStepperData] = useState({
    firstName: '',
    email: '',
    completed: false
  })
  const [currentStep, setCurrentStep] = useState(1)

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

  const filteredTools = activeCategory
    ? toolCategories[activeCategory as keyof typeof toolCategories] || []
    : Object.values(toolCategories).flat()

  // Stepper validation logic
  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return stepperData.firstName.trim().length > 0
      case 2:
        return stepperData.email.trim().length > 0 && stepperData.email.includes('@')
      case 3:
        return stepperData.firstName.trim().length > 0 && stepperData.email.trim().length > 0 && stepperData.email.includes('@')
      default:
        return false
    }
  }

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
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-bold text-lg tracking-tight">
              <img src="/logo.svg" alt="Ecom Insider" className="h-5 md:h-5 mr-2" />
            </button>

            <nav className="hidden md:flex items-center gap-2">
              {Object.keys(toolCategories).map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  className={cn(
                    "text-white/80 hover:text-white hover:bg-white/10 rounded-full relative transition-[color,background,box-shadow] duration-300 hover:shadow-[0_0_18px_rgba(106,228,255,0.45)] focus-visible:outline-none focus-visible:shadow-[0_0_22px_rgba(106,228,255,0.55)] [text-shadow:0_0_12px_rgba(106,228,255,0.45)] hover:[text-shadow:0_0_16px_rgba(106,228,255,0.65)]",
                    activeCategory === category &&
                    "text-white bg-white/10 shadow-[0_0_20px_rgba(106,228,255,0.55)] ring-1 ring-[#6AE4FF]/40"
                  )}
                  onClick={() => {
                    const slugMap: Record<string, string> = {
                      "Best Agency Ad Accounts": "agency-ad-accounts",
                      "Best Spy Tools": "advertising-libraries",
                      "Best UGC Tools": "ugc-tools",
                      "Attribution Tools": "ad-tracking-software",
                      "Payment Processors": "payment-processors",
                    }
                    const slug = slugMap[category]
                    if (slug) {
                      router.push(`/${slug}`)
                    } else {
                      setActiveCategory(category)
                      scrollToDeals()
                    }
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

        </header>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          toolCategories={toolCategories}
          onCategorySelect={(category) => {
            const slugMap: Record<string, string> = {
              "Best Agency Ad Accounts": "agency-ad-accounts",
              "Best Spy Tools": "advertising-libraries",
              "Best UGC Tools": "ugc-tools",
              "Attribution Tools": "ad-tracking-software",
              "Payment Processors": "payment-processors",
            }
            const slug = category ? slugMap[category] : undefined
            if (slug) {
              router.push(`/${slug}`)
            } else {
              setActiveCategory(category)
              scrollToDeals()
            }
          }}
          onAllToolsSelect={() => {
            setActiveCategory(null)
            scrollToDeals()
          }}
        />

        <TracingBeam className=" pb-16">
          <section
            ref={searchSectionRef}
            id="search"
            className="relative w-full"
          >
            <Hero />
          </section>



          <div className="border border-white/10 rounded-2xl p-8 mb-16 backdrop-blur-xl md:mx-40 mx-10 mt-12 sm:mt-16 md:mt-24">
            <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Us</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className="border border-white/30 rounded-xl shadow-sm p-4 hover:border-blue-500/50 hover:bg-white/5 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="pointer-events-none absolute -inset-8 opacity-30" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(59,130,246,0.5), transparent 100%)' }} />
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <h4 className="font-bold text-sm sm:text-base">{benefit.title}</h4>
                  </div>
                  <p className="text-white/70 text-xs sm:text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>


          <section className="px-4 md:px-6 lg:px-8 mx-auto w-full justify-center">
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
              className=""
            />
          </section>

          {/* Stepper Section */}
          <section className="py-16 px-4 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Want Weekly Insider Deals?
                </h2>
                <p className="text-white/70 text-lg max-w-2xl mx-auto">
                  Get early access to new deals before they go public. Price drops delivered straight to your inbox.
                </p>
              </div>

              <div className=" backdrop-blur-sm rounded-2xl mt-20  p-6 md:p-8">
                <ValidatedStepper
                  currentStep={currentStep}
                  onStepChange={setCurrentStep}
                  stepperData={stepperData}
                  setStepperData={setStepperData}
                  isStepValid={isStepValid}
                  onComplete={() => {
                    console.log('All steps completed!', stepperData)
                    setStepperData(prev => ({ ...prev, completed: true }))
                    // Here you would typically send the data to your backend
                    alert(`Welcome ${stepperData.firstName}! You'll receive the best deals at ${stepperData.email}`)
                  }}
                >
                  <Step>
                    <div className="text-center py-4">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                        <User className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white">What's your first name?</h3>
                      <p className="text-white/70 text-lg max-w-md mx-auto leading-relaxed mb-6">
                        Help us send you the most relevant deals for your business.
                      </p>
                      <div className="max-w-sm mx-auto">
                        <input
                          type="text"
                          placeholder="Enter your first name"
                          value={stepperData.firstName}
                          onChange={(e) => setStepperData(prev => ({ ...prev, firstName: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:bg-white/15 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </Step>

                  <Step>
                    <div className="text-center py-8">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                        <Mail className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white">Get exclusive deals via email</h3>
                      <p className="text-white/70 text-lg max-w-md mx-auto leading-relaxed mb-6">
                        Weekly insider deals straight to your inbox.
                      </p>
                      <div className="max-w-sm mx-auto">
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          value={stepperData.email}
                          onChange={(e) => setStepperData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:bg-white/15 transition-all duration-300"
                        />
                        <p className="text-white/50 text-sm mt-2">
                          We respect your privacy. Unsubscribe anytime.
                        </p>
                      </div>
                    </div>
                  </Step>

                  <Step>
                    <div className="text-center py-8">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                        <Zap className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white">You're all set, {stepperData.firstName}!</h3>
                      <p className="text-white/70 text-lg max-w-md mx-auto leading-relaxed mb-6">
                        You'll now receive exclusive discounts and the best tool recommendations directly to {stepperData.email}.
                      </p>
                      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 max-w-sm mx-auto">
                        <div className="flex items-center gap-3">
                          <Check className="h-6 w-6 text-green-400" />
                          <div className="text-left">
                            <p className="text-green-400 font-semibold">Success!</p>
                            <p className="text-white/70 text-sm">You're subscribed to our exclusive deals</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Step>
                </ValidatedStepper>
              </div>
            </div>
          </section>



          {showResults && (
            <section ref={dealsSectionRef} className="py-16 px-4 border-t border-white/5 min-h-screen" id="deals">
              <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">{activeCategory || "All Tools"}</h2>
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

                {activeCategory ? (
                  <div className="grid grid-cols-1 gap-6 md:gap-8">
                    {filteredTools.map((tool, index) => (
                      <ToolCard
                        key={`${tool.name}-${index}`}
                        tool={tool}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-12">
                    {Object.entries(toolCategories).map(([categoryName, tools]) => (
                      <div key={categoryName} className="space-y-6">
                        <h3 className="text-xl font-semibold text-white">{categoryName}</h3>
                        <div className="grid grid-cols-1 gap-6">
                          {tools.map((tool, index) => (
                            <ToolCard
                              key={`${categoryName}-${tool.name}-${index}`}
                              tool={tool}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}

          <section className="flex flex-col items-center justify-center gap-4 py-16 px-4 border-t border-white/5 max-h-screen">
            <ProfileCardComponent
              avatarUrl="/avatar.png"
              name="Patrick Werner"
              handle="patwerX"
              title="Super Affiliate"
              miniAvatarUrl="/avatar.png"
              grainUrl=""

              onContactClick={() => window.open('https://x.com/patwerX', '_blank', 'noopener,noreferrer')}
            />
          </section>

        </TracingBeam>

        {/* Affiliate Disclosure Disclaimer */}
        <div className="border-t border-white/5 py-6">
          <div className="container mx-auto px-4">
            <p className="text-center text-white/40 text-sm">
              We earn commissions on purchases made through our links.{' '}
              <a
                href="/affiliate-disclosure"
                className="text-purple-400 hover:text-purple-300 transition-colors underline"
              >
                Learn more
              </a>
            </p>
          </div>
        </div>

        <footer className="border-t border-white/5 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="font-bold"><img src="/logo.svg" alt="logo" className=" h-5" /></span>

              <div className="flex gap-6">
                <a href="/private-policy" className="text-white/50 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms-and-conditions" className="text-white/50 hover:text-white transition-colors">
                  Terms and Conditions
                </a>
                <a href="/affiliate-disclosure" className="text-white/50 hover:text-white transition-colors">
                  Affiliate Disclosure
                </a>
                <a href="https://t.me/patwerx" className="text-white/50 hover:text-white transition-colors">
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

function ToolCard({ tool }: { tool: any }) {
  const { copied, copyToClipboard } = useCopy()
  const buttonLabel = tool.ctaLabel || (tool.isExternal ? "Visit Tool" : "Activate Deal")
  const getBadgeColor = (badge: string | null) => {
    switch (badge) {
      case 'gold':
        return 'from-yellow-400 to-yellow-600'
      case 'silver':
        return 'from-gray-300 to-gray-500'
      case 'bronze':
        return 'from-orange-400 to-orange-600'
      default:
        return 'from-gray-400 to-gray-600'
    }
  }

  const getBadgeIcon = (badge: string | null) => {
    switch (badge) {
      case 'gold':
        return '🏆'
      case 'silver':
        return '🥈'
      case 'bronze':
        return '🥉'
      default:
        return '⭐'
    }
  }

  const buildReferralUrl = () => {
    if (!tool.url) return null
    const trimmed = tool.url.trim()
    if (!tool.code) return trimmed

    try {
      const referralUrl = new URL(trimmed)
      referralUrl.searchParams.append("code", tool.code)
      return referralUrl.toString()
    } catch {
      // If URL constructor fails, fall back to trimmed string
      const separator = trimmed.includes("?") ? "&" : "?"
      return `${trimmed}${separator}code=${encodeURIComponent(tool.code)}`
    }
  }

  const handleActionClick = () => {
    if (!tool.url) return
    if (tool.code) {
      copyToClipboard(tool.code)
    }
    const target = buildReferralUrl() || tool.url.trim()
    window.open(target, "_blank", "noopener,noreferrer")
  }

  return (
    <div
      className={cn(
        "w-full relative rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-r from-[#1D2235] to-[#121318] p-6 sm:p-8 md:p-10 transition-all duration-300",
        tool.badge === 'gold' && "ring-2 ring-yellow-400/30 shadow-lg shadow-yellow-400/10"
      )}
    >
      {tool.badge && (
        <div
          className={cn(
            "absolute top-2 left-2 sm:top-4 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r flex items-center justify-center text-sm sm:text-lg md:text-xl z-20 shadow-lg",
            getBadgeColor(tool.badge)
          )}
        >
          {getBadgeIcon(tool.badge)}
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
        <div className="w-full md:w-48 lg:w-56 h-32 sm:h-40 md:h-48 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          <div className="relative z-10 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-2 sm:mb-4 rounded-xl md:rounded-2xl bg-white/100 backdrop-blur-sm flex items-center justify-center overflow-hidden">
              {tool.logo ? (
                <Image
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain rounded-xl md:rounded-2xl"
                />
              ) : (
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-blue-400" />
              )}
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              #{tool.rank}
            </div>
            {tool.special && (
              <div className="text-xs sm:text-sm text-white/60">Ranked Processor</div>
            )

            }
            {!tool.special && (
              <div className="text-xs sm:text-sm text-white/60">Ranked Tool</div>
            )

            }
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center text-left">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-tight">{tool.name}</h2>
          {tool.badge && (
            <div
              className={cn(
                "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold mt-1",
                tool.badge === 'gold' && "bg-yellow-400/20 text-yellow-400 border border-yellow-400/30",
                tool.badge === 'silver' && "bg-gray-300/20 text-gray-300 border border-gray-300/30",
                tool.badge === 'bronze' && "bg-orange-400/20 text-orange-400 border border-orange-400/30"
              )}
            >
              {getBadgeIcon(tool.badge)} #{tool.rank} in Category
            </div>
          )}

          <p className="text-white/80 text-sm mt-3 mb-4 leading-relaxed">{tool.description}</p>

          {tool.discount && (
            <div className="bg-white/5 rounded-lg p-3 sm:p-4 mb-3 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-white/50">Exclusive Discount:</span>
                <span className="text-2xl font-bold text-green-400">{tool.discount.split(" ")[0]} Discount</span>
              </div>
              {tool.code && (
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/50">Code:</span>
                  <button
                    onClick={() => copyToClipboard(tool.code!)}
                    className="flex items-center gap-2 text-xs sm:text-sm font-mono bg-white/10 hover:bg-white/20 px-2 sm:px-3 py-1 rounded text-blue-400 transition-colors duration-200 group"
                  >
                    <code>{tool.code}</code>
                    {copied ? (
                      <Check className="h-3 w-3 text-green-400" />
                    ) : (
                      <Copy className="h-3 w-3 opacity-60 group-hover:opacity-100" />
                    )}
                  </button>
                </div>
              )}
              {tool.disclaimer && <p className="text-xs text-white/40 mt-2">{tool.disclaimer}</p>}
            </div>
          )}

          {tool.isExternal && (
            <div className="bg-blue-500/10 rounded-lg p-3 mb-3 border border-blue-500/20">
              <div className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-blue-400">External Tool</span>
              </div>
              <p className="text-xs text-white/60 mt-1">No discount available - premium tool</p>
            </div>
          )}

          {tool.url && !tool.isExternal && (
            <div className="text-xs text-white/50 mb-3 flex items-center gap-2">
              <span>🌐</span>
              <span>{tool.url.trim()}</span>
            </div>
          )}

          {tool.preCtaText && (
            <p className="text-xs sm:text-sm text-white/60 mb-3">
              {tool.preCtaText}
            </p>
          )}

          <Button
            onClick={handleActionClick}
            disabled={!tool.url}
            className={cn(
              "w-full rounded-full h-10 sm:h-12 transition-all duration-300 hover:scale-105 font-semibold",
              tool.isExternal ? "bg-gray-600 hover:bg-gray-700" : "bg-blue-600 hover:bg-blue-700",
              !tool.url && "opacity-50 cursor-not-allowed hover:scale-100"
            )}
          >
            {buttonLabel}
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
