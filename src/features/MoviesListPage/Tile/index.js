// import React from "react";
// import { useSelector } from "react-redux";
// import {
//     TileStyled,
//     PosterContainer,
//     TileHeader,
//     TileTitle,
//     MovieYear,
//     RatingContainer,
//     Rating,
//     Votes,
//     Tag,
//     Tags,
//     TileDescription,
//     StyledMoviePoster,
//     StyledStarShape,
// } from "./styled";
// import { findMoviesGenresById } from "../../../moviesGenresSlice";

// const Tile = ({ title, year, genresIds, rate, votes, poster, onClick }) => {
//     const genresFoundById = useSelector(state => findMoviesGenresById(state, genresIds));

//     return (
//         <TileStyled onClick={onClick}>
//             <PosterContainer>
//                 <StyledMoviePoster src={poster} alt={title} />
//             </PosterContainer>
//             <TileDescription>
//                 <TileHeader>
//                     <TileTitle>{title}</TileTitle>
//                     <MovieYear>{year}</MovieYear>
//                     <Tags>
//                         {genresFoundById.map(({ id, name }) => (
//                             <Tag key={id}>{name}</Tag>
//                         ))}
//                     </Tags>
//                 </TileHeader>
//                 <RatingContainer>
//                     <StyledStarShape />
//                     <Rating>{rate}</Rating>
//                     <Votes>{votes} votes</Votes>
//                 </RatingContainer>
//             </TileDescription>

//         </TileStyled>
//     )
// };

// export default Tile;