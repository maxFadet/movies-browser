import styled from "styled-components";

export const StyledMediaCard = styled.div`
    display: grid;
    grid-gap: 32px;
`;

export const MediaSection = styled.section`
    display: grid;
    justify-content: space-between;
    grid-gap: 24px;
    justify-items: start;
    grid-template-columns: repeat(auto-fill, 20%);

    @media (max-width: 900px) {
        grid-template-columns: repeat(3, 30%);
    };

    @media (max-width: 450px) {
        grid-template-columns: repeat(2, 50%);
    };

    @media (max-width: 300px) {
        grid-template-columns: 100%;
    };
`;

export const MediaHeader = styled.header`
    font-size: 36px;
    font-weight: 600;
`;