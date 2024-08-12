import styled, { css } from "styled-components";
import { ReactComponent as ProfileIcon } from "../../Profile.svg";

export const StyledTile = styled.li`
    list-style-type: none;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr 0.5fr;
    height: 100%;
    padding: 16px;
    align-items: start;
    box-shadow: 0px 4px 12px 0px  
        ${({ theme }) => theme.colors.brightHeather};
    background-color: 
        ${({ theme }) => theme.colors.white};

    ${({ $extraContentAvailable }) => $extraContentAvailable && css`
        @media (max-width: 450px) {
            grid-template-columns: 1fr 1fr;  
        };
    `};
`;

export const ImageContainer = styled.div`
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

export const Image = styled.img`
    width: 100%;
    border-radius: 15px;
    height: 300px;
    object-fit: cover;

    @media (max-width: 450px) {
        height: 150px;
    };

    ${({ $extraContentAvailable }) => $extraContentAvailable && css`
        height: unset;
        @media (max-width: 450px) {
            object-fit: cover;
            height: unset;
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
        justify-items: start;
    `};
`;

export const Title = styled.header`
    font-size: 22px;
    font-weight: 500;
    text-align: center;

    @media (max-width: 450px) {
        font-size: 14px;
    };
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