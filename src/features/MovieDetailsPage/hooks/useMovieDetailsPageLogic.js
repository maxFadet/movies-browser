import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
    selectMoviesCreditsListFetchStatus,
    selectMovieCreddits,
    fetchMoviesCreditsList,
    resetMoviesCreditsList
} from "../slices/moviesCredditsListSlice";
import {
    selectFetchMovieDetailsStatus,
    fetchMovieDetails,
    resetMovieDetails,
    selectMovieDetails
} from "../slices/movieDetailsSlice";
import { checkFetchStates } from "../../../common/functions/checkFetchStates";
import { loadingStatus, errorStatus, successStatus } from "../../../common/constants/requestStatuses";
import { useGenresList } from "../../../common/components/GenresList/useGenresList";

export const useMovieDetailsPageLogic = () => {
    const { id: movieId } = useParams();
    const dispatch = useDispatch();

    const movieDetailsFetchStatus = useSelector(selectFetchMovieDetailsStatus);
    const moviesCreditsListFetchStatus = useSelector(selectMoviesCreditsListFetchStatus);

    const movieDetails = useSelector(selectMovieDetails);
    const movieCredits = useSelector(selectMovieCreddits);

    const { genres } = useGenresList();

    const isLoading = checkFetchStates([movieDetailsFetchStatus, moviesCreditsListFetchStatus, genres.status], loadingStatus);
    const isError = checkFetchStates([movieDetailsFetchStatus, moviesCreditsListFetchStatus, genres.status], errorStatus);
    const isSuccess = checkFetchStates([movieDetailsFetchStatus, moviesCreditsListFetchStatus, genres.status], successStatus, true) &&
        movieDetails.title &&
        movieCredits.cast;

    useEffect(() => {
        dispatch(resetMovieDetails());
        dispatch(resetMoviesCreditsList());

        const fetchDataDelayId = setTimeout(() => {
            dispatch(fetchMovieDetails(movieId));
            dispatch(fetchMoviesCreditsList(movieId));
        }, 500);

        return () => clearTimeout(fetchDataDelayId);
    }, [dispatch, movieId]);

    return [isLoading, isError, isSuccess];
};