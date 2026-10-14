import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leyla de la Peña | Autoexploración, meditación y experiencias",
  description: "Espacios de autoexploración para mujeres a través del cuerpo, la respiración, la meditación, la filosofía, el sonido, la creatividad y la experiencia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
