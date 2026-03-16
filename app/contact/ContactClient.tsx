"use client";

import { useState } from "react";
import styles from "./page.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { RESTAURANT } from "@/lib/mockData";
import { MapPinIcon, PhoneIcon, ClockIcon } from "@/components/Icons/Icons";

export default function ContactClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      {/* Page header */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>Réservations &amp; Contact</div>
          <h1 className={styles.heroTitle}>
            Venez nous<br />
            <span className={styles.heroTitleAccent}>rendre visite</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Réservez votre table ou envoyez-nous un message. Nous sommes à votre écoute.
          </p>
        </div>
        <div className={styles.heroDecoPanel} aria-hidden="true" />
      </section>

      {/* Main content */}
      <section className={styles.mainSection}>
        <div className={styles.mainContainer}>
          {/* Left: Info panels */}
          <aside className={styles.infoCol}>
            <div className={styles.infoStack}>
              {/* Address */}
              <div className={styles.infoBlock}>
                <div className={styles.infoBlockHeader}>
                  <span className={styles.infoBlockIcon}><MapPinIcon size={16} /></span>
                  <h2 className={styles.infoBlockTitle}>Adresse</h2>
                </div>
                <address className={styles.infoAddress}>
                  <p>46 Rue Jeanne d'Arc</p>
                  <p>45000 Orléans, France</p>
                  <p className={styles.infoMetro}>Arrêts : Jeanne d'Arc · Cathédrale</p>
                </address>
              </div>

              {/* Phone & Email */}
              <div className={styles.infoBlock}>
                <div className={styles.infoBlockHeader}>
                  <span className={styles.infoBlockIcon}><PhoneIcon size={16} /></span>
                  <h2 className={styles.infoBlockTitle}>Téléphone &amp; Email</h2>
                </div>
                <div className={styles.infoContacts}>
                  <a href={`tel:${RESTAURANT.phone.replace(/\s/g, "")}`} className={styles.infoContactLink}>
                    {RESTAURANT.phone}
                  </a>
                  <a href={`mailto:${RESTAURANT.email}`} className={styles.infoContactLink}>
                    {RESTAURANT.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className={styles.infoBlock}>
                <div className={styles.infoBlockHeader}>
                  <span className={styles.infoBlockIcon}><ClockIcon size={16} /></span>
                  <h2 className={styles.infoBlockTitle}>Horaires d&apos;ouverture</h2>
                </div>
                <div className={styles.hoursGrid}>
                  {[
                    { day: "Lundi", time: "11h30–15h00 · 17h00–21h30" },
                    { day: "Mardi", time: "11h00–21h30" },
                    { day: "Mercredi", time: "11h30–21h30" },
                    { day: "Jeudi", time: "11h00–15h00 · 17h00–21h30" },
                    { day: "Vendredi", time: "11h30–15h00 · 17h00–21h30" },
                    { day: "Samedi", time: "11h30–21h30" },
                    { day: "Dimanche", time: "11h30–21h30" },
                  ].map((h) => (
                    <div key={h.day} className={styles.hoursRow}>
                      <span className={styles.hoursDay}>{h.day}</span>
                      <span className={styles.hoursTime}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className={styles.mapPlaceholder} aria-label="Carte de localisation">
              <iframe
                title="Carte Bol de riz"
                src="https://www.openstreetmap.org/export/embed.html?bbox=1.9030%2C47.8990%2C1.9130%2C47.9040&layer=mapnik&marker=47.9016%2C1.9080"
                className={styles.mapIframe}
                loading="lazy"
              />
              <div className={styles.mapOverlay}>
                <div className={styles.mapInfo}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>46 Rue Jeanne d&apos;Arc, Orléans</span>
                </div>
                <a
                  href="https://maps.google.com/?q=46+Rue+Jeanne+d'Arc+Orleans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapLink}
                >
                  Ouvrir dans Google Maps
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </aside>

          {/* Right: Benefits section */}
          <div className={styles.formCol}>
            <div className={styles.benefitsBlock}>
              {/* Heading */}
              <div className={styles.benefitsHeader}>
                <p className={styles.benefitsEyebrow}>Notre engagement</p>
                <h2 className={styles.benefitsTitle}>Pourquoi nous choisir</h2>
                <p className={styles.benefitsIntro}>
                  Une cuisine simple, authentique et généreuse. Chaque plat est préparé avec soin à partir
                  d&apos;ingrédients frais afin d&apos;offrir une expérience chaleureuse et gourmande.
                </p>
              </div>

              {/* Benefits grid */}
              <div className={styles.benefitsGrid}>
                {[
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 2a9 9 0 0 1 9 9c0 4.97-3.58 9-9 9S3 15.97 3 11a9 9 0 0 1 9-9z" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    ),
                    title: "Produits frais chaque jour",
                    desc: "Nous sélectionnons des ingrédients de qualité pour garantir des saveurs authentiques.",
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M6 2h12v4l-2 2 2 2v4a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4v-4l2-2-2-2V2z" />
                        <path d="M12 15v3" />
                      </svg>
                    ),
                    title: "Cuisine maison",
                    desc: "Nos plats sont préparés sur place avec passion et savoir-faire.",
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    ),
                    title: "Service rapide",
                    desc: "Idéal pour une pause déjeuner agréable et efficace.",
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    ),
                    title: "Ambiance conviviale",
                    desc: "Un lieu simple et accueillant pour partager un bon repas.",
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                        <line x1="7" y1="7" x2="7.01" y2="7" />
                      </svg>
                    ),
                    title: "Prix accessibles",
                    desc: "Une cuisine généreuse à un tarif juste.",
                  },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>{icon}</div>
                    <div>
                      <h3 className={styles.benefitTitle}>{title}</h3>
                      <p className={styles.benefitDesc}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact strip */}
              <div className={styles.benefitsContact}>
                <div className={styles.benefitsContactItem}>
                  <span className={styles.benefitsContactLabel}>Réservation</span>
                  <a href={`tel:${RESTAURANT.phone.replace(/\s/g, "")}`} className={styles.benefitsContactValue}>
                    {RESTAURANT.phone}
                  </a>
                </div>
                <div className={styles.benefitsContactDivider} aria-hidden="true" />
                <div className={styles.benefitsContactItem}>
                  <span className={styles.benefitsContactLabel}>Email</span>
                  <a href={`mailto:${RESTAURANT.email}`} className={styles.benefitsContactValue}>
                    {RESTAURANT.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
