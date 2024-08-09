import {
    ActorProfile, ActorPhoto, ActorName, ActorDetails, ActorDetailsWrapper, DetailLabel, Biography, MoviesSection,
    SectionTitle, MoviePoster, MovieCard, MovieInfo, MovieTitle, MovieSubTitle, GenreTags, GenreTag,
    RatingWrapper, Rating, VoteCount, RatingNumber, RatingStar,
    ActorDetail
} from "./styled";
import { films } from './filmsData';
import image from "../../image/image.png";

export const ActorsData = () => {
    return (
        <>
            <ActorProfile>
                <ActorPhoto src={image} alt="actor" />
                <ActorDetailsWrapper>
                    <ActorName>Liu Yifei</ActorName>
                    <ActorDetails>
                        <ActorDetail>
                            <DetailLabel>Date of birth:</DetailLabel>
                            25.08.1987
                        </ActorDetail>
                        <ActorDetail>
                            <DetailLabel>Place of birth:</DetailLabel>
                            Wuhan, Hubei, China
                        </ActorDetail>
                    </ActorDetails>
                </ActorDetailsWrapper>
                <Biography>
                    Gary Leonard Oldman (born 21 March 1958) is an English actor and filmmaker. Regarded as one of the best actors of his generation, he is known for his versatility and intense acting style. He received various accolades, including an Academy Award, a Golden Globe Award, a Screen Actors Guild Award, and three British Academy Film Awards. His films have grossed over $11 billion worldwide, making him one of the highest-grossing actors to date. Oldman began acting in theatre in 1979 and made his film debut in Remembrance (1982). He continued to follow a stage career in London's Royal Court and was a member of the Royal Shakespeare Company, with credits including Cabaret, Romeo and Juliet, Entertaining Mr Sloane, Saved, The Country Wife and Hamlet. He rose to prominence in British film with his portrayals of Sid Vicious in Sid and Nancy (1986), Joe Orton in Prick Up Your Ears (1987) and Rosencrantz in Rosencrantz & Guildenstern Are Dead (1990), while also attracting attention as the leader of a gang of football hooligans in the television film The Firm (1989). Regarded as a member of the "Brit Pack", he achieved greater recognition as a New York gangster in State of Grace (1990), Lee Harvey Oswald in JFK (1991) and Count Dracula in Bram Stoker's Dracula (1992). Oldman portrayed the villains in films such as True Romance (1993), The Fifth Element (1997), Air Force One (1997) and The Contender (2000); corrupt DEA agent Norman Stansfield, whom he played in Léon: The Professional (1994), was called one of cinema's best villains. He also played Ludwig van Beethoven in Immortal Beloved (1994) and later appeared in franchise roles such as Sirius Black in the Harry Potter series, James Gordon in The Dark Knight Trilogy (2005–2012) and a human leader, Dreyfus in Dawn of the Planet of the Apes (2014). He won the Academy Award for Best Actor for his role as Winston Churchill in Darkest Hour (2017), and was nominated for his portrayals of George Smiley in Tinker Tailor Soldier Spy (2011) and Herman J. Mankiewicz in Mank (2020). Oldman was executive producer of films like The Contender, Plunkett & Macleane (1999) and Nil by Mouth (1997), the latter of which he also wrote and directed. He featured in television shows such as Fallen Angels, Tracey Takes On... and Friends, voiced Ignitius and Viktor Reznov respectively in The Legend of Spyro and Call of Duty video games and appeared in music videos for David Bowie, Guns N' Roses and Annie Lennox.
                </Biography>
            </ActorProfile>
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
        </>
    );
};
