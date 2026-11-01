import React from "react";
import styles from "../styles/Services.module.css"
import { BotIcon, CodeIcon, DocumentIcon } from "~/Components/Icons";

export default function Services(): JSX.Element {
  const serviceItems = [
    { icon: CodeIcon, title: "Web development", description: 'Landing Pages, Blogs, etc' },
    { icon: DocumentIcon, title: "Software Documentation", description: 'Document your codebase following the best practices' },
    { icon: BotIcon, title: "Task Automation", description: 'I can automate your tasks using a bot that mimics human actions efficiently.' },
  ];
  return (
    <section id="services" className={styles.serviceItems}>
      <div className={styles.defaultText}>
        <h2>My Services</h2>
        <p>I offer a range of solutions tailored to meet your needs, from creating powerful web applications to documenting your software systems and automating repetitive tasks.</p>
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
