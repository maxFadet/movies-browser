import React from 'react';
import { useSelector } from 'react-redux';
import { selectCrew } from '../../../slices/actorDetailsSlice';
import { Tile } from "../../../../../common/components/Tile";
import { MoviesTilesList } from "../../../../../common/components/MoviesTilesList";
import { GenresList } from "../../../../../common/components/GenresList";
import { Rates } from "../../../../../common/components/Rates/components";

export const Crew = ({ onMovieClick }) => {
    const crew = useSelector(selectCrew);
    const crewCount = crew.length;

    return (
        <MoviesTilesList
            header={`Movies - crew (${crewCount})`}
            content={
                crew.map(({ id, title, poster_path, character, genre_ids, vote_average, vote_count }, index) => (
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