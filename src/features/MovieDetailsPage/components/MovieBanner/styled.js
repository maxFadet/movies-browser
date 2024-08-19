import styled from "styled-components";

export const StyledMovieBanner =
    styled.div.attrs(({ $backdrop }) => ({
        style: {
            backgroundImage: `url(${$backdrop})`
        }
    }))`

    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.woodsmoke}; 
    box-shadow: inset 0px 0px 74px 110px 
        ${({ theme }) => theme.colors.woodsmoke};

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    padding-top: 42.25%;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
        box-shadow: inset 0px 0px 40px 48px 
            ${({ theme }) => theme.colors.woodsmoke};
    };
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        box-shadow: inset 0px 0px 29px 31px 
            ${({ theme }) => theme.colors.woodsmoke};
    };
`;

export const MainInfo = styled.div`
    display: grid;
    grid-gap: 24px;
    padding-left: 5%;
    padding-bottom: 3%;

    @media (max-width:  ${({ theme }) => theme.breakpoints.mobileL}) {
        grid-gap: 4px;
    };
`;

export const Title = styled.header`
    font-size: 64px;
    font-weight: 600;

    @media (max-width:  ${({ theme }) => theme.breakpoints.mobileL}) {
        font-size: 24px;
    };
`;