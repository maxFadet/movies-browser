
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./common/Navigation";
import { toMoviesList, toActorsList, toPerson, toMovie } from "./routes";
import { MovieDetailsPage } from "./features/MovieDetailsPage/MovieDetails";
import ActorsList from "./features/ActorList";
import { ActorsData } from "./features/ActorPage";
import { Container } from "./common/Container";
import MoviesListPage from "../src/features/MoviesListPage";
import { PageContent } from "./common/PageContent";
import { MovieBanner } from "./features/MovieDetailsPage/MovieBanner";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Container>
        <Routes>
          <Route path={toMoviesList()} element={<PageContent content={<MoviesListPage />} />} />
          <Route path={toActorsList()} element={<PageContent content={<ActorsList />} />} />
          <Route path={toPerson()} element={<PageContent content={<ActorsData />} />} />
          <Route path={toMovie()} element={
            <>
              <MovieBanner
                poster="https://github.com/maxFadet/movies-browser/blob/feature/movie-details/src/Poster-big.png?raw=true"
                title="Mulan long title"
              />
              <PageContent
                content={<MovieDetailsPage />}
              />
            </>} />
          <Route path="*" element={<Navigate to={toMoviesList()} />} />
        </Routes>
      </Container>
    </HashRouter>
  );
};

export default App;


