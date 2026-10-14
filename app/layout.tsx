import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leyla de la Peña | A personal universe for self-discovery",
  description: "Un universo de autoexploración a través del cuerpo, la respiración, la meditación, la filosofía, el arte y la experiencia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
