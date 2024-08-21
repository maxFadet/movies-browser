import { useNavigate } from "react-router-dom";
import { toMovie } from "../../../../routes";
import { useSelector } from 'react-redux';
import { selectCrew } from '../../actorDetailsSlice';
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
import { getYear } from "../../../../functions/getYear";
import { GenresList } from "../../../../common/GenresList";

export const Crew = () => {
    const crew = useSelector(selectCrew);
    const navigate = useNavigate();

    const handleMovieClick = (id) => {
        navigate(toMovie({ id }));
    };

    return (
        <MoviesSection>
            <Title>Movies - crew</Title>
            {crew.map((movie, index) => (
                <StyledTile key={index} onClick={() => handleMovieClick(movie.id)}>
                    <MoviePoster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <MovieInfo>
                        <MovieTitle>{movie.title}</MovieTitle>
                        <MovieSubTitle>{getYear(movie.release_date)}</MovieSubTitle>
                        <GenresList
                            genresIds={movie.genre_ids}
                        />
                        <RatingWrapper>
                            <Rating>
                                <RatingStar />
                                <RatingNumber>{movie.vote_average.toFixed(1)}</RatingNumber>
                            </Rating>
                            <VoteCount>{movie.vote_count} votes</VoteCount>
                        </RatingWrapper>
                    </MovieInfo>
                </StyledTile>
            ))}
        </MoviesSection>
    );
};
