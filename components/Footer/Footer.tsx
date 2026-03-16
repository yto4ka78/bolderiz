import Link from "next/link";
import styles from "./Footer.module.css";
import { RESTAURANT } from "@/lib/mockData";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topAccent} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo} aria-label="Retour à l'accueil">
              <span className={styles.logoIcon} aria-hidden="true">龍</span>
              <span className={styles.logoText}>Bol de riz</span>
            </Link>
            <p className={styles.tagline}>{RESTAURANT.tagline}</p>
            <p className={styles.founded}>
              Fondé en {RESTAURANT.founded} · Cuisine authentique depuis plus de 25 ans
            </p>
          </div>

          {/* Navigation */}
          <nav className={styles.navCol} aria-label="Navigation pied de page">
            <h3 className={styles.colTitle}>Navigation</h3>
            <ul className={styles.linkList} role="list">
              <li><Link href="/" className={styles.footerLink}>Accueil</Link></li>
              <li><Link href="/menu" className={styles.footerLink}>Notre carte</Link></li>
              <li><Link href="/about" className={styles.footerLink}>À propos</Link></li>
              <li><Link href="/faq" className={styles.footerLink}>FAQ</Link></li>
              <li><Link href="/contact" className={styles.footerLink}>Contact & Réservations</Link></li>
            </ul>
          </nav>

          {/* Hours */}
          <div className={styles.hoursCol}>
            <h3 className={styles.colTitle}>Horaires</h3>
            <ul className={styles.hoursList} role="list">
              <li className={styles.hoursItem}>
                <span className={styles.hoursDay}>Lundi</span>
                <span className={styles.hoursTime}>11h30–15h00 & 17h00–21h30</span>
              </li>
              <li className={styles.hoursItem}>
                <span className={styles.hoursDay}>Mardi</span>
                <span className={styles.hoursTime}>11h00–21h30</span>
              </li>
              <li className={styles.hoursItem}>
                <span className={styles.hoursDay}>Mercredi</span>
                <span className={styles.hoursTime}>11h30–21h30</span>
              </li>
              <li className={styles.hoursItem}>
                <span className={styles.hoursDay}>Jeudi</span>
                <span className={styles.hoursTime}>11h00–15h00 & 17h00–21h30</span>
              </li>
              <li className={styles.hoursItem}>
                <span className={styles.hoursDay}>Vendredi</span>
                <span className={styles.hoursTime}>11h30–15h00 & 17h00–21h30</span>
              </li>
              <li className={styles.hoursItem}>
                <span className={styles.hoursDay}>Samedi</span>
                <span className={styles.hoursTime}>11h30–21h30</span>
              </li>
              <li className={styles.hoursItem}>
                <span className={styles.hoursDay}>Dimanche</span>
                <span className={styles.hoursTime}>11h30–21h30</span>
              </li>
            </ul>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span>Ouvert aujourd&apos;hui</span>
            </div>
          </div>

          {/* Contact */}
          <div className={styles.contactCol}>
            <h3 className={styles.colTitle}>Nous trouver</h3>
            <address className={styles.address}>
              <p>{RESTAURANT.address}</p>
              <p className={styles.metro}>Métro : {RESTAURANT.metro}</p>
            </address>
            <div className={styles.contactLinks}>
              <a href={`tel:${RESTAURANT.phone.replace(/\s/g, "")}`} className={styles.contactLink}>
                <span aria-hidden="true">↗</span> {RESTAURANT.phone}
              </a>
              <a href={`mailto:${RESTAURANT.email}`} className={styles.contactLink}>
                <span aria-hidden="true">↗</span> {RESTAURANT.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Bol de riz. Tous droits réservés.
          </p>
          <p className={styles.legalLinks}>
            <Link href="#" className={styles.legalLink}>Mentions légales</Link>
            <span aria-hidden="true"> · </span>
            <Link href="#" className={styles.legalLink}>Politique de confidentialité</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
