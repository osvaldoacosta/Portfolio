import React from "react";
import styles from "../styles/Contact.module.css"
import Image from "next/image";
export default function Contact(): JSX.Element {
  const contacts = [
    { icon: "/github.webp", title: "Github", url: "https://github.com/osvaldoacosta" },
    { icon: "/linkedin.webp", title: "LinkedIn", url: "https://www.linkedin.com/in/osvaldo-azevedo-costa-37b632241/" },
    { icon: "/email.webp", title: "Email", url: "mailto:osvaldocosta.smhc@gmail.com" },]
  return (
    <div className={styles.contactContainer}>
      <h1>Contact Information</h1>
      <div className={styles.cardItem}>
        {contacts.map((contact, index) => (
          <div key={index} className={styles.contactRow}>
            <a href={contact.url} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <Image src={contact.icon} alt={contact.title} width={25} height={25} className={styles.icon} />
              <span className={styles.cardTitle}>{contact.title}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
