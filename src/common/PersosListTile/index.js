import {
    Info,
    Name,
    Photo,
    StyledTile,
    SubName,
} from "./styled";

export const PersonsListTile = ({ name, subName, photo, onClick }) => {
    return (
        <StyledTile onClick={onClick}>
            <Photo src={photo} alt={name} />
            <Info>
                <Name>{name}</Name>
                <SubName>{subName}</SubName>
            </Info>
        </StyledTile>
    );
};