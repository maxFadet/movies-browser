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
    TagsContainer,
    Tag
} from "./styled";
import { MoviePoster } from "./TileElements/poster/MoviePoster";

const Tile = () => (
    <TileStyled>
        <PosterContainer>
            <MoviePoster />
        </PosterContainer>
        <TileHeader>
            <TileTitle>movies title</TileTitle>
            <MovieYear>2020</MovieYear>
            <TagsContainer>
                <Tag />
            </TagsContainer>
        </TileHeader>
        <RatingContainer>
            <Star />
            <Rating />
            <Votes />
        </RatingContainer>


    </TileStyled>
);

export default Tile;