import { useNavigate } from "react-router-dom";
import { actors } from './actorsData';
import { Title, Section } from './styled';
import { toPerson } from "../../routes";
import { Pagination } from "../../common/Pagination";
import { Container } from "../../common/Container";
import { PeopleTilesList } from "../../common/PeopleTilesList"

const ActorsList = () => {
    const navigate = useNavigate();

    const handleActorClick = (id) => {
        navigate(toPerson({ id }));
    };

    return (
        <Container>
            <Section>
                <Title>Popular people</Title>
                {actors.map((actor, index) => (
                    <PeopleTilesList
                        key={index}
                        onClick={() => handleActorClick(actor.id)}
                        photo={actor.photo}
                        name={actor.name}
                        subName={actor.subname}
                    />
                ))}

            </Section>
            <Pagination />
        </Container>
    );
};

export default ActorsList;
