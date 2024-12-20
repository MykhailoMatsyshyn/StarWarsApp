import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AppBar.module.css";

const buildLinkClass = ({ isActive }: { isActive: boolean }): string => {
  return clsx(css.link, isActive && css.active);
};

export const AppBar: React.FC = () => {
  return (
    <header className={css.header}>
      <p className={css.logo}>
        <span role="img" aria-label="star icon">
          ⭐
        </span>{" "}
        StarWars
      </p>

      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/persons" className={buildLinkClass}>
          Persons
        </NavLink>
      </nav>
    </header>
  );
};
