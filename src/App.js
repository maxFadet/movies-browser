import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./common/components/Navigation";
import { toMoviesList, toActorsList, toPerson, toMovie } from "./routes";
import ActorsList from "./features/ActorList/components";
import { ActorsData } from "./features/ActorPage/components";
import MoviesListPage from "./features/MoviesListPage/components";
import { MovieDetailsPage } from "./features/MovieDetailsPage/components/index";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path={toMoviesList()} element={<MoviesListPage />} />
        <Route path={toActorsList()} element={<ActorsList />} />
        <Route path={toPerson()} element={<ActorsData />} />
        <Route path={toMovie()} element={<MovieDetailsPage />} />
        <Route path="*" element={<Navigate to={toMoviesList()} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
