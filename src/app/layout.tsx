import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pousada Curió em Serra Pelada | Conforto, Lazer e História",
  description: "Hospede-se na história de Serra Pelada com conforto, lazer e exclusividade. Pousada Curió em Curionópolis/PA. Reserve pelo WhatsApp (94) 98122-9706.",
  keywords: ["pousada", "Serra Pelada", "Curionópolis", "Pará", "hospedagem", "turismo", "Curió"],
  authors: [{ name: "Pousada Curió" }],
  openGraph: {
    title: "Pousada Curió - Serra Pelada",
    description: "Hospede-se na história de Serra Pelada com conforto, lazer e exclusividade.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
