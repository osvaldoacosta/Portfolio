import React from "react";
import styles from "../styles/Services.module.css"
import Image from "next/image"; // Make sure to import Image from next/image if you're using Next.js

export default function Services(): JSX.Element {
  const serviceItems = [
    { icon: "/service/servicePc.webp", title: "Web development", description: 'Landing Pages, Blogs, etc' },
    { icon: "/service/serviceDoc.webp", title: "Software Documentation", description: 'Document your  codebase following the best pratices' },
    { icon: "/service/serviceAuto.webp", title: "Task Automation", description: 'I can automate your tasks using a bot that mimics human actions efficiently.' },
  ];
  return (
    <div className={styles.serviceItems}>
      <div className={styles.defaultText}>
        <h1>My Services</h1>
        <p>I offer a range of solutions tailored to meet your needs, from creating powerful web applications to documenting your software systems and automating repetitive tasks.</p>
      </div>

      <div className={styles.cards}>
        {serviceItems.map((item, index) => (
          <div key={index} className={`${styles.cardItem}`}>
            <div className={styles.icon}>
              <Image src={item.icon} alt={item.description} width={60} height={60} />
            </div>
            <h2>{item.title}</h2>
            <p className={styles.cardDescription}>{item.description}</p>

          </div>
        ))}

      </div>
    </div>
  )
}
