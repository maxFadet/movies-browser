import {
    ActorProfile,
    ActorPhoto,
    ActorName,
    ActorDetails,
    ActorDetailsWrapper,
    DetailLabel,
    Biography,
    ActorDetail
} from "./styled";
import { useIsMobile } from './useIsMobile';

export const Details = ({ actor }) => {
    const isMobile = useIsMobile();

    return (
        actor && (
            <ActorProfile>
                <ActorPhoto src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
                <ActorDetailsWrapper>
                    <ActorName>{actor.name}</ActorName>
                    <ActorDetails>
                        <ActorDetail>
                            <DetailLabel>{isMobile ? 'Birth:' : 'Date of birth:'}</DetailLabel>
                            {actor.birthday || "Unknown"}
                        </ActorDetail>
                        <ActorDetail>
                            <DetailLabel>Place of birth:</DetailLabel>
                            {actor.place_of_birth || "Unknown"}
                        </ActorDetail>
                    </ActorDetails>
                </ActorDetailsWrapper>
                <Biography>{actor.biography || "Biography not available."}</Biography>
            </ActorProfile>
        )
    );
};