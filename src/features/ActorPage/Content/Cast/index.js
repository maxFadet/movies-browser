import React from 'react';
import { useNavigate } from "react-router-dom";
import { toMovie } from "../../../../routes";
import { useSelector } from 'react-redux';
import { selectCast } from '../../actorDetailsSlice';
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
    const cast = useSelector(selectCast);
    const navigate = useNavigate();

    const handleMovieClick = (id) => {
        navigate(toMovie({ id }));
    };

    return (
        <MoviesSection>
            <Title>Movies - cast</Title>
            {cast.map((movie, index) => (
                <StyledTile key={index} onClick={() => handleMovieClick(movie.id)}>
                    <MoviePoster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <MovieInfo>
                        <MovieTitle>{movie.title}</MovieTitle>
                        <MovieSubTitle>{new Date(movie.release_date).getFullYear()}</MovieSubTitle>
                        <MovieTags>
                            {movie.genre_ids.map((genreId, index) => (
                                <MovieTag key={index}>{genreId}</MovieTag>
                            ))}
                        </MovieTags>
                        <RatingWrapper>
                            <Rating>
                                <RatingStar />
                                <RatingNumber>{movie.vote_average}</RatingNumber>
                            </Rating>
                            <VoteCount>{movie.vote_count} votes</VoteCount>
                        </RatingWrapper>
                    </MovieInfo>
                </StyledTile>
            ))}
        </MoviesSection>
    );
};