import { Container } from "./common/Container";
import { PageHeader } from "./PageHeader";
import { PagePoster } from "./PagePoster";
import ActorsList from "./features/ActorList";
import { ActorsData } from "./features/ActorsData";

function App() {
  return (
    <Container>
      <PageHeader />
      <PagePoster />
      <ActorsData />
      <ActorsList />
    </Container>
  );
};

export default App;

