
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./Navigation";
import { toMoviesList } from "./routes";
import { MovieDetailsPage } from "./features/MovieDetailsPage/MovieDetails";
import ActorsList from "./features/ActorList";
import { ActorsData } from "./features/ActorsData";
import { Container } from "./common/Container";
import MoviesListPage from "../src/feature/movies/MoviesListPage";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Container>
        <Routes>
          <Route path={toMoviesList()} element={<MoviesListPage />} />
          <Route>
            <Route path="*" element={<Navigate to={toMoviesList()} />} />
          </Route>
        </Routes>
        <MovieDetailsPage />
        <ActorsList />
        <ActorsData />

      </Container>
    </HashRouter>
  );
};

export default App;


