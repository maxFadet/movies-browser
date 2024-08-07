import { DetailsTile } from "../../../common/DetailsTile"
import { Tile } from "../../../common/Tile";
import { Tags } from "../../../common/Tags";
import { DetatailsPageTileList } from "../../../common/DetailsPageTileList";
import { Rates } from "../../../common/Rates";
import { Details } from "../../../common/Details"

export const MovieDetailsPage = () => {

    return (
        <>
            <DetailsTile
                image="https://raw.githubusercontent.com/maxFadet/movies-browser/f1d4c789e1dd080758002ae1153b527f2c7d70d9/src/poster.png"
                mainDetails={
                    <Details
                        header="Mulan"
                        year="2020"
                        extraContent={
                            <>
                                <Tags />
                                <Rates />
                            </>
                        }
                    />
                }
                description=" A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father."
            />
            <DetatailsPageTileList
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
        </>
    )
}