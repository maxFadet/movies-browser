import { Rates } from "../Rates";
import {
    StyledPagePoster,
    Title,
    MainInfo,
} from "./styled";


export const PosterCard = () => {

    return (
        <StyledPagePoster>
            <MainInfo>
                <Title>Mulan long title</Title>
                <Rates />
            </MainInfo>
        </StyledPagePoster>
    );
};