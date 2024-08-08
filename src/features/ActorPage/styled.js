import styled from "styled-components";
import { ReactComponent as StarIcon } from '../../image/Vector.svg';

export const ActorProfile = styled.article`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;
  min-height: 644px;
  padding: 40px;
  margin: auto;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 360px;
    padding: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile3}) {
    min-height: 300px;
    padding: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 196px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 16px;
  }
`;

export const ActorPhoto = styled.img`
  width: auto;
  height: 564px;
  border-radius: 5px;
  float: left;
  margin: 0 40px 30px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 300px;
    margin: 0 20px 6px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile3}) {
    height: 240px;
    margin: 0 22px 4px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 116px;
    height: 163px;
    margin: 0;
  }
`;

export const ActorName = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 43px;
  margin: 8px 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 26px;
    line-height: 30px;
    margin: 6px 0 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    margin: 4px 0 16px;;
  }
`;

export const ActorDetails = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  font-size: 18px;
  line-height: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 15px;
    line-height: 18px;
    gap: 4px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
    line-height: 14px;
    gap: 2px;
  }
`;

export const ActorDetailsWrapper = styled.div`
  flex: 1 1 0%;
`;

export const ActorDetail = styled.div`
`;

export const DetailLabel = styled.span`
  margin-right: 6px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.stormGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-right: 4px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-right: 2px;
  }
`;

export const Biography = styled.p`
  font-size: 20px;
  line-height: 32px;
  margin: 24px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 17px;
    line-height: 27px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    line-height: 22px;
    margin-top: 0;
  }
`;

export const MoviesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 324px);
  grid-gap: 24px;
  margin: 64px auto;
  width: 1400px;

  @media (max-width: 1480px) {
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    width: 100%;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    width: 100%;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1,  1fr);
    margin-top: 24px;
    grid-gap: 16px;
  }
`;

export const SectionTitle = styled.span`
  font-size: 36px;
  font-weight: 600;
  line-height: 43px;
  grid-column: 1 / -1;
  color: ${({ theme }) => theme.colors.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile3}) {
    font-size: 28px;
    line-height: 34px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const MoviePoster = styled.img`
  width: 177px;
  height: 264px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile3}) {
    width: 114px;
    height: 169px;
  }
`;

export const MovieCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  position: relative;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

export const MovieTitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
  line-height: 29px;
  margin: 16px 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 16px;
    line-height: 21px;
    margin: 0;
  }
`;

export const MovieSubTitle = styled.div`
  font-size: 16px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.waterloo};
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 13px;
    margin-bottom: 0;
  }
`;

export const GenreTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  margin: 0 0 8px;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 6px 0 8px;
  }
`;

export const GenreTag = styled.li`
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.mystic};
  border-radius: 5px;
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 8px;
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 8px;
  }
`;

export const VoteCount = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.waterloo};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 13px;
    line-height: 17px;
  }
`;

export const RatingNumber = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 13px;
    line-height: 17px;
  }
`;

export const RatingStar = styled(StarIcon)`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 16px;
    height: 16px;
  }
`;
