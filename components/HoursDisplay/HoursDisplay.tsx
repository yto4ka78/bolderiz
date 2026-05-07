"use client";

import { useMemo } from "react";
import styles from "./HoursDisplay.module.css";

const SCHEDULE = [
  { day: "Lundi", jsDay: 1, slots: ["11h30 - 21h30"] },
  { day: "Mardi", jsDay: 2, slots: ["11h30 - 21h30"] },
  { day: "Mercredi", jsDay: 3, slots: ["11h30 - 21h30"] },
  { day: "Jeudi", jsDay: 4, slots: ["11h30 - 21h30"] },
  { day: "Vendredi", jsDay: 5, slots: ["11h30 - 21h30"] },
  { day: "Samedi", jsDay: 6, slots: ["11h30 - 21h30"] },
  { day: "Dimanche", jsDay: 0, slots: ["11h30 - 21h30"] },
];

export default function HoursDisplay() {
  const today = useMemo(() => new Date().getDay(), []);

  return (
    <div className={styles.grid}>
      {SCHEDULE.map((item) => {
        const isToday = item.jsDay === today;
        return (
          <div
            key={item.day}
            className={`${styles.row} ${isToday ? styles.today : ""}`}
          >
            <span className={styles.dayName}>
              {item.day}
              {isToday && (
                <span className={styles.todayBadge} aria-label="Aujourd'hui">
                  Aujourd'hui
                </span>
              )}
            </span>
            <div className={styles.slots}>
              {item.slots.map((slot) => (
                <span key={slot} className={styles.slot}>
                  {slot}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
