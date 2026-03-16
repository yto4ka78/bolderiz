import Image from "next/image";
import Link from "next/link";
import styles from "./AboutPreview.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export default function AboutPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left: Image composition */}
          <div className={styles.imageComposition} aria-hidden="true">
            {/* Main image */}
            <div className={styles.mainImage}>
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=85"
                alt="Intérieur de Bol de riz"
                fill
                className={styles.imgFill}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <div className={styles.mainImageOverlay} />
            </div>
            {/* Offset secondary image */}
            <div className={styles.secondaryImage}>
              <Image
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&q=85"
                alt="Cuisine au wok"
                fill
                className={styles.imgFill}
                sizes="200px"
              />
            </div>
            {/* Floating accent card */}
            <div className={styles.accentCard}>
              <span className={styles.accentYear}>1998</span>
              <span className={styles.accentLabel}>Fondé par la famille Chen</span>
            </div>
          </div>

          {/* Right: Text block */}
          <div className={styles.textBlock}>
            <SectionTitle
              eyebrow="Notre histoire"
              title={"Une famille,\nune passion"}
              subtitle="Depuis 1998, Bol de riz perpétue la tradition de la cuisine chinoise authentique au cœur d'Orléans."
            />
            <div className={styles.body}>
              <p>
                Fondé par Chen Wei et son épouse Li Hua, notre restaurant est né d&apos;un rêve simple : partager les saveurs de leur Sichuan natal avec les habitants d&apos;Orléans. Aujourd&apos;hui dirigé par leur fils Chen Mingzhi, Bol de riz est bien plus qu&apos;un restaurant — c&apos;est un lieu de mémoire et de partage.
              </p>
              <p>
                Chaque recette est héritée de générations. Chaque sauce est préparée maison. Chaque jour, notre équipe choisit les produits au marché du Marais avec le même soin et la même exigence qu&apos;en 1998.
              </p>
            </div>

            <div className={styles.statsRow}>
              {[
                { value: "25+", label: "Années d'expérience" },
                { value: "60+", label: "Plats à la carte" },
                { value: "★ 4.6", label: "Note moyenne" },
              ].map((stat) => (
                <div key={stat.label} className={styles.statItem}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className={styles.link}>
              Découvrir notre histoire <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
