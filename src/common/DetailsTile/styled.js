import styled from "styled-components";
import { ReactComponent as VideoIcon } from "../../Video.svg";

export const StyledDetailsTile = styled.article`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 
        "image details"
        "image description";

    grid-gap: 40px;
    padding: 24px;

    align-items: start;

    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 12px 0px  
        ${({ theme }) => theme.colors.brightHeather};

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
        grid-template-areas: 
            "image details"
            "description description";
            grid-template-columns: 0.8fr 1.5fr;
    };

    @media (max-width:  ${({ theme }) => theme.breakpoints.tabletS}) {
        grid-gap: 16px;
        padding: 16px;
        grid-template-columns: 1fr 1fr;
    };
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    grid-area: image;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.silver};
    height: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
      width: 100%;
    };
`;

export const ImageContainer =
    styled.div.attrs(({ $image }) => ({
        style: $image && (
            {
                backgroundImage: `url(${$image})`,
            }
        )
    }))`
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;

    grid-area: image;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.silver};
    
    background-size: cover;
    width: 370px;
    height: 100%;
    background-color: transparent;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
        background-size: contain;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}) {
        background-size: cover;
    };
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
        width: 100%;
    };
`;

export const StyledVideoIcon = styled(VideoIcon)``;

export const Details = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 24px;
    grid-area: details;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        grid-gap: 8px;
    };
`;

export const Header = styled.header`
    font-size: 36px;
    font-weight: 600;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        font-size: 16px;
        font-weight: 500;
    };
`;

export const Year = styled.p`
    font-size: 22px;
    font-weight: 400;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
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

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
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

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        display: none;
    };
`;

export const Description = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    margin: 0;
    grid-area: description;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        font-size: 14px;
        font-weight: 200;
        line-height: 22px;
    };
`;