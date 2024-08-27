import React from 'react';
import { useSelector } from 'react-redux';
import { selectCast } from '../../../slices/actorDetailsSlice';
import { Tile } from "../../../../../common/components/Tile";
import { MoviesTilesList } from "../../../../../common/components/MoviesTilesList";
import { GenresList } from "../../../../../common/components/GenresList";
import { Rates } from "../../../../../common/components/Rates/components";

export const Cast = ({ onMovieClick }) => {
    const cast = useSelector(selectCast);
    const castCount = cast.length;

    return (
        <MoviesTilesList
            header={`Movies - cast (${castCount})`}
            content={
                cast.map(({ id, title, poster_path, character, genre_ids, vote_average, vote_count }, index) => (
                    <Tile
                        key={index}
                        id={id}
                        image={poster_path}
                        title={title}
                        subInfo={character}
                        navigateTo={() => onMovieClick(id)}
                        extraContent={
                            <>
                                <GenresList genresIds={genre_ids} />
                                <Rates voteAverage={vote_average} voteCount={vote_count} hideTotalScore={true} />
                            </>
                        }
                    />
                ))
            }
        />
    );
};