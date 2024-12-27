import styles from "./NotFound.module.css";
import trooper from "../../assets/trooper.png";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <img src={trooper} alt="Stormtrooper" className={styles.trooper1} />
      <div className={styles.content}>
        <h1>404</h1>
        <p>Page Not Found</p>
        <p>
          You may have typed the wrong address or the page has been removed.
        </p>
        <NavLink to="/" className={styles["back-button"]}>
          Go to Homepage
        </NavLink>
      </div>
    </div>
  );
}
