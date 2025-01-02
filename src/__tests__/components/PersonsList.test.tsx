import { render, screen } from "@testing-library/react";
import { PersonsList } from "../../components/PersonsList/PersonsList";
import { BrowserRouter as Router } from "react-router-dom";

// Import mock data
import { mockPersons } from "../../__mocks__/mockPersons"; // <-- Import mockPersons

// Mock for LoadingCard component
jest.mock("../../components/LoadingCard/LoadingCard.tsx", () => () => (
  <div>Loading...</div>
));

describe("PersonsList", () => {
  // Test 1: Should display loading state when isLoading is true
  test("should display loading state when isLoading is true", () => {
    render(
      <Router>
        <PersonsList persons={[]} isLoading={true} />
      </Router>
    );

    // Check if loading cards are displayed (expect 10 Loading components)
    expect(screen.getAllByText("Loading...")).toHaveLength(10);
  });

  // Test 2: Should render a list of persons when isLoading is false and persons are provided
  test("should render a list of persons when isLoading is false and persons are provided", () => {
    render(
      <Router>
        <PersonsList persons={mockPersons} isLoading={false} />
      </Router>
    );

    // Check if all persons are displayed
    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    expect(screen.getByText("Darth Vader")).toBeInTheDocument();
  });

  // Test 3: Should display 'No characters found' when persons array is empty
  test("should display 'No characters found' when persons array is empty", () => {
    render(
      <Router>
        <PersonsList persons={[]} isLoading={false} />
      </Router>
    );

    // Check if the message 'No characters found' is displayed
    expect(screen.getByText("No characters found.")).toBeInTheDocument();
  });
});
