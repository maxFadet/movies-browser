import {
    StyledTileList,
    ListHeader,
    ListSection,
} from "./styled";

export const PeopleTilesList = ({ header, content }) => {
    return (
        <StyledTileList>
            <ListHeader>{header}</ListHeader>
            <ListSection>
                <>{content}</>
            </ListSection>
        </StyledTileList>
    );
};