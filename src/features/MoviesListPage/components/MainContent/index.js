import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    selectSearchMovies,
    selectTotalResults,
    selectTotalPages as selectSearchMoviesPages,
    searchMovies,
    selectCurrentPage as selectSearchCurrentPage
} from '../../../../common/slices/searchMoviesSlice';
import {
    selectPopularMovies,
    selectCurrentPage as selectPopularCurrentPage,
    selectTotalPages,
    fetchPopularMovies,
    setCurrentPage
} from '../../slices/popularMoviesSlice';
import { Tile } from '../../../../common/components/Tile';
import { GenresList } from '../../../../common/components/GenresList';
import { Rates } from '../../../../common/components/Rates/components';
import { toMovie } from "../../../../routes";
import { MoviesTilesList } from '../../../../common/components/MoviesTilesList';
import { Container } from '../../../../common/components/Container';
import { Pagination } from '../../../../common/components/Pagination';
import { Loader } from '../../../../common/components/Loader';
import { useEffect, useState } from 'react';
import { NoResults } from "../../../../common/components/NoResultsPage";
import { getYear } from '../../../../common/functions/getYear';
import { queryKey } from '../../../../common/constants/queryKey';
import { useNavigationToPage } from '../../../../useNavigation';

export const MainContent = () => {
    const handleTileClick = useNavigationToPage();
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const searchResults = useSelector(selectSearchMovies);
    const totalResults = useSelector(selectTotalResults);
    const popularMovies = useSelector(selectPopularMovies);

    const currentPopularPage = useSelector(selectPopularCurrentPage);
    const currentSearchPage = useSelector(selectSearchCurrentPage);

    const totalPagesPopular = useSelector(selectTotalPages);
    const totalPagesSearch = useSelector(selectSearchMoviesPages);

    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isTransitioning] = useState(false);

    const isSearching = searchQuery.length > 0;

    const totalPages = isSearching ? totalPagesSearch : totalPagesPopular;
    const currentPage = isSearching ? currentSearchPage : currentPopularPage;

    useEffect(() => {
        const query = new URLSearchParams(location.search).get(queryKey);
        const queryPage = new URLSearchParams(location.search).get("page") || 1;

        if (query && query !== searchQuery) {
            setSearchQuery(query || "");
            dispatch(searchMovies({ query, page: Number(queryPage) }));
        }

        if (Number(queryPage) !== currentPage) {
            if (query) {
                dispatch(searchMovies({ query, page: Number(queryPage) }));
            } else {
                dispatch(setCurrentPage(Number(queryPage)));
            }
        }
    }, [location, searchQuery, currentPage, dispatch]);

    

    const header = isSearching
        ? totalResults > 0
            ? `Search results for “${searchQuery}” (${totalResults.toLocaleString()})`
            : `Search results for “${searchQuery}”`
        : "Popular movies";

    const moviesToDisplay = isSearching ? searchResults : popularMovies.results;

    const handlePageChange = (page) => {
        setIsLoading(true);
        setTimeout(() => {
            if (isSearching) {
                navigate(`?${queryKey}=${searchQuery}&page=${page}`);
                dispatch(searchMovies({ query: searchQuery, page }));
            } else {
                navigate(`?page=${page}`);
                dispatch(fetchPopularMovies({ page }));
            }
            setIsLoading(false);
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
                                    navigateTo={() => handleTileClick(toMovie, id)}
                                    image={poster_path}
                                    title={title}
                                    subInfo={getYear(release_date)}
                                    extraContent={
                                        <>
                                            <GenresList genresIds={genre_ids} />
                                            <Rates voteAverage={vote_average} voteCount={vote_count} hideTotalScore={true} />
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