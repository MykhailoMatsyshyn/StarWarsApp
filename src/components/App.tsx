import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { AppBar } from "./AppBar/AppBar";
import "./App.css";
import css from "./App.module.css";
import { PersonDetails } from "../pages/PersonDetails/PersonDetails";

const Home = lazy(() => import("../pages/Home"));
const People = lazy(() => import("../pages/People"));

function App() {
  return (
    <div className={css.container}>
      <AppBar />

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<PersonDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
