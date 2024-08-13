import { Pagination } from "../../../common/Pagination";
import { Container } from "../../../common/Container";
import Header from "../../../common/Header";
import { TileContainer } from "./styled";
import Tile from "../Tile";
import { useNavigate } from "react-router-dom";
import { toMovie } from "../../../routes";
import { useSelector } from "react-redux";
import { selectPopularMovies } from "../../../popularMoviesSlice";

export const MainContent = () => {
    const navigate = useNavigate();

    const { results } = useSelector(selectPopularMovies);

    const handleMovieClick = (id) => {
        navigate(toMovie({ id }));
    };

    return (
        <Container>
            <Header title="Popular movies" />
            <TileContainer>
                {results.map(({ title, id, vote_average, vote_count, poster_path, release_date, genre_ids }) => (
                    <Tile
                        key={id}
                        onClick={() => handleMovieClick(1)}
                        title={title}
                        year={new Date(release_date).getFullYear()}
                        genres={genre_ids}
                        rate={vote_average}
                        votes={vote_count}
                        poster={poster_path}
                    />
                ))}
            </TileContainer>
            <Pagination />
        </Container>
    )
}