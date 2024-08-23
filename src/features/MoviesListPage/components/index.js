import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { selectPopularMoviesFetchStatust, fetchPopularMovies, selectCurrentPage, selectTotalPages } from '../slices/popularMoviesSlice';
import { searchMovies } from '../../../common/slices/searchMoviesSlice';
import { fetchMoviesGenres, selectMoviesGenresFetchStatus } from '../../../common/slices/moviesGenresSlice';
import { loadingStatus } from '../../../common/constants/requestStatuses/loadingStatus';
import { errorStatus } from '../../../common/constants/requestStatuses/errorStatus';
import { Loader } from '../../../common/components/Loader';
import { Error } from '../../../common/components/Error';
import { MainContent } from './MainContent';

function MoviesListPage() {
    const dispatch = useDispatch();
    const location = useLocation();
    const currentPage = useSelector(selectCurrentPage);
    const totalPages = useSelector(selectTotalPages);

    const popularMoviesFetchStatus = useSelector(selectPopularMoviesFetchStatust);
    const moviesGenresFetchStatus = useSelector(selectMoviesGenresFetchStatus);

    const [showSearchLoader, setShowSearchLoader] = useState(false);
    const query = new URLSearchParams(location.search).get('search');
    const isSearching = Boolean(query);

    useEffect(() => {
        const fetchDelayId = setTimeout(() => {
            dispatch(fetchPopularMovies({ page: currentPage }));
            dispatch(fetchMoviesGenres());
        }, 1000);

        return () => clearTimeout(fetchDelayId);
    }, [dispatch, currentPage]);

    useEffect(() => {
        if (isSearching) {
            setShowSearchLoader(true);
            const searchDelayId = setTimeout(() => {
                dispatch(searchMovies(query));
                setShowSearchLoader(false);
            }, 1000);

            return () => clearTimeout(searchDelayId);
        }
    }, [dispatch, query, isSearching]);

    return (
        <>
            {
                showSearchLoader ||
                    (popularMoviesFetchStatus === loadingStatus || moviesGenresFetchStatus === loadingStatus) ?
                    <Loader /> :
                    (
                        popularMoviesFetchStatus === errorStatus || moviesGenresFetchStatus === errorStatus ?
                            <Error /> :
                            <MainContent />
                    )
            }
        </>
    );
}

export default MoviesListPage;