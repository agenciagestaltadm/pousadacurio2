"use client";

import Image from "next/image";
import { Phone, MapPin, Instagram, Facebook } from "lucide-react";

// Apoiadores com logos - na ordem correta da imagem: Global Gateway, AL-INVEST, UE, SEBRAE
const apoiadores = [
  { nome: "Global Gateway", logo: "/images/gg-logo.png" },
  { nome: "AL-INVEST Verde", logo: "/images/al-invest.png" },
  { nome: "União Europeia", logo: "/images/ue-portuvertical.jpg" },
  { nome: "SEBRAE", logo: "/images/sebrae.png" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1F3B] text-white">
      {/* Sponsors Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-white/50 text-sm uppercase tracking-wide mb-8">
            Apoiadores
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {apoiadores.map((apoiador) => (
              <div
                key={apoiador.nome}
                className="bg-white rounded-xl p-6 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                {apoiador.logo ? (
                  <Image
                    src={apoiador.logo}
                    alt={apoiador.nome}
                    width={120}
                    height={60}
                    className="max-h-16 w-auto object-contain"
                  />
                ) : (
                  <span className="text-white/60 text-sm font-medium text-center">
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
