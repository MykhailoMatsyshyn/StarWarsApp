import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import { AppBar } from "./AppBar/AppBar";
import css from "./App.module.css";
import { PersonDetails } from "../pages/PersonDetails/PersonDetails";
import { PageProvider } from "../context/PageContext";
import { ErrorProvider } from "../context/ErrorContext";
import { ClipLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";

const Home = lazy(() => import("../pages/Home/Home"));
const People = lazy(() => import("../pages/People"));

function App() {
  return (
    <PageProvider>
      <ErrorProvider>
        <ToastContainer />
        <AppBar />
        <div className={css.container}>
          <Suspense
            fallback={
              <div className={css.loaderWrapper}>
                <ClipLoader size={50} color="#2196f3" />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/people" element={<People />} />
              <Route path="/people/:id" element={<PersonDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </ErrorProvider>
    </PageProvider>
  );
}

export default App;
