import { TileStyled, PosterContainer, TileHeader, TileTitle, MovieYear, RatingContainer, Star, Rating, Votes, Poster, TagsContainer, Tag } from "./styled";
import { MoviePoster } from "./TileElements/poster/MoviePoster";

const Tile = () => (
    <TileStyled>
        <PosterContainer>
            <Poster>
                <MoviePoster />
            </Poster>
        </PosterContainer>
        <TileHeader>
            <TileTitle />
            <MovieYear />
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