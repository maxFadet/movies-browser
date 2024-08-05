import { MovieDetailsPage } from "./features/MovieDetailsPage/MovieDetails";
import  ActorsList  from "./features/ActorList";
import { ActorsData } from "./features/ActorsData";
import { Container } from "./common/Container";
import MoviesListPage from "../src/feature/movies/MoviesListPage";

function App() {
  return (
    <Container>
    <MoviesListPage />
      <MovieDetailsPage />
      <ActorsList />
      <ActorsData />
      </Container>
  );
};

export default App;

