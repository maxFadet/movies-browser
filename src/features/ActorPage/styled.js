import styled from "styled-components";
import { ReactComponent as Vector } from '../../image/Vector.svg';

export const Description = styled.article`
  background: rgba(255, 255, 255, 1);
  box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;
  min-height: 644px;
  padding: 40px;
  margin: auto;
  width: 100%;
`;

export const Photo = styled.img`
  width: 399px;
  height: 564px;
  border-radius: 5px;
  float: left;
  margin: 0 40px 30px 0;
`;

export const Name = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 43px;
  margin: 0 0 24px 0;
`;

export const Birth = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  margin-bottom: 24px;
`;

export const Date = styled.p`
  margin: 0;
`;

export const Place = styled.p`
  margin: 0;
`;

export const Text = styled.span`
  color: rgba(116, 120, 139, 1);
  margin-right: 6px;
`;

export const Biographi = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  margin: 0;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 324px);
  grid-gap: 24px;
  margin: 64px auto;
`;

export const Title = styled.span`
  font-size: 36px;
  font-weight: 600;
  line-height: 43px;
  grid-column: 1 / -1;
  color: ${({ theme }) => theme.colors.woodsmoke};
`;

export const Poster = styled.img`
  width: 177px;
  height: 264px;
  width: 100%;
  border-radius: 5px;
`;

export const Tile = styled.div`
  background-color: rgba(255, 255, 255, 1);
  box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  padding: 16px;

&:hover {

}

@media (max-width: 1200px) {

}

@media (max-width: 480px) {

}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const MovieName = styled.h2`
  font-size: 22px;
  font-weight: 500;
  line-height: 28.6px;
  margin: 16px 0 8px;
`;

export const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.waterloo};
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0;
`;

export const Tag = styled.li`
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.mystic};
  border-radius: 5px;
  font-size: 14px;
`;

export const Ranking = styled.div`
  display: flex;
  gap: 12px;
`;

export const Rates = styled.div`
  display: flex;
  gap: 12px;
`;

export const Votes = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.waterloo};
`;

export const Number = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;

export const Star = styled(Vector)`
  width: 24px;
  height: 24px;

  @media(max-width: 1256px) {
        width: 16px;
        height: 16px;
}
`;