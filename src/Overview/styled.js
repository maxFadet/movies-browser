import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 12px;
    padding: 16px;
`;

export const Image = styled.img`
    width: 100%;
    border-radius: 10px;
`;

export const Name = styled.header`
    margin: 0;
    text-align: center;
    font-size: 22px;
    font-weight: 500;
`;

export const DetailInfo = styled.p`
    color: ${({ theme }) => theme.colors.darkerGray};
    margin: 0;
    font-size: 18px;
    font-weight: 400;
`;

export const ExtraContent = styled.div`
    color: ${({ theme }) => theme.colors.darkerGray};
`;
