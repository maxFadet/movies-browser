import { Pagination } from "../../../common/Pagination";
import { Container } from "../../../common/Container";
import { useNavigate } from "react-router-dom";
import { toMovie } from "../../../routes";
import { useSelector } from "react-redux";
import { selectPopularMovies } from "../../../popularMoviesSlice";
import { Tile } from "../../../common/Tile";
import { GenresList } from "../../../common/GenresList";
import { Rates } from "../../../common/Rates";
import { MoviesTilesList } from "../../../common/MoviesTilesList";
export const MainContent = () => {
    const navigate = useNavigate();
    const handleMovieClick = (id) => {
        navigate(toMovie({ id }));
    };

    const { results } = useSelector(selectPopularMovies);

    return (
        <Container>
            <MoviesTilesList
                header="Popular movies"
                content={
                    <>
                        {results.map((
                            { title, id, vote_average, vote_count, poster_path, release_date, genre_ids }) => (
                            <Tile
                                navigateTo={() => handleMovieClick(id)}
                                image={poster_path}
                                title={title}
                                subInfo={new Date(release_date).getFullYear()}
                                extraContent={
                                    <>
                                        <GenresList
                                            genresIds={genre_ids}
                                        />
                                        <Rates
                                            voteAverage={vote_average}
                                            voteCount={vote_count}
                                            hideTotalScore
                                        />
                                    </>
                                }
                            />
                        ))}
                    </>
                }
            />
            <Pagination />
        </Container>
    )
}