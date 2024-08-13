import { useNavigate } from "react-router-dom";
import { actors } from './actorsData';
import { Section } from './styled';
import { toPerson } from "../../routes";
import { Pagination } from "../../common/Pagination";
import { Container } from "../../common/Container";
import { PeopleTilesList } from "../../common/PeopleTilesList"
import Header from "../../common/Header";

const ActorsList = () => {
    const navigate = useNavigate();

    const handleActorClick = (id) => {
        navigate(toPerson({ id }));
    };

    return (
        <Container>
            <Section>
            <Header title="Popular people" />
                {actors.map((actor, index) => (
                    <PeopleTilesList
                        key={index}
                        onClick={() => handleActorClick(actor.id)}
                        photo={actor.photo}
                        name={actor.name}
                    />
                ))}

            </Section>
            <Pagination />
        </Container>
    );
};

export default ActorsList;
