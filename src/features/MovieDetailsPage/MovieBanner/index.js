import { Rates } from "../../../common/Rates";
import {
    StyledPagePoster,
    Title,
    MainInfo,
} from "./styled";


export const MovieBanner = ({
    poster,
    title,
}) => {

    return (
        <StyledPagePoster $poster={poster}>
            <MainInfo>
                <Title>{title}</Title>
                <Rates mainInfo />
            </MainInfo>
        </StyledPagePoster>
    );
};