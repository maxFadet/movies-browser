import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./common/Navigation";
import { toMoviesList, toActorsList, toPerson, toMovie } from "./routes";
import ActorsList from "./features/ActorList";
import { ActorsData } from "./features/ActorPage";
import { Container } from "./common/Container";
import MoviesListPage from "../src/features/MoviesListPage";
import { MovieDetailsPage } from "./features/MovieDetailsPage";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Container>
        <Routes>
          <Route path={toMoviesList()} element={<MoviesListPage />} />
          <Route path={toActorsList()} element={<ActorsList />} />
          <Route path={toPerson()} element={<ActorsData />} />
          <Route path={toMovie()} element={<MovieDetailsPage />} />
          <Route path="*" element={<Navigate to={toMoviesList()} />} />
        </Routes>
      </Container>
    </HashRouter>
  );
};

export default App;