import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AppBar.module.css";
import starWarsIcon from "../../assets/starWarsIcon.svg";

const buildLinkClass = ({ isActive }: { isActive: boolean }): string => {
  return clsx(css.link, isActive && css.active);
};

export const AppBar: React.FC = () => {
  return (
    <header className={css.header}>
      <div className={css.content}>
        <Link to="/" className={css.logo}>
          <img src={starWarsIcon} alt="Star Wars Icon" />
          <span>StarWars</span>
        </Link>

        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/people" className={buildLinkClass}>
            Characters
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
