"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../styles/RightMenu.module.css"
import { BriefcaseIcon, ChatIcon, HomeIcon, LanguageIcon, MoonIcon, SunIcon } from "~/Components/Icons";
import { ThemeSwitcher } from "~/Components/ThemeSwitcher";

const navItems = [
  { icon: HomeIcon, tooltip: 'Home', id: 'home' },
  { icon: BriefcaseIcon, tooltip: 'Services', id: 'services' },
  { icon: ChatIcon, tooltip: 'Contact', id: 'contact' },
];

export default function RightMenu(): JSX.Element {
  const [activeId, setActiveId] = useState(navItems[0]!.id);
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
    <nav className={styles.navContainer} aria-label="Main">
      <div className={styles.group}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => {
              followingClick.current = true;
              setActiveId(item.id);
            }}
            aria-label={item.tooltip}
            aria-current={activeId === item.id ? "true" : undefined}
            className={`${styles.item} ${activeId === item.id ? styles.active : ""}`}
          >
            <item.icon />
            <span className={styles.tooltip}>{item.tooltip}</span>
          </a>
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.group}>
        <ThemeSwitcher className={styles.item}>
          <MoonIcon className={styles.moon} />
          <SunIcon className={styles.sun} />
          <span className={styles.tooltip}>Change Theme</span>
        </ThemeSwitcher>
        <button type="button" className={styles.item} aria-label="Change Language">
          <LanguageIcon />
          <span className={styles.tooltip}>Change Language</span>
        </button>
      </div>
    </nav>
  );
}
