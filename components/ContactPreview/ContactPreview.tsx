import Link from "next/link";
import styles from "./ContactPreview.module.css";
import { RESTAURANT } from "@/lib/mockData";
import { ClockIcon, MapPinIcon, MailIcon } from "@/components/Icons/Icons";

const HOURS = [
  { day: "Lundi", slots: ["11h30 – 15h00", "17h00 – 21h30"] },
  { day: "Mardi", slots: ["11h00 – 21h30"] },
  { day: "Mercredi", slots: ["11h30 – 21h30"] },
  { day: "Jeudi", slots: ["11h00 – 15h00", "17h00 – 21h30"] },
  { day: "Vendredi", slots: ["11h30 – 15h00", "17h00 – 21h30"] },
  { day: "Sam–Dim", slots: ["11h30 – 21h30"] },
];

export default function ContactPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.accentStrip} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left: Big CTA block */}
          <div className={styles.ctaBlock}>
            <p className={styles.eyebrow}>Réservations & Contact</p>
            <h2 className={styles.heading}>Une table pour ce soir ?</h2>
            <p className={styles.subtext}>
              Réservez votre table en ligne ou appelez-nous directement. Nous vous accueillons tous les jours, midi et soir.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Réserver en ligne
              </Link>
              <a href={`tel:${RESTAURANT.phone.replace(/\s/g, "")}`} className={styles.ctaSecondary}>
                {RESTAURANT.phone}
              </a>
            </div>
          </div>

          {/* Right: Single premium info panel */}
          <div className={styles.panel}>
            {/* Opening Hours */}
            <div className={styles.panelSection}>
              <h3 className={styles.panelTitle}>
                <span className={styles.panelIcon}><ClockIcon size={16} /></span>
                Horaires
              </h3>
              <ul className={styles.hoursList} role="list">
                {HOURS.map(({ day, slots }) => (
                  <li key={day} className={styles.hoursRow}>
                    <span className={styles.hoursDay}>{day}</span>
                    <div className={styles.hoursSlots}>
                      {slots.map((slot) => (
                        <span key={slot} className={styles.hoursSlot}>{slot}</span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.panelDivider} aria-hidden="true" />

            {/* Address */}
            <div className={styles.panelSection}>
              <h3 className={styles.panelTitle}>
                <span className={styles.panelIcon}><MapPinIcon size={16} /></span>
                Adresse
              </h3>
              <p className={styles.panelAddress}>46 Rue Jeanne d&apos;Arc</p>
              <p className={styles.panelAddress}>45000 Orléans</p>
              <p className={styles.panelSub}>Métro — République / Cathédrale</p>
            </div>

            <div className={styles.panelDivider} aria-hidden="true" />

            {/* Contact */}
            <div className={styles.panelSection}>
              <h3 className={styles.panelTitle}>
                <span className={styles.panelIcon}><MailIcon size={16} /></span>
                Contact
              </h3>
              <a href={`mailto:${RESTAURANT.email}`} className={styles.panelLink}>
                {RESTAURANT.email}
              </a>
              <a href={`tel:${RESTAURANT.phone.replace(/\s/g, "")}`} className={styles.panelLink}>
                {RESTAURANT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
