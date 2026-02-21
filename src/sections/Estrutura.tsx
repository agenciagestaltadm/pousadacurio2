"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Waves, Car, Shield, PartyPopper, Trees, Phone } from "lucide-react";
import { formatWhatsAppMessage, openWhatsApp } from "@/lib/utils";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const facilities = [
  {
    icon: Waves,
    title: "Piscina para Adultos",
    description: "Piscina ampla e bem cuidada para momentos de relaxamento e lazer.",
    imagem: "/images/WhatsApp Image 2026-02-02 at 16.26.14 (2).jpeg",
  },
  {
    icon: Trees,
    title: "Espaço de Lazer Amplo",
    description: "Áreas verdes e espaços ao ar livre para aproveitar o clima da região.",
    imagem: "/images/WhatsApp Image 2026-02-02 at 16.26.15 (1).jpeg",
  },
  {
    icon: PartyPopper,
    title: "Área para Eventos",
    description: "Espaço disponível para comemorações, reuniões e eventos especiais.",
    imagem: "/images/WhatsApp Image 2026-02-02 at 16.31.13 (1).jpeg",
  },
  {
    icon: Shield,
    title: "Ambiente Tranquilo e Seguro",
    description: "Localização privilegiada com segurança e tranquilidade para sua família.",
    imagem: "/images/WhatsApp Image 2026-02-02 at 16.26.15 (2).jpeg",
  },
  {
    icon: Car,
    title: "Estacionamento Privativo",
    description: "Estacionamento amplo e seguro para seu veículo durante toda a estadia.",
    imagem: "/images/WhatsApp Image 2026-02-02 at 16.26.15 (3).jpeg",
  },
];

export function Estrutura() {
  const handleReservar = () => {
    const message = formatWhatsAppMessage({
      checkIn: "",
      checkOut: "",
      roomType: "Quarto (a definir)",
    });
    openWhatsApp(message);
  };

  return (
    <section id="estrutura" className="py-20 lg:py-28 bg-[#0B1F3B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-[#D4AF37] font-medium text-sm tracking-wide uppercase">
            Infraestrutura
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif mt-3">
            Estrutura completa para relaxar e celebrar
          </h2>
          <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
            Tudo o que você precisa para uma estadia perfeita em Serra Pelada
          </p>
        </FadeIn>

        {/* Facilities Grid with Images */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {facilities.map((facility, index) => (
            <StaggerItem key={facility.title}>
              <motion.div
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Image
                      src={facility.imagem}
                      alt={facility.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B] via-[#0B1F3B]/50 to-transparent" />
                  
                  {/* Icon Badge */}
                  <motion.div 
                    className="absolute top-4 left-4 w-12 h-12 bg-[#D4AF37]/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-[#D4AF37]/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <facility.icon className="w-6 h-6 text-[#D4AF37]" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white font-serif mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-[#D4AF37] rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.3} className="text-center">
          <motion.button
            onClick={handleReservar}
            className="bg-[#D4AF37] hover:bg-[#B88A1E] text-[#0B1F3B] font-bold px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-3 shadow-lg relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-white/30"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <Phone className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Reservar Agora</span>
          </motion.button>
        </FadeIn>
      </div>
    </section>
  );
}
