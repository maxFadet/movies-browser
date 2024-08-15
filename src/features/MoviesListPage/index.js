import { selectPopularMoviesFetchStatust, fetchPopularMovies } from "../../popularMoviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadingStatus } from "../../requestStatuses/loadingStatus";
import { errorStatus } from "../../requestStatuses/errorStatus";
import { Loader } from "../../common/Loader";
import { Error } from "../../common/Error";
import { MainContent } from "./MainContent";
import { fetchMoviesGenres, selectMoviesGenresFetchStatus } from "../../moviesGenresSlice";

function MoviesListPage() {
    const dispatch = useDispatch();

    const popularMoviesFetchStatus = useSelector(selectPopularMoviesFetchStatust);
    const moviesGenresFetchStatus = useSelector(selectMoviesGenresFetchStatus);

    useEffect(() => {
        const popularMoviesFetchDelayId = setTimeout(() => {
            dispatch(fetchPopularMovies());
            dispatch(fetchMoviesGenres());
        }, 1000)

        return () => clearTimeout(popularMoviesFetchDelayId);
    }, [dispatch]);

    return (
        <>
            {
                popularMoviesFetchStatus === loadingStatus || moviesGenresFetchStatus === loadingStatus?
                    <Loader /> :
                    (
                        popularMoviesFetchStatus === errorStatus || moviesGenresFetchStatus === errorStatus?
                            <Error /> :
                            <MainContent />
                    )
            }
        </>
    );
}

export default MoviesListPage;