import styled from "styled-components";

export const StyledTile = styled.div`
  background-color: rgba(255, 255, 255, 1);
  box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;
  display: grid;
  grid-template-rows: auto auto;
  padding: 16px;
  gap: 12px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    font-size: 18px;
    line-height: 22px;
}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    font-size: 14px;
    line-height: 18px;
}
`;

export const Photo = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const SubName = styled.div`
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.waterloo};
  margin-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    font-size: 15px;
    line-height: 22px;
}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    font-size: 13px;
    line-height: 17px;
}
`;

export const Info = styled.section`
  text-align: center;
  word-break: break-word;
`;