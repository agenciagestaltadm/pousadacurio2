"use client";

import Image from "next/image";
import { Phone, MapPin, Instagram, Facebook } from "lucide-react";

// Apoiadores com logos - na ordem correta da imagem: Global Gateway, AL-INVEST, UE, SEBRAE
const apoiadores = [
  { nome: "Global Gateway", logo: "/images/gg-logo.png", width: 100, height: 50 },
  { nome: "AL-INVEST Verde", logo: "/images/al-invest.png", width: 140, height: 70 },
  { nome: "União Europeia", logo: "/images/ue-portuvertical.jpg", width: 100, height: 50 },
  { nome: "SEBRAE", logo: "/images/sebrae.png", width: 100, height: 50 },
];

// Duplicamos os apoiadores para criar o efeito de loop infinito no mobile
const apoiadoresDuplicados = [...apoiadores, ...apoiadores];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1F3B] text-white">
      {/* Sponsors Section - Carrossel no Mobile, Fixo no Desktop */}
      <div className="bg-white border-b border-gray-200">
        <div className="py-6">
          {/* Mobile: Carrossel infinito */}
          <div className="md:hidden overflow-hidden">
            <div className="flex animate-scroll">
              {apoiadoresDuplicados.map((apoiador, index) => (
                <div
                  key={`mobile-${apoiador.nome}-${index}`}
                  className="bg-white rounded-lg p-3 mx-2 flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0"
                >
                  {apoiador.logo ? (
                    <Image
                      src={apoiador.logo}
                      alt={apoiador.nome}
                      width={apoiador.width || 80}
                      height={apoiador.height || 40}
                      className="max-h-12 w-auto object-contain"
                    />
                  ) : (
                    <span className="text-gray-600 text-sm font-medium text-center">
                      {apoiador.nome}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Fixo em fila horizontal */}
          <div className="hidden md:flex justify-center items-center gap-8 max-w-7xl mx-auto px-4">
            {apoiadores.map((apoiador) => (
              <div
                key={apoiador.nome}
                className="bg-white rounded-lg p-4 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                {apoiador.logo ? (
                  <Image
                    src={apoiador.logo}
                    alt={apoiador.nome}
                    width={apoiador.width || 100}
                    height={apoiador.height || 50}
                    className="max-h-16 w-auto object-contain"
                  />
                ) : (
                  <span className="text-gray-600 text-sm font-medium text-center">
                    {apoiador.nome}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="Pousada Curió"
              width={150}
              height={75}
              className="h-16 w-auto object-contain mb-6"
            />
            <p className="text-white/70 leading-relaxed max-w-md">
              Onde a história de Serra Pelada encontra conforto, lazer e hospitalidade. 
              Uma experiência única na região que marcou o Brasil.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0B1F3B] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0B1F3B] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-white/70 hover:text-[#D4AF37] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#acomodacoes" className="text-white/70 hover:text-[#D4AF37] transition-colors">
                  Acomodações
                </a>
              </li>
              <li>
                <a href="#estrutura" className="text-white/70 hover:text-[#D4AF37] transition-colors">
                  Estrutura
                </a>
              </li>
              <li>
                <a href="#historia" className="text-white/70 hover:text-[#D4AF37] transition-colors">
                  História
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/70 hover:text-[#D4AF37] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-white/70">(94) 98122-9706</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-white/70">
                  Serra Pelada<br />
                  Curionópolis/PA
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {currentYear} Pousada Curió. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-white/70 text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/50 hover:text-white/70 text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
