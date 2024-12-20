import React from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./PersonsList.module.css";
import { IPerson } from "../../api/types";

interface PersonsListProps {
  persons: IPerson[];
}

export const PersonsList: React.FC<PersonsListProps> = ({ persons }) => {
  const location = useLocation();

  return (
    <div className={css.container}>
      {persons.map((person) => (
        <div key={person.id} className={css.cardWrapper}>
          <Link to={`${person.id}`} state={location}>
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}
              alt={person.name}
            />
            <h3 className={css.productName}>{person.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
