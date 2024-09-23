import styles from '../styles/LeftMenu.module.css'
import Image from 'next/image'

export default function LeftMenu(): JSX.Element {
  const imageUrl =
    'https://media.licdn.com/dms/image/v2/D4D03AQFwGJa7hcPKrA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709269979513?e=1732752000&v=beta&t=h928q76Cns_fsfW1bT8oDDDRFM1u_98kZuvWygTUPik'

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <Image src={imageUrl} width={120} height={120} alt="Osvaldo" />
        <h2>Osvaldo Costa</h2>
        <p>Full Stack Developer</p>
        <div className={styles.socialMedia}>
          <a
            href="https://github.com/osvaldoacosta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="github.svg" alt="GitHub" width={24} height={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/osvaldo-azevedo-costa-37b632241/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="linkedin.svg" alt="GitHub" width={24} height={24} />
          </a>
        </div>
      </div>
      <hr className={styles.leftMenuHr} />
      <div className={styles.section}>
        <h4>Languages</h4>
        <p>Português - Native</p>
        <p>English - Advanced(C1)</p>
      </div>

      <hr className={styles.leftMenuHr} />
      <div className={styles.section}>
        <h4>Programming Languages</h4>
        <p>Java</p>
        <p>JavaScript/Typescript</p>
        <p>Python</p>
        <p>SQL</p>
      </div>

      <hr className={styles.leftMenuHr} />
      <div className={styles.section}>
        <h4>Frameworks and Libraries</h4>
        <p>React</p>
        <p>Next.js</p>
        <p>Express.js</p>
        <p>Spring Boot</p>
        <p>PostgreSQL</p>
        <p>Puppeteer</p>
      </div>
      <hr className={styles.leftMenuHr} />

      <div className={styles.section}>
        <h4>Extra</h4>
        <p>Git</p>
        <p>Docker</p>
        <p>CI/CD Knowledge</p>
        <p>HTML+CSS</p>
        <p>Linux</p>
      </div>
      <hr className={styles.leftMenuHr} />

      <button className={styles.button}>Download CV</button>
    </div>
  )
}
