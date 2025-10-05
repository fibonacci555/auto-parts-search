"use client"

import { useState } from "react"
import { ArrowLeft, ExternalLink, Sparkles, ChevronRight, Copy, Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useCopy } from "@/hooks/use-copy"
import Image from "next/image"

interface Tool {
  name: string
  description: string
  discount: string | null
  code: string | null
  url?: string
  logo?: string
  rank: number
  badge: "gold" | "silver" | "bronze" | null
  disclaimer?: string
  isExternal?: boolean
}

interface CategoryPageProps {
  categoryTitle: string
  categoryDescription: string
  tools: Tool[]
  categorySlug: string
  categoryIcon: string
}

export default function CategoryPage({
  categoryTitle,
  categoryDescription,
  tools,
  categorySlug,
  categoryIcon,
}: CategoryPageProps) {
  const [hoveringTool, setHoveringTool] = useState<string | null>(null)
  const { copied, copyToClipboard } = useCopy()

  const getBadgeColor = (badge: string | null) => {
    switch (badge) {
      case 'gold': return 'from-yellow-400 to-yellow-600'
      case 'silver': return 'from-gray-300 to-gray-500'
      case 'bronze': return 'from-orange-400 to-orange-600'
      default: return 'from-gray-400 to-gray-600'
    }
  }

  const getBadgeIcon = (badge: string | null) => {
    switch (badge) {
      case 'gold': return '🏆'
      case 'silver': return '🥈'
      case 'bronze': return '🥉'
      default: return '⭐'
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
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

      {/* Header */}
      <header className="relative z-10 backdrop-blur-md bg-black/30 border-b border-white/5">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{categoryIcon}</span>
              <span className="font-bold text-lg">{categoryTitle}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {categoryTitle}
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            {categoryDescription}
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={cn(
                "w-full relative rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-r from-[#1D2235] to-[#121318] p-4 sm:p-6 md:p-8 transition-all duration-300",
                tool.badge === 'gold' && "ring-2 ring-yellow-400/30 shadow-lg shadow-yellow-400/10"
              )}
            >
              {/* Trophy Badge */}
              {tool.badge && (
                <div className={cn(
                  "absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r flex items-center justify-center text-sm sm:text-lg md:text-xl z-20 shadow-lg",
                  getBadgeColor(tool.badge)
                )}>
                  {getBadgeIcon(tool.badge)}
                </div>
              )}

              {/* Tool Visual */}
              <div className="w-full h-32 sm:h-40 md:h-48 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-2 sm:mb-4 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                    {tool.logo ? (
                      <Image
                        src={tool.logo}
                        alt={`${tool.name} logo`}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                          // Fallback to icon if logo fails to load
                          e.currentTarget.style.display = 'none'
                          e.currentTarget.nextElementSibling?.classList.remove('hidden')
                        }}
                      />
                    ) : null}
                    <Sparkles className={cn(
                      "h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-blue-400",
                      tool.logo && "hidden"
                    )} />
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    #{tool.rank}
                  </div>
                  <div className="text-xs sm:text-sm text-white/60">Ranked Tool</div>
                </div>
              </div>

              {/* Tool Info */}
              <div className="relative z-20">
                {/* Tool Name and Badge */}
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <div className="flex-1">
                    <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-tight">{tool.name}</h2>
                    {tool.badge && (
                      <div className={cn(
                        "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold mt-1",
                        tool.badge === 'gold' && "bg-yellow-400/20 text-yellow-400 border border-yellow-400/30",
                        tool.badge === 'silver' && "bg-gray-300/20 text-gray-300 border border-gray-300/30",
                        tool.badge === 'bronze' && "bg-orange-400/20 text-orange-400 border border-orange-400/30"
                      )}>
                        {getBadgeIcon(tool.badge)} #{tool.rank} in Category
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{tool.description}</p>

                {/* Discount Section */}
                {tool.discount && (
                  <div className="bg-white/5 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-white/50">Exclusive Discount:</span>
                      <span className="text-sm sm:text-lg font-bold text-green-400">{tool.discount.split(" ")[0]}</span>
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
                    {tool.disclaimer && (
                      <p className="text-xs text-white/40 mt-2">{tool.disclaimer}</p>
                    )}
                  </div>
                )}

                {/* External Link Info */}
                {tool.isExternal && (
                  <div className="bg-blue-500/10 rounded-lg p-3 mb-3 sm:mb-4 border border-blue-500/20">
                    <div className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-blue-400">External Tool</span>
                    </div>
                    <p className="text-xs text-white/60 mt-1">No discount available - premium tool</p>
                  </div>
                )}

                {/* URL Display */}
                {tool.url && !tool.isExternal && (
                  <div className="text-xs text-white/50 mb-3 sm:mb-4 flex items-center gap-2">
                    <span>🌐</span>
                    <span>{tool.url}</span>
                  </div>
                )}

                {/* Action Button */}
                <Button
                  className={cn(
                    "w-full rounded-full h-10 sm:h-12 transition-all duration-300 hover:scale-105 font-semibold",
                    tool.isExternal 
                      ? "bg-gray-600 hover:bg-gray-700" 
                      : "bg-blue-600 hover:bg-blue-700"
                  )}
                >
                  {tool.isExternal ? "Visit Tool" : "Activate Deal"}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-white/70 mb-6">
              Join thousands of businesses saving money with our exclusive deals on the best tools.
            </p>
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Explore All Categories
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
