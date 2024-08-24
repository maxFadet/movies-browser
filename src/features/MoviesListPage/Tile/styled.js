// import styled from "styled-components";
// import { ReactComponent as MoviePoster } from "./TileElements/images/poster.svg";
// import { ReactComponent as StarShape } from "./TileElements/images/shape-star.svg";


// export const TileStyled = styled.article`
//   display: grid;
//   gap: 6px;
//   border-radius: 5px;
//   padding: 16px;
//   background-color: ${({ theme }) => theme.colors.white};
//   box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
//   justify-items: center;
//   overflow: hidden;
//   min-width: 324px;

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
//     gap: 16px;
//     min-width: 228px;
//     min-height: 201px;
//     grid-template-columns: minmax(100px, 1fr) minmax(142px, 1fr);
//     width: 100%;
//   };
// `;

// export const PosterContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-items: center;
//   width: 100%;
//   padding: 16;
//   background-color: ${({ theme }) => theme.colors.silver};
//   height: 434px;
//   border-radius: 5px;
//   margin-bottom: 0px;

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
//     max-width: 114px;
//     max-height: 169px;
//   };
// `;

// export const StyledMoviePoster = styled(MoviePoster)`
//   width: 72px;
//   height: 72px;
//   margin: auto;

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
//     width: 48px;
//     height: 48px;
//   };
// `;

// export const TileDescription = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: start; 
//   flex-grow: 1;
//   flex-shrink: 1; 
//   margin-top: -16px;
//   width: 100%;
// `;

// export const TileHeader = styled.div`
//   display: flex;
//   flex-direction: column;
//   max-width: 292px;
//   max-height: 105px;
//   padding: 16;
//   margin-top: 0px;
//   margin-bottom: 16px;
// `;

// export const TileTitle = styled.h2`
//   font-size: 22px;
//   font-weight: 500;
//   line-height: 28.6px;
//   word-break: break-word;
//   margin-bottom: 4px; 

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
//     font-size: 16px;
//     line-height: 20.8px;
//   };
// `;

// export const MovieYear = styled.h3`
//   margin-top: 4px; 
//   font-size: 16px;
//   font-weight: 400;    
//   line-height: 24px;
//   color: ${({ theme }) => theme.colors.waterloo};

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
//     font-size: 13px;
//     line-height: 16.9px;
//   };
// `;

// export const Tags = styled.ul`
//   list-style: none;
//   padding-left: 0; 
//   display: flex;
//   flex-wrap: wrap;    
//   height: auto;
//   margin: -8px; 
// `;

// export const Tag = styled.li`
//   background-color: ${({ theme }) => theme.colors.mystic};
//   border-radius: 5px;
//   padding: 8px 16px;
//   gap: 8px;
//   font-size: 14px;
//   font-weight: 400;
//   line-height: 19.6px;
//   margin: 4px;
//   flex: 0 1 auto; 

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
//     border-radius: 5px;
//     padding: 4px 8px;
//     gap: 8px;
//     font-size: 10px;
//     line-height: 11px;
//     margin: 4px;
//   };
// `;

// export const RatingContainer = styled.ul`
//   max-height: 24px;
//   list-style: none;
//   padding-left: 0; 
//   display: flex;
//   margin-top: 49px; 
//   margin-bottom: auto;

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
//     gap: 8 px;
//   };
// `;

// export const StyledStarShape = styled(StarShape)`
//  width: 24px;
//  height: 24px;
//  margin: auto;

//  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
//     width: 16px;
//     height: 15.25px;
//   };
//  `;

// export const Rating = styled.li`
//   padding-left: 8px;
//   font-size: 16px;
//   font-weight: 600;
//   line-height: 24px;
//   margin: 4px;

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
//     margin-left: 0px;
//     font-size: 13px;
//     line-height: 16.9px;
//   };
// `;

// export const Votes = styled.li`
//   font-size: 16px;
//   font-weight: 400;
//   line-height: 24px;
//   padding-left: 8px;
//   color: ${({ theme }) => theme.colors.waterloo};
//   margin-top: 4px;

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
//     margin-left: 0px;
//     font-size: 13px;
//     line-height: 16.9px;
//   };
// `;