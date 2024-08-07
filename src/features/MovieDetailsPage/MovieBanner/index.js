import { Rates } from "../../../common/Rates";
import {
    StyledMovieBanner,
    Title,
    MainInfo,
} from "./styled";


export const MovieBanner = ({
    poster,
    title,
}) => {

    return (
        <StyledMovieBanner $poster={poster}>
            <MainInfo>
                <Title>{title}</Title>
                <Rates mainInfo />
            </MainInfo>
        </StyledMovieBanner>
    );
};