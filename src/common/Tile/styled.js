import styled, { css } from "styled-components";
import { ReactComponent as ProfileIcon } from "../../Profile.svg";

export const StyledTile = styled.li`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr;
    grid-auto-rows: 0.5fr;
    align-items: flex-start;

    box-shadow: 0px 4px 12px 0px  ${({ theme }) => theme.colors.brightHeather};
    background-color: ${({ theme }) => theme.colors.white};

    cursor: pointer;
    padding: 16px;
    list-style-type: none;
    width: 300px;

    ${({ $extraContentAvailable }) => $extraContentAvailable && css`
        @media (max-width: 710px) {
            grid-template-columns: 1fr 1.5fr;
            width: 100%;
            grid-template-rows: 320px;
        }; 

        @media (max-width: 500px) {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 265px;
        }; 

        @media (max-width: 400px) {
            grid-template-columns: 1.5fr 1fr;
        }; 
    `};
`;

export const IconContainer = styled.div`
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.silver};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;

    ${({ $image }) => $image && css` 
        background-size: cover;
    `};

    @media (max-width: 450px) {
       height: 150px;
    };
`;

export const StyledProfileIcon = styled(ProfileIcon)`
    @media (max-width: 450px) {
       width: 30px;
    };
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

    height: 450px;

    @media (max-width: 710px) {
        height: 100%;
    }; 

    @media (max-width: 475px) {
        background-size: cover;
        height: 100%;
    };

    @media (max-width: 300px) {
        background-size: contain;
    };
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

    @media (max-width: 500px) {
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

    @media (max-width: 500px) {
        font-size: 13px;
    };
`;

export const ExtraContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 40px;

    @media (max-width: 500px) {
        grid-gap: 12px;
    };
`;