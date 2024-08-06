import React from "react";
import {
    TileStyled,
    PosterContainer,
    TileHeader,
    TileTitle,
    MovieYear,
    RatingContainer,
    Rating,
    Votes,
    Tag,
    Tags
} from "./styled";
import { MoviePoster } from "./TileElements/MoviePoster";
import { StarShape } from "./TileElements/StarShape";

const Tile = ({ title, year, genres, rate, votes, poster, onClick }) => (
    <TileStyled onClick={onClick}>
        <PosterContainer>
            <MoviePoster src={poster} alt={title} />
        </PosterContainer>
        <TileHeader>
            <TileTitle>{title}</TileTitle>
            <MovieYear>{year}</MovieYear>
            <Tags>
                {genres.map((genre, index) => (
                    <Tag key={index}>{genre}</Tag>
                ))}
            </Tags>
        </TileHeader>
        <RatingContainer>
            <StarShape />
            <Rating>{rate}</Rating>
            <Votes>{votes} votes</Votes>
        </RatingContainer>
    </TileStyled>
);

export default Tile;
