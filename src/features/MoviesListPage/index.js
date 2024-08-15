import Header from "../../common/Header";
import { TileContainer } from "./styled";
import Tile from "./Tile";
import { useNavigate } from "react-router-dom";
import { toMovie } from "../../routes";
import { films } from "./filmsData";
import { Pagination } from "../../common/Pagination";
import { Container } from "../../common/Container";

function MoviesListPage() {
    const navigate = useNavigate();

    const handleMovieClick = (id) => {
        navigate(toMovie({ id }));
    };

    return (
        <Container>
            <Header title="Popular movies" />
            <TileContainer>
                {films.map((film, index) => (
                    <Tile
                        key={index}
                        onClick={() => handleMovieClick(1)}
                        title={film.name}
                        year={film.year}
                        genres={film.genres}                        rate={film.rate}
                        votes={film.vote}
                        poster={film.photo}
                    />
                ))}
            </TileContainer>
            <Pagination />
        </Container>
    );
}

export default MoviesListPage;