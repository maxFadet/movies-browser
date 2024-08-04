import {
    Container,
    Image,
    Name,
    DetailInfo,
    ExtraContent,
} from "./styled";

export const Overview = ({ image, name, movieInfo, extraContent }) => {
    return (
        <Container>
            <Image src={image} alt={name} />
            <Name>{name}</Name>
            <DetailInfo>{movieInfo}</DetailInfo>
            <ExtraContent>{extraContent}</ExtraContent>
        </Container>
    );
};