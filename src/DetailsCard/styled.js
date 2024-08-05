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

    @media (max-width: 650px) {
        grid-template-columns: 1fr 0.5fr;
    };

    @media (max-width: 475px) {
        grid-template-columns: 1fr 1fr;
    };
`;

export const Poster = styled.img`
    width: 100%;
    grid-area: image;
    border-radius: 15px;
    object-fit: cover;
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

export const Production = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 400;

    @media (max-width: 475px) {
        font-size: 12px;
    };
`;

export const Date = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 400;

    @media (max-width: 475px) {
        font-size: 12px;
    };
`;

export const Rate = styled.p`
    margin: 0;
`;

export const Tags = styled.ul`
    margin: 0;
    padding-left: 0px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-self: baseline;

    @media (max-width: 475px) {
        gap: 8px;
    };
`;

export const Tag = styled.ul`
   background-color: ${({ theme }) => theme.colors.mystic};
   flex-basis: 20%;
   font-size: 16px;
   border-radius: 5px;
   font-weight: 400;
   padding: 8px 16px;
   text-align: center;

   @media (max-width: 475px) {
        font-size: 10px;
        padding: 4px 8px;
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

export const KeyWord = styled.span`
    color: ${({ theme }) => theme.colors.stormGray};
    font-size: 18px;
    font-weight: 400;

    @media (max-width: 475px) {
        display: none;
    };
`;