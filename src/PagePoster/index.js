import {
    StyledPagePoster,
    MainInfo,
    Title,
    Score,
    Votes,
    Rates,
    TotalScore,
    StyledStarIcon
} from "./styled";


export const PagePoster = () => {

    return (
        <StyledPagePoster>
                    <Title>Mulan long title</Title>
                    <Rates>
                        <StyledStarIcon />
                        <Score>
                            7,8 
                            <TotalScore>
                                /10
                            </TotalScore>
                        </Score>
                        <Votes>335 votes</Votes>
                    </Rates>
        </StyledPagePoster>
    );
};