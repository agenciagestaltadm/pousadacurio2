"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Clock, Percent, Gift, ArrowRight } from "lucide-react";
import { AvailabilityModal } from "@/components/AvailabilityModal";
import { FadeIn } from "@/components/animations";

export function Oferta() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0B1F3B] via-[#123A73] to-[#0B1F3B] relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.5, 1, 1.5],
            x: [0, -30, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <FadeIn>
            <motion.div 
              className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                boxShadow: ["0 0 0 0 rgba(212, 175, 55, 0)", "0 0 20px 5px rgba(212, 175, 55, 0.3)", "0 0 0 0 rgba(212, 175, 55, 0)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-medium text-sm">Oferta Especial</span>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif mb-4">
              Viva a experiência Curió
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl text-white/80 mb-2">
              Garanta sua reserva com condições especiais.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <motion.p 
              className="text-lg text-[#D4AF37] font-medium mb-8"
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Desconto exclusivo para reservas antecipadas!
            </motion.p>
          </FadeIn>

          {/* Benefits */}
          <FadeIn delay={0.4}>
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {[
                { icon: Percent, text: "Desconto especial" },
                { icon: Gift, text: "Benefícios extras" },
                { icon: Clock, text: "Oferta por tempo limitado" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-2 text-white/80"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.05, color: "#D4AF37" }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <item.icon className="w-5 h-5 text-[#D4AF37]" />
                  </motion.div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.5}>
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#D4AF37] hover:bg-[#B88A1E] text-[#0B1F3B] font-bold px-10 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-3 shadow-xl relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">Reservar com Desconto</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-white/50 text-sm mt-6">
              Promoção por tempo limitado. Consulte condições.
            </p>
          </FadeIn>
        </div>
      </div>

      <AvailabilityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        promo={true}
      />
    </section>
  );
}
