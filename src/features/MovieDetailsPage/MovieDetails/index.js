import { DetailsTile } from "../../../common/DetailsTile"
import { Tile } from "../../../common/Tile";
import { GenresList } from "../../../common/GenresList";
import { PeopleTilesList } from "../../../common/PeopleTilesList";
import { MoviesTilesList } from "../../../common/MoviesTilesList";
import { Rates } from "../../../common/Rates";
import { Details } from "../../../common/Details"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovieDetailsApi } from "../../../movieDetailsSlice";

export const MovieDetailsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchDelayId = setTimeout(() => {
            dispatch(fetchMovieDetailsApi());
        }, 1000);

        return () => clearTimeout(fetchDelayId);
    }, [dispatch]);

    return (
        <>
            <DetailsTile
                // image={poster}
                mainDetails={
                    <Details
                        // header={title}
                        year="2020"
                        extraContent={
                            <>
                                <GenresList />
                                <Rates />
                            </>
                        }
                        movie
                    />
                }
            // overview={overview}
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