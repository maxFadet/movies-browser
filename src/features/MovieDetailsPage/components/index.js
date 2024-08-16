import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMoviesDetailsList, selectFetchMoviesDetailsListStatus } from "../slices/moviesDetailsListSlice";
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

export const MovieDetailsPage = () => {
    const fetchMoviesDetailsListStatus = useSelector(selectFetchMoviesDetailsListStatus);
    const fetchMoviesCreditsListStatus = useSelector(selectMoviesCreditsListFetchStatus);
    const fetchMoviesGenresStatus = useSelector(selectMoviesGenresFetchStatus);

    const isLoading =
        fetchMoviesDetailsListStatus === loadingStatus ||
        fetchMoviesCreditsListStatus === loadingStatus ||
        fetchMoviesGenresStatus === loadingStatus;

    const isError =
        fetchMoviesDetailsListStatus === errorStatus ||
        fetchMoviesCreditsListStatus === errorStatus ||
        fetchMoviesGenresStatus === errorStatus

    const isSuccess =
        fetchMoviesDetailsListStatus === successStatus &&
        fetchMoviesCreditsListStatus === successStatus &&
        fetchMoviesGenresStatus === successStatus

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchDelayId = setTimeout(() => {
            dispatch(fetchMoviesDetailsList());
            dispatch(fetchMoviesCreditsList());
            dispatch(fetchMoviesGenres());
        }, 1000);
        return () => clearTimeout(fetchDelayId);
    }, [dispatch]);

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
