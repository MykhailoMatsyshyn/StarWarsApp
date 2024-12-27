import axios from "axios";
import { IFilm, IPerson, IStarShip, PeopleResponse } from "./types";
import { BASE_API_URL } from "../constants";

/**
 * Fetches a list of people from the API.
 * @param page - The page number to fetch (default is 1).
 * @param search - A search query to filter people (default is an empty string).
 * @returns A Promise with the list of people and pagination information.
 */
export async function fetchPeopleList(
  page: number = 1,
  search: string = ""
): Promise<PeopleResponse> {
  const queryParams = new URLSearchParams();
  queryParams.append("page", page.toString());
  if (search) {
    queryParams.append("search", search);
  }

  const response = await axios.get<PeopleResponse>(
    `${BASE_API_URL}/people/?${queryParams.toString()}`
  );

  return response.data;
}

/**
 * Fetches detailed information about a specific person by their ID.
 * @param personId - The ID of the person to fetch.
 * @returns A Promise with the person's details.
 */
export function fetchPersonDetails(person_id: number = 1) {
  return axios.get<IPerson>(BASE_API_URL + `/people/${person_id}`);
}

/**
 * Fetches information about a film by its ID.
 * @param filmId - The ID of the film to fetch.
 * @returns A Promise with the film's details.
 */
export function fetchFilmDetails(film_id: number = 1) {
  return axios.get<IFilm>(BASE_API_URL + `/films/${film_id}`);
}

/**
 * Fetches information about a starship by its ID.
 * @param starshipId - The ID of the starship to fetch.
 * @returns A Promise with the starship's details.
 */
export function fetchStarShipDetails(starship_id: number = 1) {
  return axios.get<IStarShip>(BASE_API_URL + `/starships/${starship_id}`);
}
