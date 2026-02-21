"use client";

import { motion } from "framer-motion";
import { Star, MessageCircle, Quote } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const depoimentos = [
  {
    nome: "Maria S.",
    nota: 5,
    texto:
      "Uma experiência incrível! A pousada é muito bem cuidada, o atendimento foi excelente e a localização é perfeita para quem quer conhecer Serra Pelada. Super recomendo!",
    data: "Janeiro 2026",
  },
  {
    nome: "João P.",
    nota: 5,
    texto:
      "Fui a trabalho e me surpreendi com a qualidade da hospedagem. Wi-Fi excelente, quarto climatizado e muito confortável. Voltarei com certeza, agora com a família.",
    data: "Dezembro 2025",
  },
  {
    nome: "Carla R.",
    nota: 5,
    texto:
      "Celebramos nosso aniversário de casamento na Pousada Curió e foi maravilhoso. A piscina, o ambiente tranquilo e a história do lugar tornaram tudo especial.",
    data: "Novembro 2025",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1, type: "spring" }}
        >
          <Star
            className={`w-5 h-5 ${
              i < rating ? "fill-[#D4AF37] text-[#D4AF37]" : "text-gray-300"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
}

export function Depoimentos() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <MessageCircle className="w-5 h-5 text-[#D4AF37]" />
            </motion.div>
            <span className="text-[#D4AF37] font-medium text-sm tracking-wide uppercase">
              Depoimentos
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3B] font-serif">
            O que nossos hóspedes dizem
          </h2>
          <p className="text-[#6B7280] text-lg mt-4 max-w-2xl mx-auto">
            Experiências reais de quem já se hospedou na Pousada Curió
          </p>
        </FadeIn>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {depoimentos.map((depoimento, index) => (
            <StaggerItem key={depoimento.nome}>
              <motion.div
                className="bg-[#F7F8FA] rounded-2xl p-6 relative overflow-hidden group"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Quote Icon Background */}
                <motion.div
                  className="absolute top-4 right-4 opacity-5"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 20, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Quote className="w-24 h-24 text-[#0B1F3B]" />
                </motion.div>

                <StarRating rating={depoimento.nota} />
                
                <motion.p 
                  className="text-[#111827] mt-4 leading-relaxed relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  "{depoimento.texto}"
                </motion.p>
                
                <motion.div 
                  className="mt-6 pt-4 border-t border-[#E5E7EB] relative z-10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-[#0B1F3B]">{depoimento.nome}</p>
                      <p className="text-sm text-[#6B7280]">{depoimento.data}</p>
                    </div>
                    <motion.div 
                      className="w-12 h-12 bg-[#0B1F3B] rounded-full flex items-center justify-center text-white font-bold text-lg"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {depoimento.nome.charAt(0)}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Hover Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust indicators */}
        <FadeIn delay={0.4}>
          <motion.div 
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.3 }
              }
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <motion.div 
                className="text-3xl font-bold text-[#0B1F3B] font-serif"
                whileHover={{ scale: 1.1 }}
              >
                4.9
              </motion.div>
              <div className="flex justify-center mt-1">
                <StarRating rating={5} />
              </div>
              <p className="text-sm text-[#6B7280] mt-1">Média de avaliação</p>
            </motion.div>
            
            <motion.div 
              className="hidden sm:block w-px h-16 bg-[#E5E7EB]"
              variants={{ hidden: { opacity: 0, scaleY: 0 }, visible: { opacity: 1, scaleY: 1 } }}
            />
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <motion.div 
                className="text-3xl font-bold text-[#0B1F3B] font-serif"
                whileHover={{ scale: 1.1 }}
              >
                500+
              </motion.div>
              <p className="text-sm text-[#6B7280] mt-1">Hóspedes satisfeitos</p>
            </motion.div>
            
            <motion.div 
              className="hidden sm:block w-px h-16 bg-[#E5E7EB]"
              variants={{ hidden: { opacity: 0, scaleY: 0 }, visible: { opacity: 1, scaleY: 1 } }}
            />
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <motion.div 
                className="text-3xl font-bold text-[#0B1F3B] font-serif"
                whileHover={{ scale: 1.1 }}
              >
                98%
              </motion.div>
              <p className="text-sm text-[#6B7280] mt-1">Recomendam</p>
            </motion.div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
