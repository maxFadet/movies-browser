import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { selectSearchMovies } from '../../../../common/slices/searchMoviesSlice';
import { selectPopularMovies, selectCurrentPage, selectTotalPages, fetchPopularMovies } from '../../slices/popularMoviesSlice';
import { Tile } from '../../../../common/components/Tile';
import { GenresList } from '../../../../common/components/GenresList';
import { Rates } from '../../../../common/components/Rates';
import { toMovie } from "../../../../routes";
import { MoviesTilesList } from '../../../../common/components/MoviesTilesList';
import { Container } from '../../../../common/components/Container';
import { Pagination } from '../../../../common/components/Pagination';
import { Loader } from '../../../../common/components/Loader';
import { useEffect, useState } from 'react';
import { NoResults } from "../../../../common/components/NoResultsPage";
import { getYear } from '../../../../functions/getYear';
import { queryKey } from '../../../../common/constants/queryKey';

export const MainContent = () => {
    const navigate = useNavigate();
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
                                    image={poster_path}
                                    title={title}
                                    subInfo={release_date && getYear(release_date)}
                                    extraContent={
                                        <>
                                            <GenresList genresIds={genre_ids} />
                                            <Rates voteAverage={vote_average} voteCount={vote_count} hideTotalScore />
                                        </>
                                    }
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
