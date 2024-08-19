import {
    StyledTile,
    Image,
    Title,
    SubInfo,
    ExtraContent,
    GeneralInfo,
    IconContainer
} from "./styled";
import { StyledProfileIcon } from "../StyledProfileIcon";
import { StyledVideoIcon } from "../StyledVideoIcon";

export const Tile = ({
    image,
    title,
    subInfo,
    extraContent,
    id,
    navigateTo
}) => {
    const isExtraContentAvailable = !!extraContent;

    return (
        <StyledTile
            onClick={navigateTo}
            key={id}
            $extraContentAvailable={isExtraContentAvailable}
        >
            {
                image ?
                    <Image $extraContentAvailable={isExtraContentAvailable} src={`https://image.tmdb.org/t/p/w500${image}`} /> :
                    <IconContainer $extraContentAvailable={isExtraContentAvailable}>
                        {isExtraContentAvailable ? <StyledVideoIcon /> : <StyledProfileIcon />}
                    </IconContainer>
            }
            <GeneralInfo
                $extraContentAvailable={isExtraContentAvailable}
            >
                <Title $extraContentAvailable={isExtraContentAvailable}>
                    {title}
                </Title>
                <SubInfo>{subInfo}</SubInfo>
                <ExtraContent>{extraContent}</ExtraContent>
            </GeneralInfo>
        </StyledTile>
    );
};