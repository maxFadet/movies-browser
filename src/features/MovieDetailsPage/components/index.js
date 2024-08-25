import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovieDetails, selectFetchMovieDetailsStatus, selectMovieDetails } from "../slices/movieDetailsSlice";
import { MainContent } from "./MainContent";
import { fetchMoviesCreditsList, selectMovieCreddits, selectMoviesCreditsListFetchStatus } from "../slices/moviesCredditsListSlice";
import { Loader } from "../../../common/components/Loader";
import { Error } from "../../../common/components/Error";
import { loadingStatus, successStatus, errorStatus } from "../../../common/constants/requestStatuses";
import { fetchMoviesGenres, selectMoviesGenresFetchStatus } from "../../../moviesGenresSlice";
import { useParams } from "react-router-dom";
import { NoResults } from "../../../common/components/NoResultsPage";

export const MovieDetailsPage = () => {
    const { id: movieId } = useParams();
    const dispatch = useDispatch();

    const movieDetailsFetchStatus = useSelector(selectFetchMovieDetailsStatus);
    const moviesCreditsListFetchStatus = useSelector(selectMoviesCreditsListFetchStatus);
    const moviesGenresFetchStatus = useSelector(selectMoviesGenresFetchStatus);
    const movieDetails = useSelector(selectMovieDetails);
    const movieCredits = useSelector(selectMovieCreddits);

    const isLoading =
        movieDetailsFetchStatus === loadingStatus ||
        moviesCreditsListFetchStatus === loadingStatus ||
        moviesGenresFetchStatus === loadingStatus;

    const isError =
        movieDetailsFetchStatus === errorStatus ||
        moviesCreditsListFetchStatus === errorStatus ||
        moviesGenresFetchStatus === errorStatus;

    const isSuccess =
        movieDetailsFetchStatus === successStatus &&
        moviesCreditsListFetchStatus === successStatus &&
        moviesGenresFetchStatus === successStatus;

    const isMovieDataComplete = isSuccess && movieDetails.title && movieCredits.cast;
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
                isMovieDataComplete ?
                    <MainContent /> :
                    <NoResults />
    );
};
