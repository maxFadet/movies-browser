import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { selectSearchMovies } from '../../../searchMoviesSlice';
import { selectPopularMovies, selectCurrentPage, selectTotalPages, fetchPopularMovies } from '../../../popularMoviesSlice';
import { MovieTile } from '../../../common/MovieTile';
import { Container } from '../../../common/Container';
import { Pagination } from '../../../common/Pagination';
import { Loader } from '../../../common/Loader';
import { useEffect, useState } from 'react';
import { NoResults } from "../../../common/NoResultsPage";
import { queryKey } from '../../../queryKey';
import { useNavigationToPage } from '../../../useNavigation';
import { toMovie } from "../../../routes";
import { MoviesTilesList } from '../../../common/MoviesTilesList';

export const MainContent = () => {
    const navigate = useNavigate();
    const handleTileClick = useNavigationToPage();
    const dispatch = useDispatch();
    const location = useLocation();

    const searchResults = useSelector(selectSearchMovies);
    const popularMovies = useSelector(selectPopularMovies);
    const currentPage = useSelector(selectCurrentPage);
    const totalPages = useSelector(selectTotalPages);

    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const query = new URLSearchParams(location.search).get(queryKey);
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
        setIsLoading(true);
        setTimeout(() => {
            dispatch(fetchPopularMovies({ page }));
            setIsLoading(false);
        }, 1000);
    };

    const handleMovieClick = (id) => {
        setIsTransitioning(true);
        setTimeout(() => {
            navigate(toMovie({ id }));
            setIsTransitioning(false);
        }, 1000);
    };

    if (isLoading || isTransitioning) {
        return <Loader showText={false} />;
    }
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
                            moviesToDisplay.map((movie) => (
                                <MovieTile
                                    key={movie.id}
                                    movie={movie}
                                    handleMovieClick={handleMovieClick}
                                />
                            ))
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
