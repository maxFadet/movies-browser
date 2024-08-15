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
    Tags,
    TileDescription,
    StyledMoviePoster,
    StyledStarShape,
} from "./styled";

const Tile = ({ title, year, genres, rate, votes, poster, onClick }) => (
    <TileStyled onClick={onClick}>
        <PosterContainer>
            <StyledMoviePoster src={poster} alt={title} />
        </PosterContainer>
        <TileDescription>
            <TileHeader>
                <TileTitle>{title}</TileTitle>
                <MovieYear>{year}</MovieYear>
                {genres.length > 0 && (
                    <Tags>
                        {genres.map((genre, index) => (
                            <Tag key={index}>{genre}</Tag>
                        ))}
                    </Tags>
                )}
            </TileHeader>
            <RatingContainer>
                <StyledStarShape />
                <Rating>{rate}</Rating>
                <Votes>{votes} votes</Votes>
            </RatingContainer>
        </TileDescription>

    </TileStyled>
);

export default Tile;
