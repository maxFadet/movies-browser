import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./common/Navigation";
import { toMoviesList, toActorsList, toPerson, toMovie } from "./routes";
import ActorsList from "./features/ActorList";
import { ActorsData } from "./features/ActorPage";
import { Container } from "./common/Container";
import MoviesListPage from "../src/features/MoviesListPage";
import { MovieDetailsPage } from "./features/MovieDetailsPage/components/index";
import { NoResults } from "./common/NoResultsPage";
import { Error } from "./common/Error";
import { Loader } from "./common/Loader";

function App() {
  return (
    <HashRouter>
      <Navigation />
      {/* <NoResults /> */}
      {/* <Error /> */}
      {/* <Loader /> */}
        <Routes>
          <Route path={toMoviesList()} element={<MoviesListPage />} />
          <Route path={toActorsList()} element={<ActorsList />} />
          <Route path={toPerson()} element={<ActorsData />} />
          <Route path={toMovie()} element={<MovieDetailsPage />} />
          <Route path="*" element={<Navigate to={toMoviesList()} />} />
        </Routes>
    </HashRouter>
  );
};

export default App;