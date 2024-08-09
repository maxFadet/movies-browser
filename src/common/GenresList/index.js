import { useSelector } from "react-redux";
import { StyledGenresList, Genre } from "./styled";
import { selectGenres } from "../../movieDetailsSlice";

export const GenresList = () => {
    const genres = useSelector(selectGenres);
    
    return (
        <StyledGenresList>
            {
                genres && (
                    genres.map(({ id, name }) => (
                        <Genre key={id}>
                            {name}
                        </Genre>
                    ))
                )
            }
        </StyledGenresList>
    );
}