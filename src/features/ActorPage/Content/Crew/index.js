import React from "react";
import { useNavigate } from "react-router-dom";
import { toMovie } from "../../../../routes";
import { useSelector } from "react-redux";
import { selectCrew } from "../../actorDetailsSlice";
import { MovieTile } from "../../../../common/MovieTile";
import { MoviesTilesList } from "../../../../common/MoviesTilesList";

export const Crew = () => {
    const crew = useSelector(selectCrew);
    const navigate = useNavigate();

    const handleMovieClick = (id) => {
        navigate(toMovie({ id }));
    };

    return (
        <MoviesTilesList
            header="Movies - crew"
            content={
                crew.map((movie, index) => (
                    <MovieTile
                        key={index}
                        movie={movie}
                        handleMovieClick={handleMovieClick}
                    />
                ))}
        />
    );
};