import { useNavigate } from "react-router-dom";
import { toMovie } from "../../../../routes";
import { films } from './filmsDataCrew';
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

export const Crew = () => {
    const navigate = useNavigate();

    const handleMovieClick = (id) => {
        navigate(toMovie({ id }));
    };

    return (
        <MoviesSection>
            <Title>Movies - crew (4)</Title>
            {films.map((film, index) => (
                <StyledTile key={index} onClick={() => handleMovieClick(film.id)}>
                    <MoviePoster src={film.photo} alt={film.name} />
                    <MovieInfo>
                        <MovieTitle>{film.name}</MovieTitle>
                        <MovieSubTitle>{film.year}</MovieSubTitle>
                        <MovieTags>
                            {film.genres.map((genre, index) => (
                                <MovieTag key={index}>{genre}</MovieTag>
                            ))}
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