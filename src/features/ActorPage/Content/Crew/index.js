import { useNavigate } from "react-router-dom";
import { toMovie } from "../../../../routes";
import { useSelector } from 'react-redux';
import { selectCrew } from '../../actorDetailsSlice';
import {
    StyledTile,
    MovieInfo,
    MovieTitle,
    MovieSubTitle,
    RatingWrapper,
    RatingStar,
    RatingNumber,
    VoteCount,
    MoviePoster,
    MoviesSection,
    Title,
    Rating
} from "./styled";
import { GenresList } from "../../../../common/components/GenresList";
import { getYear } from "../../../../common/functions/getYear";
import { BASE_IMAGE_URL } from "../../../../common/constants/config";
import { IMAGE_WIDTH } from "../../../../common/constants/config";

export const Crew = () => {
    const crew = useSelector(selectCrew);
    const navigate = useNavigate();

    const handleMovieClick = (id) => {
        navigate(toMovie({ id }));
    };

    return (
        <MoviesSection>
            <Title>Movies - crew</Title>
            {crew.map((movie, index) => {
                const posterUrl = movie.poster_path ? `${BASE_IMAGE_URL}${IMAGE_WIDTH}${movie.poster_path}` : null;

                return (
                    <StyledTile key={index} onClick={() => handleMovieClick(movie.id)}>
                        {posterUrl ? (
                            <MoviePoster src={posterUrl} alt={movie.title} />
                        ) : (
                            <MoviePoster as="div" $placeholderPoster />
                        )}
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
                );
            })}
        </MoviesSection>
    );
};