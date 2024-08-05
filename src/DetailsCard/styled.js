import styled from "styled-components";

export const StyledDetailsCard = styled.article`
   display: grid;
   grid-template-areas: 
        "image details"
        "image description";
    align-items: stretch;
    grid-gap: 40px;
    padding: 24px;

    @media (max-width: 1150px) {
        grid-template-areas: 
            "image details"
            "description description"
    };

    @media (max-width: 860px) {
        grid-gap: 16px;
        padding: 16px;
        grid-template-columns: 1fr 1fr;
    };
/* 
    @media (max-width: 650px) {
        grid-template-columns: 1fr 0.5fr;
    }; */

    @media (max-width: 475px) {
        grid-template-columns: 1fr 1fr;
    };
`;

export const Poster = styled.img`
    width: 100%;
    grid-area: image;
    border-radius: 15px;
    align-self: start;
    object-fit: contain;
`;

export const Details = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 12px;
    grid-area: details;
    align-self: baseline;

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
        color: ${({ theme }) => theme.colors.darkerGray};
    };
`;

export const DetailInfoType = styled.span`
    color: ${({ theme }) => theme.colors.stormGray};
    font-size: 18px;
    font-weight: 400;

    @media (max-width: 475px) {
        display: none;
    };
`;

export const DetailInfo = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;

    @media (max-width: 475px) {
        font-size: 12px;
    };
`;

export const Rate = styled.p`
    margin: 0;
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