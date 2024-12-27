import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBox } from "../../components/SearchBox/SearchBox";

// Mock function to check the onChange callback
const mockOnChange = jest.fn();

describe("SearchBox Component", () => {
  test("should display the value passed as prop", () => {
    render(<SearchBox value="Test" onChange={mockOnChange} />);

    // Check if the value is correctly displayed in the input field
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;

    // Verify if the input value matches the passed prop
    expect(inputElement.value).toBe("Test");
  });

  test("should call onChange function when typing", () => {
    render(<SearchBox value="" onChange={mockOnChange} />);

    const inputElement = screen.getByRole("textbox") as HTMLInputElement;

    // Simulate typing in the input field
    fireEvent.change(inputElement, { target: { value: "New value" } });

    // Verify if the mockOnChange function is called with the correct value
    expect(mockOnChange).toHaveBeenCalledWith("New value");
  });
});
