"use client"

import { useState, useEffect } from "react"
import { X, ChevronDown, ExternalLink, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
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
    onAllToolsSelect()
    onClose()
  }

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  const menuItems = [
    {
      label: "Home",
      onClick: () => onClose(),
      isButton: true,
    },
    {
      label: "Tool Categories",
      hasSubmenu: true,
      submenuItems: Object.keys(toolCategories).map((category) => ({
        label: category,
        onClick: () => handleCategoryClick(category),
      })),
    },
    {
      label: "All Tools",
      onClick: handleAllToolsClick,
    },
    {
      label: "About",
      onClick: () => onClose(),
    },
    {
      label: "Blog",
      onClick: () => onClose(),
      hasExternalIcon: true,
    },
    {
      label: "Help Center",
      hasSubmenu: true,
      submenuItems: [
        { label: "FAQ", onClick: () => onClose() },
        { label: "Contact", onClick: () => onClose() },
        { label: "Support", onClick: () => onClose() },
      ],
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
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.isButton ? (
                  <button
                    onClick={item.onClick}
                    className="w-full text-left px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-all duration-200 flex items-center gap-3 menu-item-hover"
                  >
                    <span>{item.label}</span>
                  </button>
                ) : item.hasSubmenu ? (
                  <div>
                    <button
                      onClick={() => toggleCategory(item.label)}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 text-white font-medium transition-all duration-200 flex items-center justify-between"
                    >
                      <span>{item.label}</span>
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
                          <button
                            key={subIndex}
                            onClick={subItem.onClick}
                            className="w-full text-left px-4 py-2 rounded-lg hover:bg-white/5 text-white/80 text-sm transition-colors duration-200 flex items-center gap-2"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={item.onClick}
                    className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 text-white font-medium transition-all duration-200 flex items-center gap-3 menu-item-hover"
                  >
                    <span>{item.label}</span>
                    {item.hasExternalIcon && (
                      <ExternalLink className="h-3 w-3 text-blue-400" />
                    )}
                  </button>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Call to Action */}
        <div className="p-6 border-t border-white/10">
          <button className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cta-glow">
            <span>Explore Tools</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Floating Chat Button */}
        <div className="absolute bottom-20 right-6">
          <button className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group chat-pulse">
            <svg
              className="h-5 w-5 group-hover:scale-110 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
