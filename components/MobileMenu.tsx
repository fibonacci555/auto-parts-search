"use client"

import { useState, useEffect } from "react"
import { X, ChevronDown, ExternalLink, ArrowRight, Home, Grid3X3, Sparkles, HelpCircle, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import "./MobileMenu.css"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  toolCategories: Record<string, any[]>
  onCategorySelect: (category: string | null) => void
  onAllToolsSelect: () => void
}

export default function MobileMenu({
  isOpen,
  onClose,
  toolCategories,
  onCategorySelect,
  onAllToolsSelect,
}: MobileMenuProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  // Handle menu item click
  const handleCategoryClick = (category: string) => {
    onCategorySelect(category)
    onClose()
  }

  const handleAllToolsClick = () => {
    onAllToolsSelect();
    onClose();

    // espera o menu fechar e o body recuperar o scroll
    requestAnimationFrame(() => {
      // em alguns casos é preciso mais um frame
      requestAnimationFrame(() => {
        const deals = document.getElementById("deals");
        if (deals) {
          // se tiveres header fixo, ajusta o offset aqui
          const headerOffset = 0; // mete, por ex., 72 se tiveres navbar fixa de 72px
          const top = deals.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo({ top, behavior: "smooth" });
        } else {
          // fallback: usa o hash (útil em Next.js para navegar e depois scroll)
          window.location.hash = "#deals";
        }
      });
    });
  };

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  const getCategorySlug = (category: string) => {
    const slugMap: Record<string, string> = {
      "Agency Ad Accounts": "agency-ad-accounts",
      "Spy Tools": "advertising-libraries",
      "UGC Tools": "ugc-tools",
      "Attribution Tools": "attribution-tools",
      "Scalable Payment Processors": "payment-processors",
    }
    return slugMap[category] || category.toLowerCase().replace(/\s+/g, '-')
  }

  const menuItems = [
    {
      label: "Home",
      href: "/",
      icon: Home,
      isButton: true,
    },
    {
      label: "Tool Categories",
      icon: Grid3X3,
      hasSubmenu: true,
      submenuItems: Object.keys(toolCategories).map((category) => ({
        label: category,
        href: `/${getCategorySlug(category)}`,
        icon: "🏆",
      })),
    },
   


  ]

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-2/3 max-w-sm bg-gradient-to-b from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl border-l border-white/10 transition-transform duration-300 ease-out shadow-2xl",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
        {/* Header */}
        <div className="relative flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ecom
            </div>
            <div className="text-xl font-semibold text-white">Insider</div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors group"
          >
            <X className="h-6 w-6 text-white group-hover:rotate-90 transition-transform duration-200" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto py-6 mobile-menu-scroll">
          <nav className="space-y-2 px-6">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="animate-in slide-in-from-right-4 duration-300" style={{ animationDelay: `${index * 50}ms` }}>
                  {item.isButton ? (
                    item.href ? (
                      <Link href={item.href} onClick={onClose}>
                        <div className="w-full text-left px-4 py-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 text-white font-semibold transition-all duration-200 flex items-center gap-3 menu-item-hover border border-blue-500/30">
                          <IconComponent className="h-5 w-5 text-blue-400" />
                          <span>{item.label}</span>
                        </div>
                      </Link>
                    ) : (
                      <button
                        onClick={item.onClick}
                        className="w-full text-left px-4 py-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 text-white font-semibold transition-all duration-200 flex items-center gap-3 menu-item-hover border border-blue-500/30"
                      >
                        <IconComponent className="h-5 w-5 text-blue-400" />
                        <span>{item.label}</span>
                      </button>
                    )
                  ) : item.hasSubmenu ? (
                    <div>
                      <button
                        onClick={() => toggleCategory(item.label)}
                        className="w-full text-left px-4 py-4 rounded-xl hover:bg-white/10 text-white font-medium transition-all duration-200 flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                          <span>{item.label}</span>
                        </div>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 text-blue-400 transition-transform duration-200",
                            expandedCategory === item.label && "rotate-180"
                          )}
                        />
                      </button>

                      {expandedCategory === item.label && (
                        <div className="ml-4 mt-2 space-y-1 animate-in slide-in-from-top-2 duration-200">
                          {item.submenuItems?.map((subItem, subIndex) => (
                            subItem.href ? (
                              <Link key={subIndex} href={subItem.href} onClick={onClose}>
                                <div className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 text-white/80 text-sm transition-colors duration-200 flex items-center gap-3 group">
                                  <span className="text-lg">{subItem.icon}</span>
                                  <span>{subItem.label}</span>
                                </div>
                              </Link>
                            ) : (
                              <button
                                key={subIndex}
                                onClick={subItem.onClick}
                                className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 text-white/80 text-sm transition-colors duration-200 flex items-center gap-3 group"
                              >
                                <span className="text-lg">{subItem.icon}</span>
                                <span>{subItem.label}</span>
                              </button>
                            )
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    item.href ? (
                      <Link href={item.href} onClick={onClose}>
                        <div className="w-full text-left px-4 py-4 rounded-xl hover:bg-white/10 text-white font-medium transition-all duration-200 flex items-center gap-3 menu-item-hover group">
                          <IconComponent className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                          <span>{item.label}</span>
                          {item.hasExternalIcon && (
                            <ExternalLink className="h-3 w-3 text-blue-400 ml-auto" />
                          )}
                        </div>
                      </Link>
                    ) : (
                      <button
                        onClick={item.onClick}
                        className="w-full text-left px-4 py-4 rounded-xl hover:bg-white/10 text-white font-medium transition-all duration-200 flex items-center gap-3 menu-item-hover group"
                      >
                        <IconComponent className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                        <span>{item.label}</span>
                        {item.hasExternalIcon && (
                          <ExternalLink className="h-3 w-3 text-blue-400 ml-auto" />
                        )}
                      </button>
                    )
                  )}
                </div>
              )
            })}
          </nav>
        </div>

        {/* Call to Action */}
        <div className="p-6 border-t border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
          <div className="space-y-3">
            <button
              type="button"
              onClick={handleAllToolsClick}   // usa a tua função real, não console.log aqui
              className="relative z-10 pointer-events-auto w-full px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cta-glow shadow-lg"
            >
              <Sparkles className="h-5 w-5" />
              <span>Explore All Tools</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-2 text-xs text-white/60">
              <div className="text-center py-2 bg-white/5 rounded-lg">
                <div className="font-semibold text-white">50+</div>
                <div>Top Tools</div>
              </div>
              <div className="text-center py-2 bg-white/5 rounded-lg">
                <div className="font-semibold text-white">25%</div>
                <div>Avg Savings</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Chat Button */}

      </div>
    </>
  )
}
