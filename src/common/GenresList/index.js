import { useSelector } from "react-redux";
import { StyledGenresList, Genre } from "./styled";
import { selectGenres } from "../../movieDetailsSlice";

export const GenresList = () => {
    const genres = useSelector(selectGenres);
    
    return (
        <StyledGenresList>
            {/* {
                fechedGenresList ?
                    fechedGenresList.filter(({ id }) => (
                        movieGenresIds.includes(id)
                    )).map(({ name, id }) => (
                        <Genre key={id}>{name}</Genre>
                    )) :
                    <></>
            } */}
        </StyledGenresList>
    );
}