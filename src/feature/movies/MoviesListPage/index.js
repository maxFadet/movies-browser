import { Container } from "../../../common/Container"
import Header from "../../../common/Header";
import { TileContainer } from "./styled";
import Tile from "../Tile";
function MoviesListPage() {
    return (
        <Container>
            <Header title="Popular movies" />
            <TileContainer>
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
            </TileContainer>
        </Container>
    );
}
export default MoviesListPage;