import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { MENU_ITEMS } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Notre Carte",
  description:
    "Découvrez la carte de Bol de riz à Orléans : nems, canard laqué, bœuf au piment, mapo tofu, mochi et bien plus. Cuisine chinoise authentique et généreuse.",
};

const CATEGORIES = ["Entrées", "Plats", "Accompagnements", "Desserts", "Vins", "Boissons"];

export default function MenuPage() {
  return (
    <div className={styles.page}>
      {/* Page hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=2000&q=80"
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
          <span className={styles.heroEyebrow}>Restaurant Bol de riz</span>
          <h1 className={styles.heroTitle}>Notre carte</h1>
          <p className={styles.heroSubtitle}>
            Entrées, plats, accompagnements et desserts préparés chaque jour<br />
            à partir d&apos;ingrédients frais.
          </p>
        </div>
        {/* Decorative angled bottom edge */}
        <div className={styles.heroAngle} aria-hidden="true" />
      </section>

      {/* Category navigation */}
      <nav className={styles.catNav} aria-label="Catégories du menu">
        <div className={styles.catNavInner}>
          {CATEGORIES.map((cat) => (
            <a key={cat} href={`#${cat.toLowerCase()}`} className={styles.catNavLink}>
              {cat}
            </a>
          ))}
        </div>
      </nav>

      {/* Menu sections */}
      <div className={styles.menuContent}>
        {CATEGORIES.map((category, catIndex) => {
          const items = MENU_ITEMS.filter((item) => item.category === category);
          if (!items.length) return null;

          const isListCategory = category === "Boissons" || category === "Vins";

          return (
            <section
              key={category}
              id={category.toLowerCase()}
              className={`${styles.categorySection} ${catIndex % 2 !== 0 ? styles.categorySectionAlt : ""}`}
            >
              <div className={styles.categorySectionInner}>
                {/* Decorative offset title block */}
                <div className={styles.categoryTitleBlock}>
                  <SectionTitle
                    eyebrow={
                      isListCategory
                        ? `${items.length} ${category.toLowerCase()}`
                        : `${items.length} plats`
                    }
                    title={category}
                  />
                </div>

                {isListCategory ? (
                  /* Drinks list — optional thumbnails for items with images */
                  <ul className={styles.drinksList} role="list">
                    {items.map((item) => (
                      <li key={item.id} className={styles.drinkRow}>
                        {item.image && (
                          <div className={styles.drinkThumb}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className={styles.drinkThumbImg}
                              sizes="72px"
                            />
                          </div>
                        )}
                        <div className={styles.drinkLeft}>
                          <span className={styles.drinkName}>{item.name}</span>
                          <span className={styles.drinkDesc}>{item.description}</span>
                        </div>
                        <span className={styles.drinkDots} aria-hidden="true" />
                        <span className={styles.drinkPrice}>{item.price}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  /* Regular card grid */
                  <div className={styles.itemsGrid}>
                    {items.map((item) => (
                      <article key={item.id} className={styles.menuCard}>
                        {item.image && (
                          <div className={styles.menuCardImage}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className={styles.menuCardImg}
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className={styles.menuCardImgOverlay} />
                            {item.tag && (
                              <span className={styles.menuCardTag}>{item.tag}</span>
                            )}
                          </div>
                        )}
                        <div className={styles.menuCardBody}>
                          <div className={styles.menuCardTop}>
                            <h3 className={styles.menuCardName}>{item.name}</h3>
                            <span className={styles.menuCardPrice}>{item.price}</span>
                          </div>
                          <p className={styles.menuCardDesc}>{item.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom note */}
      <div className={styles.menuNote}>
        <div className={styles.menuNoteInner}>
          <p>
            Tous nos plats peuvent être adaptés selon vos préférences alimentaires. Pour les allergènes et les régimes spéciaux, veuillez consulter notre équipe.
          </p>
        </div>
      </div>
    </div>
  );
}
