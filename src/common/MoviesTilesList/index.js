import {
    StyledTileList,
    ListHeader,
    ListSection,
} from "./styled";

export const MoviesTilesList = ({ header, content }) => {
    return (
        <StyledTileList>
            <ListHeader>{header}</ListHeader>
            <ListSection>
                <>{content}</>
            </ListSection>
        </StyledTileList>
    );
};