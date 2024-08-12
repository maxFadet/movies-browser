import {
    StyledTile,
    Image,
    ImageContainer,
    Title,
    SubInfo,
    ExtraContent,
    GeneralInfo,
    StyledProfileIcon,
} from "./styled";

export const Tile = ({
    image,
    title,
    subInfo,
    extraContent,
    id,
}) => {
    const isExtraContentAvailable = !!extraContent;

    return (
        <StyledTile
            key={id}
            $extraContentAvailable={isExtraContentAvailable}
        >
            {
                image ?
                    <Image $extraContentAvailable={isExtraContentAvailable} src={image} alt={title} /> :
                    <ImageContainer>
                        <StyledProfileIcon />
                    </ImageContainer>
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