import { useSelector, useDispatch } from 'react-redux';
import { 
    // useNavigate, 
    useLocation } from 'react-router-dom';
import { selectSearchMovies, selectTotalResults
    // , selectSearchResultsText 
} from '../../../searchMoviesSlice';
import { selectPopularMovies, selectCurrentPage, selectTotalPages, fetchPopularMovies } from '../../../popularMoviesSlice';
import { Tile } from '../../../common/Tile';
import { GenresList } from '../../../common/GenresList';
import { Rates } from '../../../common/Rates';
import { toMovie } from "../../../routes";
import { MoviesTilesList } from '../../../common/MoviesTilesList';
import { Container } from '../../../common/Container';
import { Pagination } from '../../../common/Pagination';
import { Loader } from '../../../common/Loader';
import { useEffect, useState } from 'react';
import { NoResults } from "../../../common/NoResultsPage";
import { getYear } from '../../../functions/getYear';
import { queryKey } from '../../../queryKey';
import { useNavigationToPage } from '../../../useNavigation';

export const MainContent = () => {
    // const navigate = useNavigate();
    const handleTileClick = useNavigationToPage();
    const dispatch = useDispatch();
    const location = useLocation();

    const searchResults = useSelector(selectSearchMovies);
    const totalResults = useSelector(selectTotalResults);
    const popularMovies = useSelector(selectPopularMovies);
    const currentPage = useSelector(selectCurrentPage);
    const totalPages = useSelector(selectTotalPages);
    // const searchResultsText = useSelector(selectSearchResultsText);


    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isTransitioning
        // , setIsTransitioning
    ] = useState(false);

    useEffect(() => {
        const query = new URLSearchParams(location.search).get(queryKey);
        if (query && query !== searchQuery) {
            setSearchQuery(query);
        }
    }, [location, searchQuery]);

    const isSearching = searchQuery.length > 0;

    const header = isSearching 
        ? totalResults > 0
            ? `Search results for “${searchQuery}” (${totalResults})`
            : `Search results for “${searchQuery}” ()`
        : "Popular movies";

    const moviesToDisplay = isSearching ? searchResults : popularMovies.results;

    const handlePageChange = (page) => {
        setIsLoading(true);
        setTimeout(() => {
            dispatch(fetchPopularMovies({ page }));
            setIsLoading(false);
        }, 1000);
    };

    // const handleMovieClick = (id) => {
    //     setIsTransitioning(true);
    //     setTimeout(() => {
    //         navigate(toMovie({ id }));
    //     }, 1000);
    // };

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
                                    image={`https://image.tmdb.org/t/p/w500${poster_path}`}
                                    title={title}
                                    subInfo={getYear(release_date)}
                                    extraContent={
                                        <>
                                            <GenresList genresIds={genre_ids} />
                                            <Rates voteAverage={vote_average} voteCount={vote_count} />
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
