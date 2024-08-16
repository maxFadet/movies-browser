import { Container } from "../../common/Container";
import { Details } from "./Content/Details"
import { Cast } from "./Content/Cast";
import { Crew } from "./Content/Crew"

export const ActorsData = () => {
    return (
        <Container>
            <Details />
            <Cast />
            <Crew />
        </Container>
    );
};
