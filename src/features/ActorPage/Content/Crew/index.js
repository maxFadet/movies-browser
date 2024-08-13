import { MoviesSection } from "./styled";
import { films } from './filmsDataCrew';
import { MoviesTilesList } from "../../../../common/MoviesTilesList";
import Header from "../../../../common/Header";

export const Crew = () => {
    return (
        <MoviesSection>
            <Header title="Movies - crew (4)" />
            {films.map((film, index) => (
                <MoviesTilesList
                    key={index}
                    image={film.photo}
                    name={film.name}
                    year={film.year}
                    vote={film.vote}
                    rate={film.rate}
                    genres={film.genres}
                />
            ))}
        </MoviesSection >
    );
};