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
            $isExtraContentMissing={isExtraContentMissing}
        >
            <Image src={image} alt={title} />
            <Overview
                $isExtraContentMissing={isExtraContentMissing}
            >
                <Title>
                    {title}
                </Title>
                <SubInfo>{subInfo}</SubInfo>
                <ExtraContent>{extraContent}</ExtraContent>
            </Overview>
        </StyledExampleTile>
    );
};