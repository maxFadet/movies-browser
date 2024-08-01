import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./Navigation";
import { toMoviesList } from "./routes";

import { Container } from "./common/Container";
import MoviesListPage from "../src/feature/movies/MoviesListPage";

export default () => (
  <HashRouter>
    <Navigation />
  <Container>
  <Routes>
      <Route path={toMoviesList()} element={<MoviesListPage />} />
      <Route>
      <Route path="*" element={<Navigate to={toMoviesList()} />} />
      </Route>
    </Routes>
  </Container>
  </HashRouter>
);

