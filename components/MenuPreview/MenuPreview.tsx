import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./MenuPreview.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import {
  BowlIcon,
  SparkleIcon,
  NoodleIcon,
  DiamondIcon,
} from "@/components/Icons/Icons";

const PREVIEW_CATEGORIES: {
  name: string;
  icon: ReactNode;
  description: string;
  image: string;
  count: number;
}[] = [
  {
    name: "Entrées",
    icon: <BowlIcon size={20} />,
    description: "Aubergines sautées au wok, aromates et sauce soja",
    image: "/main-fisrt-plate.png",
    count: 1,
  },
  {
    name: "Plats",
    icon: <SparkleIcon size={20} />,
    description: "Gong Bao, bento, mapo tofu, bœuf pimenté…",
    image: "/main-plate.jpeg",
    count: 8,
  },
  {
    name: "Accompagnements",
    icon: <NoodleIcon size={20} />,
    description: "Riz cantonais, nouilles sautées aux légumes",
    image: "/main-accompagnements.jpeg",
    count: 2,
  },
  {
    name: "Desserts",
    icon: <DiamondIcon size={20} />,
    description: "Litchi au sirop, perle de coco, mochis glacés",
    image: "/main-desert.jpeg",
    count: 4,
  },
];

export default function MenuPreview() {
  return (
    <section className={styles.section}>
      {/* Decorative block */}
      <div className={styles.decorBlock} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.titleRow}>
          <SectionTitle
            eyebrow="Notre carte"
            title={"Découvrez\nnos saveurs"}
            subtitle="Une carte d'environ 15 plats, préparés avec des produits soigneusement sélectionnés."
          />
          <Link href="/menu" className={styles.ctaLink}>
            <span>Voir la carte complète</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        <div className={styles.grid}>
          {PREVIEW_CATEGORIES.map((cat, i) => (
            <Link
              key={cat.name}
              href={`/menu#${cat.name.toLowerCase()}`}
              className={`${styles.card} ${i % 2 !== 0 ? styles.cardOffset : ""}`}
            >
              <div className={styles.cardImageWrap}>
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 280px"
                />
                <div className={styles.cardOverlay} />
                <span className={styles.cardIcon} aria-hidden="true">
                  {cat.icon}
                </span>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardName}>{cat.name}</h3>
                  <span className={styles.cardCount}>{cat.count} plats</span>
                </div>
                <p className={styles.cardDesc}>{cat.description}</p>
                <span className={styles.cardArrow} aria-hidden="true">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
