"use client";

import React from "react";
import styles from "../styles/Contact.module.css"
import { ArrowIcon, GithubIcon, LinkedinIcon, MailIcon } from "~/Components/Icons";
import { useLanguage } from "~/Components/LanguageProvider";

export default function Contact(): JSX.Element {
  const { contact: text } = useLanguage().t;
  const contacts = [
    { icon: GithubIcon, title: "Github", handle: "osvaldoacosta", url: "https://github.com/osvaldoacosta" },
    { icon: LinkedinIcon, title: "LinkedIn", handle: "osvaldo-azevedo-costa", url: "https://www.linkedin.com/in/osvaldo-azevedo-costa-37b632241/" },
    { icon: MailIcon, title: text.email, handle: "osvaldocosta.smhc@gmail.com", url: "mailto:osvaldocosta.smhc@gmail.com" },]
  return (
    <section id="contact" className={styles.contactContainer}>
      <h2>{text.title}</h2>
      <div className={styles.cardItem}>
        {contacts.map((contact) => (
          <a key={contact.url} href={contact.url} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            <contact.icon size={22} className={styles.icon} />
            <span className={styles.cardText}>
              <span className={styles.cardTitle}>{contact.title}</span>
              <span className={styles.cardHandle}>{contact.handle.replace("@", "@\u200B")}</span>
            </span>
            <ArrowIcon size={18} className={styles.arrow} />
          </a>
        ))}
      </div>
    </section>
  );
}
