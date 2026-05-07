"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav} aria-label="Navigation principale">
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Bol de riz — Accueil">
          <span className={styles.logoIcon} aria-hidden="true">
            <Image
              src="/logo.png"
              alt=""
              width={48}
              height={48}
              className={styles.logoIconImage}
              priority
            />
          </span>
          <span className={styles.logoText}>
            <span className={styles.logoMain}>Bol</span>
            <span className={styles.logoSub}>de riz</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className={styles.navLinks} role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
              >
                {link.label}
                <span className={styles.linkUnderline} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link href="/contact" className={styles.ctaButton}>
          NOUS CONTACER
        </Link>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        role="dialog"
        aria-label="Menu navigation mobile"
      >
        <ul className={styles.mobileLinks} role="list">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              className={styles.mobileLinkItem}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            >
              <Link
                href={link.href}
                className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileActive : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.mobileFooter}>
          <p className={styles.mobileAddress}>46 Rue Jeanne d'Arc, 45000 Orléans</p>
          <a href="tel:0238438044" className={styles.mobilePhone}>
            02 38 43 80 44
          </a>
        </div>
      </div>
    </header>
  );
}
