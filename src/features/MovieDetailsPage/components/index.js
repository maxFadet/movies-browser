import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovieDetails, selectFetchMovieDetailsStatus, selectMovieDetails } from "../slices/movieDetailsSlice";
import { MainContent } from "./MainContent";
import { fetchMoviesCreditsList, selectMovieCreddits, selectMoviesCreditsListFetchStatus } from "../slices/moviesCredditsListSlice";
import { Loader } from "../../../common/components/Loader";
import { Error } from "../../../common/components/Error";
import { loadingStatus, successStatus, errorStatus } from "../../../common/constants/requestStatuses";
import { fetchMoviesGenres, selectMoviesGenresFetchStatus } from "../../../common/slices/moviesGenresSlice";
import { useParams } from "react-router-dom";
import { NoResults } from "../../../common/components/NoResultsPage";
import { checkFetchStates } from "../../../common/functions/checkFetchStates";

export const MovieDetailsPage = () => {
    const { id: movieId } = useParams();
    const dispatch = useDispatch();

    const movieDetailsFetchStatus = useSelector(selectFetchMovieDetailsStatus);
    const moviesCreditsListFetchStatus = useSelector(selectMoviesCreditsListFetchStatus);
    const moviesGenresFetchStatus = useSelector(selectMoviesGenresFetchStatus);
    const movieDetails = useSelector(selectMovieDetails);
    const movieCredits = useSelector(selectMovieCreddits);

    const isLoading = checkFetchStates([movieDetailsFetchStatus, moviesCreditsListFetchStatus, moviesGenresFetchStatus], loadingStatus);
    const isError = checkFetchStates([movieDetailsFetchStatus, moviesCreditsListFetchStatus, moviesGenresFetchStatus], errorStatus);
    const isSuccess = checkFetchStates([movieDetailsFetchStatus, moviesCreditsListFetchStatus, moviesGenresFetchStatus], successStatus, true) &&
        movieDetails.title &&
        movieCredits.cast;

    useEffect(() => {
        const fetchDataDelayId = setTimeout(() => {
            dispatch(fetchMovieDetails(movieId));
            dispatch(fetchMoviesCreditsList(movieId));
            dispatch(fetchMoviesGenres());
        }, 1000);

        return () => clearTimeout(fetchDataDelayId);
    }, [dispatch, movieId]);

    return (
        isLoading ?
            <Loader /> :
            isError ?
                <Error /> :
                isSuccess ?
                    <MainContent /> :
                    <NoResults />
    );
};
