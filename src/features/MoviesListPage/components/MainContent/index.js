import { useEffect } from "react";
import { Tile } from '../../../../common/components/Tile';
import { GenresList } from '../../../../common/components/GenresList';
import { Rates } from '../../../../common/components/Rates/components';
import { toMovie } from "../../../../routes";
import { MoviesTilesList } from '../../../../common/components/MoviesTilesList';
import { Container } from '../../../../common/components/Container';
import { Pagination } from '../../../../common/components/Pagination';
import { getYear } from '../../../../common/functions/getYear';
import { useNavigationToPage } from '../../../../useNavigation';
import { usePopularMovies } from './usePopularMovies';
import { fetchMoviesGenres } from '../../../../common/slices/moviesGenresSlice';
import { useDispatch } from "react-redux";
import { Loader } from "../../../../common/components/Loader";
import { Error } from "../../../../common/components/Error";
import { errorStatus, loadingStatus } from '../../../../common/constants/requestStatuses';

export const MoviesListPage = () => {
    const dispatch = useDispatch();
    const handleTileClick = useNavigationToPage();
    const { popularMovies } = usePopularMovies();
    const movieList = popularMovies.data;

    useEffect(() => {
        dispatch(fetchMoviesGenres());
    }, [dispatch]);

    if (popularMovies.status === loadingStatus) {
        return <Loader extraTopMargin />;
    }

    if (popularMovies.status === errorStatus) {
        return <Error />;
    }

    return (
        <Container>
            <MoviesTilesList
                header="Popular movies"
                content={
                    movieList.map(({ id, title, poster_path, release_date, vote_average, vote_count, genre_ids }) => (
                        <Tile
                            key={id}
                            id={id}
                            image={poster_path}
                            title={title}
                            subInfo={getYear(release_date)}
                            navigateTo={() => handleTileClick(toMovie, id)}
                            extraContent={
                                <>
                                    <GenresList genresIds={genre_ids} />
                                    <Rates
                                        voteAverage={vote_average}
                                        voteCount={vote_count}
                                        hideTotalScore={true} />
                                </>
                            }
                        />
                    ))
                }
            />
            <Pagination />
        </Container>
    );
};