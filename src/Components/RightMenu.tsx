import styles from "../styles/RightMenu.module.css"
import Image from 'next/image'
import { ThemeSwitcher } from "~/Components/ThemeSwitcher";

export default function RightMenu(): JSX.Element {
  const topIcons = [
    { icon: "/rightmenu/theme.webp", tooltip: 'Change Theme' },
    { icon: "/rightmenu/language.webp", tooltip: 'Change Language' },
  ];

  // Icons for the vertical section
  const navItems = [
    { icon: "/rightmenu/home1.webp", tooltip: 'Home' },
    { icon: "/rightmenu/portfolio.webp", tooltip: 'Portfolio' },
    { icon: "/rightmenu/contact.webp", tooltip: 'Contact' },
  ];
  return (
    <div className={styles.navContainer}>
      <div className={styles.horizontalIcons}>
        <div key="toggleTheme" className={styles.topIcon}>
          <div className={styles.icon}>
            <ThemeSwitcher>
              <Image priority={true} src={topIcons[0]!.icon} alt={topIcons[0]!.tooltip} width={35} height={35} />
            </ThemeSwitcher>
          </div>
          <div className={styles.tooltip}>{topIcons[0]!.tooltip}</div>
        </div>
        <div key="changeLang" className={styles.topIcon}>
          <div className={styles.icon}>
            <Image priority={true} src={topIcons[1]!.icon} alt={topIcons[1]!.tooltip} width={35} height={35} />
          </div>
          <div className={styles.tooltip}>{topIcons[1]!.tooltip}</div>
        </div>
      </div>

      <div className={styles.verticalIcons}>
        {navItems.map((item, index) => (
          <div key={index} className={`${styles.navItem}`}>
            <div className={styles.iconCircle}>
              <Image priority={true} src={item.icon} alt={item.tooltip} width={30} height={30} />
            </div>
            <div className={styles.tooltip}>{item.tooltip}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


