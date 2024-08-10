import styled, { css } from "styled-components";

export const StyledTile = styled.li`
    list-style-type: none;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr;
    grid-auto-rows: auto 1fr;
    height: 100%;
    padding: 16px;
    align-items: start;
    box-shadow: 0px 4px 12px 0px  
        ${({ theme }) => theme.colors.brightHeather};
    background-color: 
        ${({ theme }) => theme.colors.white};

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

export const GeneralInfo = styled.div`
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr;

    ${({ $extraContentMissing }) => $extraContentMissing && css`
        justify-items: center;
        text-align: center;
    `};
`;

export const Title = styled.header`
    font-size: 22px;
    font-weight: 500;

    @media (max-width: 450px) {
        font-size: 14px;
    };

    ${({ $extraContentMissing }) => $extraContentMissing && css`
        text-align: center;
    `};
`;

export const SubInfo = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.waterloo};

    @media (max-width: 450px) {
        font-size: 13px;
    };
`;

export const ExtraContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 40px;
`;