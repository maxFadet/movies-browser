import { usePopularMovies } from './usePopularMovies';
import { Loader } from '../../../../common/components/Loader';
import { Error } from '../../../../common/components/Error';
import { errorStatus, loadingStatus } from '../../../../common/constants/requestStatuses';
import { MoviesList } from '../../../movieList';
import { Pagination } from '../../../../common/components/Pagination';
import { Container } from '../../../../common/components/Container';
import { getYear } from '../../../../common/functions/getYear';

export const MoviesListPage = () => {
    const { popularMovies } = usePopularMovies();
    const movieList = popularMovies.data;

    if (popularMovies.status === loadingStatus) {
        return <Loader extraTopMargin />;
    }

    if (popularMovies.status === errorStatus) {
        return <Error />;
    }

    return (
        <Container>
            <MoviesList
                header="Popular movies"
                movies={movieList}
                subInfoExtractor={({ release_date }) => getYear(release_date)}
                extra={true}
            />
            <Pagination />
        </Container>
    );
};