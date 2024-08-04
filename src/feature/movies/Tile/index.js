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
import { MoviePoster } from "./TileElements/poster/MoviePoster";

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
            <Star />
            <Rating />
            <Votes />
        </RatingContainer>


    </TileStyled>
);

export default Tile;