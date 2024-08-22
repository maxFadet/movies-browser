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
            {photo 
            ? <Photo  src={`https://image.tmdb.org/t/p/w185${photo}`} alt={name}/>
            : <Photo as="div" $placeholderPhoto />
        }
            <Info>
                <Name>{name}</Name>
                <SubName>{subName}</SubName>
            </Info>
        </StyledTile>
    );
};