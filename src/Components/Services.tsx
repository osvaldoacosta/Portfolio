"use client";

import React from "react";
import styles from "../styles/Services.module.css"
import { BotIcon, CodeIcon, DocumentIcon } from "~/Components/Icons";
import { useLanguage } from "~/Components/LanguageProvider";

export default function Services(): JSX.Element {
  const { services } = useLanguage().t;
  const serviceItems = [
    { icon: CodeIcon, ...services.web },
    { icon: DocumentIcon, ...services.docs },
    { icon: BotIcon, ...services.automation },
  ];
  return (
    <section id="services" className={styles.serviceItems}>
      <div className={styles.defaultText}>
        <h2>{services.title}</h2>
        <p>{services.description}</p>
      </div>

      <div className={styles.cards}>
        {serviceItems.map((item) => (
          <div key={item.title} className={styles.cardItem}>
            <div className={styles.icon}>
              <item.icon size={24} />
            </div>
            <h3>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
