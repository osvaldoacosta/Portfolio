import React from "react";
import style from "../styles/Description.module.css"

export default function Description(): JSX.Element {
  return (
    <div className={style.description}>
      <div>
        <h1>Hello, I&apos;m Osvaldo a <span className={style.highlight}>Full Stack</span> Developer</h1>

        <p>I create scalable web applications using technologies like ReactJs, NextJs, Spring Boot, and Node.js. I build responsive UIs and secure backends with relational databases. My work is driven by a strong foundation in software architecture, performance optimization, and security best practices, ensuring efficient, scalable, and reliable applications.</p>
      </div>
      <button className={style.button}>Contact me</button>
    </div>
  )
}
