import styled from "styled-components";

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