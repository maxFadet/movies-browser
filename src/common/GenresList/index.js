import { useSelector } from "react-redux";
import { StyledGenresList, Genre } from "./styled";
import { selectGenres } from "../../features/MovieDetailsPage/slices/movieDetailsSlice";

export const GenresList = () => {
    const genres = useSelector(selectGenres);

    return (
        <StyledGenresList>
            {
                genres.map(({ id, name }) => (
                    <Genre key={id}>
                        {name}
                    </Genre>
                ))
            }
        </StyledGenresList>
    );
}