import React from "react";
import { getYear } from "../../functions/getYear";
import {
    StyledTile,
    MoviePoster,
    MovieInfo,
    MovieTitle,
    MovieSubTitle,
} from "./styled";
import { GenresList } from "../GenresList";
import { Rates } from "../../common/Rates";
import { BASE_IMAGE_URL, IMAGE_WIDTH } from "../../constants/config";

export const MovieTile = ({ movie, handleMovieClick }) => {
    const posterUrl = movie.poster_path
        ? `${BASE_IMAGE_URL}${IMAGE_WIDTH}${movie.poster_path}`
        : null;

    return (
        <StyledTile onClick={() => handleMovieClick(movie.id)}>
            {posterUrl ? (
                <MoviePoster src={posterUrl} alt={movie.title} />
            ) : (
                <MoviePoster as="div" $placeholderPoster />
            )}
            <MovieInfo>
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieSubTitle>{getYear(movie.release_date)}</MovieSubTitle>
                <GenresList genresIds={movie.genre_ids} />
                <Rates
                    voteAverage={movie.vote_average}
                    voteCount={movie.vote_count}
                    hideTotalScore={true}
                />
            </MovieInfo>
        </StyledTile>
    );
};