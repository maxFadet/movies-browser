import { DetailsTile } from "../../../../common/DetailsTile";
import { GenresList } from "../../../../common/GenresList";
import { Rates } from "../../../../common/Rates";

export const Details = () => (
    <DetailsTile
        extraContent={
            <>
                <GenresList />
                <Rates />
            </>
        }
    />
);
