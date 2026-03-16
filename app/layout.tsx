import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Bol de riz",
    default: "Bol de riz — Cuisine Chinoise Authentique à Orléans",
  },
  description:
    "Restaurant de cuisine chinoise authentique au cœur d'Orléans. Saveurs du Sichuan et de Canton, produits frais, ambiance chaleureuse.",
  keywords: ["restaurant chinois", "Orléans", "Sichuan", "Canton", "dim sum", "cuisine authentique"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
