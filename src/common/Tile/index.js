import {
    StyledTile,
    Image,
    IconContainer,
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
                    <Image $extraContentAvailable={isExtraContentAvailable} $image={image} /> :
                    <IconContainer>
                        <StyledProfileIcon />
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