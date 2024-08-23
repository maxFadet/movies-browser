import { BASE_IMAGE_URL } from "../../config/BASE_IMAGE_URL";
import { PHOTO_WIDTH } from "../../config/PHOTO_WIDTH";
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
                ? <Photo src={`${BASE_IMAGE_URL}${PHOTO_WIDTH}${photo}`} alt={name} />
                : <Photo as="div" $placeholderPhoto />
            }
            <Info>
                <Name>{name}</Name>
                <SubName>{subName}</SubName>
            </Info>
        </StyledTile>
    );
};