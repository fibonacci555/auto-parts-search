"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion } from "motion/react"

interface LensProps {
  children: React.ReactNode
  hovering: boolean
  setHovering: (hovering: boolean) => void
  lensSize?: number
  zoomFactor?: number
}

export const Lens: React.FC<LensProps> = ({ children, hovering, setHovering, lensSize = 150, zoomFactor = 1.5 }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const lensRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!lensRef.current) return

    const rect = lensRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setPosition({ x, y })
  }

  return (
    <div
      ref={lensRef}
      className="relative overflow-hidden"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {children}

      {hovering && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute pointer-events-none border-4 border-white/50 rounded-full overflow-hidden"
          style={{
            width: lensSize,
            height: lensSize,
            left: position.x - lensSize / 2,
            top: position.y - lensSize / 2,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              transform: `scale(${zoomFactor})`,
              transformOrigin: `${position.x}px ${position.y}px`,
            }}
          >
            {children}
          </div>
        </motion.div>
      )}
    </div>
  )
}
