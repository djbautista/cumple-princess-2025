import { Metadata } from "next";

export const metadata: Metadata = {
  title: "¡Nos vamos al Parque de Atracciones!",
  description: "Una sorpresa especial te espera al final del juego.",
  openGraph: {
    title: "¡Nos vamos al Parque de Atracciones!",
    description: "Una sorpresa especial te espera al final del juego.",
    images: ["/og.png"]
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
