import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import FeaturedDishes from "@/components/FeaturedDishes/FeaturedDishes";
import AboutPreview from "@/components/AboutPreview/AboutPreview";
import MenuPreview from "@/components/MenuPreview/MenuPreview";
import ContactPreview from "@/components/ContactPreview/ContactPreview";

export const metadata: Metadata = {
  title: "Bol de riz — Cuisine Chinoise Authentique à Orléans",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <MenuPreview />
      <AboutPreview />
      <ContactPreview />
    </>
  );
}
