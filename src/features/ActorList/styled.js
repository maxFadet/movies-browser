import styled from "styled-components";

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 43px;
  grid-column: 1 / -1;
  color: ${({ theme }) => theme.colors.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile3}) {
    line-height: 34px;
    font-size: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    line-height: 24px;
    font-size: 20px;
  }
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(6, minmax(100px, 1fr));
  gap: 24px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet2}) {
    grid-template-columns: repeat(5, minmax(100px, 1fr));
    gap: 20px;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile3}) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    gap: 12px;
  }
`;

export const Tile = styled.div`
  background-color: rgba(255, 255, 255, 1);
  box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;
  display: grid;
  grid-template-rows: auto auto;
  padding: 16px;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px;
    gap: 8px;
  }
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.woodsmoke};
  margin: 0;
  line-height: 29px;
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  word-break: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet2}) {
    font-size: 18px;
    line-height: 22px;
}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    line-height: 18px;
}
`;

export const Photo = styled.img`
  width: 177px;
  height: 264px;
  width: 100%;
  border-radius: 5px;
`;
