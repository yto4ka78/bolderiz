import Image from "next/image";
import Link from "next/link";
import styles from "./FeaturedDishes.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const FEATURED = [
  {
    id: 1,
    name: "Bœuf bouilli au piment et poivre",
    description: "Bœuf mijoté tendre, sauce pimentée et poivre du Sichuan",
    price: "15,50 €",
    tag: "Signature",
    image: "/menu/boeuf-bouilli-au-piment-et-poivre.png",
  },
  {
    id: 2,
    name: "Raviolis vapeur maison",
    description: "Dumplings farcis au porc et ciboulette, sauce soja-gingembre",
    price: "9,50 €",
    tag: "Maison",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 3,
    name: "Tofu mapo du Sichuan",
    description: "Tofu soyeux, bœuf haché, bouillon pimenté et poivre du Sichuan",
    price: "14,50 €",
    tag: "Épicé",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 4,
    name: "Nouilles sautées au bœuf",
    description: "Nouilles fraîches au wok, bœuf mariné, sauce soja et huile de sésame",
    price: "14,50 €",
    tag: "Populaire",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=85",
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
