import Header from "../../common/Header";
import { TileContainer, Wrapper } from "./styled";
import Tile from "./Tile";
import { useNavigate } from "react-router-dom";
import { toMovie } from "../../routes";
import { films } from "../ActorPage/filmsData";

function MoviesListPage() {
    const navigate = useNavigate();

    const handleMovieClick = (id) => {
        navigate(toMovie({ id }));
    };

    return (
        <Wrapper>
            <Header title="Popular movies" />
            <TileContainer>
                {films.map((film, index) => (
                    <Tile
                        key={index}
                        onClick={() => handleMovieClick(film.id)}
                        title={film.name}
                        year={film.year}
                        genres={[film.genra, film.genra2]}
                        rate={film.rate}
                        votes={film.vote}
                        poster={film.photo}
                    />
                ))}
            </TileContainer>
        </Wrapper>
    );
}

export default MoviesListPage;
