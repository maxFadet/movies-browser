import {
    StyledDetailsCard,
    Details,
    Poster,
    Header,
    Year,
    DetailInfo,
    Description,
    DetailInfoType,
} from "./styled";
import { Rates } from "../Rates";
import { Tags } from "../common/Tags";

export const DetailsCard = () => {
    return (
        <StyledDetailsCard>
            <Poster
                src="https://raw.githubusercontent.com/maxFadet/movies-browser/f1d4c789e1dd080758002ae1153b527f2c7d70d9/src/poster.png"
                alt=""
            >
            </Poster>
            <Details>
                <Header>Mulan</Header>
                <Year>2020</Year>
                <DetailInfo>
                    <DetailInfoType>Production:</DetailInfoType> China, United States of America
                </DetailInfo>
                <DetailInfo>
                    <DetailInfoType>Release date:</DetailInfoType> 24.10.2020
                </DetailInfo>
                <Tags />
                <Rates details />
            </Details>
            <Description>
                A young Chinese maiden disguises herself as a male warrior in order to save her father.
                Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.
            </Description>
        </StyledDetailsCard>
    );
}