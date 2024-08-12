import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    fetchMovieDetailsApi,
    selectfetchMovieDetailsStatus
} from "./../slices/movieDetailsSlice";
import { MovieBanner } from "./MovieBanner";
import { PageContent } from "../../../common/PageContent";
import { MovieDetailsMainContent } from "./MovieDetailsMainContent";
import { fetchMovieCredits, selectMovieCreditsFetchStatus } from "../slices/movieCreditsSlice";
import { Loader } from "../../../common/Loader";
import { Error } from "../../../common/Error";
import { Container } from "../../../common/Container";

export const MovieDetailsPage = () => {
    const fetchMovieDetailsStatus = useSelector(selectfetchMovieDetailsStatus);
    const fetchMovieCreditsStatus = useSelector(selectMovieCreditsFetchStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchDelayId = setTimeout(() => {
            dispatch(fetchMovieDetailsApi());
            dispatch(fetchMovieCredits());
        }, 1500);

        return () => clearTimeout(fetchDelayId);
    }, [dispatch]);

    return (
        <>
            {
                fetchMovieDetailsStatus === "loading" ||
                    fetchMovieCreditsStatus === "loading" ?
                    <Loader /> :
                    fetchMovieDetailsStatus === "error" ||
                        fetchMovieCreditsStatus === "error" ?
                        <>
                            <Error />
                        </> :
                        <>
                            <MovieBanner />
                            <Container>
                                <MovieDetailsMainContent />
                            </Container>
                        </>}
        </>
    );
}