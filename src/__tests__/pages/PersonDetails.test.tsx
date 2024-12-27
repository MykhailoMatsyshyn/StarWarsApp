import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PersonDetails } from "../../pages/PersonDetails/PersonDetails";
import { PageProvider } from "../../context/PageContext";
import { ErrorProvider } from "../../context/ErrorContext";
import * as swApi from "../../api/sw-api";

import { mockPersons } from "../mockData/mockPersons"; // <-- Import mockPersons

jest.mock("../../api/sw-api.ts");

// Mock ResizeObserver to prevent errors in tests
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

const mockFilms = [
  {
    id: 1,
    title: "A New Hope",
    episode_id: 4,
    director: "George Lucas",
    producer: "Gary Kurtz",
  },
];

const mockStarships = [
  {
    id: 1,
    name: "X-wing Starfighter",
    model: "T-65 X-wing starfighter",
    films: [1],
  },
];

describe("PersonDetails Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (swApi.fetchPersonDetails as jest.Mock).mockResolvedValue({
      data: mockPersons[0],
    });
    (swApi.fetchFilmDetails as jest.Mock).mockResolvedValue({
      data: mockFilms[0],
    });
    (swApi.fetchStarShipDetails as jest.Mock).mockResolvedValue({
      data: mockStarships[0],
    });
  });

  //   it("should fetch and display person data on initial render", async () => {
  //     render(
  //       <MemoryRouter initialEntries={["/people/1"]}>
  //         <ErrorProvider>
  //           <PageProvider>
  //             <PersonDetails />
  //           </PageProvider>
  //         </ErrorProvider>
  //       </MemoryRouter>
  //     );

  //     await waitFor(() => {
  //       expect(swApi.fetchPersonDetails).toHaveBeenCalledWith(1);
  //     });

  //     expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
  //     expect(screen.getByText("A New Hope")).toBeInTheDocument();
  //     expect(screen.getByText("X-wing Starfighter")).toBeInTheDocument();
  //   });
});
