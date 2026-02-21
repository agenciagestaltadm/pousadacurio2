"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const imagens = [
  { src: "/images/WhatsApp Image 2026-02-02 at 16.26.13 (3).jpeg", alt: "Quarto Casal + Solteiro" },
  { src: "/images/WhatsApp Image 2026-02-02 at 16.26.13 (4).jpeg", alt: "Quarto Solteiro" },
  { src: "/images/WhatsApp Image 2026-02-02 at 16.26.13 (5).jpeg", alt: "Quarto para Casal" },
  { src: "/images/WhatsApp Image 2026-02-02 at 16.26.13 (6).jpeg", alt: "Quarto com Banheiro" },
  { src: "/images/WhatsApp Image 2026-02-02 at 16.26.14 (2).jpeg", alt: "Piscina Principal" },
  { src: "/images/WhatsApp Image 2026-02-02 at 16.26.14 (3).jpeg", alt: "Espaço de Lazer" },
  { src: "/images/WhatsApp Image 2026-02-02 at 16.26.15 (1).jpeg", alt: "Área de Descanso" },
  { src: "/images/WhatsApp Image 2026-02-02 at 16.26.15 (2).jpeg", alt: "Piscina com Tobogã" },
  { src: "/images/WhatsApp Image 2026-02-02 at 16.26.15 (3).jpeg", alt: "Vista Geral" },
  { src: "/images/WhatsApp Image 2026-02-02 at 16.31.11 (1).jpeg", alt: "Jardim e Piscina" },
  { src: "/images/WhatsApp Image 2026-02-02 at 16.31.13 (1).jpeg", alt: "Espaço Kids" },
];

export function Galeria() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % imagens.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + imagens.length) % imagens.length);
    }
  };

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-[#D4AF37] font-medium text-sm tracking-wide uppercase">
            Galeria
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3B] font-serif mt-3">
            Conheça nosso espaço
          </h2>
          <p className="text-[#6B7280] text-lg mt-4 max-w-2xl mx-auto">
            Explore as instalações da Pousada Curió em Serra Pelada
          </p>
        </FadeIn>

        {/* Gallery Grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" staggerDelay={0.05}>
          {imagens.map((imagem, index) => (
            <StaggerItem key={imagem.src}>
              <motion.div
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(index)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Image
                    src={imagem.src}
                    alt={imagem.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </motion.div>
                
                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-[#0B1F3B]/60 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <ZoomIn className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>

                {/* Border on Hover */}
                <motion.div
                  className="absolute inset-0 border-2 border-[#D4AF37] rounded-xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 text-white/80 hover:text-white z-10"
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-8 h-8" />
            </motion.button>

            {/* Navigation */}
            <motion.button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-10"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              whileHover={{ scale: 1.2, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-10 h-10" />
            </motion.button>

            <motion.button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-10"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              whileHover={{ scale: 1.2, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-10 h-10" />
            </motion.button>

            {/* Image */}
            <motion.div
              className="relative w-full max-w-5xl aspect-video mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={imagens[selectedImage].src}
                alt={imagens[selectedImage].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Caption */}
            <motion.p
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              {imagens[selectedImage].alt}
            </motion.p>

            {/* Image Counter */}
            <motion.p
              className="absolute bottom-6 right-6 text-white/60 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {selectedImage + 1} / {imagens.length}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
