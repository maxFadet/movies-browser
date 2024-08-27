import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    selectPopularMoviesFetchStatust, fetchPopularMovies, selectCurrentPage
    // , selectTotalPages 
} from '../../../features/MoviesListPage/slices/popularMoviesSlice';
import { searchMovies } from '../../../common/slices/searchMoviesSlice';
import { fetchMoviesGenres, selectMoviesGenresFetchStatus } from '../../../common/slices/moviesGenresSlice';
import { loadingStatus, errorStatus } from "../../../common/constants/requestStatuses";
import { Loader } from '../../../common/components/Loader';
import { Error } from '../../../common/components/Error';
import { MainContent } from './MainContent';

function MoviesListPage() {
    const dispatch = useDispatch();
    const location = useLocation();
    const currentPage = useSelector(selectCurrentPage);
    // const totalPages = useSelector(selectTotalPages);

    const popularMoviesFetchStatus = useSelector(selectPopularMoviesFetchStatust);
    const moviesGenresFetchStatus = useSelector(selectMoviesGenresFetchStatus);

    const [showSearchLoader, setShowSearchLoader] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const query = new URLSearchParams(location.search).get('search');
    const isSearching = Boolean(query);

    useEffect(() => {
        dispatch(fetchPopularMovies({ page: currentPage }));
        dispatch(fetchMoviesGenres());
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

    useEffect(() => {
        setIsTransitioning(true);
        const transitionDelayId = setTimeout(() => {
            setIsTransitioning(false);
        }, 1000);

        return () => clearTimeout(transitionDelayId);
    }, [location.pathname]);

    return (
        <>
            {
                showSearchLoader ||
                isTransitioning || 
                popularMoviesFetchStatus === loadingStatus ||
                moviesGenresFetchStatus === loadingStatus ?
                    <Loader showText={false} /> :
                    (popularMoviesFetchStatus === errorStatus || moviesGenresFetchStatus === errorStatus ?
                        <Error /> :
                        <MainContent />
                    )
            }
        </>
    );
}

export default MoviesListPage;