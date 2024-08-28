import { BASE_IMAGE_URL, IMAGE_WIDTH } from "../../../../../common/constants/config";
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

const formatDate = (dateString) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}.${month}.${year}`;
};

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
                            {formatDate(actor.birthday)}
                        </ActorDetail>
                        <ActorDetail>
                            <DetailLabel>Place of birth:</DetailLabel>
                            {actor.place_of_birth}
                        </ActorDetail>
                    </ActorDetails>
                </ActorDetailsWrapper>
                <Biography>{actor.biography}</Biography>
            </ActorProfile>
        )
    );
};