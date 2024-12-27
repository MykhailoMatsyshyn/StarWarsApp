import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import People from "../../pages/People";
import { PageProvider } from "../../context/PageContext";
import { MemoryRouter } from "react-router-dom";
import * as swApi from "../../api/sw-api";
import { ErrorProvider } from "../../context/ErrorContext";
import { toast } from "react-toastify";
import { act } from "react";

// Import mock data
import { mockPersons } from "../mockData/mockPersons"; // <-- Import mockPersons

// Mocking the fetchPeopleList API from swApi
jest.mock("../../api/sw-api");

// Mocking the toast.error method to check error messages
jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
  },
}));

describe("People component", () => {
  // Before each test, reset mocks and set the default response for fetchPeopleList
  beforeEach(() => {
    jest.clearAllMocks();
    (swApi.fetchPeopleList as jest.Mock).mockResolvedValue({
      results: mockPersons,
      count: mockPersons.length,
      next: null,
      previous: null,
    });
  });

  // Test: Should fetch and display people data on initial render
  it("should fetch and display people data on initial render", async () => {
    // Rendering component inside the context providers
    await act(async () => {
      render(
        <MemoryRouter>
          <ErrorProvider>
            <PageProvider>
              <People />
            </PageProvider>
          </ErrorProvider>
        </MemoryRouter>
      );
    });

    // Wait for the fetch call to complete and assert the fetched data is displayed
    await waitFor(() => {
      expect(swApi.fetchPeopleList).toHaveBeenCalledWith(1, ""); // Verifying that the API is called with page 1 and no search query
      expect(screen.getByText("Luke Skywalker")).toBeInTheDocument(); // Verifying that Luke Skywalker is displayed
      expect(screen.getByText("Darth Vader")).toBeInTheDocument(); // Verifying that Darth Vader is displayed
      expect(screen.getByRole("navigation")).toBeInTheDocument(); // Verifying that pagination is rendered
    });
  });

  // Test: Should show error message when fetch fails
  it("should show error message when fetch fails", async () => {
    // Simulating API failure
    (swApi.fetchPeopleList as jest.Mock).mockRejectedValue(
      new Error("Error fetching people data.")
    );

    render(
      <MemoryRouter>
        <ErrorProvider>
          <PageProvider>
            <People />
          </PageProvider>
        </ErrorProvider>
      </MemoryRouter>
    );

    // Wait for the error to appear and check if the correct error message is displayed
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Error fetching people data."); // Verifying if the error toast is called
    });
  });

  // Test: Should update the page correctly when a new page is selected
  it("should update the page correctly when a new page is selected", async () => {
    // Rendering the component with pagination mock
    render(
      <MemoryRouter>
        <ErrorProvider>
          <PageProvider>
            <People />
          </PageProvider>
        </ErrorProvider>
      </MemoryRouter>
    );

    // Mocking the API response for pagination (20 items and next page URL)
    (swApi.fetchPeopleList as jest.Mock).mockResolvedValue({
      results: mockPersons,
      count: 20,
      next: "next-page-url",
      previous: null,
    });

    await waitFor(() => {
      expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
      expect(screen.getByText("Darth Vader")).toBeInTheDocument();
    });

    // Verifying that pagination component is rendered
    const pagination = screen.getByRole("navigation");
    expect(pagination).toBeInTheDocument();

    // Verifying that the page 1 button is present
    const page1Button = screen.getByRole("button", { name: /page 1/i });
    expect(page1Button).toBeInTheDocument();

    // Verifying that the "Go to next page" button is present
    const nextPageButton = screen.getByRole("button", {
      name: /Go to next page/i,
    });
    expect(nextPageButton).toBeInTheDocument();

    // Clicking the "Go to next page" button and verifying the API call
    fireEvent.click(nextPageButton);

    // Verifying that the API is called with the correct page number
    expect(swApi.fetchPeopleList).toHaveBeenCalledWith(1, "");
  });
});
