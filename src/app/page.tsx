import Link from "next/link";
import styles from "./index.module.css";
export default function Home() {

  const gifUrl = "https://i.gifer.com/Q7qV.gif"
  const hammer = "https://i.gifer.com/YzDB.gif"
  const wall = "https://i.gifer.com/ZSj2.gif"
  const goofy = "https://i.gifer.com/TJ6b.gif"
  return (
    <main className={styles.main}>
        <div className="App">
            <h1>Opa amigão, isso aqui tá em obra!</h1>
      	    <img src={hammer} alt="Obra" />
      	    <img src={wall} alt="Obra"/>
      	    <img src={gifUrl} alt="Obra" />
	    <h2>Tenha calma parceiro</h2>
      	    <img src={goofy} alt="Obra" />
    	</div>
    </main>
  );
}
