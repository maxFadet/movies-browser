import {
    StyledPersonTile,
    Image,
    Title,
    SubInfo,
    ExtraContent,
    GeneralInfo,
    IconContainer,
    StyledMovieTile,
    MovieGeneralInfo,
    MovieTitle,
} from "./styled";
import { StyledProfileIcon } from "../StyledProfileIcon";
import { StyledVideoIcon } from "../StyledVideoIcon";
import { BASE_IMAGE_URL } from "../../constants/config/BASE_IMAGE_URL";
import { getImageUrl } from "../../../common/functions/getImageUrl";
import { checkIsValidImageUrl } from "../../../common/functions/checkIsValidImageUrl";
import { INVALID_IMAGE_URL } from "../../constants/config/INVALID_IMAGE_URL";
import { IMAGE_WIDTH } from "../../constants/config/IMAGE_WIDTH";

export const Tile = ({ image, title, subInfo, extraContent, id, navigateTo, }) => {

    const imageUrl = getImageUrl(image, IMAGE_WIDTH);

    const invalidPersonUrl = INVALID_IMAGE_URL;
    const invalidPosterImageUrl = `${BASE_IMAGE_URL}null`;

    const isValidImageUrl = checkIsValidImageUrl(imageUrl, invalidPersonUrl) && checkIsValidImageUrl(imageUrl, invalidPosterImageUrl);

    const TileComponent = extraContent ? StyledMovieTile : StyledPersonTile;
    const PlaceholderIcon = extraContent ? StyledVideoIcon : StyledProfileIcon;
    const GeneralInfoComponent = extraContent ? MovieGeneralInfo : GeneralInfo;
    const TitleComponent = extraContent ? MovieTitle : Title;

    const imageElement = isValidImageUrl ? (
        <Image src={imageUrl} alt={title} />) : (
        <IconContainer>
            <PlaceholderIcon />
        </IconContainer>
    );
    const subInfoElement = subInfo && <SubInfo>{subInfo}</SubInfo>;
    const extraContentElement = extraContent && <ExtraContent>{extraContent}</ExtraContent>

    return (
        <TileComponent onClick={navigateTo} key={id}>
            {imageElement}
            <GeneralInfoComponent>
                <TitleComponent>{title}</TitleComponent>
                {subInfoElement}
                {extraContentElement}
            </GeneralInfoComponent>
        </TileComponent>
    );
};