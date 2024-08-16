import { useNavigate } from "react-router-dom";
import { toMovie } from "../../../../routes";
import { films } from './filmsData';
import {
    StyledTile,
    MovieInfo,
    MovieTitle,
    MovieSubTitle,
    MovieTags,
    MovieTag,
    RatingWrapper,
    RatingStar,
    RatingNumber,
    VoteCount,
    MoviePoster,
    MoviesSection,
    Title,
    Rating
} from "./styled";

export const Cast = () => {
    const navigate = useNavigate();

    const handleMovieClick = (id) => {
        navigate(toMovie({ id }));
    };

    return (
        <MoviesSection>
            <Title>Movies - cast (4)</Title>
            {films.map((film, index) => (
                <StyledTile key={index} onClick={() => handleMovieClick(film.id)}>
                    <MoviePoster src={film.photo} alt={film.name} />
                    <MovieInfo>
                        <MovieTitle>{film.name}</MovieTitle>
                        <MovieSubTitle>{film.year}</MovieSubTitle>
                        <MovieTags>
                            <MovieTag>{film.genra}</MovieTag>
                            <MovieTag>{film.genra2}</MovieTag>
                        </MovieTags>
                        <RatingWrapper>
                            <Rating>
                                <RatingStar />
                                <RatingNumber>{film.rate}</RatingNumber>
                            </Rating>
                            <VoteCount>{film.vote}</VoteCount>
                        </RatingWrapper>
                    </MovieInfo>
                </StyledTile>
            ))}
        </MoviesSection>
    );
};