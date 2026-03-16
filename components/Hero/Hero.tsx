import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";
import { RESTAURANT } from "@/lib/mockData";
import HoursDisplay from "@/components/HoursDisplay/HoursDisplay";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Section d'accueil">
      {/* Background image layer */}
      <div className={styles.bgLayer} aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=2000&q=85"
          alt=""
          fill
          priority
          quality={90}
          className={styles.bgImage}
          sizes="100vw"
        />
        <div className={styles.bgOverlay} />
        <div className={styles.bgGradientLeft} />
        <div className={styles.bgGradientBottom} />
      </div>

      {/* Floating decorative vertical bar */}
      <div className={styles.verticalBar} aria-hidden="true" />

      {/* Main content grid */}
      <div className={styles.contentGrid}>
        {/* Left content block */}
        <div className={styles.contentBlock}>
          {/* Label chip */}
          <div className={styles.labelChip}>
            <span className={styles.labelDot} aria-hidden="true" />
            <span>Restaurant Chinois </span>
            <span className={styles.labelDot} aria-hidden="true" />
            <span> Orléans </span>
          </div>

          {/* Heading */}
          <h1 className={styles.heading}>
            <span className={styles.headingLine1}>Bol</span>
            <span className={styles.headingLine2}>
              de riz
              <span className={styles.headingAccent} aria-hidden="true" />
            </span>
          </h1>

          {/* Tagline */}
          <p className={styles.tagline}>{RESTAURANT.tagline}</p>
          <p className={styles.description}>
            Cuisine authentique du Sichuan et de Canton,
            <br />
            préparée chaque jour avec des produits frais.
          </p>

          {/* CTA row */}
          <div className={styles.ctaRow}>
            <Link href="/menu" className={styles.ctaPrimary}>
              Découvrir la carte
            </Link>
            <Link href="/contact" className={styles.ctaSecondary}>
              Réserver une table
            </Link>
          </div>
        </div>

        {/* Right: masked image card */}
        <div className={styles.imageCard} aria-hidden="true">
          <div className={styles.imageCardInner}>
            <Image
              src="https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=85"
              alt="Dim sum — spécialité de la maison"
              fill
              className={styles.cardImage}
              sizes="(max-width: 900px) 0px, 400px"
            />
            <div className={styles.cardOverlay} />
            <div className={styles.cardLabel}>
              <span className={styles.cardLabelText}>Dim sum maison</span>
              <span className={styles.cardLabelSub}>
                Cuit à la vapeur · Servi midi &amp; soir
              </span>
            </div>
          </div>

          {/* Floating accent panel */}
          <div className={styles.floatingPanel}>
            <span className={styles.floatingPanelScore}>
              {RESTAURANT.rating}
            </span>
            <div className={styles.floatingPanelInfo}>
              <span className={styles.floatingPanelLabel}>Note clients</span>
              <span className={styles.floatingPanelReviews}>
                {RESTAURANT.reviews} avis
              </span>
            </div>
            <div
              className={styles.stars}
              aria-label={`Note : ${RESTAURANT.rating} sur 5`}
            >
              {"★★★★★".split("").map((s, i) => (
                <span
                  key={i}
                  className={
                    i < Math.floor(RESTAURANT.rating)
                      ? styles.starFilled
                      : styles.starEmpty
                  }
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom info strip */}
      <div className={styles.bottomStrip}>
        <div className={styles.bottomStripInner}>
          <div className={styles.stripItem}>
            <span className={styles.stripLabel}>Adresse</span>
            <span className={styles.stripValue}>{RESTAURANT.address}</span>
          </div>
          <div className={styles.stripDivider} aria-hidden="true" />
          <div className={`${styles.stripItem} ${styles.stripItemHours}`}>
            <span className={styles.stripLabel}>Horaires</span>
            <HoursDisplay />
          </div>
          <div className={styles.stripDivider} aria-hidden="true" />
          <div className={styles.stripItem}>
            <span className={styles.stripLabel}>Réservations</span>
            <a href={`tel:${RESTAURANT.phone}`} className={styles.stripPhone}>
              {RESTAURANT.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
