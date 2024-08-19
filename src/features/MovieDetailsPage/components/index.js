import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovieDetails, selectFetchMovieDetailsStatus } from "../slices/movieDetailsSlice";
import { MovieBanner } from "./MovieBanner";
import { PageContent } from "../../../common/PageContent";
import { MovieDetailsMainContent } from "./MovieDetailsMainContent";
import { fetchMoviesCreditsList, selectMoviesCreditsListFetchStatus } from "../slices/moviesCredditsListSlice";
import { Loader } from "../../../common/Loader";
import { Error } from "../../../common/Error";
import { loadingStatus } from "../../../requestStatuses/loadingStatus";
import { errorStatus } from "../../../requestStatuses/errorStatus";
import { successStatus } from "../../../requestStatuses/successStatus";
import { fetchMoviesGenres, selectMoviesGenresFetchStatus } from "../../../moviesGenresSlice";
import { useParams } from "react-router-dom";

export const MovieDetailsPage = () => {
    const { id: movieId } = useParams();
    const fetchMovieDetailsStatus = useSelector(selectFetchMovieDetailsStatus);
    const fetchMoviesCreditsListStatus = useSelector(selectMoviesCreditsListFetchStatus);
    const fetchMoviesGenresStatus = useSelector(selectMoviesGenresFetchStatus);

    const isLoading =
        fetchMovieDetailsStatus === loadingStatus ||
        fetchMoviesCreditsListStatus === loadingStatus ||
        fetchMoviesGenresStatus === loadingStatus;

    const isError =
        fetchMovieDetailsStatus === errorStatus ||
        fetchMoviesCreditsListStatus === errorStatus ||
        fetchMoviesGenresStatus === errorStatus

    const isSuccess =
        fetchMovieDetailsStatus === successStatus &&
        fetchMoviesCreditsListStatus === successStatus &&
        fetchMoviesGenresStatus === successStatus

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchDelayId = setTimeout(() => {
            if (movieId) {
                dispatch(fetchMovieDetails(movieId));
                dispatch(fetchMoviesCreditsList(movieId));
            }
            dispatch(fetchMoviesGenres());
        }, 1000);
        return () => clearTimeout(fetchDelayId);
    }, [dispatch, movieId]);

    return (
        isLoading ? (
            <Loader />
        ) : isError ? (
            <Error />
        ) : isSuccess ? (
            <>
                <MovieBanner />
                <PageContent content={<MovieDetailsMainContent />} />
            </>
        ) : (
            <Error />
        )
    );
}
