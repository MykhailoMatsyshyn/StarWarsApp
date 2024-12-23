import axios from "axios";
import { IFilm, IPerson, IStarShip, PeopleResponse } from "./types";
import { BASE_API_URL } from "../constants";

export async function getPeople(
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

  console.log(response);

  return response.data;
}

export function getPerson(person_id: number = 1) {
  return axios.get<IPerson>(BASE_API_URL + `/people/${person_id}`);
}

export function getFilm(film_id: number = 1) {
  return axios.get<IFilm>(BASE_API_URL + `/films/${film_id}`);
}

export function getStarShip(starship_id: number = 1) {
  return axios.get<IStarShip>(BASE_API_URL + `/starships/${starship_id}`);
}

// export async function getPeople(page: number = 1): Promise<PeopleResponse> {
//   const response = await axios.get<PeopleResponse>(
//     `${BASE_API_URL}/people/?page=${page}`
//   );
//   return response.data;
// }

// const api = axios.create({
//   baseURL: BASE_API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// interface Hero {
//   id: number;
//   name: string;
// }

// interface HeroesResponse {
//   results: Hero[];
//   count: number;
//   total_pages: number;
// }

// export const getHeroes = async (page: number): Promise<Hero[]> => {
//   try {
//     const response = await api.get<Hero[]>("/people", {
//       params: { page },
//     });

//     return response.data;
//   } catch (error) {
//     console.error("Error fetching heroes:", error);
//     throw new Error("Failed to fetch heroes");
//   }
// };
