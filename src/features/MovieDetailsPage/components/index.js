import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMoviesDetailsList, selectFetchMoviesDetailsListStatus } from "../slices/moviesDetailsListSlice";
import { MovieBanner } from "./MovieBanner";
import { PageContent } from "../../../common/PageContent";
import { MovieDetailsMainContent } from "./MovieDetailsMainContent";
import { fetchMoviesCreditsList, selectMoviesCreditsListFetchStatus } from "../slices/moviesCredditsListSlice";
import { Loader } from "../../../common/Loader";
import { Error } from "../../../common/Error";
import { NoResults } from "../../../common/NoResultsPage";
import { loadingStatus } from "../../../requestStatuses/loadingStatus";
import { errorStatus } from "../../../requestStatuses/errorStatus";
import { successStatus } from "../../../requestStatuses/successStatus";

export const MovieDetailsPage = () => {
    const fetchMoviesDetailsListStatus = useSelector(selectFetchMoviesDetailsListStatus);
    const fetchMoviesCreditsListStatus = useSelector(selectMoviesCreditsListFetchStatus);

    const isLoading = fetchMoviesDetailsListStatus === loadingStatus || fetchMoviesCreditsListStatus === loadingStatus;
    const isError = fetchMoviesDetailsListStatus === errorStatus || fetchMoviesCreditsListStatus === errorStatus
    const isSuccess = fetchMoviesDetailsListStatus === successStatus && fetchMoviesCreditsListStatus === successStatus;

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchDelayId = setTimeout(() => {
            dispatch(fetchMoviesDetailsList());
            dispatch(fetchMoviesCreditsList());
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
            <NoResults />
        )
    );
}
