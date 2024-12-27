// import { render, screen, waitFor } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import App from "../../components/App";

// // Тест для Home
// test("should render Home component on '/' path", async () => {
//   render(
//     <MemoryRouter initialEntries={["/"]}>
//       <App />
//     </MemoryRouter>
//   );

//   // Перевірка, чи відображається компонент Home
//   await waitFor(() => screen.getByText(/Home/i));
//   expect(screen.getByText(/Home/i)).toBeInTheDocument();
// });

// // Тест для People
// test("should render People component on '/people' path", async () => {
//   render(
//     <MemoryRouter initialEntries={["/people"]}>
//       <App />
//     </MemoryRouter>
//   );

//   // Перевірка, чи відображається компонент People
//   await waitFor(() => screen.getByText(/People/i));
//   expect(screen.getByText(/People/i)).toBeInTheDocument();
// });

// // Тест для PersonDetails
// test("should render PersonDetails component on '/people/:id' path", async () => {
//   render(
//     <MemoryRouter initialEntries={["/people/1"]}>
//       <App />
//     </MemoryRouter>
//   );

//   // Перевірка, чи відображається компонент PersonDetails
//   await waitFor(() => screen.getByText(/Person Details/i));
//   expect(screen.getByText(/Person Details/i)).toBeInTheDocument();
// });
