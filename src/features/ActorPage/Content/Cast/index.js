import {
    MoviesSection,
    SectionTitle, MoviePoster, MovieCard, MovieInfo, MovieTitle, MovieSubTitle, GenreTags, GenreTag,
    RatingWrapper, Rating, VoteCount, RatingNumber, RatingStar,
} from "./styled";
import { films } from './filmsData';

export const Cast = () => {
    return (
        <MoviesSection>
            <SectionTitle>Movies - cast (4)</SectionTitle>
            {films.map((film, index) => (
                <MovieCard key={index}>
                    <MoviePoster src={film.photo} alt={film.name} />
                    <MovieInfo>
                        <MovieTitle>{film.name}</MovieTitle>
                        <MovieSubTitle>{film.year}</MovieSubTitle>
                        <GenreTags>
                            <GenreTag>{film.genra}</GenreTag>
                            <GenreTag>{film.genra2}</GenreTag>
                        </GenreTags>
                        <RatingWrapper>
                            <Rating>
                                <RatingStar />
                                <RatingNumber>{film.rate}</RatingNumber>
                            </Rating>
                            <VoteCount>{film.vote}</VoteCount>
                        </RatingWrapper>
                    </MovieInfo>
                </MovieCard>
            ))}
        </MoviesSection>
    );
};