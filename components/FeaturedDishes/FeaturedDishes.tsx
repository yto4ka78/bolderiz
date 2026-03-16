import Image from "next/image";
import Link from "next/link";
import styles from "./FeaturedDishes.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const FEATURED = [
  {
    id: 1,
    name: "Bœuf bouilli au piment et poivre",
    description: "Tranches de bœuf fondantes dans un bouillon épicé, piment et poivre du Sichuan.",
    price: "15,00 € / 18,80 €",
    tag: "Signature",
    image: "/plates/boeuf-bouilli-au-piment-et-poivre.jpeg",
  },
  {
    id: 2,
    name: "Canard laqué",
    description: "Canard rôti à la peau caramélisée et dorée, servi avec sa sauce maison.",
    price: "16,80 €",
    tag: "Populaire",
    image: "/plates/canard-laque.jpeg",
  },
  {
    id: 3,
    name: "Nems au poulet (4 pièces)",
    description: "Rouleaux croustillants au poulet, légumes et vermicelles, frits à la minute.",
    price: "5,00 €",
    tag: "Maison",
    image: "/first/nems-au-poulet.jpeg",
  },
  {
    id: 4,
    name: "Mapo tofu",
    description: "Tofu soyeux en sauce au piment du Sichuan, porc haché et poivre de Sichuan.",
    price: "10,00 €",
    tag: "Épicé",
    image: "/plates/mapo-tofu.jpeg",
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
