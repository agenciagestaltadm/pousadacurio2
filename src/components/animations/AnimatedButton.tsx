"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export function AnimatedButton({
  children,
  onClick,
  className = "",
  variant = "primary",
}: AnimatedButtonProps) {
  const baseStyles = "relative overflow-hidden font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3";
  
  const variants = {
    primary: "bg-[#D4AF37] text-[#0B1F3B] hover:bg-[#B88A1E]",
    secondary: "bg-[#0B1F3B] text-white hover:bg-[#123A73]",
    outline: "border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B1F3B]",
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.span
        className="absolute inset-0 bg-white/20"
        initial={{ x: "-100%", opacity: 0 }}
        whileHover={{ x: "100%", opacity: 0.3 }}
        transition={{ duration: 0.5 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
