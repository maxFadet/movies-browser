import {
    StyledDetailsCard,
    Details,
    Poster,
    Header,
    Year,
    Production,
    Tags,
    Tag,
    Description,
    Date,
    KeyWord,
} from "./styled";
import { Rates } from "../Rates";


export const DetailsCard = () => {
    return (
        <StyledDetailsCard>
            <Poster
            // src="https://raw.githubusercontent.com/maxFadet/movies-browser/f1d4c789e1dd080758002ae1153b527f2c7d70d9/src/poster.png"
            // alt=""
            >
               
            </Poster>
            <Details>
                <Header>Mulan</Header>
                <Year>2020</Year>
                <Production>
                    <KeyWord>Production:</KeyWord> China, United States of America
                </Production>
                <Date>
                    <KeyWord>Release date:</KeyWord> 24.10.2020
                </Date>
                <Tags>
                    <Tag>Action</Tag>
                    <Tag>Adventure</Tag>
                    <Tag>Drama</Tag>
                </Tags>
                <Rates details />
            </Details>
            <Description>
                A young Chinese maiden disguises herself as a male warrior in order to save her father.
                Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.
            </Description>
        </StyledDetailsCard>
    );
}