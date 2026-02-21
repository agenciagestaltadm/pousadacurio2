import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatWhatsAppMessage(data: {
  checkIn: string;
  checkOut: string;
  roomType: string;
  guests?: string;
  name?: string;
  promo?: boolean;
}): string {
  const { checkIn, checkOut, roomType, guests, name, promo } = data;
  
  let message = "Olá! Tenho interesse em reservar na Pousada Curió.";
  
  if (name) {
    message += `\n\nNome: ${name}`;
  }
  
  message += `\nCheck-in: ${checkIn}`;
  message += `\nCheck-out: ${checkOut}`;
  message += `\nQuarto: ${roomType}`;
  
  if (guests) {
    message += `\nHóspedes: ${guests}`;
  }
  
  message += "\n\nVim pelo site.";
  
  if (promo) {
    message += "\n\n[PROMO_ANTECIPADA]";
  }
  
  return encodeURIComponent(message);
}

export function openWhatsApp(message: string): void {
  const phone = "5594981229706";
  const url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
