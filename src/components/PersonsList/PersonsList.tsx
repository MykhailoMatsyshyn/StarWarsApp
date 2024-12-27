import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import css from "./PersonsList.module.css";
import { IPerson } from "../../api/types";
import LoadingCard from "../LoadingCard/LoadingCard";

interface PersonsListProps {
  persons: IPerson[];
  isLoading: boolean;
}

export const PersonsList: React.FC<PersonsListProps> = ({
  persons,
  isLoading,
}) => {
  const location = useLocation();

  if (isLoading) {
    return (
      <div className={`${css.containerLoad} ${css.container}`}>
        {[...new Array(10)].map((_, index) => (
          <div key={index}>
            <LoadingCard />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={css.container}>
      {persons.length > 0 ? (
        persons.map((person) => (
          <div key={person.id} className={css.cardWrapper}>
            <NavLink to={`${person.id}`} state={location}>
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}
                alt={person.name}
              />
              <h3 className={css.productName}>{person.name}</h3>
            </NavLink>
          </div>
        ))
      ) : (
        <p className={css.noResultsMessage}>No characters found.</p>
      )}
    </div>
  );
};
