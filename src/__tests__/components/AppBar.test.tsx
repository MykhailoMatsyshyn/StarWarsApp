// import { render, screen } from "@testing-library/react";
// import { AppBar } from "../../components/AppBar/AppBar";
// import { MemoryRouter, Route, Routes } from "react-router-dom";

// // jest.mock("../../assets/starWarsIcon.svg", () => "test-file-stub");

// // Test 1: Should render the AppBar component with all elements
// test("should render AppBar component", () => {
//   render(
//     <MemoryRouter>
//       <AppBar />
//     </MemoryRouter>
//   );

//   // Check if the logo is in the document
//   expect(screen.getByAltText("Star Wars Icon")).toBeInTheDocument();

//   // Check if the "StarWars" text is in the document
//   expect(screen.getByText("StarWars")).toBeInTheDocument();

//   // Check if navigation links are present
//   expect(screen.getByText("Home")).toBeInTheDocument();
//   expect(screen.getByText("Persons")).toBeInTheDocument();
// });

// // Test 2: Should apply 'active' class to the active nav link
// test("should apply 'active' class to active nav link", () => {
//   render(
//     <MemoryRouter initialEntries={["/"]}>
//       <AppBar />
//       <Routes>
//         <Route path="/" element={<div>Home</div>} />
//         <Route path="/people" element={<div>People</div>} />
//       </Routes>
//     </MemoryRouter>
//   );

//   // Check if the Home link has the 'active' class when the route is '/'
//   const homeLink = screen.getByText("Home");
//   expect(homeLink).toHaveClass("active");

//   // Check if the People link does not have the 'active' class
//   const peopleLink = screen.getByText("Persons");
//   expect(peopleLink).not.toHaveClass("active");
// });

// // Test 3: Should render the logo with the correct src
// test("should render the logo with the correct src", () => {
//   render(
//     <MemoryRouter>
//       <AppBar />
//     </MemoryRouter>
//   );

//   // Check if the logo has the correct src (mocked value)
//   const logo = screen.getByAltText("Star Wars Icon");
//   expect(logo).toHaveAttribute("src", "test-file-stub");
// });
