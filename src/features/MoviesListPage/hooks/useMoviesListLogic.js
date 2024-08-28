import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { queryKey } from "../../../common/constants/queryKey";
import { loadingStatus, errorStatus } from "../../../common/constants/requestStatuses";
import { fetchPopularMovies, selectCurrentPage, selectPopularMoviesFetchStatust } from "../slices/popularMoviesSlice";
import { fetchMoviesGenres, selectMoviesGenresFetchStatus } from "../../../common/slices/moviesGenresSlice";
import { checkFetchStates } from "../../../common/functions/checkFetchStates";
import { searchMovies } from "../../../common/slices/searchMoviesSlice";


export const useMoviesListLogic = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const currentPage = useSelector(selectCurrentPage);
    // const totalPages = useSelector(selectTotalPages);

    const popularMoviesFetchStatus = useSelector(selectPopularMoviesFetchStatust);
    const moviesGenresFetchStatus = useSelector(selectMoviesGenresFetchStatus);

    const [showSearchLoader, setShowSearchLoader] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const query = new URLSearchParams(location.search).get(queryKey);
    const isSearching = Boolean(query);

    const isLoading = checkFetchStates([popularMoviesFetchStatus, moviesGenresFetchStatus], loadingStatus) || showSearchLoader || isTransitioning;
    const isError = checkFetchStates([popularMoviesFetchStatus, moviesGenresFetchStatus], errorStatus);

    useEffect(() => {
        dispatch(fetchPopularMovies({ page: currentPage }));
        dispatch(fetchMoviesGenres());
    }, [dispatch, currentPage]);

    useEffect(() => {
        if (isLoading) {
            setShowSearchLoader(true);
            const searchDelayId = setTimeout(() => {
                dispatch(searchMovies(query));
                setShowSearchLoader(false);
            }, 1000);

            return () => clearTimeout(searchDelayId);
        }
    }, [dispatch, query, isLoading]);

    useEffect(() => {
        setIsTransitioning(true);
        const transitionDelayId = setTimeout(() => {
            setIsTransitioning(false);
        }, 1000);

        return () => clearTimeout(transitionDelayId);
    }, [location.pathname]);

    return [isLoading, isError];
};