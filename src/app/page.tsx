import Description from "~/Components/Description";
import LeftMenu from "~/Components/LeftMenu";
import style from "../styles/page.module.css"
import RightMenu from "~/Components/RightMenu";
import Services from "~/Components/Services";
import Contact from "~/Components/Contact";
export default function Home() {
  return (

    <main>
      <div className={style.layout}>
        <LeftMenu />
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
