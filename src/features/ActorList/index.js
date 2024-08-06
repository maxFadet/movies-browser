import { useNavigate } from "react-router-dom";
import { actors } from './actorsData';
import { Tile, Name, Wrapper, Title, Photo, Section } from './styled';
import { toPerson } from "../../routes";

const ActorsList = () => {
    const navigate = useNavigate();

    const handleActorClick = (id) => {
        navigate(toPerson({ id }));
    };

    return (
        <Wrapper>
            <Section>
                <Title>Popular people</Title>
                {actors.map((actor, index) => (
                    <Tile key={index} onClick={() => handleActorClick(actor.id)}>
                        <Photo src={actor.photo} alt={actor.name} />
                        <Name>{actor.name}</Name>
                    </Tile>
                ))}
            </Section>
        </Wrapper>
    );
};

export default ActorsList;
