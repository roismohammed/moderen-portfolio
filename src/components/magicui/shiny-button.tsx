"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps, MotionProps } from "framer-motion";
import React from "react";

const defaultMotion: MotionProps = {
  initial: { opacity: 0.8, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  whileTap: { scale: 0.95 },
  whileHover: { scale: 1.05 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
};

interface ShinyButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative cursor-pointer flex rounded-lg px-6 py-2 font-medium backdrop-blur-xl border",
          "transition-shadow duration-300 ease-in-out hover:shadow",
          "dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%),transparent_60%)]",
          "dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]",
          className
        )}
        {...defaultMotion}
        {...props}
      >
        <span className="relative flex items-center gap-2 size-full text-sm uppercase tracking-wide text-black/65 dark:font-light dark:text-white/90">
          {children}
        </span>
        <span
          className="absolute inset-0 z-10 block rounded-[inherit] p-px"
          style={{
            mask: "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
            WebkitMask: "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
            background:
              "linear-gradient(-75deg, hsl(var(--primary)/10%) 20%, hsl(var(--primary)/50%) 50%, hsl(var(--primary)/10%) 100%)",
            backgroundSize: "200% 100%",
            animation: "shine 2s infinite",
          }}
        />
        <style jsx>{`
          @keyframes shine {
            to {
              background-position: 200% center;
            }
          }
        `}</style>
      </motion.button>
    );
  }
);

ShinyButton.displayName = "ShinyButton";
