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
    navigateTo,
}) => {
    const isExtraContentAvailable = !!extraContent;

    const invalidMovieImageUrl = `https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500null`;
    const invalidPersonImageUrl = `https://image.tmdb.org/t/p/w500null`;

    const imageUrl = `https://image.tmdb.org/t/p/w500${image}`;

    return (
        <StyledTile
            onClick={navigateTo}
            key={id}
            $extraContentAvailable={isExtraContentAvailable}
        >
            {
                imageUrl !== invalidMovieImageUrl && imageUrl !== invalidPersonImageUrl ?
                    <Image $extraContentAvailable={isExtraContentAvailable} src={imageUrl} /> :
                    <IconContainer>
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