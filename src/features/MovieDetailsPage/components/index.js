import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMoviesDetailsList, selectFetchMoviesDetailsListStatus } from "../slices/moviesDetailsListSlice";
import { MovieBanner } from "./MovieBanner";
import { PageContent } from "../../../common/PageContent";
import { MovieDetailsMainContent } from "./MovieDetailsMainContent";
import { fetchMovieCredits, selectMovieCreditsFetchStatus } from "../slices/movieCreditsSlice";
import { Loader } from "../../../common/Loader";
import { Error } from "../../../common/Error";
import { NoResults } from "../../../common/NoResultsPage";

export const MovieDetailsPage = () => {
    const fetchMoviesDetailsListStatus = useSelector(selectFetchMoviesDetailsListStatus);
    const fetchMovieCreditsStatus = useSelector(selectMovieCreditsFetchStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchDelayId = setTimeout(() => {
            dispatch(fetchMoviesDetailsList());
            dispatch(fetchMovieCredits());
        }, 1000);
        return () => clearTimeout(fetchDelayId);
    }, [dispatch]);

    const isLoading = fetchMoviesDetailsListStatus === "loading" || fetchMovieCreditsStatus === "loading";
    const isError = fetchMoviesDetailsListStatus === "error" || fetchMovieCreditsStatus === "error"
    const isSuccess = fetchMoviesDetailsListStatus === "success" && fetchMovieCreditsStatus === "success";

    return (
        isLoading ? (
            <Loader />
        ) : isError ? (
            <Error />
        ) : isSuccess ? (
            <>
                <MovieBanner />
                <PageContent
                    content={<MovieDetailsMainContent />}
                />
            </>
        ) : (
            <NoResults />
        )
    );
}