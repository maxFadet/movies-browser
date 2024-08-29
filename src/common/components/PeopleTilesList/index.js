import {
    ListHeader,
    ListSection,
} from "./styled";

export const PeopleTilesList = ({ header, content }) => {
    return (
        <div>
            <ListHeader>{header}</ListHeader>
            <ListSection>{content}</ListSection>
        </div>
    );
};