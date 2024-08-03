import { TileStyled, PosterContainer, TileHeader, GenreContainer, Genre, TileTitle, MovieYear, RatingContainer, Star, Rating, Votes } from "./styled";
import { MoviePoster } from "./TileElements/poster/MoviePoster";

const Tile = ()=> (
    <TileStyled>
        <PosterContainer>
            <MoviePoster />
        </PosterContainer>
        <TileHeader>
            <TileTitle />
            <MovieYear />
        </TileHeader>
        <GenreContainer>
            <Genre />
        </GenreContainer>
        <RatingContainer>
            <Star />
            <Rating />
            <Votes />
        </RatingContainer>

        
    </TileStyled>
);

export default Tile;