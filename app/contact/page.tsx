import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Réservations",
  description:
    "Réservez votre table au Bol de riz, restaurant chinois à Orléans. Formulaire de réservation en ligne, horaires, adresse et contact.",
};

export default function ContactPage() {
  return <ContactClient />;
}
