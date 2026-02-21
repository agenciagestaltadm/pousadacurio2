"use client";

import { useState } from "react";
import { X, Calendar, Users, BedDouble, ChevronDown } from "lucide-react";
import { cn, formatWhatsAppMessage, openWhatsApp } from "@/lib/utils";

interface AvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  promo?: boolean;
}

const roomTypes = [
  { value: "solteiro", label: "Solteiro - R$ 130,00/noite" },
  { value: "casal", label: "Quarto para Casal - R$ 170,00/noite" },
  { value: "casal-solteiro", label: "Casal e Solteiro - R$ 220,00/noite" },
];

export function AvailabilityModal({ isOpen, onClose, promo = false }: AvailabilityModalProps) {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    roomType: "",
    guests: "",
    name: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.checkIn) {
      newErrors.checkIn = "Selecione a data de check-in";
    }
    if (!formData.checkOut) {
      newErrors.checkOut = "Selecione a data de check-out";
    }
    if (formData.checkIn && formData.checkOut) {
      const checkIn = new Date(formData.checkIn);
      const checkOut = new Date(formData.checkOut);
      if (checkOut <= checkIn) {
        newErrors.checkOut = "Check-out deve ser após o check-in";
      }
    }
    if (!formData.roomType) {
      newErrors.roomType = "Selecione o tipo de quarto";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const roomLabel = roomTypes.find(r => r.value === formData.roomType)?.label.split(" - ")[0] || formData.roomType;
    
    const message = formatWhatsAppMessage({
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      roomType: roomLabel,
      guests: formData.guests,
      name: formData.name,
      promo,
    });

    openWhatsApp(message);
    onClose();
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#0B1F3B] px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white font-serif">
              {promo ? "Reservar com Desconto" : "Ver Disponibilidade"}
            </h3>
            <p className="text-white/70 text-sm mt-1">
              Preencha os dados para consultar
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#111827] mb-1.5">
                Check-in
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                <input
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => handleChange("checkIn", e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className={cn(
                    "w-full pl-10 pr-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-all",
                    errors.checkIn 
                      ? "border-red-500 focus:border-red-500" 
                      : "border-[#E5E7EB] focus:border-[#D4AF37]"
                  )}
                />
              </div>
              {errors.checkIn && (
                <p className="text-red-500 text-xs mt-1">{errors.checkIn}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#111827] mb-1.5">
                Check-out
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                <input
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) => handleChange("checkOut", e.target.value)}
                  min={formData.checkIn || new Date().toISOString().split("T")[0]}
                  className={cn(
                    "w-full pl-10 pr-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-all",
                    errors.checkOut 
                      ? "border-red-500 focus:border-red-500" 
                      : "border-[#E5E7EB] focus:border-[#D4AF37]"
                  )}
                />
              </div>
              {errors.checkOut && (
                <p className="text-red-500 text-xs mt-1">{errors.checkOut}</p>
              )}
            </div>
          </div>

          {/* Room Type */}
          <div>
            <label className="block text-sm font-medium text-[#111827] mb-1.5">
              Tipo de Quarto
            </label>
            <div className="relative">
              <BedDouble className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
              <select
                value={formData.roomType}
                onChange={(e) => handleChange("roomType", e.target.value)}
                className={cn(
                  "w-full pl-10 pr-10 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-all appearance-none bg-white",
                  errors.roomType 
                    ? "border-red-500 focus:border-red-500" 
                    : "border-[#E5E7EB] focus:border-[#D4AF37]"
                )}
              >
                <option value="">Selecione o quarto</option>
                {roomTypes.map((room) => (
                  <option key={room.value} value={room.value}>
                    {room.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />
            </div>
            {errors.roomType && (
              <p className="text-red-500 text-xs mt-1">{errors.roomType}</p>
            )}
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-medium text-[#111827] mb-1.5">
              Número de Hóspedes <span className="text-[#6B7280] font-normal">(opcional)</span>
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
              <input
                type="number"
                min="1"
                max="10"
                placeholder="Ex: 2"
                value={formData.guests}
                onChange={(e) => handleChange("guests", e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all"
              />
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-[#111827] mb-1.5">
              Seu Nome <span className="text-[#6B7280] font-normal">(opcional)</span>
            </label>
            <input
              type="text"
              placeholder="Como podemos te chamar?"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full px-3 py-2.5 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all"
            />
          </div>

          {/* Info */}
          <div className="bg-[#0B1F3B]/5 p-3 rounded-lg">
            <p className="text-xs text-[#6B7280]">
              <span className="font-medium text-[#0B1F3B]">Desconto:</span> Reservas com mais de 3 diárias têm descontos especiais!
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#D4AF37] hover:bg-[#B88A1E] text-[#0B1F3B] font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            Enviar no WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
