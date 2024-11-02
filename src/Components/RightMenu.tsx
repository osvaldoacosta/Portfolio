import styles from "../styles/RightMenu.module.css"
import Image from 'next/image'

export default function RightMenu(): JSX.Element {
  const topIcons = [
    { icon: "rightmenu/theme.svg", tooltip: 'Change Theme' },
    { icon: "rightmenu/language.svg", tooltip: 'Change Language' },
  ];

  // Icons for the vertical section
  const navItems = [
    { icon: "/home.svg", tooltip: 'Home' },
    { icon: "portfolio.svg", tooltip: 'Portfolio' },
    { icon: "contact.svg", tooltip: 'Contact' },
  ];
  return (
    <div className={styles.navContainer}>
      <div className={styles.horizontalIcons}>
        {topIcons.map((item, index) => (
          <div key={index} className={styles.topIcon}>
            <div className={styles.icon}>
              <Image src={item.icon} alt={item.tooltip} width={35} height={35} />
            </div>
            <div className={styles.tooltip}>{item.tooltip}</div>
          </div>
        ))}
      </div>

      <div className={styles.verticalIcons}>
        {navItems.map((item, index) => (
          <div key={index} className={`${styles.navItem}`}>
            <div className={styles.iconCircle}>
              <Image src={item.icon} alt={item.tooltip} width={30} height={30} />
            </div>
            <div className={styles.tooltip}>{item.tooltip}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


