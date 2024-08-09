import { DetailsTile } from "../../../common/DetailsTile"
import { Tile } from "../../../common/Tile";
import { GenresList } from "../../../common/GenresList";
import { PeopleTilesList } from "../../../common/PeopleTilesList";
import { MoviesTilesList } from "../../../common/MoviesTilesList";
import { Rates } from "../../../common/Rates";

export const MovieDetailsMainContent = () => {
    return (
        <>
            <DetailsTile
                extraContent={
                    <>
                        <GenresList />
                        <Rates />
                    </>
                }
            />
            <PeopleTilesList
                header="Cast"
                content={
                    <>
                        <Tile
                            image="https://upload.wikimedia.org/wikipedia/commons/2/21/Johnny_Depp_2020.jpg"
                            title="John Depp"
                            subInfo="Mulan"
                        />
                        <Tile
                            image="https://upload.wikimedia.org/wikipedia/commons/2/21/Johnny_Depp_2020.jpg"
                            title="John Depp"
                            subInfo="Mulan"
                        />
                    </>
                }
            />
            <MoviesTilesList
                header="Popular movies"
                content={
                    <>
                        <Tile
                            image="https://media.themoviedb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
                            title="Dune"
                            subInfo="2020"
                            extraContent={
                                <>
                                    <GenresList />
                                    <Rates />
                                </>
                            }
                        />
                        <Tile
                            image="https://media.themoviedb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
                            title="Dune"
                            subInfo="2020"
                            extraContent={
                                <>
                                    <GenresList />
                                    <Rates />
                                </>
                            }
                        />
                    </>
                }
            />
        </>
    )
}