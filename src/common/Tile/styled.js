import styled, { css } from "styled-components";

export const StyledTile = styled.li`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr;
    align-items: flex-start;

    box-shadow: 0px 4px 12px 0px  ${({ theme }) => theme.colors.brightHeather};
    background-color: ${({ theme }) => theme.colors.white};

    cursor: pointer;
    padding: 16px;
    list-style-type: none;
    height: 100%;

    ${({ $extraContentAvailable }) => $extraContentAvailable && css`
        height: auto;
        width: 300px;

        @media (max-width: ${({theme}) => theme.breakpoints.tabletS}) {
            grid-template-columns: 1fr 1.5fr;
            width: 100%;
            grid-template-rows: 320px;
        }; 

        @media (max-width: ${({theme}) => theme.breakpoints.mobileM}) {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 265px;
        }; 

        @media (max-width: ${({theme}) => theme.breakpoints.mobileS}) {
            grid-template-columns: 1.5fr 1fr;
        }; 
    `};
`;

export const Image =
    styled.div.attrs(({ $image }) => ({
        style: {
            backgroundImage: `url(${$image})`,
        }
    }))`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    border-radius: 8px;

    width: 100%;
    border-radius: 15px;
    height: 300px;

    @media (max-width: ${({theme}) => theme.breakpoints.mobileM}) {
        height: 150px;
    };

    ${({ $extraContentAvailable }) => $extraContentAvailable && css`
        height: 450px;

        @media (max-width: ${({theme}) => theme.breakpoints.tabletS}) {
            height: 100%;
        }; 
        
        @media (max-width: ${({theme}) => theme.breakpoints.mobileS}) {
            background-size: cover;
        };
    `};
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

    @media (max-width: ${({theme}) => theme.breakpoints.mobileM}) {
        font-size: 14px;
    };

    ${({ $extraContentAvailable }) => $extraContentAvailable && css`
        text-align: start;
    `};
`;

export const SubInfo = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.waterloo};

    @media (max-width: ${({theme}) => theme.breakpoints.mobileM}) {
        font-size: 13px;
    };
`;

export const ExtraContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 40px;

    @media (max-width: ${({theme}) => theme.breakpoints.mobileM}) {
        grid-gap: 12px;
    };
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.silver};

    width: 100%;
    border-radius: 15px;
    height: 300px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        height: 150px;
    };

     ${({ $extraContentAvailable }) => $extraContentAvailable && css`
        height: 450px;

        @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
            height: 100%;
        }; 
        
        @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}) {
            background-size: contain;
        };
    `};
`;