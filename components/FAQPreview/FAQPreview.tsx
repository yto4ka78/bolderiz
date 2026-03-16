import Link from "next/link";
import styles from "./FAQPreview.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { FAQ_ITEMS } from "@/lib/mockData";

export default function FAQPreview() {
  const previewItems = FAQ_ITEMS.slice(0, 4);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left column: title */}
          <div className={styles.titleCol}>
            <SectionTitle
              eyebrow="Foire aux questions"
              title={"Questions\nfréquentes"}
            />
            <p className={styles.intro}>
              Retrouvez ici les réponses aux questions les plus posées par nos clients. Pour toute autre demande, n&apos;hésitez pas à nous contacter.
            </p>
            <Link href="/faq" className={styles.ctaLink}>
              Toutes les questions <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Right column: FAQ items */}
          <div className={styles.faqCol}>
            {previewItems.map((item, i) => (
              <div
                key={item.id}
                className={styles.faqItem}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={styles.itemIndex} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className={styles.itemContent}>
                  <h3 className={styles.itemQ}>{item.question}</h3>
                  <p className={styles.itemA}>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
