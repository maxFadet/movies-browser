import { BASE_IMAGE_URL } from "../../constants/config";
import { PHOTO_WIDTH } from "../../constants/config";
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