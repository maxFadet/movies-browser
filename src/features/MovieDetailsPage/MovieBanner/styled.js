import styled from "styled-components";

export const StyledMovieBanner =
    styled.div.attrs(({ $poster }) => ({
        style: {
            backgroundImage: `url(${$poster})`
        }
    }))`

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 24px;
    width: 100%;

    color: ${({ theme }) => theme.colors.white};
    box-shadow: inset 0px 10px 74px 110px 
    ${({ theme }) => theme.colors.black};

    background-color: ${({ theme }) => theme.colors.black};
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    padding-top: 42.25%;
    padding-bottom: 56px;

    @media (max-width: 750px) {
        box-shadow: inset 0px 0px 40px 48px #000000;
        padding-bottom: 10px;
    };
`;

export const MainInfo = styled.div`
    margin-left: 30px;

    @media (max-width: 750px) {
        margin-left: 16px;
    };
`;

export const Title = styled.header`
    font-size: 64px;
    font-weight: 600;

    @media (max-width: 750px) {
        font-size: 36px;
    };

    @media (max-width: 450px) {
        font-size: 24px;
    };
`;