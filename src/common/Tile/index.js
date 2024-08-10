import {
    StyledTile,
    Image,
    Title,
    SubInfo,
    ExtraContent,
    GeneralInfo,
} from "./styled";

export const Tile = ({
    image,
    title,
    subInfo,
    extraContent,
    id,
}) => {
    const isExtraContentMissing = !extraContent;

    return (
        <StyledTile
            key={id}
            $extraContentMissing={isExtraContentMissing}
        >
            <Image src={image} alt={title} />
            <GeneralInfo
                $extraContentMissing={isExtraContentMissing}
            >
                <Title $extraContentMissing={isExtraContentMissing}>
                    {title}
                </Title>
                <SubInfo>{subInfo}</SubInfo>
                <ExtraContent>{extraContent}</ExtraContent>
            </GeneralInfo>
        </StyledTile>
    );
};