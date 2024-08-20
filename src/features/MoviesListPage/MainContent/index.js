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
import { Pagination } from "../../../common/Pagination";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { NoResults } from "../../../common/NoResultsPage";

export const MainContent = () => {
    const navigate = useNavigate();
    const handleMovieClick = (id) => {
        navigate(toMovie({ id }));
    };

    const searchResults = useSelector(selectSearchMovies);
    const popularMovies = useSelector(selectPopularMovies);
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const query = new URLSearchParams(location.search).get("search");
        if (query && query !== searchQuery) {
            setSearchQuery(query);
        }
    }, [location, searchQuery]);

    const isSearching = searchQuery.length > 0;

    const header = isSearching
        ? `Search results for “${searchQuery}”`
        : "Popular movies";

    const moviesToDisplay = isSearching ? searchResults : popularMovies.results;

    if (isSearching && (!moviesToDisplay || moviesToDisplay.length === 0)) {
        return <NoResults query={searchQuery} />;
      }

    return (
        <Container>
            <MoviesTilesList
                header={header}
                content={
                    <>
                        {moviesToDisplay && moviesToDisplay.length > 0 && (
                            moviesToDisplay.map(({
                                title,
                                id,
                                vote_average,
                                vote_count,
                                poster_path,
                                release_date,
                                genre_ids
                            }) => (
                                <Tile
                                    key={id}
                                    navigateTo={() => handleMovieClick(id)}
                                    image={`https://image.tmdb.org/t/p/w500${poster_path}`}
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
                            ))
                        )}
                    </>
                }
            />
            {/* <Pagination /> */}
        </Container>
    );
};
