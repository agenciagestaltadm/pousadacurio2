"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const stats = [
  { value: "+10", label: "Anos de experiência" },
  { value: "100%", label: "Hóspedes satisfeitos" },
  { value: "24h", label: "Atendimento" },
];

export function Posicionamento() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="flex items-center justify-center gap-2 mb-6">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            </motion.div>
            <span className="text-[#D4AF37] font-medium text-sm tracking-wide uppercase">
              Bem-vindo
            </span>
            <motion.div
              animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 0.5 }}
            >
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            </motion.div>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3B] font-serif mb-8">
            Uma experiência única em Serra Pelada
          </h2>
        </FadeIn>
        
        <motion.div 
          className="space-y-6 text-lg text-[#6B7280] leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 }
            }
          }}
        >
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            Localizada no coração de Serra Pelada, em Curionópolis/PA, a Pousada Curió 
            oferece muito mais que uma simples hospedagem. Aqui, você vive uma experiência 
            única que une conforto moderno à rica história da região que mudou o destino 
            do Brasil.
          </motion.p>
          
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            Nossa estrutura foi cuidadosamente planejada para proporcionar momentos de 
            descanso e lazer, seja você um turista em busca de aventuras, um empresário 
            a trabalho ou um grupo de amigos e familiares reunidos para celebrar momentos 
            especiais.
          </motion.p>
          
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            Com quartos climatizados, piscina ampla, estacionamento privativo e um 
            ambiente acolhedor, garantimos que sua estadia seja memorável. Venha descobrir 
            por que a Pousada Curió é referência em hospitalidade na região de Serra Pelada.
          </motion.p>
        </motion.div>

        <StaggerContainer className="mt-10 flex flex-wrap justify-center gap-8" staggerDelay={0.1}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div 
                  className="text-4xl font-bold text-[#D4AF37] font-serif"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-[#6B7280] text-sm mt-1">{stat.label}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
