import styled from "styled-components";

export const StyledDetailsCard = styled.article`
   display: grid;
   grid-template-areas: 
        "image details"
        "image description";
    justify-content: center;
    grid-gap: 40px;
    margin: 64px auto;
    padding: 24px;

    @media (max-width: 1100px) {
        grid-template-areas: 
            "image details"
            "description description"
    };
`;

export const Poster = styled.img`
    width: 300px;
    grid-area: image;
    background-color: green;
    border-radius: 15px;

    @media (max-width: 1100px) {
        width: 100%;
    };
`;

export const Details = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 12px;
    grid-area: details;
`;

export const Header = styled.header`
    font-size: 36px;
    font-weight: 600;
`;

export const Year = styled.p`
    font-size: 22px;
    font-weight: 400;
    margin: 0;
`;

export const Production = styled.p`
    margin: 0;
`;

export const Date = styled.p`
    margin: 0;
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
`;

export const Tag = styled.ul`
   background-color: ${({ theme }) => theme.colors.mystic};
   flex-basis: 20%;
   font-size: 16px;
   border-radius: 5px;
   font-weight: 400;
   padding: 8px 16px;
   text-align: center;
`;

export const Description = styled.p`
    font-size: 20px;
    font-weight: 400;
    margin: 0;
    grid-area: description;
`;

export const KeyWord = styled.span`
    color: ${({ theme }) => theme.colors.stormGray};
    font-size: 18px;
    font-weight: 400;
`;