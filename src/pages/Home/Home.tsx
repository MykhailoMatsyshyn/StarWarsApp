import { Link } from "react-router-dom";
import styles from "./Home.module.css"; // Імпортуємо стиль для сторінки
import image from "../../assets/starwarscharacters.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1>Welcome to the Star Wars Universe</h1>
        <p>
          Explore the galaxy and discover iconic characters from the Star Wars
          saga. Dive into the world of the Jedi, Sith, and epic battles.
        </p>
        <Link to="/people" className={styles.button}>
          Go to Character List
        </Link>
      </div>
      <div className={styles.imageSection}>
        <img src={image} alt="Star Wars" className={styles.image} />
      </div>
    </div>
  );
}
