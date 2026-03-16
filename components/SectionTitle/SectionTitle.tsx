import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionTitleProps) {
  return (
    <header
      className={`${styles.wrapper} ${styles[align]} ${light ? styles.light : ""}`}
    >
      {eyebrow && (
        <div className={styles.eyebrowRow} aria-hidden="true">
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrow}>{eyebrow}</span>
        </div>
      )}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
}
