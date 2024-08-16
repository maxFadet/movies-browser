import { useSelector } from "react-redux";
import { selectSearchMovies } from "../../../searchMoviesSlice";
import { selectPopularMovies } from "../../../popularMoviesSlice";
import { Tile } from "../../../common/Tile";
import { GenresList } from "../../../common/GenresList";
import { Rates } from "../../../common/Rates";
import { MoviesTilesList } from "../../../common/MoviesTilesList";
import { Container } from "../../../common/Container";
import { useNavigate } from "react-router-dom";
import { toMovie } from "../../../routes";
import {Pagination } from "../../../common/Pagination";



export const MainContent = () => {

    const navigate = useNavigate();
    const handleMovieClick = (id) => {
        navigate(toMovie({ id }));
        };
    const searchResults = useSelector(selectSearchMovies);
    const popularMovies = useSelector(selectPopularMovies);
    const isSearching = searchResults.length > 0;

    const moviesToDisplay = isSearching ? searchResults : popularMovies.results;

    return (
        <Container>
            <MoviesTilesList
                header={isSearching ? "Search results" : "Popular movies"}
                content={
                    <>
                        {moviesToDisplay.map(({ title, id, vote_average, vote_count, poster_path, release_date, genre_ids }) => (
                            <Tile
                                key={id}
                                navigateTo={() => handleMovieClick(id)}
                                image={poster_path}
                                title={title}
                                subInfo={new Date(release_date).getFullYear()}
                                extraContent={
                                    <>
                                        <GenresList genresIds={genre_ids} />
                                        <Rates voteAverage={vote_average} voteCount={vote_count} />
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