import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { AppBar } from "./AppBar/AppBar";
import "./App.css";
import css from "./App.module.css";

const Home = lazy(() => import("../pages/Home"));

function App() {
  return (
    <div className={css.container}>
      <AppBar />

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/persons" element={<Products />} /> */}
          {/* <Route path="/persons/:id" element={<ProductDetails />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
