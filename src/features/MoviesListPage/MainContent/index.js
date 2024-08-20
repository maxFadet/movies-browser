import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { selectSearchMovies } from '../../../searchMoviesSlice';
import { selectPopularMovies, selectCurrentPage, selectTotalPages, fetchPopularMovies } from '../../../popularMoviesSlice';
import { Tile } from '../../../common/Tile';
import { GenresList } from '../../../common/GenresList';
import { Rates } from '../../../common/Rates';
import { toMovie } from "../../../routes";
import { MoviesTilesList } from '../../../common/MoviesTilesList';
import { Container } from '../../../common/Container';
import { Pagination } from '../../../common/Pagination';
import { useEffect, useState } from 'react';

export const MainContent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const handleMovieClick = (id) => {
        navigate(toMovie({ id }));
    };

    const searchResults = useSelector(selectSearchMovies);
    const popularMovies = useSelector(selectPopularMovies);
    const currentPage = useSelector(selectCurrentPage);
    const totalPages = useSelector(selectTotalPages);

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

    const handlePageChange = (page) => {
        dispatch(fetchPopularMovies({ page }));
    };

    return (
        <Container>
            <MoviesTilesList
                header={header}
                content={
                    <>
                        {moviesToDisplay && moviesToDisplay.length > 0 ? (
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
                        ) : (
                            isSearching && <p>No results found for "{searchQuery}"</p>
                        )}
                    </>
                }
            />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </Container>
    );
};