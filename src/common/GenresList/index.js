import { StyledGenresList, Genre } from "./styled";
import { useSelector } from "react-redux";
import { findMoviesGenresById } from "../../moviesGenresSlice";

export const GenresList = ({ genresIds }) => {

    const genresFoundById = useSelector(state => findMoviesGenresById(state, genresIds));
    return (
        <StyledGenresList>
            {
                genresFoundById.map(({ id, name }) => (
                    <Genre key={id}>
                        {name}
                    </Genre>
                ))
            }
        </StyledGenresList>
    );
};