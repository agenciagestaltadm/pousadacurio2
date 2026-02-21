"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Olá! Tenho interesse em reservar na Pousada Curió. Vim pelo site."
    );
    window.open(
      `https://wa.me/5594981229706?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center gap-2 group"
      aria-label="Falar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulse Animation */}
      <motion.span
        className="absolute inset-0 rounded-full bg-green-500"
        animate={{
          scale: [1, 1.5, 1.5],
          opacity: [0.5, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      
      <motion.div
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
      >
        <Phone className="w-6 h-6 relative z-10" />
      </motion.div>
      
      <motion.span 
        className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium relative z-10"
      >
        Fale conosco
      </motion.span>
    </motion.button>
  );
}
