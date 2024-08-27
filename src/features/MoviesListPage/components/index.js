import { Loader } from '../../../common/components/Loader';
import { Error } from '../../../common/components/Error';
import { MainContent } from './MainContent';
import { useMoviesListLogic } from '../hooks/useMoviesListLogic';

function MoviesListPage() {
    const [isLoading, isError] = useMoviesListLogic();

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <Error />;
    }

    return (
        <MainContent />
    );
}

export default MoviesListPage;