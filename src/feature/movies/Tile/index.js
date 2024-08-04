import {
    TileStyled,
    PosterContainer,
    TileHeader,
    TileTitle,
    MovieYear,
    RatingContainer,
    Star,
    Rating,
    Votes,
    Tag,
    Tags
} from "./styled";
import { MoviePoster } from "./TileElements/MoviePoster";
import { StarShape } from "./TileElements/StarShape";

const Tile = () => (
    <TileStyled>
        <PosterContainer>
            <MoviePoster />
        </PosterContainer>
        <TileHeader>
            <TileTitle>movie title</TileTitle>
            <MovieYear>2020</MovieYear>
            <Tags>
                <Tag>Action</Tag>
                <Tag>Adventure</Tag>
                <Tag>Drama</Tag>
            </Tags>
        </TileHeader>
        <RatingContainer>
            <StarShape />
            <Rating>7,8</Rating>
            <Votes>35 votes</Votes>
        </RatingContainer>


    </TileStyled>
);

export default Tile;