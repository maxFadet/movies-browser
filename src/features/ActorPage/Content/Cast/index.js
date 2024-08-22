import React from "react";
import { useNavigate } from "react-router-dom";
import { toMovie } from "../../../../routes";
import { useSelector } from "react-redux";
import { selectCast } from "../../actorDetailsSlice";
import { MovieTile } from "../../../../common/MovieTile";
import { MoviesTilesList } from "../../../../common/MoviesTilesList";

export const Cast = () => {
    const cast = useSelector(selectCast);
    const navigate = useNavigate();

    const handleMovieClick = (id) => {
        navigate(toMovie({ id }));
    };

    return (
        <MoviesTilesList
            header="Movies - cast"
            content={
                cast.map((movie, index) => (
                    <MovieTile
                        key={index}
                        movie={movie}
                        handleMovieClick={handleMovieClick}
                    />
                ))}
        />
    );
};