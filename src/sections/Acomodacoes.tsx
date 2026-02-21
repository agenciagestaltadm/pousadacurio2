"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BedDouble, Wind, Wifi, Bath, Heart, ChevronRight, Maximize2 } from "lucide-react";
import { AvailabilityModal } from "@/components/AvailabilityModal";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const acomodacoes = [
  {
    id: "solteiro",
    nome: "Quarto Solteiro",
    preco: "R$ 130,00",
    descricao: "Conforto e praticidade para quem viaja sozinho a trabalho ou lazer.",
    imagem: "/images/WhatsApp Image 2026-02-02 at 16.26.13 (4).jpeg",
    icones: ["wifi", "ar", "banheiro"],
    ideal: ["Viajantes a negócios", "Estadias curtas", "Executivos"],
  },
  {
    id: "casal",
    nome: "Quarto para Casal",
    preco: "R$ 170,00",
    descricao: "Ambiente romântico e aconchegante, perfeito para casais.",
    imagem: "/images/WhatsApp Image 2026-02-02 at 16.26.13 (5).jpeg",
    icones: ["wifi", "ar", "banheiro"],
    ideal: ["Casais", "Lua de mel", "Fim de semana romântico"],
  },
  {
    id: "casal-solteiro",
    nome: "Quarto Casal + Solteiro",
    preco: "R$ 220,00",
    descricao: "Espaço amplo para famílias ou pequenos grupos de amigos.",
    imagem: "/images/WhatsApp Image 2026-02-02 at 16.26.13 (3).jpeg",
    icones: ["wifi", "ar", "banheiro"],
    ideal: ["Famílias", "Grupos de amigos", "Estadias prolongadas"],
  },
];

const beneficios = [
  { icon: Wind, text: "Quartos climatizados" },
  { icon: BedDouble, text: "Camas confortáveis" },
  { icon: Wifi, text: "Wi-Fi gratuito" },
  { icon: Bath, text: "Banheiro privativo" },
  { icon: Heart, text: "Ambiente acolhedor" },
];

export function Acomodacoes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "wifi":
        return <Wifi className="w-4 h-4" />;
      case "ar":
        return <Wind className="w-4 h-4" />;
      case "banheiro":
        return <Bath className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <section id="acomodacoes" className="py-20 lg:py-28 bg-[#F7F8FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <motion.span 
            className="text-[#D4AF37] font-medium text-sm tracking-wide uppercase inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Hospedagem
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3B] font-serif mt-3">
            Nossas Acomodações
          </h2>
          <p className="text-[#6B7280] text-lg mt-4 max-w-2xl mx-auto">
            Quartos confortáveis e completos para sua melhor experiência em Serra Pelada
          </p>
        </FadeIn>

        {/* Benefits */}
        <StaggerContainer className="flex flex-wrap justify-center gap-6 mb-16">
          {beneficios.map((beneficio) => (
            <StaggerItem key={beneficio.text}>
              <motion.div 
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <beneficio.icon className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[#111827] text-sm font-medium">{beneficio.text}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Room Cards */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {acomodacoes.map((room) => (
            <StaggerItem key={room.id}>
              <motion.div
                className="bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                onHoverStart={() => setHoveredCard(room.id)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Image with Hover Effect */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    animate={{ scale: hoveredCard === room.id ? 1.1 : 1 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Image
                      src={room.imagem}
                      alt={room.nome}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>
                  
                  {/* Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/90 via-[#0B1F3B]/40 to-transparent flex items-end justify-center pb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === room.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: hoveredCard === room.id ? 0 : 20, opacity: hoveredCard === room.id ? 1 : 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="flex items-center gap-2 text-white"
                    >
                      <Maximize2 className="w-5 h-5" />
                      <span className="text-sm font-medium">Ver detalhes</span>
                    </motion.div>
                  </motion.div>

                  {/* Price Badge */}
                  <motion.div 
                    className="absolute top-4 right-4 bg-[#D4AF37] text-[#0B1F3B] font-bold px-3 py-1.5 rounded-full text-sm shadow-lg"
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 500, delay: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {room.preco}
                    <span className="text-xs font-normal">/noite</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0B1F3B] font-serif mb-2">
                    {room.nome}
                  </h3>
                  <p className="text-[#6B7280] text-sm mb-4">{room.descricao}</p>

                  {/* Icons */}
                  <div className="flex gap-3 mb-4">
                    {room.icones.map((icon, idx) => (
                      <motion.div
                        key={icon}
                        className="w-8 h-8 bg-[#0B1F3B]/5 rounded-lg flex items-center justify-center text-[#0B1F3B]"
                        title={icon}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 + idx * 0.1, type: "spring" }}
                        whileHover={{ scale: 1.2, backgroundColor: "#D4AF37", color: "#0B1F3B" }}
                      >
                        {getIcon(icon)}
                      </motion.div>
                    ))}
                  </div>

                  {/* Ideal for */}
                  <div className="mb-6">
                    <p className="text-xs text-[#6B7280] mb-2">Ideal para:</p>
                    <div className="flex flex-wrap gap-2">
                      {room.ideal.map((item, idx) => (
                        <motion.span
                          key={item}
                          className="text-xs bg-[#F7F8FA] text-[#0B1F3B] px-2 py-1 rounded"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-[#0B1F3B] text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 overflow-hidden relative"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-[#D4AF37]"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 group-hover:text-[#0B1F3B] transition-colors">
                      Consultar disponibilidade
                    </span>
                    <ChevronRight className="w-4 h-4 relative z-10 group-hover:text-[#0B1F3B] transition-colors" />
                  </motion.button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <AvailabilityModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
