"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { formatWhatsAppMessage, openWhatsApp } from "@/lib/utils";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

export function Contato() {
  const handleWhatsAppClick = () => {
    const message = formatWhatsAppMessage({
      checkIn: "",
      checkOut: "",
      roomType: "Quarto (a definir)",
    });
    openWhatsApp(message);
  };

  const contactItems = [
    { icon: Phone, label: "Telefone / WhatsApp", value: "(94) 98122-9706" },
    { icon: MapPin, label: "Localização", value: "Serra Pelada – Curionópolis/PA" },
    { icon: Clock, label: "Atendimento", value: "Todos os dias, 24 horas" },
  ];

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#F7F8FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-[#D4AF37] font-medium text-sm tracking-wide uppercase">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3B] font-serif mt-3">
            Entre em contato
          </h2>
          <p className="text-[#6B7280] text-lg mt-4 max-w-2xl mx-auto">
            Estamos prontos para atender você e tornar sua estadia inesquecível
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <FadeIn direction="left">
            <div className="space-y-8">
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-bold text-[#0B1F3B] font-serif mb-6">
                  Informações de Contato
                </h3>

                <StaggerContainer className="space-y-6" staggerDelay={0.1}>
                  {contactItems.map((item) => (
                    <StaggerItem key={item.label}>
                      <motion.div 
                        className="flex items-start gap-4"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <motion.div 
                          className="w-12 h-12 bg-[#0B1F3B]/5 rounded-xl flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.1, backgroundColor: "#D4AF37" }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <item.icon className="w-5 h-5 text-[#D4AF37] group-hover:text-white" />
                        </motion.div>
                        <div>
                          <p className="font-medium text-[#0B1F3B]">{item.label}</p>
                          <p className="text-[#6B7280]">{item.value}</p>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                {/* WhatsApp CTA */}
                <motion.button
                  onClick={handleWhatsAppClick}
                  className="w-full mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <MessageCircle className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Fale pelo WhatsApp</span>
                </motion.button>
              </motion.div>

              {/* Quick Response Promise */}
              <motion.div 
                className="bg-[#0B1F3B] rounded-2xl p-6 text-white relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="flex items-center gap-3 mb-3 relative z-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Clock className="w-6 h-6 text-[#D4AF37]" />
                  </motion.div>
                  <h4 className="font-bold text-lg">Resposta Rápida</h4>
                </div>
                <p className="text-white/80 text-sm relative z-10">
                  Respondemos todas as mensagens em até 30 minutos durante o horário 
                  comercial. Fora desse horário, responderemos assim que possível.
                </p>
              </motion.div>
            </div>
          </FadeIn>

          {/* Map Placeholder */}
          <FadeIn direction="right">
            <motion.div 
              className="bg-white rounded-2xl shadow-lg overflow-hidden h-full min-h-[400px]"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="h-full min-h-[400px] bg-gradient-to-br from-[#0B1F3B]/5 to-[#123A73]/5 flex items-center justify-center relative overflow-hidden">
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: "radial-gradient(circle at 30% 30%, #D4AF37 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                  }}
                  animate={{
                    backgroundPosition: ["0px 0px", "40px 40px"]
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="text-center p-8 relative z-10">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MapPin className="w-16 h-16 text-[#D4AF37]/50 mx-auto mb-4" />
                  </motion.div>
                  <p className="text-[#0B1F3B] font-medium">Mapa da Localização</p>
                  <p className="text-[#6B7280] text-sm mt-2">
                    Serra Pelada - Curionópolis/PA
                  </p>
                  <motion.a
                    href="https://maps.google.com/?q=Serra+Pelada,Curionópolis,PA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-[#D4AF37] hover:text-[#B88A1E] font-medium text-sm"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    Ver no Google Maps →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
