import styles from '../styles/LeftMenu.module.css'
import Image from 'next/image'
import { DownloadIcon, GithubIcon, LinkedinIcon } from '~/Components/Icons'

// TODO: Remove direct href links
export default function LeftMenu(): JSX.Element {
  const languages = [
    { name: "Português", level: "Native" },
    { name: "English", level: "Advanced (C1)" },
  ];
  const skillGroups = [
    { title: "Programming Languages", items: ["Java", "JavaScript/Typescript", "Python", "SQL"] },
    { title: "Frameworks and Libraries", items: ["React", "Next.js", "Express.js", "Spring Boot", "PostgreSQL", "Puppeteer"] },
    { title: "Extra", items: ["Git", "Docker", "CI/CD Knowledge", "HTML+CSS", "Linux"] },
  ];
  return (
    <aside className={styles.leftMenu}>
      <div className={`${styles.card} ${styles.profile}`}>
        <div className={styles.avatar}>
          <Image src="/profile.jpg" priority={true} width={112} height={112} alt="Osvaldo" />
        </div>
        <h2>Osvaldo Costa</h2>
        <p>Full Stack Developer</p>
        <div className={styles.socialMedia}>
          <a
            href="https://github.com/osvaldoacosta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/osvaldo-azevedo-costa-37b632241/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>

      <div className={`${styles.card} ${styles.details}`}>
        <div className={styles.section}>
          <h4>Languages</h4>
          {languages.map((language) => (
            <div key={language.name} className={styles.languageRow}>
              <span>{language.name}</span>
              <span>{language.level}</span>
            </div>
          ))}
        </div>

        {skillGroups.map((group) => (
          <div key={group.title} className={styles.section}>
            <h4>{group.title}</h4>
            <div className={styles.chips}>
              {group.items.map((item) => (
                <span key={item} className={styles.chip}>{item}</span>
              ))}
            </div>
          </div>
        ))}

        <button className={styles.button}><DownloadIcon size={18} /> Download CV</button>
      </div>
    </aside>
  )
}
