import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import ContactPreview from "@/components/ContactPreview/ContactPreview";
import { LeafIcon, BookIcon, FlameIcon, UsersIcon } from "@/components/Icons/Icons";

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "Découvrez l'histoire de Bol de riz, fondé en 1998 par la famille Chen. Une cuisine chinoise authentique, généreuse et sincère au cœur d'Orléans.",
};

const VALUES: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <LeafIcon size={26} />,
    title: "Produits frais",
    description:
      "Chaque matin, notre équipe sélectionne les meilleurs ingrédients au marché du Marais. Légumes de saison, protéines fraîches, herbes aromatiques.",
  },
  {
    icon: <BookIcon size={26} />,
    title: "Recettes transmises",
    description:
      "Nos recettes sont héritées des grands-parents de la famille Chen, du Sichuan et de Canton. Certaines n'ont pas changé depuis 40 ans.",
  },
  {
    icon: <FlameIcon size={26} />,
    title: "Sauces maison",
    description:
      "Nos bouillons mijotent 8 heures. Nos sauces sont préparées quotidiennement. Aucun compromis sur la qualité, même en plein service.",
  },
  {
    icon: <UsersIcon size={26} />,
    title: "Accueil chaleureux",
    description:
      "Le restaurant est un lieu de partage. Nous accueillons chaque client comme un invité, avec soin et sincérité.",
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Hero section */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <Image
            src="/photo-resto-outside-streer.webp"
            alt=""
            fill
            className={styles.heroBgImg}
            priority
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroGradient} />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>Notre histoire</div>
          <h1 className={styles.heroTitle}>
            Bol<br />
            <span className={styles.heroTitleRed}>de riz</span>
          </h1>
            <p className={styles.heroSubtitle}>
              Fondé en 1998 par la famille Chen, au cœur d'Orléans
            </p>
        </div>
      </section>

      {/* Story section */}
      <section className={styles.storySection}>
        <div className={styles.storySectionInner}>
          <div className={styles.storyLayout}>
            {/* Left text */}
            <div className={styles.storyText}>
              <SectionTitle
                eyebrow="Nos origines"
                title={"Une histoire\nde famille"}
              />
              <div className={styles.storyBody}>
                <p>
                  En 1998, Chen Wei, cuisinier originaire de Chengdu, et son épouse Li Hua quittent le Sichuan pour s&apos;installer à Orléans. Ils rêvent d&apos;un lieu où la cuisine de leur région serait présentée avec authenticité et générosité — loin des versions édulcorées que l&apos;on trouvait alors.
                </p>
                <p>
                  Bol de riz ouvre ses portes au 46 Rue Jeanne d'Arc avec seulement 24 couverts. Dès les premières semaines, le bouche-à-oreille fait son effet. Les habitués reviennent, et les nouvelles tables font vite salle comble chaque soir.
                </p>
                <p>
                  Aujourd&apos;hui, c&apos;est leur fils Chen Mingzhi, formé entre Orléans et Hong Kong, qui dirige les cuisines. Il perpétue les recettes familiales tout en apportant sa sensibilité contemporaine à certaines préparations.
                </p>
              </div>
            </div>

            {/* Right image composition */}
            <div className={styles.storyImages} aria-hidden="true">
              <div className={styles.storyImg1}>
                <Image
                  src="https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=85"
                  alt="Table dressée chez Bol de riz"
                  fill
                  className={styles.imgFill}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
              <div className={styles.storyImg2}>
                <Image
                  src="https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=85"
                  alt="Dim sum maison"
                  fill
                  className={styles.imgFill}
                  sizes="220px"
                />
              </div>
              <div className={styles.storyYearBadge}>
                <span className={styles.storyYear}>À partir de 1998</span>
                <span className={styles.storyYearSub}>Savoir-faire familial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / approach */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesSectionInner}>
          <div className={styles.valuesHeader}>
            <SectionTitle
              eyebrow="Notre philosophie"
              title={"Ce qui nous\nguide chaque jour"}
              align="center"
            />
          </div>
          <div className={styles.valuesGrid}>
            {VALUES.map((value, i) => (
              <div
                key={value.title}
                className={`${styles.valueCard} ${i % 2 !== 0 ? styles.valueCardOffset : ""}`}
              >
                <span className={styles.valueIcon}>{value.icon}</span>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDesc}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact preview */}
      <ContactPreview />
    </div>
  );
}
