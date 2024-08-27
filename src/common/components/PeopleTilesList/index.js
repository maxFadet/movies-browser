import {
    ListHeader,
    ListSection,
} from "./styled";

export const PeopleTilesList = ({ header, content }) => {
    return (
        <>
            <ListHeader>{header}</ListHeader>
            <ListSection>
                <>{content}</>
            </ListSection>
        </>
    );
};