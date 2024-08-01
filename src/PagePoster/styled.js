import styled from "styled-components";
import { ReactComponent as StarIcon } from "./Star.svg";

export const StyledPagePoster = styled.div`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    background-image: 
        url(https://github.com/maxFadet/movies-browser/blob/feature/movie-details/src/Poster-big.png?raw=true);
    background-size: 100%;
    background-position: top;
    background-repeat: no-repeat;

    box-shadow: inset 0px 10px 74px 110px 
        ${({ theme }) => theme.colors.black};
    height: 900px;
    padding: 0 50px;
    
    display: grid;
    align-content: end;
    grid-template-columns: 1fr;
    grid-gap: 24px;
`;

export const Title = styled.header`
    font-size: 64px;
    font-weight: 600;
`;

export const Rates = styled.div`
    display: grid;
   grid-template-areas: 
        "star score"
        "votes votes";
    grid-template-columns: repeat(2, auto);
    align-items: end;
    justify-content: start;
    grid-gap: 16px;
`;

export const Score = styled.p`
    font-size: 30px;
    font-weight: 500;
    margin: 0;
    grid-area: score;

`;

export const StyledStarIcon = styled(StarIcon)`
  grid-area: star;
`;

export const TotalScore = styled.span`
    font-size: 16px;
    font-weight: 400;
    padding: 8px;
`;

export const Votes = styled.p`
  font-size: 16px;
  font-weight: 400;
  grid-area: votes;
`;