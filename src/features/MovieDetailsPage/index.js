import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetailsApi, selectFetchStatus } from "../../movieDetailsSlice";
import { useEffect } from "react";
import { MovieBanner } from "./MovieBanner";
import { PageContent } from "../../common/PageContent";
import { MovieDetailsMainContent } from "./MovieDetailsMainContent";

export const MovieDetailsPage = () => {
    const fetchStatus = useSelector(selectFetchStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchDelayId = setTimeout(() => {
            dispatch(fetchMovieDetailsApi());
        }, 1500);

        return () => clearTimeout(fetchDelayId);
    }, [dispatch]);

    return (
        <>
            {fetchStatus === "loading" ?
                <>Loading...</> :
                fetchStatus === "error" ?
                    <>
                        Error
                    </> :
                    <>
                        <MovieBanner />
                        <PageContent
                            content={<MovieDetailsMainContent />}
                        />
                    </>}
        </>
    );
}