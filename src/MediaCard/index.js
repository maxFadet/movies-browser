import { Overview } from "../Overview";
import { Tile } from "../common/Tile";
import { StyledMediaCard, MediaSection, MediaHeader } from "./styled";

export const MediaCard = ({ header }) => {
    return (
        <StyledMediaCard>
            <MediaHeader>{header}</MediaHeader>
            <MediaSection>
                <Tile content={
                    <Overview
                        image="https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg"
                        name="Keanu Reeves"
                        movieInfo="Mulan"
                    />
                } />
                <Tile content={
                    <Overview
                        image="https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg"
                        name="Keanu Reeves"
                        movieInfo="Mulan"
                    />
                } />
                <Tile content={
                    <Overview
                        image="https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg"
                        name="Keanu Reeves"
                        movieInfo="Mulan"
                    />
                } />
                <Tile content={
                    <Overview
                        image="https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg"
                        name="Keanu Reeves"
                        movieInfo="Mulan"
                    />
                } />
                <Tile content={
                    <Overview
                        image="https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg"
                        name="Keanu Reeves"
                        movieInfo="Mulan"
                    />
                } />
                <Tile content={
                    <Overview
                        image="https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg"
                        name="Keanu Reeves"
                        movieInfo="Mulan"
                    />
                } />
                <Tile content={
                    <Overview
                        image="https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg"
                        name="Keanu Reeves"
                        movieInfo="Mulan"
                    />
                } />
            </MediaSection>
        </StyledMediaCard>
    );
}