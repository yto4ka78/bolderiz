import Image from "next/image";
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
                src="/photo-resto-inside.webp"
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
                src="/kit-chines-food.webp"
                alt="Cuisine au wok"
                fill
                className={styles.imgFill}
                sizes="200px"
              />
            </div>
            {/* Floating accent card */}
            <div className={styles.accentCard}>
              <span className={styles.accentYear}>À partir de 1998</span>
              <span className={styles.accentLabel}>Savoir-faire familial</span>
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
                En 1998, Chen Wei, cuisinier originaire de Chengdu, et son
                épouse Li Hua quittent le Sichuan pour s&apos;installer à
                Orléans. Ils rêvent d&apos;un lieu où la cuisine de leur région
                serait présentée avec authenticité et générosité — loin des
                versions édulcorées que l&apos;on trouvait alors.
              </p>
              <p>
                Bol de riz ouvre ses portes au 46 Rue Jeanne d&apos;Arc avec
                seulement 24 couverts. Dès les premières semaines, le
                bouche-à-oreille fait son effet. Les habitués reviennent, et les
                nouvelles tables font vite salle comble chaque soir.
              </p>
              <p>
                Aujourd&apos;hui, c&apos;est leur fils Chen Mingzhi, formé entre
                Orléans et Hong Kong, qui dirige les cuisines. Il perpétue les
                recettes familiales tout en apportant sa sensibilité
                contemporaine à certaines préparations.
              </p>
            </div>

            <div className={styles.statsRow}>
              {[
                { value: "25+", label: "Ans d'expérience en cuisine" },
                { value: "15+", label: "Plats à la carte" },
                { value: "★ 4.6", label: "Note moyenne" },
              ].map((stat) => (
                <div key={stat.label} className={styles.statItem}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
