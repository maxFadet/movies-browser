import {
    StyledExampleTile,
    Image,
    Title,
    SubInfo,
    ExtraContent,
    Overview,
} from "./styled";

export const Tile = ({
    image,
    title,
    subInfo,
    extraContent,
}) => {
    const isExtraContentMissing = !extraContent;

    return (
        <StyledExampleTile
            $extraContentMissing={isExtraContentMissing}
        >
            <Image src={image} alt={title} />
            <Overview
                $extraContentMissing={isExtraContentMissing}
            >
                <Title $extraContentMissing={isExtraContentMissing}>
                    {title}
                </Title>
                <SubInfo>{subInfo}</SubInfo>
                <ExtraContent>{extraContent}</ExtraContent>
            </Overview>
        </StyledExampleTile>
    );
};