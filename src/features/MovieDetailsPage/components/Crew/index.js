import { Tile } from "../../../../common/Tile";
import { Section } from "./styled";
import { useSelector } from "react-redux";
import { selectMovieCrew } from "../../slices/movieCreditsSlice";
import Header from "../../../../common/Header";

export const Crew = () => {
    const movieCrew = useSelector(selectMovieCrew);

    return (
        <Section>
            <Header title="Crew" />
            {movieCrew.map(({ job, name, profile_path, id }) => (
                <Tile
                    key={id}
                    id={id}
                    image={profile_path}
                    title={name}
                    subInfo={job}
                />
            ))}
        </Section>
    );
};
