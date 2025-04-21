import { Metadata } from "next";

export const metadata: Metadata = {
  title: "¡Nos vamos al Parque de Atracciones!",
  description: "Vamos a compartir un día increíble para celebrar el cumpleaños de Andrea.",
  openGraph: {
    title: "¡Nos vamos al Parque de Atracciones!",
    description: "Vamos a compartir un día increíble para celebrar el cumpleaños de Andrea.",
    images: ["/og.png"]
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
