import styled, { css } from "styled-components";

export const StyledTile = styled.li`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.5fr;
    align-items: flex-start;
    box-shadow: 0px 4px 12px 0px  ${({ theme }) => theme.colors.brightHeather};
    background-color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    padding: 16px;
    list-style-type: none;
    height: 100%;
    word-break: break-all;
    min-height: 330px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        min-height: 245px;
    }; 

    ${({ $extraContentAvailable }) => $extraContentAvailable && css`
        min-height: unset;
        grid-template-rows: min-content 0.5fr;
        
        @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
            grid-template-rows: unset;
            grid-template-columns: 1fr 1.5fr;
            min-height: 293px;
        };

        @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
           min-height: 230px;
        }; 

        @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}) {
            min-height: 201px;
            grid-template-columns: 1fr 1fr;
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
    justify-items: center;
    text-align: center;

    ${({ $extraContentAvailable }) => $extraContentAvailable && css`
        align-items: end;
        justify-items: start;
    `};
`;

export const Title = styled.header`
    font-size: 22px;
    font-weight: 500;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        font-size: 16px;
    };

    ${({ $extraContentAvailable }) => $extraContentAvailable && css`
        text-align: start;
    `};
`;

export const SubInfo = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.waterloo};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        font-size: 13px;
    };
`;

export const ExtraContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        grid-gap: 12px;
    };
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.silver};
    width: 100%;
    border-radius: 15px;
    height: 100%;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}) {
        height: 144px;  
    };
`;