"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../styles/RightMenu.module.css"
import { BriefcaseIcon, ChatIcon, HomeIcon, MoonIcon, SunIcon } from "~/Components/Icons";
import { useLanguage } from "~/Components/LanguageProvider";
import { ThemeSwitcher } from "~/Components/ThemeSwitcher";

const navItems = [
  { icon: HomeIcon, id: 'home' },
  { icon: BriefcaseIcon, id: 'services' },
  { icon: ChatIcon, id: 'contact' },
] as const;

export default function RightMenu(): JSX.Element {
  const { language, t, toggleLanguage } = useLanguage();
  const [activeId, setActiveId] = useState<string>(navItems[0].id);
  // The page can be too short to scroll a clicked section to the top, so a click wins until the user scrolls
  const followingClick = useRef(false);

  useEffect(() => {
    const updateActive = () => {
      if (followingClick.current) return;
      const scrolledToEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      const passed = navItems.filter((item) => {
        const top = document.getElementById(item.id)?.getBoundingClientRect().top;
        return top !== undefined && top <= window.innerHeight * 0.4;
      });
      const current = scrolledToEnd ? navItems[navItems.length - 1] : passed[passed.length - 1];
      if (current) setActiveId(current.id);
    };
    const releaseClick = () => {
      followingClick.current = false;
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    window.addEventListener("wheel", releaseClick, { passive: true });
    window.addEventListener("touchmove", releaseClick, { passive: true });
    window.addEventListener("keydown", releaseClick);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
      window.removeEventListener("wheel", releaseClick);
      window.removeEventListener("touchmove", releaseClick);
      window.removeEventListener("keydown", releaseClick);
    };
  }, []);

  return (
    <nav className={styles.navContainer} aria-label={t.nav.main}>
      <div className={styles.group}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => {
              followingClick.current = true;
              setActiveId(item.id);
            }}
            aria-label={t.nav[item.id]}
            aria-current={activeId === item.id ? "true" : undefined}
            className={`${styles.item} ${activeId === item.id ? styles.active : ""}`}
          >
            <item.icon />
            <span className={styles.tooltip}>{t.nav[item.id]}</span>
          </a>
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.group}>
        <ThemeSwitcher className={styles.item} label={t.nav.theme}>
          <MoonIcon className={styles.moon} />
          <SunIcon className={styles.sun} />
          <span className={styles.tooltip}>{t.nav.theme}</span>
        </ThemeSwitcher>
        <button type="button" onClick={toggleLanguage} className={styles.item} aria-label={t.nav.language}>
          <span className={styles.languageCode}>{language.toUpperCase()}</span>
          <span className={styles.tooltip}>{t.nav.language}</span>
        </button>
      </div>
    </nav>
  );
}
