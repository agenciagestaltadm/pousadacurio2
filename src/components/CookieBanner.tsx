"use client";

import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E5E7EB] shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#0B1F3B]/5 rounded-lg flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <p className="font-medium text-[#0B1F3B]">Uso de Cookies</p>
              <p className="text-sm text-[#6B7280] mt-1">
                Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, 
                você concorda com nossa{" "}
                <a href="#" className="text-[#D4AF37] hover:underline">
                  Política de Privacidade
                </a>
                .
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 sm:flex-none px-4 py-2 text-sm text-[#6B7280] hover:text-[#0B1F3B] transition-colors"
            >
              Recusar
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 sm:flex-none bg-[#0B1F3B] hover:bg-[#123A73] text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
