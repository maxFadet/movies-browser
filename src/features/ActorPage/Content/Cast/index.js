import React from "react";
import { useNavigate } from "react-router-dom";
import { toMovie } from "../../../../routes";
import { useSelector } from "react-redux";
import { selectCast } from "../../actorDetailsSlice";
import { Tile } from "../../../../common/components/Tile";
import { MoviesTilesList } from "../../../../common/components/MoviesTilesList";
import { GenresList } from "../../../../common/components/GenresList";
import { Rates } from "../../../../common/components/Rates";

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
                cast.map(({ id, title, poster_path, character, genre_ids, vote_average, vote_count }, index) => (
                    <Tile
                        key={index}
                        id={id}
                        image={poster_path}
                        title={title}
                        subInfo={character}
                        navigateTo={() => handleMovieClick(id)}
                        extraContent={
                            <>
                                <GenresList genresIds={genre_ids} />
                                <Rates voteAverage={vote_average} voteCount={vote_count} hideTotalScore={true} />
                            </>
                        }
                    />
                ))}
        />
    );
};
