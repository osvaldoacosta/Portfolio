import Description from "~/Components/Description";
import LeftMenu from "~/Components/LeftMenu";
import style from "../styles/page.module.css"
import RightMenu from "~/Components/RightMenu";
import Services from "~/Components/Services";
import Contact from "~/Components/Contact";
import { detectSkills } from "~/lib/skills";
export default function Home() {
  return (

    <main>
      <div className={style.layout}>
        <LeftMenu skills={detectSkills()} />
        <div className={style.centerContainer}>
          <Description />
          <Services />
          <Contact />
        </div>
        <RightMenu />
      </div>
    </main>
  )
}
