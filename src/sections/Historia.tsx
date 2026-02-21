"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Landmark, Quote } from "lucide-react";
import { FadeIn } from "@/components/animations";

export function Historia() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      id="historia" 
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#F7F8FA] relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D4AF37]/5 to-transparent" />
      
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#0B1F3B]/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div style={{ y: textY, opacity }}>
            <FadeIn>
              <div className="flex items-center gap-2 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Landmark className="w-5 h-5 text-[#D4AF37]" />
                </motion.div>
                <span className="text-[#D4AF37] font-medium text-sm tracking-wide uppercase">
                  Nossa História
                </span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3B] font-serif mb-6">
                Um lugar que carrega história
              </h2>
            </FadeIn>
            
            <motion.div 
              className="space-y-4 text-[#6B7280] leading-relaxed"
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
                A Pousada Curió está localizada no coração de Serra Pelada, uma das regiões 
                mais emblemáticas da história do Brasil. Nossa estrutura ocupa a antiga 
                residência do Coronel Curió, figura histórica que marcou época durante o 
                famoso garimpo que atraiu milhares de pessoas de todo o país na década de 1980.
              </motion.p>
              
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                Ao hospedar-se conosco, você não apenas desfruta de conforto e lazer, mas 
                também vivencia um pedaço vivo da história brasileira. Cada canto da pousada 
                preserva a memória de uma época que transformou a região e o país.
              </motion.p>
              
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                Serra Pelada foi palco do maior garimpo a céu aberto do mundo, movimentando 
                mais de 100 mil pessoas em seu auge. Aqui, sonhos foram construídos, histórias 
                de superação foram escritas e a cultura de uma região foi forjada.
              </motion.p>
              
              <motion.p 
                className="text-[#0B1F3B] font-medium"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                Hoje, convidamos você a fazer parte dessa história. Venha conhecer Serra 
                Pelada e hospedar-se em um local que preserva e honra essa rica herança cultural.
              </motion.p>
            </motion.div>

            {/* Quote */}
            <FadeIn delay={0.6}>
              <motion.div 
                className="mt-8 bg-[#0B1F3B] p-6 rounded-2xl relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute -top-4 -left-4 w-20 h-20 bg-[#D4AF37]/20 rounded-full blur-xl"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <Quote className="absolute top-4 left-4 w-8 h-8 text-[#D4AF37]/30" />
                <p className="text-white/90 italic pl-8 relative z-10">
                  "Hospedar-se na Pousada Curió é mais que uma estadia, é uma imersão na 
                  história de uma das regiões mais fascinantes do Brasil."
                </p>
              </motion.div>
            </FadeIn>
          </motion.div>

          {/* Right - Visual with Parallax */}
          <motion.div 
            className="relative"
            style={{ y: imageY }}
          >
            <FadeIn direction="right" delay={0.2}>
              <motion.div 
                className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/images/historia-curió.png"
                  alt="História da Pousada Curió"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Overlay on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/80 via-transparent to-transparent"
                  initial={{ opacity: 0.3 }}
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </FadeIn>
            
            {/* Floating card */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <motion.div 
                className="text-4xl font-bold text-[#D4AF37] font-serif"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
              >
                1980
              </motion.div>
              <p className="text-[#6B7280] text-sm mt-1">
                Ano do início do garimpo de Serra Pelada
              </p>
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#D4AF37]/30 rounded-xl"
              initial={{ opacity: 0, rotate: -20 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              animate={{ rotate: [0, 5, 0] }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
