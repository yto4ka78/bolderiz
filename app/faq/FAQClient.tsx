"use client";

import { useState } from "react";
import styles from "./page.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { FAQ_ITEMS } from "@/lib/mockData";
import Link from "next/link";
import { ChatIcon } from "@/components/Icons/Icons";

export default function FAQClient() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={styles.page}>
      {/* Page header */}
      <section className={styles.header}>
        <div className={styles.headerBg} aria-hidden="true" />
        <div className={styles.headerContent}>
          <div className={styles.headerLabel}>Aide &amp; Informations</div>
          <h1 className={styles.headerTitle}>
            Questions <span className={styles.headerTitleAccent}>fréquentes</span>
          </h1>
          <p className={styles.headerSubtitle}>
            Retrouvez les réponses aux questions les plus posées par nos clients.
            Pour toute autre demande, notre équipe est disponible.
          </p>
        </div>
        <div className={styles.headerAngle} aria-hidden="true" />
      </section>

      {/* FAQ content */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          {/* Left: FAQ list */}
          <div className={styles.faqList} role="list">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`} role="listitem">
                  <button
                    className={styles.faqQuestion}
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-question-${item.id}`}
                  >
                    <span className={styles.faqIndex} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.faqQuestionText}>{item.question}</span>
                    <span
                      className={`${styles.faqChevron} ${isOpen ? styles.faqChevronOpen : ""}`}
                      aria-hidden="true"
                    >
                      ↓
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className={styles.faqAnswer}
                    style={{ maxHeight: isOpen ? "300px" : "0" }}
                  >
                    <p className={styles.faqAnswerText}>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Contact CTA */}
          <aside className={styles.faqSidebar}>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarIcon}><ChatIcon size={28} /></span>
              <h2 className={styles.sidebarTitle}>
                Une question non répondue ?
              </h2>
              <p className={styles.sidebarText}>
                Notre équipe se fera un plaisir de vous répondre dans les 24 heures ouvrées.
              </p>
              <Link href="/contact" className={styles.sidebarCta}>
                Nous contacter
              </Link>
              <div className={styles.sidebarDivider} aria-hidden="true" />
              <div className={styles.sidebarPhone}>
                <span className={styles.sidebarPhoneLabel}>Par téléphone</span>
                <a href="tel:0238438044" className={styles.sidebarPhoneNum}>
                  02 38 43 80 44
                </a>
              </div>
            </div>

            <div className={styles.sidebarHours}>
              <h3 className={styles.sidebarHoursTitle}>Nos horaires</h3>
              <div className={styles.sidebarHoursItem}>
                <span>Lundi</span>
                <span>11h30–15h00 &amp; 17h00–21h30</span>
              </div>
              <div className={styles.sidebarHoursItem}>
                <span>Mardi</span>
                <span>11h00–21h30</span>
              </div>
              <div className={styles.sidebarHoursItem}>
                <span>Mercredi</span>
                <span>11h30–21h30</span>
              </div>
              <div className={styles.sidebarHoursItem}>
                <span>Jeudi</span>
                <span>11h00–15h00 &amp; 17h00–21h30</span>
              </div>
              <div className={styles.sidebarHoursItem}>
                <span>Vendredi</span>
                <span>11h30–15h00 &amp; 17h00–21h30</span>
              </div>
              <div className={styles.sidebarHoursItem}>
                <span>Samedi</span>
                <span>11h30–21h30</span>
              </div>
              <div className={styles.sidebarHoursItem}>
                <span>Dimanche</span>
                <span>11h30–21h30</span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
