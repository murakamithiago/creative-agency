"use client"

import { motion, type Variants } from "framer-motion"
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

type Direction = "up" | "down" | "left" | "right"

interface AnimateInProps {
  children: ReactNode
  className?: string
  direction?: Direction
  delay?: number
  duration?: number
  distance?: number
  once?: boolean
  amount?: number
}

const getDirectionOffset = (
  direction: Direction,
  distance: number
): { x: number; y: number } => {
  switch (direction) {
    case "up":
      return { x: 0, y: distance }
    case "down":
      return { x: 0, y: -distance }
    case "left":
      return { x: distance, y: 0 }
    case "right":
      return { x: -distance, y: 0 }
  }
}

export function AnimateIn({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.5,
  distance = 24,
  once = true,
  amount = 0.2,
}: AnimateInProps) {
  const offset = getDirectionOffset(direction, distance)

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
