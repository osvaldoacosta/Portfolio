"use client";

import React from "react";
import style from "../styles/Description.module.css"
import { useLanguage } from "~/Components/LanguageProvider";

export default function Description(): JSX.Element {
  const { hero } = useLanguage().t;
  return (
    <section id="home" className={style.description}>
      <h1>{hero.headlineStart}<span className={style.highlight}>{hero.headlineHighlight}</span>{hero.headlineEnd}</h1>

      <p>{hero.description}</p>

      <div className={style.actions}>
        <a href="#contact" className={style.button}>{hero.contactMe}</a>
        <a href="#services" className={style.ghostButton}>{hero.myServices}</a>
      </div>
    </section>
  )
}
