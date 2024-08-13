import { MoviesSection } from "./styled";
import { useNavigate } from "react-router-dom";
import { toMovie } from "../../../../routes";
import { films } from './filmsDataCrew';
import { MoviesTilesList } from "../../../../common/MoviesTilesList";
import Header from "../../../../common/Header";

export const Crew = () => {
    const navigate = useNavigate();

    const handleMovieClick = (id) => {
        navigate(toMovie({ id }));
    };

    return (
        <MoviesSection>
            <Header title="Movies - crew (4)" />
            {films.map((film, index) => (
                <MoviesTilesList
                    onClick={() => handleMovieClick(film.id)}
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