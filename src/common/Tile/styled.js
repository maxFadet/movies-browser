import styled, { css } from "styled-components";

export const StyledExampleTile = styled.article`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr;

    padding: 16px;

    box-shadow: 0px 4px 12px 0px  
        ${({ theme }) => theme.colors.brightHeather};
    background-color: ${({ theme }) => theme.colors.white};

    @media (max-width: 450px) {
        grid-template-columns: 1fr 1fr;  
    };
    
    ${({ $extraContentMissing }) => $extraContentMissing && css`
        @media (max-width: 450px) {
            grid-template-columns: 1fr;   
        };
    `};
`;

export const Image = styled.img`
    width: 100%;
    border-radius: 10px;
`;

export const Overview = styled.div`
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr;

    ${({ $extraContentMissing }) => $extraContentMissing && css`
        justify-items: center;
    `};
`;

export const Title = styled.header`
    font-size: 22px;
    font-weight: 500;

    ${({ $extraContentMissing }) => $extraContentMissing && css`
        text-align: center;
    `};
`;

export const SubInfo = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.waterloo};
`;

export const ExtraContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 40px;
`;