import { BASE_IMAGE_URL } from "../../../../config/BASE_IMAGE_URL";
import { IMAGE_WIDTH } from "../../../../config/IMAGE_WIDTH";
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
                <ActorPhoto src={`${BASE_IMAGE_URL}${IMAGE_WIDTH}${actor.profile_path}`} alt={actor.name} />
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