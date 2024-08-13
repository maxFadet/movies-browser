import { selectPopularMoviesFetchStatust, fetchPopularMovies } from "../../popularMoviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadingStatus } from "../../requestStatuses/loadingStatus";
import { errorStatus } from "../../requestStatuses/errorStatus";
import { Loader } from "../../common/Loader";
import { Error } from "../../common/Error";
import { MainContent } from "./MainContent";

function MoviesListPage() {
    const dispatch = useDispatch();

    const popularMoviesFetchStatus = useSelector(selectPopularMoviesFetchStatust);

    useEffect(() => {
        const popularMoviesFetchDelayId = setTimeout(() => {
            dispatch(fetchPopularMovies());
        }, 1000)

        return () => clearTimeout(popularMoviesFetchDelayId);
    }, [dispatch]);

    return (
        <>
            {
                popularMoviesFetchStatus === loadingStatus ?
                    <Loader /> :
                    (
                        popularMoviesFetchStatus === errorStatus ?
                            <Error /> :
                            <MainContent />
                    )
            }
        </>
    );
}

export default MoviesListPage;
