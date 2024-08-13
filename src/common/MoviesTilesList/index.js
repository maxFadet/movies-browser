import {
    StyledTile,
    MovieInfo,
    MovieTitle,
    MovieSubTitle,
    MovieTags,
    MovieTag,
    RatingWrapper,
    RatingStar,
    RatingNumber,
    VoteCount,
    MoviePoster,
} from "./styled";

export const MoviesTilesList = ({ image, name, year, genres, rate, vote, onClick }) => {
    return (
        <StyledTile onClick={onClick}>
            <MoviePoster src={image} alt={name} />
            <MovieInfo>
                <MovieTitle>{name}</MovieTitle>
                <MovieSubTitle>{year}</MovieSubTitle>
                {genres.length > 0 && (
                    <MovieTags>
                        {genres.map((genre, index) => (
                            <MovieTag key={index}>{genre}</MovieTag>
                        ))}
                    </MovieTags>
                )}
                <RatingWrapper>
                    <RatingStar />
                    <RatingNumber>{rate}</RatingNumber>
                    <VoteCount>{vote}</VoteCount>
                </RatingWrapper>
            </MovieInfo>
        </StyledTile>
    );
};
