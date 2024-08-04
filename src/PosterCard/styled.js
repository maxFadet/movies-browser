import styled from "styled-components";

export const StyledPagePoster = styled.div`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    background-image: 
        url("https://github.com/maxFadet/movies-browser/blob/feature/movie-details/src/Poster-big.png?raw=true");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    padding-top: 42.25%;
    padding-bottom: 56px;
    box-shadow: inset 0px 10px 74px 110px 
        ${({ theme }) => theme.colors.black};
    display: grid;
    align-content: center;
    grid-template-columns: 1fr;
    grid-gap: 24px;
    margin-bottom: 64px;
`;

export const MainInfo = styled.div`
    margin-left: 30px;
`;

export const Title = styled.header`
    font-size: 64px;
    font-weight: 600;
`;