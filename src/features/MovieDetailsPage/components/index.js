import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    fetchMovieDetailsApi,
    selectfetchMovieDetailsStatus
} from "../slices/movieDetailsSlice";
import { MovieBanner } from "../components/MovieBanner";
import { Loader } from "../../../common/Loader";
import { Error } from "../../../common/Error";
import { Container } from "../../../common/Container";
import { Details } from "./Details";
import { Cast } from "./Cast";
import { Crew } from "./Crew";
import { fetchMovieCredits, selectMovieCreditsFetchStatus } from "../slices/movieCreditsSlice";

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
            {fetchMovieDetailsStatus === "loading" || fetchMovieCreditsStatus === "loading" ? (
                <Loader />
            ) : fetchMovieDetailsStatus === "error" || fetchMovieCreditsStatus === "error" ? (
                <Error />
            ) : (
                <>
                    <MovieBanner />
                    <Container>
                        <Details />
                        <Cast />
                        <Crew />
                    </Container>
                </>
            )}
        </>
    );
};
