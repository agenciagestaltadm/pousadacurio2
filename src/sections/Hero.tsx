"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Search, Star } from "lucide-react";
import { AvailabilityModal } from "@/components/AvailabilityModal";
import { AnimatedButton } from "@/components/animations";

const prices = [
  { type: "Solteiro", price: "R$ 130,00", icon: "👤" },
  { type: "Quarto para Casal", price: "R$ 170,00", icon: "💑" },
  { type: "Casal e Solteiro", price: "R$ 220,00", icon: "👨‍👩‍👧" },
];

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3B]/95 via-[#0B1F3B]/80 to-[#0B1F3B]/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B] via-transparent to-transparent z-10" />
        <Image
          src="/images/WhatsApp Image 2026-02-02 at 16.31.11 (1).jpeg"
          alt="Pousada Curió - Vista da piscina"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </motion.div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#D4AF37]/30 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: "100%",
              opacity: 0 
            }}
            animate={{ 
              y: "-10%",
              opacity: [0, 1, 0],
            }}
            transition={{ 
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-white space-y-6">
            <motion.div 
              className="flex items-center gap-2 text-[#D4AF37] mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium tracking-wide uppercase">Experiência Única</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Pousada{" "}
              <motion.span 
                className="text-[#D4AF37] inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
              >
                Curió
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-white/90 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Hospede-se na história de Serra Pelada com conforto, lazer e exclusividade.
            </motion.p>
            
            <motion.div 
              className="flex items-center gap-2 text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
              <span>Serra Pelada – Curionópolis/PA</span>
            </motion.div>

            {/* Price Cards with Stagger */}
            <motion.div 
              className="grid grid-cols-3 gap-3 mt-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.7 }
                }
              }}
            >
              {prices.map((item, index) => (
                <motion.div
                  key={item.type}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.9 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: { type: "spring", stiffness: 200 }
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center cursor-pointer group"
                >
                  <motion.div 
                    className="text-2xl mb-1"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <motion.div 
                    className="text-[#D4AF37] font-bold text-sm sm:text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {item.price}
                  </motion.div>
                  <div className="text-white/70 text-xs mt-1">{item.type}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p 
              className="text-sm text-white/70 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              💡 Reservas com mais de 3 diárias têm descontos especiais!
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <AnimatedButton
                onClick={() => setIsModalOpen(true)}
                className="mt-6 text-lg shadow-xl"
              >
                <Search className="w-5 h-5" />
                Ver Disponibilidade
              </AnimatedButton>
            </motion.div>
          </div>

          {/* Right Column - Logo/Image */}
          <motion.div 
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
          >
            <motion.div 
              className="relative"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-[#D4AF37]/20 blur-3xl rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <Image
                src="/logo.png"
                alt="Pousada Curió"
                width={400}
                height={400}
                className="relative z-10 drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-[#D4AF37] rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Availability Modal */}
      <AvailabilityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
