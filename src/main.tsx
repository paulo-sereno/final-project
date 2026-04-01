import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage";
import TvPage from "./pages/TvPage";
import DetailsPage from "./pages/DetailsPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tvseries" element={<TvPage />} />
        <Route path="/details/:type/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

