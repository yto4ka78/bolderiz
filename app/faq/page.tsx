import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Toutes vos questions sur Bol de riz : réservations, allergènes, horaires, menus de groupe, accès.",
};

export default function FAQPage() {
  return <FAQClient />;
}
