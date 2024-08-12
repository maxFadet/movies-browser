import { Container } from "../../common/Container";
import { Cast } from "./Content/Cast";
import { Crew } from "./Content/Crew";
import { Details } from "./Content/Details";

export const ActorsData = () => {
    return (
        <Container>
            <Details />
            <Cast />
            <Crew />
        </Container>
    );
};
