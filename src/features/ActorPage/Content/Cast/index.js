import React from "react";
import { useNavigate } from "react-router-dom";
import { toMovie } from "../../../../routes";
import { useSelector } from "react-redux";
import { selectCast } from "../../actorDetailsSlice";
import { MoviesSection, Title } from "./styled";
import { MovieTile } from "../../../../common/MovieTile";

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
                <MovieTile
                    key={index}
                    movie={movie}
                    handleMovieClick={handleMovieClick}
                />
            ))}
        </MoviesSection>
    );
};