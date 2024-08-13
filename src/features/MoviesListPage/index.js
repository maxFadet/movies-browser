import Header from "../../common/Header";
import { TileContainer } from "./styled";
import { useNavigate } from "react-router-dom";
import { toMovie } from "../../routes";
import { Pagination } from "../../common/Pagination";
import { Container } from "../../common/Container";
import { films } from './moviesData';
import { MoviesTilesList } from "../../common/MoviesTilesList";

function MoviesListPage() {
    const navigate = useNavigate();

    const handleMovieClick = (id) => {
        navigate(toMovie({ id }));
    };

    return (
        <Container>
            <TileContainer>
                <Header title="Popular movies" />
                {films.map((film, index) => (
                    <MoviesTilesList
                        key={index}
                        onClick={() => handleMovieClick(film.id)}
                        name={film.name}
                        year={film.year}
                        genres={film.genres}
                        rate={film.rate}
                        vote={film.vote}
                        image={film.photo}
                    />
                ))}
            </TileContainer>
            <Pagination />
        </Container>
    );
}

export default MoviesListPage;
