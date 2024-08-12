import styled, { css } from "styled-components";
import { ReactComponent as VideoIcon } from "../../Video.svg";

export const StyledDetailsTile = styled.article`
    display: grid;
    box-shadow: 0px 4px 12px 0px  
        ${({ theme }) => theme.colors.brightHeather};
    background-color: ${({ theme }) => theme.colors.white};
    grid-template-areas: 
        "image details"
        "image description";
    align-items: start;
    grid-gap: 40px;
    padding: 24px;

    @media (max-width: 1150px) {
        grid-template-areas: 
            "image details"
            "description description";
            grid-template-columns: 0.5fr 1fr;
    };

    @media (max-width: 860px) {
        grid-gap: 16px;
        padding: 16px;
        grid-template-columns: 1fr 1fr;
    };
`;

export const ImageContainer =
    styled.div.attrs(({ $image }) => ({
        style: $image && (
            {
                backgroundImage: `url(${$image})`,
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                backgroundColor: "transparent",
            }
        )
    }))`
    grid-area: image;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.silver};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 312px;
    height: 100%;

    ${({ $image }) => $image && css` 
        background-size: contain;

        @media (max-width: 360px) {
            background-size: cover;
        };
    `};

    @media (max-width: 1150px) {
        width: 100%;
    };
`;

export const StyledVideoIcon = styled(VideoIcon)``;

export const Details = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 12px;
    grid-area: details;

    @media (max-width: 475px) {
        grid-gap: 8px;
    };
`;

export const Header = styled.header`
    font-size: 36px;
    font-weight: 600;

    @media (max-width: 475px) {
        font-size: 16px;
        font-weight: 500;
    };
`;

export const Year = styled.p`
    font-size: 22px;
    font-weight: 400;
    margin: 0;

    @media (max-width: 475px) {
        font-size: 13px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.waterloo};
    };
`;

export const DetailInfo = styled.div`
    display: grid;
    grid-template-columns: auto;
    justify-content: start;
    grid-gap: 8px;
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;

    @media (max-width: 475px) {
        font-size: 12px;
    };
`;

export const DetailInfoItem = styled.p`
    margin: 0;
`;

export const DetailInfoType = styled.span`
    color: ${({ theme }) => theme.colors.stormGray};
    font-size: 18px;
    font-weight: 400;

    @media (max-width: 475px) {
        display: none;
    };
`;

export const Description = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    margin: 0;
    grid-area: description;

    @media (max-width: 475px) {
        font-size: 14px;
        font-weight: 200;
        line-height: 22px;
    };
`;

