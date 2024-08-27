import styled from "styled-components";

export const StyledPersonTile = styled.li`
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.colors.brightHeather};
    cursor: pointer;
    padding: 16px;
    list-style-type: none;
    word-break: break-word;
    height: 100%;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        align-items: flex-start;
        gap: 8px;
    }
`;

export const StyledMovieTile = styled(StyledPersonTile)`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
        flex-direction: row;
        align-items: flex-start;
        gap: 16px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

export const GeneralInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-grow: 1;
    text-align: center;
    justify-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
        text-align: left;
    }
`;

export const MovieGeneralInfo = styled(GeneralInfo)`
     align-items: flex-start;
     justify-content: flex-start;
`;

export const Title = styled.header`
    font-size: 22px;
    font-weight: 500;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        font-size: 16px;
    };
`;

export const MovieTitle = styled(Title)`
    text-align: start;
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

export const MovieSubInfo = styled(SubInfo)`
    text-align: left;
`;

export const ExtraContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-grow: 1;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        grid-gap: 12px;
    };
`;

export const IconContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.silver};
    border-radius: 10px;
`;

export const ImageContainer = styled.div`
    width: 100%;
    aspect-ratio: 2 / 3;
    position: relative;
    background-color: ${({ theme }) => theme.colors.silver};
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
        max-width: 169px;
    };
`;