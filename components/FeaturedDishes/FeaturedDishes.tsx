import Image from "next/image";
import Link from "next/link";
import styles from "./FeaturedDishes.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const FEATURED = [
  {
    id: 1,
    name: "Bœuf bouilli pimenté",
    description: "Bœuf fondant dans un bouillon relevé aux piments et épices.",
    price: "15,00 € / 18,80 €",
    tag: "Signature",
    image: "/menu/Boeuf-bouillie-pimentee.webp",
  },
  {
    id: 2,
    name: "Poulet Gong Bao",
    description: "Poulet sauté aux cacahuètes, piments secs et légumes, sauce légèrement sucrée.",
    price: "12,50 €",
    tag: "Populaire",
    image: "/menu/Gongbao-poulet.webp",
  },
  {
    id: 3,
    name: "Bento saumon",
    description: "Formule bento : saumon grillé, riz et légumes de saison.",
    price: "14,50 €",
    tag: "Maison",
    image: "/menu/Bento-saumon.webp",
  },
  {
    id: 4,
    name: "Mapo tofu",
    description: "Tofu soyeux en sauce au piment du Sichuan, porc haché et poivre de Sichuan.",
    price: "10,00 €",
    tag: "Épicé",
    image: "/menu/Mapo-dofu.webp",
  },
];

export default function FeaturedDishes() {
  return (
    <section className={styles.section}>
      {/* Background accent */}
      <div className={styles.bgAccent} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.header}>
          <SectionTitle
            eyebrow="À la carte"
            title={"Nos plats\nincontournables"}
            subtitle="Une sélection de nos meilleures préparations, élaborées chaque jour avec des produits frais."
          />
          <Link href="/menu" className={styles.viewAll}>
            Voir toute la carte <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Asymmetric dish grid */}
        <div className={styles.grid}>
          {FEATURED.map((dish, i) => (
            <article
              key={dish.id}
              className={`${styles.card} ${i === 0 ? styles.cardLarge : ""}`}
            >
              <div className={styles.cardImageWrap}>
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className={styles.cardImageOverlay} />
                {dish.tag && (
                  <span className={styles.cardTag}>{dish.tag}</span>
                )}
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardName}>{dish.name}</h3>
                  <span className={styles.cardPrice}>{dish.price}</span>
                </div>
                <p className={styles.cardDesc}>{dish.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
