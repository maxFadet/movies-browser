import { StyledGenresList, Genre } from "./styled";

export const GenresList = ({ genres }) => {

    return (
        <StyledGenresList>
            {genres && (
                genres.map(({ id, name }) => (
                    <Genre key={id}>
                        {name}
                    </Genre>
                )))
            }
        </StyledGenresList>
    );
};